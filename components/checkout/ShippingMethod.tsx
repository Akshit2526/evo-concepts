"use client";

import { useState } from "react";

export default function ShippingMethod() {
  const [selected, setSelected] = useState("standard");

  const cardStyle = (active: boolean): React.CSSProperties => ({
    border: active
      ? "2px solid #7C3AED"
      : "1px solid rgba(255,255,255,.12)",
    background: active
      ? "rgba(124,58,237,.12)"
      : "rgba(255,255,255,.03)",
    borderRadius: "18px",
    padding: "26px",
    cursor: "pointer",
    transition: ".25s",
  });

  return (
    <section>

      <h2
        style={{
          fontFamily: "Orbitron",
          fontSize: "34px",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Shipping Method
      </h2>

      <div style={{ height: "35px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px",
        }}
      >

        {/* STANDARD */}

        <div
          onClick={() => setSelected("standard")}
          style={cardStyle(selected === "standard")}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <h3
              style={{
                color: "#fff",
                fontFamily: "Avenir Medium",
                fontSize: "22px",
              }}
            >
              Standard Delivery
            </h3>

            <span
              style={{
                color: "#7C3AED",
                fontFamily: "Avenir Black",
                fontSize: "22px",
              }}
            >
              FREE
            </span>

          </div>

          <div style={{ height: "15px" }} />

          <p
            style={{
              color: "#BDBDBD",
              fontFamily: "Avenir Roman",
              fontSize: "16px",
              lineHeight: "28px",
            }}
          >
            Delivery within 3–5 business days.
          </p>

        </div>

        {/* EXPRESS */}

        <div
          onClick={() => setSelected("express")}
          style={cardStyle(selected === "express")}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <h3
              style={{
                color: "#fff",
                fontFamily: "Avenir Medium",
                fontSize: "22px",
              }}
            >
              Express Delivery
            </h3>

            <span
              style={{
                color: "#7C3AED",
                fontFamily: "Avenir Black",
                fontSize: "22px",
              }}
            >
              ₹499
            </span>

          </div>

          <div style={{ height: "15px" }} />

          <p
            style={{
              color: "#BDBDBD",
              fontFamily: "Avenir Roman",
              fontSize: "16px",
              lineHeight: "28px",
            }}
          >
            Delivery within 1–2 business days.
          </p>

        </div>

      </div>

    </section>
  );
}