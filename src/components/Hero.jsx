import logo from "../assets/applogo.png";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#F8C8DC]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="hero-bubble hero-bubble-one" />
        <span className="hero-bubble hero-bubble-two" />
        <span className="hero-bubble hero-bubble-three" />
        <span className="hero-bubble hero-bubble-four" />
        <span className="hero-bubble hero-bubble-five" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-16 lg:py-20">
        <div className="max-w-xl text-center sm:text-left lg:ml-[12%] lg:-translate-y-20">
          <h1 className="mt-1 text-[3.5rem] font-bold leading-[0.9] text-gray-800 transition-all duration-500 hover:text-pink-500 hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.7)] sm:text-6xl md:text-7xl lg:text-8xl">
            LOURD
          </h1>
          <h2 className="mt-4 text-base font-semibold uppercase tracking-[0.14em] text-gray-600 sm:mt-5 sm:text-xl lg:text-2xl">
            Professional Nail Services
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            &quot;I&apos;m nicer when I like my nails.&quot;
          </p>
          <a
            href="/booking"
            className="mt-8 inline-flex rounded-full border border-white/70 bg-white/20 px-5 py-3 text-sm font-semibold text-pink-950 shadow-[0_8px_24px_rgba(190,24,93,0.16),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/35 hover:text-pink-950 hover:shadow-[0_12px_30px_rgba(190,24,93,0.28),0_0_22px_rgba(244,114,182,0.65),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500 sm:px-7"
          >
            Book Appointment
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={logo}
            alt="Lourd nail studio logo"
            className="w-full max-w-[420px] object-contain drop-shadow-[0_18px_18px_rgba(116,25,54,0.18)] sm:max-w-[520px] lg:max-w-[680px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;