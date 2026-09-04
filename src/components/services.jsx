const services = [
  {
    id: 1,
    name: "Classic Manicure",
    description: "Clean, polished, and beautifully finished.",
    price: "₪80",
    images: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=400&q=85",
    ],
  },
  {
    id: 2,
    name: "Gel Manicure",
    description: "Long-lasting color with a smooth, flawless finish.",
    price: "₪120",
  
  },
  {
    id: 3,
    name: "Nail Extensions",
    description: "Custom length and shape designed especially for you.",
    price: "₪180",
   
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

        <div className="grid gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="
                services-card group relative flex min-h-[250px] items-stretch gap-4
                overflow-hidden rounded-[2rem] border border-pink-100/80
                bg-gradient-to-br from-[#fffafb] via-[#fff5f8] to-[#f9d7e6]
                p-4 shadow-[0_14px_35px_rgba(190,24,93,0.08)] sm:gap-6 sm:p-6
                transition-all duration-500 hover:-translate-y-3
                hover:border-pink-300 hover:shadow-[0_24px_45px_rgba(190,24,93,0.2)]
              "
            >
              <span aria-hidden="true" className="services-card-shine" />
              <span aria-hidden="true" className="services-card-orbit" />

              <div className="service-image-slot relative aspect-[4/5] w-[28%] shrink-0 overflow-hidden rounded-[1.25rem] border border-white/70 sm:w-[27%] sm:rounded-[1.5rem]">
                {service.images ? (
                  <img src={service.images[0]} alt={`${service.name} sample`} className="h-full w-full object-cover" />
                ) : (
                  <span aria-hidden="true" className="service-image-glow" />
                )}
              </div>

              <div className="relative flex min-w-0 flex-1 flex-col justify-center py-2">
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

                <div className="relative mt-5 grid max-w-[22rem] grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                  {[1, 2, 3].map((miniImage) => (
                    <div key={miniImage} className="service-mini-image-slot aspect-square overflow-hidden rounded-lg border border-white/80 sm:rounded-xl">
                      {service.images && (
                        <img src={service.images[miniImage]} alt={`${service.name} detail ${miniImage}`} className="h-full w-full object-cover" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs">Starting at</span>
                  <span className="ml-2 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {service.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;