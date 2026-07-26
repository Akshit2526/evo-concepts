"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  return (
    <section>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          style={{
            width: "22px",
            height: "22px",
            accentColor: "#6E1EFF",
          }}
        />

        <span
          style={{
            color: "#D9D9D9",
            fontFamily: "Avenir Roman",
            fontSize: "17px",
          }}
        >
          I agree to the Terms & Conditions and Privacy Policy.
        </span>
      </label>

      <div style={{ height: "40px" }} />

      <button
        disabled={!accepted}
        onClick={() => router.push("/processing")}
        style={{
          width: "100%",
          height: "68px",
          border: "none",
          borderRadius: "18px",
          background: accepted
            ? "linear-gradient(90deg,#5D16FF,#8C3DFF)"
            : "#3D3D3D",
          color: "#FFFFFF",
          fontFamily: "Avenir Medium",
          fontSize: "20px",
          letterSpacing: ".08em",
          cursor: accepted ? "pointer" : "not-allowed",
          transition: ".3s",
          boxShadow: accepted
            ? "0 0 30px rgba(110,30,255,.35)"
            : "none",
        }}
      >
        PLACE ORDER →
      </button>

      <div style={{ height: "18px" }} />

      <p
        style={{
          textAlign: "center",
          color: "#8F8F8F",
          fontFamily: "Avenir Roman",
          fontSize: "14px",
        }}
      >
        Your payment is encrypted and securely processed.
      </p>

    </section>
  );
}