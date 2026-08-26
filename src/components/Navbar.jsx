import { useEffect, useState } from "react";
import logo from "../assets/applogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="h-[76px] sm:h-[84px] lg:h-[88px]">
      <nav className="fixed inset-x-0 top-0 z-50 w-full bg-[#FFFFFF]/90 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Home" className="flex-shrink-0">
            <img
              src={logo}
              alt="Nail salon logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative text-sm font-medium transition-all duration-300
                  ${activeSection === link.href
                    ? "text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.65)] after:scale-x-100"
                    : "text-gray-800"}
                  transition-colors duration-200
                  after:absolute after:-bottom-2 after:left-0
                  after:h-[2px] after:w-full after:origin-left
                  after:scale-x-0 after:bg-pink-400
                  after:transition-transform after:duration-300
                  hover:text-pink-500 hover:after:scale-x-100
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/booking"
            className="
              relative rounded-full border border-pink-200 bg-pink-50 px-3 py-2 text-[10px] font-semibold text-gray-800
              transition-all duration-200 hover:text-pink-500 sm:px-4 sm:text-xs lg:text-sm
              lg:border-0 lg:bg-transparent lg:p-0 lg:after:absolute lg:after:-bottom-2 lg:after:left-0
              lg:after:h-[2px] lg:after:w-full lg:after:origin-left lg:after:scale-x-0 lg:after:bg-pink-400
              lg:after:transition-transform lg:after:duration-300 lg:hover:after:scale-x-100
            "
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;