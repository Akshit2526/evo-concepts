import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustedBrands from "../components/home/TrustedBrands";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChoose from "../components/home/WhyChoose";
import Footer from "@/components/footer-v5/Footer";
export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Global Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-400px] top-[-250px] h-[1100px] w-[1100px] rounded-full bg-[#8B42FF]/20 blur-[220px]" />
        <div className="absolute right-[-400px] top-[500px] h-[1000px] w-[1000px] rounded-full bg-[#8B42FF]/18 blur-[240px]" />
        <div className="absolute left-1/2 top-[1300px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#8B42FF]/12 blur-[220px]" />
      </div>

      <Navbar />

      <Hero />

      <TrustedBrands />

      <FeaturedProducts />

      <WhyChoose />

      <div className="h-50" />

      <Footer />

    </main>
  );
}