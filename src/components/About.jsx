function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F9D7E6] px-4 py-16 text-gray-800 sm:px-6 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="about-heart heart-one">❤</span>
        <span className="about-heart heart-two">❤</span>
        <span className="about-heart heart-three">❤</span>
        <span className="about-heart heart-four">❤</span>
        <span className="about-heart heart-five">❤</span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          About Lourd
        </h2>

        <div className="mt-10 grid items-center gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              Hi, I’m Lourd,
            </p>
            <p>
              a nail artist with a passion for creating beautiful, detailed, and personalized nail designs. I enjoy working with different styles, from simple and elegant sets to creative nail art that allows each client to express their personality.
            </p>
            <p>
              For me, every appointment is about more than just getting your nails done. I focus on taking the time to understand what you want, paying attention to the details, and making sure you feel comfortable throughout the process. I’m always looking to improve my skills, explore new styles, and create work that I’m proud to put my name behind.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/50 bg-white/25 p-5 shadow-[0_18px_40px_rgba(190,24,93,0.12)] backdrop-blur-sm sm:p-8">
            <div className="grid grid-cols-2 gap-4 text-center sm:gap-6">
              <div className="rounded-2xl bg-white/40 p-4 sm:p-6">
                <div className="text-2xl font-bold text-pink-600 sm:text-3xl">5+</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-700 sm:text-sm">
                  Years
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-4 sm:p-6">
                <div className="text-2xl font-bold text-pink-600 sm:text-3xl">12k</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-700 sm:text-sm">
                  Clients
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-4 sm:p-6">
                <div className="text-2xl font-bold text-pink-600 sm:text-3xl">20+</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-700 sm:text-sm">
                  Designs
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-4 sm:p-6">
                <div className="text-2xl font-bold text-pink-600 sm:text-3xl">5.0</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-700 sm:text-sm">
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
