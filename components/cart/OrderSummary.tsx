"use client";

import Link from "next/link";

export default function OrderSummary() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "460px",
            borderRadius: "34px",
            border: "1px solid rgba(110,30,255,.20)",
            background: "rgba(255,255,255,.04)",
            backdropFilter: "blur(24px)",
            padding: "40px",
          }}
        >
          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "34px",
              marginBottom: "35px",
              textTransform: "uppercase",
            }}
          >
            Order Summary
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "22px",
            }}
          >
            <span style={{ color: "#CFCFCF" }}>
              Subtotal
            </span>

            <span style={{ color: "#FFFFFF" }}>
              ₹0
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "22px",
            }}
          >
            <span style={{ color: "#CFCFCF" }}>
              Shipping
            </span>

            <span style={{ color: "#8B42FF" }}>
              Calculated at checkout
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <span style={{ color: "#CFCFCF" }}>
              GST
            </span>

            <span style={{ color: "#FFFFFF" }}>
              Included
            </span>
          </div>

          <div
            style={{
              borderTop:
                "1px solid rgba(110,30,255,.20)",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "35px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontFamily:
                  "var(--font-orbitron)",
                fontSize: "22px",
              }}
            >
              Total
            </span>

            <span
              style={{
                color: "#8B42FF",
                fontFamily:
                  "var(--font-orbitron)",
                fontSize: "28px",
              }}
            >
              ₹0
            </span>
          </div>

          <Link
            href="/checkout"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "18px",
              borderRadius: "18px",
              background: "#8B42FF",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily:
                "var(--font-orbitron)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            Proceed To Checkout
          </Link>

          <Link
            href="/performance-parts"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "18px",
              borderRadius: "18px",
              border:
                "1px solid rgba(110,30,255,.25)",
              background: "transparent",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily:
                "var(--font-orbitron)",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
