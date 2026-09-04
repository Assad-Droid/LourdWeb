import logo from "../assets/applogo.png";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#F8C8DC]">
       {/* <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="hero-bubble hero-bubble-one" />
        <span className="hero-bubble hero-bubble-two" />
        <span className="hero-bubble hero-bubble-three" />
        <span className="hero-bubble hero-bubble-four" />
        <span className="hero-bubble hero-bubble-five" />
      </div>*/} {/* removing bubbles */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-16 lg:py-20">
        <div className="max-w-xl -translate-y-8 text-left sm:-translate-y-12 lg:ml-[12%] lg:-translate-y-20">
        
       <h1 className="hero-brand mt-1 ml-0 inline-block whitespace-nowrap p-1 pr-3 text-6xl font-cormorant italic font-medium leading-[0.9] text-gray-800 transition-all duration-500 hover:text-pink-500 hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.7)] sm:text-7xl lg:text-8xl">
  LOURD
</h1>
          <h2 className="mt-5 text-xl font-semibold leading-snug text-gray-600 sm:text-2xl">
            PROFESSIONAL NAIL SERVICES
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            &quot;I&apos;m nicer when I like my nails.&quot;
          </p>
          <a
            href="/booking"
            className="mt-8 inline-flex rounded-full border border-white/70 bg-white/20 px-7 py-3 text-sm font-semibold text-pink-950 shadow-[0_8px_24px_rgba(190,24,93,0.16),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/35 hover:text-pink-950 hover:shadow-[0_12px_30px_rgba(190,24,93,0.28),0_0_22px_rgba(244,114,182,0.65),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
          >
            Book Appointment
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={logo}
            alt="Lourd nail studio logo"
            className="w-full max-w-[680px] object-contain drop-shadow-[0_18px_18px_rgba(116,25,54,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;