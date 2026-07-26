"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Securing Payment",
  "Verifying Order",
  "Checking Inventory",
  "Generating Order ID",
  "Preparing Confirmation",
];

export default function ProcessingAnimation() {
  const router = useRouter();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            router.replace("/order-success");
          }, 600);

          return 100;
        }

        return prev + 20;
      });
    }, 700);

    return () => clearInterval(timer);
  }, [router]);

  const activeStep = Math.min(
    Math.floor(progress / 20),
    steps.length - 1
  );

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "720px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <p
        style={{
          fontFamily: "Avenir Medium",
          color: "#8B42FF",
          letterSpacing: ".35em",
          fontSize: "16px",
        }}
      >
        EVO CONCEPTS
      </p>

      <div style={{ height: "22px" }} />

      <h1
        style={{
          fontFamily: "Orbitron",
          color: "#FFFFFF",
          fontSize: "54px",
          lineHeight: "70px",
          textTransform: "uppercase",
        }}
      >
        Processing Order
      </h1>

      <div style={{ height: "18px" }} />

      <p
        style={{
          color: "#BDBDBD",
          fontFamily: "Avenir Roman",
          fontSize: "18px",
        }}
      >
        Please don't close this window.
      </p>

      <div style={{ height: "70px" }} />

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "rgba(255,255,255,.08)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#6E1EFF,#A855F7)",
            transition: "width .7s ease",
          }}
        />
      </div>

      <div style={{ height: "45px" }} />

      {steps.map((step, index) => {
        const done = index < activeStep;
        const current = index === activeStep;

        return (
          <div
            key={step}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "18px",
              opacity: done || current ? 1 : 0.35,
              transition: ".3s",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: done
                  ? "#6E1EFF"
                  : current
                  ? "#8B42FF"
                  : "#3B3B3B",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                fontFamily: "Avenir Black",
                fontSize: "15px",
              }}
            >
              {done ? "✓" : index + 1}
            </div>

            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "19px",
              }}
            >
              {step}
            </span>
          </div>
        );
      })}
    </section>
  );
}