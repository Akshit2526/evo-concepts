"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <section
      style={{
        borderRadius: "32px",
        border: "1px solid rgba(139,66,255,.22)",
        background:
          "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
        backdropFilter: "blur(20px)",
        padding: "55px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}

        <div>
          <p
            style={{
              color: "#8B42FF",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "6px",
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            NEWSLETTER
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "48px",
              lineHeight: "58px",
              marginBottom: "22px",
            }}
          >
            STAY AHEAD OF
            <br />
            THE BUILD.
          </h2>

          <p
            style={{
              color: "#BFBFBF",
              fontSize: "18px",
              lineHeight: "32px",
              maxWidth: "480px",
              fontFamily: "var(--font-avenir-roman)",
            }}
          >
            Be the first to know about new performance parts,
            exclusive offers and upcoming product launches.
          </p>
        </div>

        {/* RIGHT */}

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "66px",
              borderRadius: "18px",
              padding: "0 22px",
              border: "1px solid rgba(139,66,255,.22)",
              background: "rgba(255,255,255,.03)",
            }}
          >
            <Mail
              size={20}
              color="#8B42FF"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontSize: "17px",
                fontFamily: "var(--font-avenir-roman)",
              }}
            />
          </div>

          <button
            style={{
              width: "70px",
              height: "66px",
              border: "none",
              borderRadius: "18px",
              background:
                "linear-gradient(90deg,#6E1EFF,#8B42FF)",
              color: "#FFFFFF",
              cursor: "pointer",
              boxShadow:
                "0 0 28px rgba(139,66,255,.35)",
            }}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}