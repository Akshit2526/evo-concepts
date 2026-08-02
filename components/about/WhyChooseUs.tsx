"use client";

const features = [
  {
    number: "01",
    title: "GENUINE PRODUCTS",
    description:
      "We source premium automotive performance parts from trusted global brands to ensure reliability and long-term performance.",
  },
  {
    number: "02",
    title: "TRUSTED BRANDS",
    description:
      "APR, RacingLine, Forge Motorsport, CTS Turbo, H&R, Eibach and many more industry-leading manufacturers.",
  },
  {
    number: "03",
    title: "ENTHUSIAST SUPPORT",
    description:
      "Need help choosing the right upgrade? Our team understands performance builds and helps you make the right decision.",
  },
  {
    number: "04",
    title: "FAST & SECURE SHIPPING",
    description:
      "Every order is packed with care and shipped securely so your performance parts arrive safely and on time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
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
          WHY EVO CONCEPTS
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "58px",
            textTransform: "uppercase",
            marginBottom: "70px",
          }}
        >
          BUILT FOR
          <br />
          PERFORMANCE.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px",
          }}
        >
          {features.map((item) => (
            <div
              key={item.number}
              style={{
                borderRadius: "28px",
                border: "1px solid rgba(110,30,255,.22)",
                background: "rgba(255,255,255,.035)",
                backdropFilter: "blur(20px)",
                padding: "45px",
                transition: ".35s ease",
              }}
            >
              <div
                style={{
                  color: "#8B42FF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "22px",
                  marginBottom: "28px",
                }}
              >
                {item.number}
              </div>

              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "28px",
                  lineHeight: "38px",
                  marginBottom: "22px",
                  textTransform: "uppercase",
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