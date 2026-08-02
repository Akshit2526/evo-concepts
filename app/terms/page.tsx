import Hero from "@/components/legal/Hero";
import ContentCard from "@/components/legal/ContentCard";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/footer-v5/Footer";

export default function TermsPage() {
  return (
    <>
      <main
        style={{
          background: "#0B0912",
          minHeight: "100vh",
        }}
      >
        <Hero
          title="Terms & Conditions"
          subtitle="Please read these Terms & Conditions carefully before using the EVO Concepts website or placing an order. By accessing our website, you agree to be bound by the terms outlined below."
        />

        <ContentCard
          title="Introduction"
          paragraphs={[
            "This website is owned and operated by EVO Concepts. Throughout this website, the terms 'we', 'our' and 'us' refer to EVO Concepts.",
            "By accessing our website, browsing our products or placing an order, you agree to comply with these Terms & Conditions together with our Privacy Policy, Shipping Policy and Refund Policy.",
            "If you do not agree with any part of these Terms & Conditions, please discontinue the use of our website and services.",
          ]}
        />

        <ContentCard
          title="Website Usage"
          paragraphs={[
            "You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.",
            "You must not misuse the website by introducing malicious software, attempting unauthorized access or interfering with the normal operation of our services.",
            "Any misuse of this website may result in suspension or permanent restriction of access without prior notice.",
          ]}
        />

        <ContentCard
          title="Products & Orders"
          paragraphs={[
            "All products displayed on our website are subject to availability.",
            "Product descriptions, specifications and images are provided for general reference. Minor differences may occur depending on manufacturers or product revisions.",
            "EVO Concepts reserves the right to refuse, cancel or limit any order at our sole discretion if necessary.",
          ]}
        />

        <ContentCard
          title="Pricing & Payments"
          paragraphs={[
            "All prices displayed on our website are subject to change without prior notice.",
            "Prices do not automatically include shipping charges, import duties or applicable taxes unless specifically mentioned.",
            "Orders will only be processed after successful payment confirmation.",
          ]}
        />

        <ContentCard
          title="Shipping & International Orders"
          paragraphs={[
            "EVO Concepts ships products throughout India and also accepts international orders for most destinations.",
            "International customers may be contacted separately regarding payment methods, shipping charges and delivery arrangements.",
            "Estimated delivery timelines are provided as a guideline and may vary due to courier operations, customs clearance or unforeseen circumstances beyond our control.",
          ]}
        />

        {/* ===== PART 2 STARTS BELOW ===== */}
                <ContentCard
          title="Returns, Refunds & Cancellations"
          paragraphs={[
            "Returns and refunds are handled in accordance with our Refund Policy available on this website.",
            "Customers are advised to inspect products immediately upon delivery and contact EVO Concepts if any issue is identified.",
            "Order cancellation requests are subject to the current processing status of the order. Once an order has been dispatched, cancellation may no longer be possible.",
          ]}
        />

        <ContentCard
          title="Product Compatibility & Warranty"
          paragraphs={[
            "It is the customer's responsibility to ensure that the selected product is compatible with their vehicle before placing an order.",
            "If compatibility assistance is required, customers are encouraged to contact EVO Concepts prior to completing their purchase.",
            "Manufacturer warranties, where applicable, remain subject to the individual manufacturer's terms and conditions.",
          ]}
        />

        <ContentCard
          title="Limitation of Liability"
          paragraphs={[
            "EVO Concepts shall not be liable for indirect, incidental or consequential damages arising from the use of our products or website.",
            "While every effort is made to provide accurate information, we do not guarantee that product descriptions, pricing or availability will always remain free from errors.",
            "Our maximum liability shall never exceed the value of the purchased product unless otherwise required by applicable law.",
          ]}
        />

        <ContentCard
          title="Intellectual Property"
          paragraphs={[
            "All website content including logos, branding, graphics, photographs, product descriptions and other materials are the intellectual property of EVO Concepts or their respective owners.",
            "No content from this website may be copied, reproduced, distributed or used without prior written permission.",
          ]}
        />

        <ContentCard
          title="Privacy"
          paragraphs={[
            "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use and protect your personal information.",
          ]}
        />

        <ContentCard
          title="Changes To These Terms"
          paragraphs={[
            "EVO Concepts reserves the right to modify these Terms & Conditions at any time without prior notice.",
            "Any updates become effective immediately upon publication on this website. Continued use of the website after such updates constitutes acceptance of the revised Terms.",
          ]}
        />

        <ContentCard
          title="Contact Information"
          paragraphs={[
            "If you have any questions regarding these Terms & Conditions, please contact EVO Concepts.",
            "Email: sales@evocustoms.com",
            "Phone: +91 9106001647",
          ]}
        />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}