"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 40px 140px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "650px",
          height: "650px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.12)",
          filter: "blur(220px)",
          left: "50%",
          top: "-200px",
          transform: "translateX(-50%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            borderRadius: "36px",
            border: "1px solid rgba(110,30,255,.22)",
            background: "rgba(255,255,255,.035)",
            backdropFilter: "blur(24px)",
            padding: "90px 70px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#8B42FF",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "7px",
              textTransform: "uppercase",
              fontSize: "16px",
              marginBottom: "22px",
            }}
          >
            STILL NEED HELP?
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "70px",
              lineHeight: "82px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            OUR TEAM IS
            <br />
            READY TO HELP.
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "21px",
              lineHeight: "38px",
            }}
          >
            Whether it's product recommendations, order assistance or technical
            guidance, we're just one message away from helping you build your
            perfect setup.
          </p>

          <div style={{ height: "50px" }} />

          <Link
            href="mailto:support@evoconcepts.in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "320px",
              height: "66px",
              borderRadius: "18px",
              textDecoration: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "17px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              background:
                "linear-gradient(90deg,#5D16FF 0%,#8B42FF 50%,#6E1EFF 100%)",
              boxShadow: "0 0 35px rgba(110,30,255,.35)",
            }}
          >
            CONTACT SUPPORT
          </Link>
        </div>
      </div>
    </section>
  );
}