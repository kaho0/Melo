import Navbar from "@/components/ui/layout/NavBar";
import Hero from "@/components/ui/sections/Hero";
import Features from "@/components/ui/sections/Features";
import Pricing from "@/components/ui/sections/Pricing";
import Testimonials from "@/components/ui/sections/Testimonials";
import FAQ from "@/components/ui/sections/FAQ";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/layout/Footer";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
