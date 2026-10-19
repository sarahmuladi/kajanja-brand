import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Purpose from "./components/Purpose";
import Values from "./components/Values";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Purpose />
        <Values />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </>
  );
}