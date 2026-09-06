import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../data/services";

function Booking() {
  const location = useLocation();
  const initialServiceId = location.state?.serviceId;
  const hasInitialService = services.some((service) => service.id === initialServiceId);
  const [selectedServiceId, setSelectedServiceId] = useState(hasInitialService ? String(initialServiceId) : "");

  return (
    <main className="min-h-screen bg-[#fdf2f6] px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_18px_45px_rgba(190,24,93,0.12)] backdrop-blur-sm sm:p-10">
        <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 hover:text-pink-500">
          Back to home
        </Link>

        <p className="mt-12 text-sm font-medium uppercase tracking-[0.25em] text-pink-500">Book an appointment</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Choose your service</h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Select the treatment you would like to book.
        </p>

        <form className="mt-10" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="booking-service" className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
            Available services
          </label>
          <select
            id="booking-service"
            value={selectedServiceId}
            onChange={(event) => setSelectedServiceId(event.target.value)}
            className="mt-2 block w-full rounded-xl border border-pink-100 bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:border-pink-400"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.price}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={!selectedServiceId}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#3b2434] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue booking
          </button>
        </form>
      </div>
    </main>
  );
}

export default Booking;
