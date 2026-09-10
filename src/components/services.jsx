import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../data/services";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg className="services-botanical services-botanical-left" viewBox="0 0 180 240" fill="none">
          <path d="M95 240C92 180 72 112 30 42" stroke="currentColor" strokeWidth="2" />
          <path d="M66 137C35 132 19 112 17 87C42 88 63 101 66 137Z" fill="currentColor" />
          <path d="M84 176C121 166 143 141 146 111C115 114 91 133 84 176Z" fill="currentColor" />
          <path d="M48 105C22 96 10 76 12 54C34 59 49 75 48 105Z" fill="currentColor" />
          <g className="services-flower">
            <circle cx="30" cy="42" r="9" fill="currentColor" />
            <circle cx="30" cy="27" r="10" fill="currentColor" />
            <circle cx="45" cy="42" r="10" fill="currentColor" />
            <circle cx="30" cy="57" r="10" fill="currentColor" />
            <circle cx="15" cy="42" r="10" fill="currentColor" />
          </g>
        </svg>
        <svg className="services-botanical services-botanical-right" viewBox="0 0 180 240" fill="none">
          <path d="M85 240C88 180 108 112 150 42" stroke="currentColor" strokeWidth="2" />
          <path d="M114 137C145 132 161 112 163 87C138 88 117 101 114 137Z" fill="currentColor" />
          <path d="M96 176C59 166 37 141 34 111C65 114 89 133 96 176Z" fill="currentColor" />
          <path d="M132 105C158 96 170 76 168 54C146 59 131 75 132 105Z" fill="currentColor" />
          <g className="services-flower">
            <circle cx="150" cy="42" r="9" fill="currentColor" />
            <circle cx="150" cy="27" r="10" fill="currentColor" />
            <circle cx="165" cy="42" r="10" fill="currentColor" />
            <circle cx="150" cy="57" r="10" fill="currentColor" />
            <circle cx="135" cy="42" r="10" fill="currentColor" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-pink-400">
            Professional Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Nail Menu
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Beautiful nails, personalized with care and attention to every
            detail.
          </p>
        
        </div>
          <div className="mb-10 flex justify-end px-4">
          <Link
          to="/seeallservices"
          className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-600 underline transition-colors duration-200 hover:text-pink-500"> see all services</Link>

        </div>

        <div className="grid gap-6">
          {services.slice(0, 3).map((service) => (
            <article
              key={service.id}
              onClick={() => setSelectedService(service)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedService(service);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View booking details for ${service.name}`}
              className="
                services-card group relative flex min-h-[250px] flex-col items-stretch gap-5
                overflow-hidden rounded-[2rem] border border-pink-100/80
                bg-gradient-to-br from-[#fffafb] via-[#fff5f8] to-[#f9d7e6]
                p-4 shadow-[0_14px_35px_rgba(190,24,93,0.08)] sm:flex-row sm:gap-6 sm:p-6
                transition-all duration-500 hover:-translate-y-3
                hover:border-pink-300 hover:shadow-[0_24px_45px_rgba(190,24,93,0.2)]
              "
            >
              <span aria-hidden="true" className="services-card-shine" />
              <span aria-hidden="true" className="services-card-orbit" />

              <div className="service-image-slot relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[1.25rem] border border-white/70 sm:aspect-[4/5] sm:w-[27%] sm:rounded-[1.5rem]">
                {service.images ? (
                  <img src={service.images[0]} alt={`${service.name} sample`} className="h-full w-full object-cover" />
                ) : (
                  <span aria-hidden="true" className="service-image-glow" />
                )}
              </div>

              <div className="relative flex min-w-0 flex-1 flex-col justify-center py-1 sm:py-2 lg:max-w-[38%]">
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">
                    Signature service
                  </span>
                </div>

                <h3 className="relative text-xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                  {service.name}
                </h3>

                <p className="relative mt-3 text-xs leading-5 text-gray-600 sm:mt-4 sm:text-sm sm:leading-6">
                  {service.description}
                </p>

                <div className="mt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs">Starting at</span>
                  <span className="ml-2 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="service-mini-gallery relative min-h-[11rem] flex-1 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/20 sm:min-h-[14rem] lg:min-w-[34%]">
                <span className="absolute right-4 top-4 z-10 text-[9px] font-semibold uppercase tracking-[0.25em] text-pink-700/60">
                  Detail study
                </span>
                {[1, 2, 3].map((miniImage) => (
                  <div
                    key={miniImage}
                    className={`service-mini-card service-mini-card-${miniImage} service-mini-image-slot absolute left-1/2 top-1/2 aspect-square w-[42%] overflow-hidden rounded-lg border border-white/80 sm:rounded-xl`}
                  >
                    {service.images && (
                      <img src={service.images[miniImage]} alt={`${service.name} detail ${miniImage}`} className="h-full w-full object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="service-modal fixed inset-0 z-[60] flex items-end justify-center bg-[#3b2434]/35 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedService(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="service-modal-panel relative grid max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[2rem] border border-white/80 bg-[#fffafc] shadow-[0_30px_90px_rgba(59,36,52,0.3)] sm:grid-cols-[0.9fr_1.1fr]"
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-xl text-gray-700 shadow-sm transition hover:bg-white"
            >
              &times;
            </button>

            <div className="relative min-h-[18rem] overflow-hidden sm:min-h-full">
              <img
                src={selectedService.images[0]}
                alt={`${selectedService.name} sample`}
                className="h-full min-h-[18rem] w-full object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/60 bg-[#3b2434]/75 p-4 text-white backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.25em] text-pink-200">Your next nail moment</p>
                <p className="mt-2 font-serif text-2xl italic">Made for you.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">Selected service</p>
              <h2 id="service-modal-title" className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {selectedService.name}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">{selectedService.description}</p>

              <div className="mt-6 border-y border-pink-100 py-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Starting at</p>
                  <p className="mt-1 font-semibold text-gray-900">{selectedService.price}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/booking", { state: { serviceId: selectedService.id } })}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#3b2434] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-pink-700"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;