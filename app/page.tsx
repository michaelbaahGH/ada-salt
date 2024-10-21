import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
