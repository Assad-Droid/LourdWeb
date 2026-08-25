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
    <section id="services" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        
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

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="
                group flex flex-col justify-between
                rounded-3xl border border-gray-100
                bg-[#fffafb] p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#F8C8DC]
                hover:shadow-lg
              "
            >
              {/* Top */}
              <div>
                <div className="mb-8 flex items-start justify-between">
                  <span
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full bg-[#F8C8DC]
                      text-sm font-medium text-gray-800
                    "
                  >
                    {String(service.id).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-gray-400">
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {service.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-lg font-semibold text-gray-900">
                  {service.price}
                </span>

                <a
                  href="/booking"
                  className="
                    text-sm font-medium text-gray-900
                    transition-colors duration-200
                    group-hover:text-pink-500
                  "
                >
                  Book →
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