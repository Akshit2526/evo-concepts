import Hero from "@/components/legal/Hero";
import ContentCard from "@/components/legal/ContentCard";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/footer-v5/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <main
        style={{
          background: "#0B0912",
          minHeight: "100vh",
        }}
      >
        <Hero
          title="Refund Policy"
          subtitle="Please review our refund policy carefully before placing an order. The following information explains our international ordering process, shipping methods and return conditions."
        />

        <ContentCard
          title="International Orders"
          paragraphs={[
            "Yes, EVO Concepts accepts international orders and ships to most countries worldwide.",
            "Please note that international payments cannot be processed through our website. To place an international order, kindly email us at orders.evocustoms@gmail.com and our team will assist you with the ordering process.",
          ]}
        />

        <ContentCard
          title="International Shipping"
          paragraphs={[
            "International orders are shipped using trusted courier partners including DHL Express and UPS Express to ensure secure and reliable delivery.",
          ]}
        />

        <ContentCard
          title="Product Availability"
          paragraphs={[
            "Not every product displayed on our website is always available in stock.",
            "If you require a product urgently, we recommend contacting us before placing your order to confirm current availability. Estimated delivery timelines are mentioned on each product page whenever applicable.",
          ]}
        />

        <ContentCard
          title="Return Procedure"
          paragraphs={[
            "Before requesting any return, please read our Terms & Conditions carefully.",
            "Goods once sold will not be taken back.",
            "For any return-related enquiry, please email us at orders.evocustoms@gmail.com or contact us via WhatsApp / Call on +91 9106001647.",
          ]}
        />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}