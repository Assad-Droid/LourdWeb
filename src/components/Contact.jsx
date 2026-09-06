function Contact() {
  return (
    <section id="contact" className="bg-[#fdf2f6] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/35 p-5 shadow-[0_18px_45px_rgba(190,24,93,0.12)] backdrop-blur-sm sm:p-8 md:p-12">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-500 sm:text-sm">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Let&apos;s book your next nail moment
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/50 p-4 shadow-sm sm:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500 sm:text-sm">Call</p>
            <a href="tel:+971500000000" className="mt-3 block text-lg font-semibold text-gray-900 hover:text-pink-500 sm:text-xl">
              +971 50 000 0000
            </a>
          </div>

          <div className="rounded-2xl bg-white/50 p-4 shadow-sm sm:p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500 sm:text-sm">Email</p>
            <a href="mailto:hello@lourd.com" className="mt-3 block text-lg font-semibold text-gray-900 hover:text-pink-500 sm:text-xl">
              lourd@mail.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
          <a
            href="https://www.instagram.com/lourd.manneh?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            title="Follow Lourd on Instagram"
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br from-white/80 via-pink-100/70 to-fuchsia-200/60 text-pink-600 shadow-[0_12px_26px_rgba(236,72,153,0.2),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-pink-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:text-pink-700 hover:shadow-[0_18px_35px_rgba(236,72,153,0.35),0_0_20px_rgba(244,114,182,0.4)] sm:h-16 sm:w-16"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.3" cy="6.7" r="1.35" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            title="Message Lourd on WhatsApp"
            className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br from-white/80 via-emerald-50/75 to-emerald-100/70 text-emerald-600 shadow-[0_12px_26px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-emerald-200/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-emerald-700 hover:shadow-[0_18px_35px_rgba(16,185,129,0.32),0_0_20px_rgba(52,211,153,0.35)] sm:h-16 sm:w-16"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" aria-hidden="true">
              <path d="M12.04 2.5A9.47 9.47 0 0 0 3.3 15.3L2.5 21.5l6.28-1.8a9.47 9.47 0 1 0 3.26-17.2Zm0 17.2a7.75 7.75 0 0 1-3.94-1.08l-.28-.17-3.72 1.07 1.1-3.63-.18-.3A7.75 7.75 0 1 1 12.04 19.7Zm4.28-5.78c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.52.12-.15.23-.58.76-.71.92-.13.15-.27.17-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.62-1.16-1.38-1.3-1.61-.13-.23-.02-.36.1-.48.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.52-1.25-.72-1.71-.19-.45-.38-.38-.52-.39l-.45-.01c-.15 0-.4.06-.61.28-.2.23-.78.76-.78 1.85 0 1.09.8 2.14.91 2.28.12.15 1.57 2.4 3.81 3.37.53.23.94.37 1.27.47.55.17 1.05.15 1.44.09.44-.07 1.38-.56 1.58-1.1.2-.54.2-.99.14-1.08-.06-.1-.22-.15-.46-.27Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
