"use client";

const steps = [
  "Order Confirmed",
  "Packed",
  "Shipped",
  "Delivered",
];

export default function SuccessTimeline() {
  return (
    <section>

      <h2
        style={{
          color: "#FFFFFF",
          fontFamily: "Orbitron",
          fontSize: "32px",
        }}
      >
        Order Progress
      </h2>

      <div style={{ height: "35px" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step}
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                margin: "0 auto",
                borderRadius: "50%",
                background:
                  index === 0
                    ? "#6E1EFF"
                    : "rgba(255,255,255,.08)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFFFFF",
              }}
            >
              {index === 0 ? "✓" : index + 1}
            </div>

            <div style={{ height: "15px" }} />

            <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
              }}
            >
              {step}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}