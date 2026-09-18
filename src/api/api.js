const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";
const resolveImageUrl = (value) => value?.startsWith("/") ? `${API_BASE_URL}${value}` : value;

async function getJson(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${path}`);
  }
  return response.json();
}

export async function createAppointment(appointment) {
  const response = await fetch(`${API_BASE_URL}/api/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message || `Request failed (${response.status})`);
  }

  return response.json();
}

export async function getServices() {
  const services = await getJson("/api/services");
  return services.map((service) => ({
    ...service,
    price: `₪${service.price}`,
    featured: Boolean(service.featured),
    images: [service.imageUrl, service.imageUrlTwo || service.imageUrl, service.imageUrlThree || service.imageUrl, service.imageUrlFour || service.imageUrl].map(resolveImageUrl),
  }));
}

export async function getDesigns() {
  const designs = await getJson("/api/designs");
  return designs.map((design) => ({
    ...design,
    image: resolveImageUrl(design.imageUrl),
  }));
}

export async function getAddOns() {
  const addOns = await getJson("/api/add-ons");
  return addOns.map((option) => ({
    ...option,
    image: resolveImageUrl(option.imageUrl),
  }));
}