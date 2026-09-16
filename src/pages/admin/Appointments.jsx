import { useEffect, useState } from "react";
import { getAdminAppointments, rescheduleAppointment, updateAppointmentStatus } from "../../api/adminApi";

const statusStyles = {
  PENDING: "bg-amber-50 text-amber-700",
  CONFIRMED: "bg-emerald-50 text-emerald-700",
  CANCELLED: "bg-gray-100 text-gray-500",
  COMPLETED: "bg-pink-50 text-pink-700",
};

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function formatTime(value) {
  return new Date(`1970-01-01T${value}`).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function Appointments() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);
  const [editing, setEditing] = useState(null);

  const load = () => getAdminAppointments().then(setItems).catch((e) => setError(e.message));
  useEffect(() => { load(); }, []);

  const update = async (id, status) => {
    setBusyId(id);
    setError("");
    try { await updateAppointmentStatus(id, status); await load(); } catch (e) { setError(e.message); } finally { setBusyId(null); }
  };

  const saveSchedule = async (event) => {
    event.preventDefault();
    setBusyId(editing.id);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      await rescheduleAppointment(editing.id, form.get("appointmentDate"), form.get("appointmentTime"));
      setEditing(null);
      await load();
    } catch (e) { setError(e.message); } finally { setBusyId(null); }
  };

  return <>
    <header>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">Bookings</p>
      <h1 className="mt-3 text-4xl font-semibold">Appointments</h1>
      <p className="mt-3 text-gray-500">Confirm requests, move times, or cancel in a few clicks.</p>
    </header>
    {error && <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
    {!items ? <p className="mt-10 text-sm text-gray-500">Loading appointments...</p> : items.length === 0 ?
      <p className="mt-10 rounded-2xl border border-dashed border-[#d8cbc5] p-10 text-center text-sm text-gray-500">No appointments yet.</p> :
      <div className="mt-8 overflow-x-auto rounded-2xl border border-[#e7dfda] bg-white shadow-sm">
        <table className="w-full min-w-225 text-left text-sm">
          <thead className="border-b border-gray-100 bg-[#fcfaf9] text-xs uppercase tracking-wider text-gray-500"><tr><th className="p-4">Customer</th><th className="p-4">When</th><th className="p-4">Service</th><th className="p-4">Total</th><th className="p-4">Status</th><th className="p-4">Actions</th></tr></thead>
          <tbody className="divide-y divide-gray-100">{items.map((item) => <tr key={item.id} className="align-top">
            <td className="p-4"><p className="font-semibold">{item.customerName}</p><p className="mt-1 text-xs text-gray-500">{item.email}</p><p className="mt-1 text-xs text-gray-500">{item.phoneNumber}</p></td>
            <td className="p-4 whitespace-nowrap"><p className="font-medium">{formatDate(item.appointmentDate)}</p><p className="mt-1 text-gray-500">{formatTime(item.appointmentTime)}</p></td>
            <td className="p-4">#{item.serviceId}</td><td className="p-4">₪{item.totalPrice}</td>
            <td className="p-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status] || statusStyles.PENDING}`}>{item.status}</span></td>
            <td className="p-4"><div className="flex flex-wrap gap-2">
              {item.status === "PENDING" && <button type="button" disabled={busyId === item.id} onClick={() => update(item.id, "CONFIRMED")} className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-50">Confirm</button>}
              {item.status !== "CANCELLED" && <button type="button" disabled={busyId === item.id} onClick={() => setEditing(item)} className="rounded-lg border border-[#d8cbc5] px-3 py-2 text-xs font-semibold text-gray-700 hover:border-pink-400 hover:text-pink-700 disabled:opacity-50">Reschedule</button>}
              {item.status !== "CANCELLED" && <button type="button" disabled={busyId === item.id} onClick={() => update(item.id, "CANCELLED")} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50">Cancel</button>}
            </div></td>
          </tr>)}</tbody>
        </table>
      </div>}
    {editing && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#281923]/40 p-4" role="dialog" aria-modal="true" aria-labelledby="reschedule-title">
      <form onSubmit={saveSchedule} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">Change booking</p><h2 id="reschedule-title" className="mt-2 text-2xl font-semibold">Reschedule {editing.customerName}</h2></div><button type="button" onClick={() => setEditing(null)} className="text-2xl leading-none text-gray-400 hover:text-gray-700" aria-label="Close">&times;</button></div>
        <p className="mt-3 text-sm text-gray-500">Choose any available date and time. The current booking stays protected until you save.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-gray-700">Date<input required type="date" name="appointmentDate" defaultValue={editing.appointmentDate} min={new Date().toISOString().slice(0, 10)} className="mt-2 w-full rounded-lg border border-[#d8cbc5] px-3 py-2.5 font-normal outline-none focus:border-pink-500" /></label><label className="text-sm font-semibold text-gray-700">Time<input required type="time" name="appointmentTime" defaultValue={editing.appointmentTime.slice(0, 5)} className="mt-2 w-full rounded-lg border border-[#d8cbc5] px-3 py-2.5 font-normal outline-none focus:border-pink-500" /></label></div>
        <div className="mt-6 flex justify-end gap-3"><button type="button" onClick={() => setEditing(null)} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">Keep current</button><button type="submit" disabled={busyId === editing.id} className="rounded-lg bg-[#3b2434] px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-800 disabled:opacity-50">{busyId === editing.id ? "Saving..." : "Save new time"}</button></div>
      </form>
    </div>}
  </>;
}
