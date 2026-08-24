function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8C8DC]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="hero-bubble hero-bubble-one" />
        <span className="hero-bubble hero-bubble-two" />
        <span className="hero-bubble hero-bubble-three" />
        <span className="hero-bubble hero-bubble-four" />
        <span className="hero-bubble hero-bubble-five" />
      </div>
    </section>
  );
}

export default Hero;