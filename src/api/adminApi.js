const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

function csrfCookie() {
  return document.cookie.split("; ").find((cookie) => cookie.startsWith("XSRF-TOKEN="))?.split("=")[1];
}

async function ensureCsrfToken() {
  const response = await fetch(`${API_BASE_URL}/api/auth/csrf`, { credentials: "include" });
  const body = await response.json().catch(() => null);
  return body?.token || csrfCookie();
}

async function sendRequest(path, options, csrfToken) {
  return fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(csrfToken ? { "X-XSRF-TOKEN": decodeURIComponent(csrfToken) } : {}), ...(options.headers || {}) },
    ...options,
  });
}

async function request(path, options = {}, hasRetried = false) {
  const method = options.method || "GET";
  const csrfToken = method === "GET" ? null : await ensureCsrfToken();
  const response = await sendRequest(path, options, csrfToken);
  if (response.status === 403 && method !== "GET" && !hasRetried) {
    await ensureCsrfToken();
    return request(path, options, true);
  }
  if (!response.ok) {
    if (response.status === 401) {
      window.dispatchEvent(new CustomEvent("admin-auth-expired"));
    }
    const body = await response.json().catch(() => null);
    throw new Error(body?.message || `Request failed (${response.status})`);
  }
  return response.status === 204 ? null : response.json();
}

export const adminLogin = (email, password) => request("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
export const adminMe = () => request("/api/auth/me");
export const adminLogout = () => request("/api/auth/logout", { method: "POST" });
export const getAdminAppointments = () => request("/api/appointments");
export const updateAppointmentStatus = (id, status) => request(`/api/appointments/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) });
export const rescheduleAppointment = (id, appointmentDate, appointmentTime) => request(`/api/appointments/${id}/schedule`, { method: "PATCH", body: JSON.stringify({ appointmentDate, appointmentTime }) });
export const getAdminCatalog = (kind) => request(`/api/${kind}`);
export const createAdminCatalog = (kind, data) => request(`/api/${kind}`, { method: "POST", body: JSON.stringify(data) });
export const updateAdminCatalog = (kind, id, data) => request(`/api/${kind}/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteAdminCatalog = (kind, id) => request(`/api/${kind}/${id}`, { method: "DELETE" });