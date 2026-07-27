"use client";

import {
  ShieldCheck,
  Truck,
  Award,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={34} />,
    title: "100% GENUINE PRODUCTS",
    description:
      "Only authentic performance parts from trusted global brands.",
  },
  {
    icon: <Truck size={34} />,
    title: "FAST SHIPPING",
    description:
      "Secure packaging with reliable delivery across India.",
  },
  {
    icon: <Award size={34} />,
    title: "PREMIUM QUALITY",
    description:
      "Carefully selected products built for performance enthusiasts.",
  },
  {
    icon: <Headset size={34} />,
    title: "EXPERT SUPPORT",
    description:
      "Need help choosing the right upgrade? We're here for you.",
  },
];

export default function FooterFeatures() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "24px",
      }}
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          style={{
            padding: "34px 28px",
            borderRadius: "24px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
            border: "1px solid rgba(139,66,255,.18)",
            backdropFilter: "blur(20px)",
            transition: ".3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "#8B42FF";
            e.currentTarget.style.boxShadow =
              "0 0 35px rgba(139,66,255,.28)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor =
              "rgba(139,66,255,.18)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "18px",
              background: "rgba(139,66,255,.12)",
              border: "1px solid rgba(139,66,255,.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8B42FF",
              marginBottom: 24,
            }}
          >
            {feature.icon}
          </div>

          <h3
            style={{
              color: "#FFFFFF",
              fontSize: "22px",
              lineHeight: "32px",
              marginBottom: "16px",
              fontFamily: "var(--font-orbitron)",
            }}
          >
            {feature.title}
          </h3>

          <p
            style={{
              color: "#BEBEBE",
              fontSize: "17px",
              lineHeight: "30px",
              fontFamily: "var(--font-avenir-roman)",
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}