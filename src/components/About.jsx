function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F9D7E6] py-20 text-gray-800">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="about-heart heart-one">❤</span>
        <span className="about-heart heart-two">❤</span>
        <span className="about-heart heart-three">❤</span>
        <span className="about-heart heart-four">❤</span>
        <span className="about-heart heart-five">❤</span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          About Lourd
        </h2>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
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

          <div className="rounded-[2rem] border border-white/50 bg-white/25 p-8 shadow-[0_18px_40px_rgba(190,24,93,0.12)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="rounded-2xl bg-white/40 p-6">
                <div className="text-3xl font-bold text-pink-600">5+</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-700">
                  Years
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-6">
                <div className="text-3xl font-bold text-pink-600">12k</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-700">
                  Clients
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-6">
                <div className="text-3xl font-bold text-pink-600">20+</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-700">
                  Designs
                </div>
              </div>
              <div className="rounded-2xl bg-white/40 p-6">
                <div className="text-3xl font-bold text-pink-600">5.0</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-700">
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
