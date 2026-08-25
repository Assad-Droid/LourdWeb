import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./components/services";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
      <Services />
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