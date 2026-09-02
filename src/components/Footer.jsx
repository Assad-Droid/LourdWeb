function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Manicure",
    "Gel Polish",
    "Nail Extensions",
    "Nail Art",
  ];

  return (
    <footer className="bg-[#3B2434] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src="/src/assets/applogo.png"
              alt="Nail salon logo"
              className="mb-5 h-14 w-auto"
            />

            <p className="max-w-xs text-sm leading-6 text-[#D8B8C8]">
              Enhancing your beauty with passion, precision,
              and the perfect touch.
            </p>

            <span className="mt-5 block text-xl text-[#F8C8DC]">
              ♥
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#F8C8DC]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#D8B8C8] transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#F8C8DC]">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-[#D8B8C8]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#F8C8DC]">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-[#D8B8C8]">
              <p>📞 050-123-4567</p>
              <p>📷 @lm.nailstudio</p>
              <p>📍 Jerusalem, Palestine</p>
            </div>

            <a
              href="/booking"
              className="mt-6 inline-block border-b border-[#F8C8DC] pb-1 text-sm font-medium text-[#F8C8DC] transition-colors duration-200 hover:text-white"
            >
              Book your appointment →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-sm text-[#D8B8C8]">
            © 2026 LM Nail Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;