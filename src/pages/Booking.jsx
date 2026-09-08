import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../data/services";

const appointmentTimes = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const phoneCountries = [
  { code: "+970", iso: "ps", name: "Palestine" },
  { code: "+972", iso: "il", name: "Israel" },
  { code: "+962", iso: "jo", name: "Jordan" },
  { code: "+971", iso: "ae", name: "United Arab Emirates" },
  { code: "+966", iso: "sa", name: "Saudi Arabia" },
  { code: "+1", iso: "us", name: "United States" },
  { code: "+44", iso: "gb", name: "United Kingdom" },
];

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getCalendarDays(monthDate) {
  const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
  const days = Array(mondayOffset).fill(null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), day));
  }

  while (days.length % 7 !== 0) days.push(null);
  return days;
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function Booking() {
  const location = useLocation();
  const today = startOfDay(new Date());
  const initialServiceId = location.state?.serviceId;
  const hasInitialService = services.some((service) => service.id === initialServiceId);
  const [selectedServiceId, setSelectedServiceId] = useState(hasInitialService ? String(initialServiceId) : "");
  const [selectedDate, setSelectedDate] = useState(today);
  const [calendarMonth, setCalendarMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(phoneCountries[0].code);
  const [customerDetails, setCustomerDetails] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedService = services.find((service) => String(service.id) === selectedServiceId);
  const selectedPhoneCountryDetails = phoneCountries.find((country) => country.code === selectedPhoneCountry) || phoneCountries[0];
  const totalPrice = selectedService?.price || "₪0";
  const calendarDays = getCalendarDays(calendarMonth);
  const monthLabel = calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const isCurrentMonth = calendarMonth.getFullYear() === today.getFullYear() && calendarMonth.getMonth() === today.getMonth();

  const changeMonth = (offset) => {
    const nextMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + offset, 1);
    if (nextMonth >= new Date(today.getFullYear(), today.getMonth(), 1)) setCalendarMonth(nextMonth);
  };

  const selectDate = (date) => {
    if (!date || date < today) return;
    setSelectedDate(date);
    setSelectedTime("");
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedService && selectedTime && customerDetails.name && customerDetails.phone && customerDetails.email) setIsSubmitted(true);
  };

  const updateCustomerDetails = (field, value) => {
    setCustomerDetails((currentDetails) => ({ ...currentDetails, [field]: value }));
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#fdf8fa] px-4 py-8 text-gray-900 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 transition hover:text-pink-500">Back to home</Link>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">LourdNails/Booking</span>
        </div>

        <header className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-500">Your nail moment</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Plan your appointment</h1>
          <p className="mt-4 text-base leading-7 text-gray-500">Choose a service, find a time that feels right, and leave the rest to us.</p>
        </header>

        {isSubmitted && <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">Your request is ready for confirmation. We&apos;ll get back to you shortly.</div>}

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-pink-100 bg-white p-5 shadow-[0_16px_40px_rgba(190,24,93,0.06)] sm:p-7">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">Step 1</p>
                  <h2 className="mt-2 text-2xl font-semibold">Choose a service</h2>
                </div>
                <span className="text-xs text-gray-400">{services.length} available</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {services.map((service) => {
                  const isSelected = selectedServiceId === String(service.id);
                  return (
                    <button key={service.id} type="button" onClick={() => { setSelectedServiceId(String(service.id)); setIsSubmitted(false); }} className={`group overflow-hidden rounded-2xl border text-left transition ${isSelected ? "border-pink-500 bg-pink-50 ring-2 ring-pink-200" : "border-gray-100 bg-[#fffafb] hover:-translate-y-0.5 hover:border-pink-200"}`}>
                      <img src={service.images[0]} alt="" className="h-28 w-full object-cover" />
                      <span className="block p-3"><span className="block text-sm font-semibold">{service.name}</span><span className="mt-1 block text-xs text-gray-500">Starting at {service.price}</span></span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-pink-100 bg-white p-5 shadow-[0_16px_40px_rgba(190,24,93,0.06)] sm:p-7">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">Step 2</p><h2 className="mt-2 text-2xl font-semibold">Pick a date</h2></div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => changeMonth(-1)} disabled={isCurrentMonth} aria-label="Previous month" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-600 transition hover:border-pink-300 hover:text-pink-600 disabled:cursor-not-allowed disabled:opacity-30">‹</button>
                  <button type="button" onClick={() => changeMonth(1)} aria-label="Next month" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-600 transition hover:border-pink-300 hover:text-pink-600">›</button>
                </div>
              </div>
              <div className="mx-auto max-w-xl">
                <div className="mb-4 text-center text-sm font-semibold">{monthLabel}</div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {weekDays.map((day) => <span key={day} className="pb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{day}</span>)}
                  {calendarDays.map((date, index) => {
                    const isPast = !date || date < today;
                    const isSelected = date && selectedDate.toDateString() === date.toDateString();
                    return <button key={date ? date.toISOString() : `empty-${index}`} type="button" disabled={isPast} onClick={() => selectDate(date)} className={`aspect-square rounded-xl text-sm transition ${!date ? "invisible" : isSelected ? "bg-[#3b2434] font-semibold text-white shadow-md" : isPast ? "cursor-not-allowed text-gray-200" : "text-gray-700 hover:bg-pink-50 hover:text-pink-700"}`}>{date?.getDate()}</button>;
                  })}
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-pink-100 bg-white p-5 shadow-[0_16px_40px_rgba(190,24,93,0.06)] sm:p-7">
              <div className="mb-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">Step 3</p><h2 className="mt-2 text-2xl font-semibold">Find your time</h2><p className="mt-2 text-sm text-gray-500">Available times for {formatDate(selectedDate)}.</p></div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {appointmentTimes.map((time) => <button key={time} type="button" onClick={() => { setSelectedTime(time); setIsSubmitted(false); }} className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${selectedTime === time ? "border-pink-500 bg-pink-50 text-pink-700 ring-2 ring-pink-100" : "border-gray-200 text-gray-600 hover:border-pink-300 hover:text-pink-700"}`}>{time}</button>)}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-pink-100 bg-white p-5 shadow-[0_16px_40px_rgba(190,24,93,0.06)] sm:p-7">
              <div className="mb-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">Step 4</p><h2 className="mt-2 text-2xl font-semibold">Your details</h2><p className="mt-2 text-sm text-gray-500">We&apos;ll use these details to confirm your appointment.</p></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 sm:col-span-2">
                  Full name
                  <input type="text" value={customerDetails.name} onChange={(event) => updateCustomerDetails("name", event.target.value)} required placeholder="Your name" className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-400" />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Phone number
                  <span className="mt-2 flex rounded-xl border border-gray-200 bg-white transition focus-within:border-pink-400">
                    <span className="flex w-12 shrink-0 items-center justify-center border-r border-gray-200 bg-pink-50/50 sm:w-14">
                      <img
                        src={`https://flagcdn.com/w40/${selectedPhoneCountryDetails.iso}.png`}
                        alt={`${selectedPhoneCountryDetails.name} flag`}
                        className="h-4 w-6 rounded-sm object-cover shadow-sm"
                      />
                    </span>
                    <select
                      value={selectedPhoneCountry}
                      onChange={(event) => setSelectedPhoneCountry(event.target.value)}
                      aria-label="Country calling code"
                      className="w-[5.5rem] shrink-0 rounded-l-xl border-0 bg-transparent px-2 py-3 text-sm text-gray-800 outline-none sm:w-[6rem]"
                    >
                      {phoneCountries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <input type="tel" value={customerDetails.phone} onChange={(event) => updateCustomerDetails("phone", event.target.value)} required placeholder="50 000 0000" className="min-w-0 flex-1 rounded-r-xl border-0 border-l border-gray-200 bg-transparent px-3 py-3 text-sm font-normal normal-case tracking-normal text-gray-800 outline-none placeholder:text-gray-400" />
                  </span>
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Email address
                  <input type="email" value={customerDetails.email} onChange={(event) => updateCustomerDetails("email", event.target.value)} required placeholder="you@example.com" className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-400" />
                </label>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-[1.75rem] bg-[#3b2434] p-6 text-white shadow-[0_20px_45px_rgba(59,36,52,0.2)] lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200">Appointment summary</p>
            <h2 className="mt-3 text-2xl font-semibold">Almost there</h2>
            <div className="my-7 h-px bg-white/15" />
            {selectedService ? <div className="flex gap-4"><img src={selectedService.images[0]} alt="" className="h-16 w-16 rounded-xl object-cover" /><div><p className="font-semibold">{selectedService.name}</p><p className="mt-1 text-sm text-pink-100">Service selected</p></div></div> : <p className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-6 text-pink-100">Select a service above to build your appointment.</p>}
            <dl className="mt-7 space-y-4 border-t border-white/15 pt-5 text-sm"><div className="flex justify-between gap-4"><dt className="text-pink-100">Date</dt><dd className="text-right font-medium">{formatDate(selectedDate)}</dd></div><div className="flex justify-between gap-4"><dt className="text-pink-100">Time</dt><dd className="text-right font-medium">{selectedTime || "Choose a time"}</dd></div><div className="flex justify-between gap-4 border-t border-white/15 pt-4"><dt className="font-semibold text-pink-100">Total price</dt><dd className="text-right text-lg font-semibold text-white">{totalPrice}</dd></div></dl>
            <button type="submit" disabled={!selectedService || !selectedTime || !customerDetails.name || !customerDetails.phone || !customerDetails.email} className="mt-8 w-full rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#3b2434] transition hover:-translate-y-0.5 hover:bg-pink-100 disabled:cursor-not-allowed disabled:opacity-45">Confirm appointment</button>
            <p className="mt-4 text-center text-xs leading-5 text-pink-100/75">We&apos;ll confirm your appointment details with you.</p>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default Booking;
