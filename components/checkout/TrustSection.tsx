"use client";

const items = [
  {
    title: "100% Genuine Products",
    desc: "Every product is sourced from trusted performance brands.",
    icon: "🛡️",
  },
  {
    title: "Fast Nationwide Shipping",
    desc: "Quick and secure delivery across India.",
    icon: "🚚",
  },
  {
    title: "Secure Payments",
    desc: "Your payment is encrypted with industry standards.",
    icon: "🔒",
  },
  {
    title: "Premium Support",
    desc: "Need help? Our team is always ready to assist.",
    icon: "💬",
  },
];

export default function TrustSection() {
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
        Why Shop With Us
      </h2>

      <div style={{ height: "35px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "22px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(110,30,255,.25)",
              background: "rgba(255,255,255,.03)",
              padding: "26px",
            }}
          >
            <div
              style={{
                fontSize: "34px",
              }}
            >
              {item.icon}
            </div>

            <div style={{ height: "16px" }} />

            <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "20px",
              }}
            >
              {item.title}
            </div>

            <div style={{ height: "10px" }} />

            <div
              style={{
                color: "#C9C9C9",
                fontFamily: "Avenir Roman",
                fontSize: "15px",
                lineHeight: "26px",
              }}
            >
              {item.desc}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}