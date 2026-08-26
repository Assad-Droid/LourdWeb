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
            What I Offer
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Beautiful nails, personalized with care and attention to every
            detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="
                services-card group relative flex min-h-[380px] flex-col justify-between
                overflow-hidden rounded-[2rem] border border-pink-100/80
                bg-gradient-to-br from-[#fffafb] via-[#fff5f8] to-[#f9d7e6]
                p-8 shadow-[0_14px_35px_rgba(190,24,93,0.08)]
                transition-all duration-500 hover:-translate-y-3
                hover:border-pink-300 hover:shadow-[0_24px_45px_rgba(190,24,93,0.2)]
              "
            >
              <span aria-hidden="true" className="services-card-shine" />
              <span aria-hidden="true" className="services-card-orbit" />
              <span className="pointer-events-none absolute -right-4 -top-8 text-[10rem] font-bold leading-none text-pink-200/45 transition-transform duration-500 group-hover:scale-110 group-hover:text-pink-300/55">
                {String(service.id).padStart(2, "0")}
              </span>

              <div>
                <div className="relative mb-16 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-600">
                    Signature service
                  </span>
                  <span className="rounded-full border border-white/80 bg-white/55 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm">
                    {service.duration}
                  </span>
                </div>

                <h3 className="relative max-w-[12rem] text-3xl font-semibold leading-tight tracking-tight text-gray-900">
                  {service.name}
                </h3>

                <p className="relative mt-4 max-w-[16rem] text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="relative mt-10 flex items-end justify-between border-t border-white/80 pt-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Starting at</span>
                  <span className="mt-1 block text-2xl font-semibold text-gray-900">
                  {service.price}
                  </span>
                </div>

                <a
                  href="/booking"
                  aria-label={`Book ${service.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-xl text-white transition-all duration-500 hover:scale-110 hover:bg-pink-500 group-hover:w-28 group-hover:rounded-full group-hover:bg-pink-500"
                >
                  <span className="text-sm opacity-0 transition-opacity duration-300 group-hover:mr-1 group-hover:opacity-100">
                    Book
                  </span>
                  <span className="transition-transform duration-500 group-hover:rotate-[-45deg]">&rarr;</span>
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