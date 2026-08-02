"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        padding: "170px 40px 110px",
      }}
    >
      {/* Left Glow */}
      <div
        style={{
          position: "absolute",
          left: "-220px",
          top: "-120px",
          width: "500px",
          height: "500px",
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
          bottom: "-150px",
          width: "480px",
          height: "480px",
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
        {/* Badge */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            borderRadius: "999px",
            border: "1px solid rgba(110,30,255,.30)",
            background: "rgba(255,255,255,.04)",
            backdropFilter: "blur(20px)",
            marginBottom: "34px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#8B42FF",
              boxShadow: "0 0 18px #8B42FF",
            }}
          />

          <span
            style={{
              color: "#D6D6D6",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "2px",
              fontSize: "13px",
              textTransform: "uppercase",
            }}
          >
            Secure Shopping Cart
          </span>
        </div>

        {/* Heading */}

        <h1
          style={{
            color: "#FFFFFF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "88px",
            lineHeight: "92px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          SHOPPING
          <br />
          CART
        </h1>

        <div
          style={{
            width: "120px",
            height: "4px",
            borderRadius: "999px",
            background: "#8B42FF",
            margin: "38px auto",
          }}
        />

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
          Review your selected performance parts, update quantities and proceed
          securely to checkout when you're ready.
        </p>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "60px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "18px 42px",
              borderRadius: "999px",
              background: "#8B42FF",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-orbitron)",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Continue Shopping
          </Link>

          <Link
            href="#cart-items"
            style={{
              padding: "18px 42px",
              borderRadius: "999px",
              border: "1px solid rgba(110,30,255,.35)",
              background: "rgba(255,255,255,.04)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-orbitron)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              backdropFilter: "blur(20px)",
            }}
          >
            View Cart
          </Link>
        </div>
      </div>
    </section>
  );
}