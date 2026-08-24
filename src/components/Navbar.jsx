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
    <header className="h-[88px]">
      <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        {/* Logo */}
        <a href="#home" aria-label="Home">
          <img
            src={logo}
            alt="Nail salon logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Booking */}
        <a
          href="/booking"
          className="
            relative text-sm font-medium text-gray-800
            transition-colors duration-200
            after:absolute after:-bottom-2 after:left-0
            after:h-[2px] after:w-full after:origin-left
            after:scale-x-0 after:bg-pink-400
            after:transition-transform after:duration-300
            hover:text-pink-500 hover:after:scale-x-100
          "
        >
          Book Appointment
        </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;