import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
import About from "./components/About";
import Contact from "./components/Contact";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.04 2.5A9.47 9.47 0 0 0 3.3 15.3L2.5 21.5l6.28-1.8a9.47 9.47 0 1 0 3.26-17.2Zm0 17.2a7.75 7.75 0 0 1-3.94-1.08l-.28-.17-3.72 1.07 1.1-3.63-.18-.3A7.75 7.75 0 1 1 12.04 19.7Zm4.28-5.78c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.52.12-.15.23-.58.76-.71.92-.13.15-.27.17-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.62-1.16-1.38-1.3-1.61-.13-.23-.02-.36.1-.48.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.52-1.25-.72-1.71-.19-.45-.38-.38-.52-.39l-.45-.01c-.15 0-.4.06-.61.28-.2.23-.78.76-.78 1.85 0 1.09.8 2.14.91 2.28.12.15 1.57 2.4 3.81 3.37.53.23.94.37 1.27.47.55.17 1.05.15 1.44.09.44-.07 1.38-.56 1.58-1.1.2-.54.2-.99.14-1.08-.06-.1-.22-.15-.46-.27Z" />
    </svg>
  );
}

function SocialBar() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href="https://www.instagram.com/lourd.manneh?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="social-float flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/25 text-pink-600 shadow-[0_10px_24px_rgba(236,72,153,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500/20 hover:text-pink-700"
      >
        <InstagramIcon />
      </a>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="social-float flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/25 text-emerald-600 shadow-[0_10px_24px_rgba(16,185,129,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500/20 hover:text-emerald-700"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <SocialBar />

      <main>
        <Hero />
      </main>
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;