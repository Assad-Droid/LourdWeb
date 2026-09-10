import { Link, useNavigate } from "react-router-dom";
import { services } from "../data/services";

function SeeAllServices() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#fdf8fa] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between gap-4">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 transition hover:text-pink-500">
            Back to home
          </Link>
          <Link to="/booking" className="rounded-full bg-[#3b2434] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-pink-700">
            Book appointment
          </Link>
        </div>

        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-500">The full menu</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">All services</h1>
          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Explore every treatment and find the finish that feels most like you.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="group overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-[0_14px_35px_rgba(190,24,93,0.07)] transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_20px_42px_rgba(190,24,93,0.14)]">
              <div className="relative h-64 overflow-hidden">
                <img src={service.images[0]} alt={`${service.name} sample`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-700 backdrop-blur-sm">
                  Signature service
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{service.name}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{service.description}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-pink-100 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Starting at</p>
                    <p className="mt-1 text-xl font-semibold text-gray-900">{service.price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("/booking", { state: { serviceId: service.id } })}
                    className="rounded-full bg-[#3b2434] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-700"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Can&apos;t decide? We&apos;ll help you choose the right service.</p>
          <Link to="/booking" className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 underline hover:text-pink-500">
            Start a booking
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SeeAllServices;
