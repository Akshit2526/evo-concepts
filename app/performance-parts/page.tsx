import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/performance/ProductGrid";

export default function PerformancePartsPage() {
  return (
    <>
      <Navbar activePage="performance-parts" />

      <main className="min-h-screen pt-[120px]">

        {/* Spacer */}
        <div className="h-[140px]" />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}