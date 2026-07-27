import TermsHero from "@/components/terms/TermsHero";
import TermsSections from "@/components/terms/TermsSections";
import TermsCTA from "@/components/terms/TermsCTA";

export default function TermsPage() {
  return (
    <main className="w-full overflow-hidden">
      <TermsHero />
      <TermsSections />
      <TermsCTA />
    </main>
  );
}