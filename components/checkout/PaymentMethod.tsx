"use client";

import { useState } from "react";

const methods = [
  {
    id: "upi",
    title: "UPI",
    subtitle: "Google Pay • PhonePe • Paytm",
  },
  {
    id: "credit",
    title: "Credit Card",
    subtitle: "Visa • Mastercard • Amex",
  },
  {
    id: "debit",
    title: "Debit Card",
    subtitle: "All Major Banks",
  },
  {
    id: "netbanking",
    title: "Net Banking",
    subtitle: "50+ Supported Banks",
  },
  {
    id: "emi",
    title: "EMI",
    subtitle: "No Cost EMI Available",
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("upi");

  return (
    <section>

      <h2
        style={{
          fontFamily: "Orbitron",
          fontSize: "34px",
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        Payment Method
      </h2>

      <div style={{ height: "35px" }} />

      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >

        {methods.map((method) => {

          const active = selected === method.id;

          return (
            <div
              key={method.id}
              onClick={() => setSelected(method.id)}
              style={{
                cursor: "pointer",
                borderRadius: "18px",
                padding: "24px 26px",
                border: active
                  ? "2px solid #7C3AED"
                  : "1px solid rgba(255,255,255,.12)",
                background: active
                  ? "rgba(124,58,237,.12)"
                  : "rgba(255,255,255,.03)",
                transition: ".25s ease",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >

                <div>

                  <div
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Avenir Medium",
                      fontSize: "22px",
                    }}
                  >
                    {method.title}
                  </div>

                  <div style={{ height: "8px" }} />

                  <div
                    style={{
                      color: "#BDBDBD",
                      fontFamily: "Avenir Roman",
                      fontSize: "16px",
                    }}
                  >
                    {method.subtitle}
                  </div>

                </div>

                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    border: active
                      ? "8px solid #7C3AED"
                      : "2px solid #6A6A6A",
                    transition: ".25s",
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}