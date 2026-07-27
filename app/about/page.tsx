import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import BrandValues from "@/components/about/BrandValues";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <BrandValues />
      <CTASection />
    </main>
  );
}