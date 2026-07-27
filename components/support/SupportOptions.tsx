"use client";

const supportItems = [
  {
    icon: "📦",
    title: "ORDER SUPPORT",
    description:
      "Questions about your order, payment confirmation or current order status? We're here to help.",
  },
  {
    icon: "🚚",
    title: "SHIPPING & DELIVERY",
    description:
      "Get shipping updates, delivery estimates and courier assistance for your orders.",
  },
  {
    icon: "🛡",
    title: "WARRANTY & RETURNS",
    description:
      "Need warranty information or want to request a return? We'll guide you through the process.",
  },
  {
    icon: "💬",
    title: "TECHNICAL ASSISTANCE",
    description:
      "Need help selecting the right performance upgrade or confirming compatibility? Contact our team.",
  },
];

export default function SupportOptions() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 40px 120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#8B42FF",
            fontFamily: "var(--font-orbitron)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontSize: "16px",
            marginBottom: "18px",
          }}
        >
          HOW CAN WE HELP?
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "58px",
            lineHeight: "68px",
            textTransform: "uppercase",
            marginBottom: "70px",
          }}
        >
          EVERYTHING YOU
          <br />
          NEED.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px",
          }}
        >
          {supportItems.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "30px",
                border: "1px solid rgba(110,30,255,.22)",
                background: "rgba(255,255,255,.035)",
                backdropFilter: "blur(22px)",
                padding: "45px",
                transition: ".35s ease",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "24px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "28px",
                  lineHeight: "38px",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "19px",
                  lineHeight: "34px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}