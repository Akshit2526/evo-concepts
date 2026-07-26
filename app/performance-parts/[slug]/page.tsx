import Navbar from "@/components/layout/Navbar";
import ProductHero from "@/components/product/ProductHero";
import ProductInfo from "@/components/product/ProductInfo";

export default function ProductPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute left-[-450px] top-[-250px] h-[1100px] w-[1100px] rounded-full bg-[#8B42FF]/20 blur-[220px]" />

        <div className="absolute right-[-450px] top-[250px] h-[1000px] w-[1000px] rounded-full bg-[#8B42FF]/18 blur-[220px]" />

      </div>

      <Navbar activePage="performance-parts" />
      <div className="h-[200px]" />

      <ProductHero />

      <ProductInfo />

    </main>
  );
}