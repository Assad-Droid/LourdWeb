const services = [
  {
    id: 1,
    name: "Classic Manicure",
    description: "Clean, polished, and beautifully finished.",
    price: "₪80",
    duration: "45 min",
  },
  {
    id: 2,
    name: "Gel Manicure",
    description: "Long-lasting color with a smooth, flawless finish.",
    price: "₪120",
    duration: "60 min",
  },
  {
    id: 3,
    name: "Nail Extensions",
    description: "Custom length and shape designed especially for you.",
    price: "₪180",
    duration: "90 min",
  },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
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
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-pink-400 sm:text-sm">
            Professional Services
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What I Offer
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base lg:text-lg">
            Beautiful nails, personalized with care and attention to every
            detail.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="
                services-card group relative flex min-h-[340px] flex-col justify-between
                overflow-hidden rounded-[1.75rem] border border-pink-100/80
                bg-gradient-to-br from-[#fffafb] via-[#fff5f8] to-[#f9d7e6]
                p-5 shadow-[0_14px_35px_rgba(190,24,93,0.08)]
                transition-all duration-500 hover:-translate-y-3
                hover:border-pink-300 hover:shadow-[0_24px_45px_rgba(190,24,93,0.2)]
                sm:p-6 lg:min-h-[380px] lg:p-8
              "
            >
              <span aria-hidden="true" className="services-card-shine" />
              <span aria-hidden="true" className="services-card-orbit" />

              <div>
                <div className="service-image-slot relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/70 sm:mb-7 lg:mb-8">
                  <span aria-hidden="true" className="service-image-glow" />
                </div>

                <div className="relative mb-5 flex items-center justify-between gap-2 sm:mb-6 lg:mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-600 sm:text-xs">
                    Signature service
                  </span>
                  <span className="rounded-full border border-white/80 bg-white/55 px-2.5 py-1 text-[10px] font-medium text-gray-600 backdrop-blur-sm sm:text-xs">
                    {service.duration}
                  </span>
                </div>

                <h3 className="relative max-w-[12rem] text-2xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                  {service.name}
                </h3>

                <p className="relative mt-3 max-w-[16rem] text-sm leading-6 text-gray-600 sm:mt-4">
                  {service.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-end justify-between border-t border-white/80 pt-4 sm:mt-10 sm:pt-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500 sm:text-xs">Starting at</span>
                  <span className="mt-1 block text-xl font-semibold text-gray-900 sm:text-2xl">
                    {service.price}
                  </span>
                </div>

                <a
                  href="/booking"
                  aria-label={`Book ${service.name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 hover:scale-110 hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 sm:h-11 sm:w-11"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 19 19 5" />
                    <path d="M8 5h11v11" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;