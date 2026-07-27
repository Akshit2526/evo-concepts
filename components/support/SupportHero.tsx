"use client";

export default function SupportHero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "140px 40px 90px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Glow */}
      <div
        style={{
          position: "absolute",
          left: "-180px",
          top: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.18)",
          filter: "blur(170px)",
        }}
      />

      {/* Right Glow */}
      <div
        style={{
          position: "absolute",
          right: "-180px",
          bottom: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.12)",
          filter: "blur(170px)",
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
        <p
          style={{
            color: "#8B42FF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "17px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: "26px",
          }}
        >
          SUPPORT CENTER
        </p>

        <h1
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "88px",
            lineHeight: "90px",
            color: "#FFFFFF",
            textTransform: "uppercase",
            maxWidth: "900px",
          }}
        >
          WE'RE HERE
          <br />
          TO HELP.
        </h1>

        <div style={{ height: "40px" }} />

        <p
          style={{
            maxWidth: "760px",
            color: "#CFCFCF",
            fontFamily: "var(--font-avenir-roman)",
            fontSize: "22px",
            lineHeight: "42px",
          }}
        >
          Whether you need help choosing the right performance parts,
          tracking an order, understanding warranty coverage or have a
          general enquiry, our team is ready to assist you with quick,
          reliable and enthusiast-focused support.
        </p>
      </div>
    </section>
  );
}