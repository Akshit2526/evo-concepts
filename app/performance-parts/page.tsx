import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/performance/ProductGrid";

export default function PerformancePartsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-[420px] -top-[320px] h-[1100px] w-[1100px] rounded-full bg-[#6E1EFF]/20 blur-[220px]" />

        <div className="absolute -right-[500px] top-[200px] h-[1100px] w-[1100px] rounded-full bg-[#6E1EFF]/15 blur-[240px]" />

      </div>

      <Navbar activePage="performance-parts" />

      <div className="h-[170px]" />

      <ProductGrid />

    </main>
  );
}