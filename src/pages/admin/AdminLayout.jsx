import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CalendarDays, LayoutDashboard, LogOut, Menu, Palette, Scissors, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { adminLogout, adminMe } from "../../api/adminApi";

const links = [
  ["/admin", "Overview", LayoutDashboard],
  ["/admin/appointments", "Appointments", CalendarDays],
  ["/admin/services", "Services", Scissors],
  ["/admin/designs", "Designs", Palette],
  ["/admin/add-ons", "Add-ons", Sparkles],
];

export function AdminLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logout = async () => { await adminLogout().catch(() => {}); navigate("/admin/login", { replace: true }); };
  return <div className="admin-shell min-h-screen bg-[#f7f5f2] text-[#292325]">
    <button className="fixed right-4 top-4 z-30 rounded-lg bg-[#30252b] p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Menu size={20} /></button>
    <aside className={`fixed inset-y-0 left-0 z-20 w-64 border-r border-[#e7dfda] bg-[#30252b] p-6 text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="mb-10"><p className="text-xs uppercase tracking-[0.3em] text-[#e5a4bc]">LourdNails</p><h1 className="mt-2 text-2xl font-semibold">Studio admin</h1></div>
      <nav className="space-y-2">{links.map(([to, label, Icon], index) => <NavLink key={to} end={index === 0} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${isActive ? "bg-[#e5a4bc] text-[#30252b]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}><Icon size={18} />{label}</NavLink>)}</nav>
      <button onClick={logout} className="absolute bottom-7 left-6 flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white"><LogOut size={18} />Log out</button>
    </aside>
    <main className="min-h-screen lg:pl-64"><div className="mx-auto max-w-7xl p-5 pt-20 sm:p-8 lg:p-12"><Outlet /></div></main>
  </div>;
}

export function ProtectedRoute() {
  const navigate = useNavigate();
  const [state, setState] = useState("checking");
  useEffect(() => {
    const handleExpired = () => navigate("/admin/login", { replace: true });
    window.addEventListener("admin-auth-expired", handleExpired);
    adminMe().then(() => setState("ready")).catch(handleExpired);
    return () => window.removeEventListener("admin-auth-expired", handleExpired);
  }, [navigate]);
  return state === "ready" ? <AdminLayout /> : <div className="flex min-h-screen items-center justify-center bg-[#f7f5f2] text-sm text-gray-500">Checking your session...</div>;
}

export const AdminGuard = ProtectedRoute;