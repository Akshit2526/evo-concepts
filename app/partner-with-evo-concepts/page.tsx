"use client";

import { useState } from "react";

import Hero from "@/components/partner/Hero";
import PartnershipOptions from "@/components/partner/PartnershipOptions";
import Benefits from "@/components/partner/Benefits";
import ApplicationForm from "@/components/partner/ApplicationForm";
import ApplicationProcess from "@/components/partner/ApplicationProcess";
import FAQ from "@/components/partner/FAQ";

import Footer from "@/components/footer-v5/Footer";

export default function PartnerWithEVOConceptsPage() {
  const [applicationType, setApplicationType] = useState<
    "dealer" | "business"
  >("dealer");

  return (
    <>
      <main
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero */}

        <Hero />

        {/* Partnership Selector */}

        <PartnershipOptions
          applicationType={applicationType}
          setApplicationType={setApplicationType}
        />

        {/* Dynamic Benefits */}

        <Benefits applicationType={applicationType} />

        {/* Dynamic Form */}

        <ApplicationForm applicationType={applicationType} />

        {/* Process */}

        <ApplicationProcess />

        {/* FAQ */}

        <FAQ />

        {/* CTA */}

    
      </main>

      {/* Footer */}

      <Footer />
    </>
  );
}