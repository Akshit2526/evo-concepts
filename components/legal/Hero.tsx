"use client";

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "160px 40px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Glow */}
      <div
        style={{
          position: "absolute",
          left: "-220px",
          top: "-140px",
          width: "460px",
          height: "460px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.18)",
          filter: "blur(180px)",
        }}
      />

      {/* Right Glow */}
      <div
        style={{
          position: "absolute",
          right: "-220px",
          bottom: "-160px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.14)",
          filter: "blur(180px)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {/* Small Label */}

        <p
          style={{
            color: "#8B42FF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "17px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          EVO CONCEPTS
        </p>

        {/* Main Heading */}

        <h1
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "88px",
            lineHeight: "90px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {title}
        </h1>

        {/* Purple Divider */}

        <div
          style={{
            width: "120px",
            height: "4px",
            borderRadius: "999px",
            background: "#8B42FF",
            margin: "34px auto",
          }}
        />

        {/* Subtitle */}

        <p
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            color: "#CFCFCF",
            fontFamily: "var(--font-avenir-roman)",
            fontSize: "22px",
            lineHeight: "42px",
          }}
        >
          {subtitle}
        </p>

        {/* Pills */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "55px",
            flexWrap: "wrap",
          }}
        >
          {[
            "FAST SHIPPING",
            "SECURE ORDERS",
            "TRANSPARENT POLICIES",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(110,30,255,.30)",
                background: "rgba(255,255,255,.035)",
                backdropFilter: "blur(18px)",
                color: "#E5E5E5",
                fontFamily: "var(--font-orbitron)",
                fontSize: "13px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}