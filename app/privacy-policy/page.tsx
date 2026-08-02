import Hero from "@/components/legal/Hero";
import ContentCard from "@/components/legal/ContentCard";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/footer-v5/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main
        style={{
          background: "#0B0912",
          minHeight: "100vh",
        }}
      >
        <Hero
          title="Privacy Policy"
          subtitle="This Privacy Policy explains how EVO Concepts collects, uses, stores and protects your personal information when you use our website and services."
        />

        <ContentCard
          title="Introduction"
          paragraphs={[
            "This Privacy Policy describes our policies and procedures regarding the collection, use and disclosure of your information when you use our Service.",
            "It explains your privacy rights and how applicable laws protect your personal information. By accessing or using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.",
          ]}
        />

        <ContentCard
          title="Interpretation & Definitions"
          paragraphs={[
            "Account – A unique account created for you to access our Service or specific features of our website.",
            "Affiliate – An entity that controls, is controlled by or is under common control with the Company.",
            "Service – Refers to the EVO Concepts website.",
            "Personal Data – Any information relating to an identified or identifiable individual.",
            "Service Provider – Any natural or legal person who processes data on behalf of the Company.",
            "Usage Data – Information collected automatically when using the Service.",
            "You – The individual accessing or using the Service.",
          ]}
        />

        <ContentCard
          title="Collecting Your Personal Data"
          paragraphs={[
            "We may request certain personally identifiable information in order to provide our services efficiently.",
            "This information may include your email address, first name, last name, phone number and other information required to process your enquiries or orders.",
          ]}
        />

        <ContentCard
          title="Usage Data"
          paragraphs={[
            "Usage Data is collected automatically while using our Service.",
            "This may include your device's IP address, browser type, browser version, pages visited, the date and time of your visit, the time spent on pages, unique device identifiers and other diagnostic information.",
          ]}
        />

        <ContentCard
          title="Cookies & Tracking Technologies"
          paragraphs={[
            "We use cookies and similar tracking technologies to monitor activity on our website, improve user experience and store certain information required for the proper functioning of our Service.",
          ]}
        />

        <ContentCard
          title="How We Use Your Personal Data"
          paragraphs={[
            "Your Personal Data may be used to provide and maintain our Service, manage your account, perform contractual obligations, communicate with you, facilitate business transfers and for other legitimate business purposes.",
          ]}
        />

        <ContentCard
          title="Retention of Personal Data"
          paragraphs={[
            "EVO Concepts will retain your Personal Data only for as long as necessary to fulfil the purposes described in this Privacy Policy and to comply with applicable legal obligations.",
          ]}
        />

        <ContentCard
          title="Contact Us"
          paragraphs={[
            "If you have any questions regarding this Privacy Policy, please contact us.",
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