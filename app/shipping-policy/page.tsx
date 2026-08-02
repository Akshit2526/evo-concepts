import Hero from "@/components/legal/Hero";
import ContentCard from "@/components/legal/ContentCard";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/footer-v5/Footer";

export default function ShippingPolicyPage() {
  return (
    <>
      <main
        style={{
          background: "#0B0912",
          minHeight: "100vh",
        }}
      >
        <Hero
          title="Shipping Policy"
          subtitle="Learn how EVO Concepts processes, packs and delivers every order with speed, transparency and complete peace of mind."
        />

        <ContentCard
          title="Order Processing"
          paragraphs={[
            "Orders are processed Monday through Saturday, excluding public holidays. Every order is carefully reviewed before dispatch to ensure product accuracy and quality.",
            "Most confirmed orders are packed and dispatched within 1–2 business days after successful payment confirmation.",
          ]}
        />

        <ContentCard
          title="Shipping Partners"
          paragraphs={[
            "We partner with trusted national courier services to ensure safe and timely delivery across India.",
            "Tracking information will be shared via email or SMS once your order has been dispatched from our warehouse.",
          ]}
        />

        <ContentCard
          title="Estimated Delivery"
          paragraphs={[
            "Metro cities generally receive deliveries within 2–5 business days after dispatch.",
            "Remote locations or unforeseen logistics delays may require additional transit time.",
          ]}
        />

        <ContentCard
          title="Shipping Charges"
          paragraphs={[
            "Shipping charges are automatically calculated during checkout based on your delivery location, package dimensions and total order weight.",
          ]}
        />

        <ContentCard
          title="Damaged Packages"
          paragraphs={[
            "If your package arrives damaged, incomplete or appears to have been tampered with, please contact EVO Concepts within 24 hours of delivery.",
            "Please include clear photos and unboxing videos of the product and packaging so our support team can investigate and assist you as quickly as possible.",
          ]}
        />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}