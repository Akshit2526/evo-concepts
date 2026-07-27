import SupportHero from "@/components/support/SupportHero";
import SupportOptions from "@/components/support/SupportOptions";
import FAQ from "@/components/support/FAQ";
import ContactCard from "@/components/support/ContactCard";
import CTASection from "@/components/support/CTASection";

export default function SupportPage() {
  return (
    <main className="w-full overflow-hidden">
      <SupportHero />
      <SupportOptions />
      <FAQ />
      <ContactCard />
      <CTASection />
    </main>
  );
}