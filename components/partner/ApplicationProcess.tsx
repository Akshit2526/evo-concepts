"use client";

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description:
      "Complete the partnership application form with accurate business information and submit it for review.",
  },
  {
    number: "02",
    title: "Application Review",
    description:
      "Our team carefully reviews your business profile, experience and partnership requirements.",
  },
  {
    number: "03",
    title: "Verification",
    description:
      "If required, we may contact you for additional details or documentation before proceeding.",
  },
  {
    number: "04",
    title: "Approval & Onboarding",
    description:
      "Once approved, you'll receive onboarding guidance and can begin your partnership with EVO Concepts.",
  },
];

export default function ApplicationProcess() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 140px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              color: "#8B42FF",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "15px",
            }}
          >
            Application Process
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "58px",
              lineHeight: "68px",
              margin: "20px 0",
              textTransform: "uppercase",
            }}
          >
            HOW IT
            <br />
            WORKS
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "36px",
            }}
          >
            Our approval process is simple, transparent and designed to build
            long-term business relationships.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "26px",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                position: "relative",
                padding: "42px",
                borderRadius: "28px",
                border: "1px solid rgba(110,30,255,.20)",
                background: "rgba(255,255,255,.04)",
                backdropFilter: "blur(24px)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: "180px",
                  height: "180px",
                  borderRadius: "999px",
                  background: "rgba(110,30,255,.14)",
                  filter: "blur(100px)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "18px",
                    background: "rgba(110,30,255,.12)",
                    border: "1px solid rgba(110,30,255,.30)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#8B42FF",
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "22px",
                    marginBottom: "26px",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "24px",
                    lineHeight: "34px",
                    marginBottom: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#CFCFCF",
                    fontFamily: "var(--font-avenir-roman)",
                    fontSize: "17px",
                    lineHeight: "32px",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}