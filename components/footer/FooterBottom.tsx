"use client";

import {
  CreditCard,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function FooterBottom() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,255,255,.08)",
        paddingTop: "35px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* LEFT */}

        <div>
          <p
            style={{
              color: "#9F9F9F",
              fontSize: "16px",
              fontFamily: "var(--font-avenir-roman)",
              marginBottom: "10px",
            }}
          >
            © {new Date().getFullYear()} EVO Concepts. All Rights Reserved.
          </p>

          <p
            style={{
              color: "#6F6F6F",
              fontSize: "15px",
              fontFamily: "var(--font-avenir-roman)",
            }}
          >
            Built with passion for automotive enthusiasts.
          </p>
        </div>

        {/* CENTER */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <PaymentCard title="VISA" />

          <PaymentCard title="MC" />

          <PaymentCard title="UPI" />

          <PaymentCard title="GPay" />

          <PaymentCard title="Paytm" />
        </div>

        {/* RIGHT */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#AFAFAF",
            fontSize: "16px",
            fontFamily: "var(--font-avenir-roman)",
          }}
        >
          <ShieldCheck
            size={20}
            color="#8B42FF"
          />

          Secure Payments
        </div>
      </div>
    </section>
  );
}

/* ==================================== */

function PaymentCard({
  title,
}: {
  title: string;
}) {
  return (
    <div
      style={{
        width: "72px",
        height: "46px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,.08)",
        background: "rgba(255,255,255,.03)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        fontFamily: "var(--font-orbitron)",
        fontSize: "14px",
        letterSpacing: "1px",
      }}
    >
      {title}
    </div>
  );
}