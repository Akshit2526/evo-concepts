"use client";

interface BenefitsProps {
  applicationType: "dealer" | "business";
}

const dealerBenefits = [
  {
    number: "01",
    title: "Premium Brand Portfolio",
    description:
      "Offer your customers carefully selected performance brands trusted by automotive enthusiasts.",
  },
  {
    number: "02",
    title: "Dealer Pricing",
    description:
      "Receive competitive dealer pricing designed to help maximize your business margins.",
  },
  {
    number: "03",
    title: "Technical Support",
    description:
      "Get assistance from our team for product selection, compatibility and technical guidance.",
  },
  {
    number: "04",
    title: "Marketing Assets",
    description:
      "Access product visuals and promotional material to support your business growth.",
  },
  {
    number: "05",
    title: "Priority Order Processing",
    description:
      "Dealer applications receive priority handling for order fulfilment and assistance.",
  },
  {
    number: "06",
    title: "Dedicated Account Manager",
    description:
      "A dedicated point of contact to assist you with products, orders and dealership support.",
  },
];

const businessBenefits = [
  {
    number: "01",
    title: "Wholesale Supply",
    description:
      "Reliable supply solutions for distributors, workshops and automotive businesses.",
  },
  {
    number: "02",
    title: "Brand Collaboration",
    description:
      "Work together with EVO Concepts on launches, campaigns and long-term partnerships.",
  },
  {
    number: "03",
    title: "Bulk Purchasing",
    description:
      "Competitive pricing and flexible purchasing options for larger business requirements.",
  },
  {
    number: "04",
    title: "Marketing Opportunities",
    description:
      "Collaborate on promotions and expand your reach with the EVO Concepts network.",
  },
  {
    number: "05",
    title: "Priority Assistance",
    description:
      "Dedicated support for enquiries, quotations and business communication.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "Build a lasting relationship focused on mutual growth and business success.",
  },
];

export default function Benefits({
  applicationType,
}: BenefitsProps) {
  const benefits =
    applicationType === "dealer"
      ? dealerBenefits
      : businessBenefits;

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 40px 140px",
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
              marginBottom: "18px",
            }}
          >
            Partnership Benefits
          </p>

          <h2
            style={{
              color: "#fff",
              fontFamily: "var(--font-orbitron)",
              fontSize: "62px",
              lineHeight: "70px",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {applicationType === "dealer"
              ? "WHY BECOME\nAN AUTHORISED DEALER"
              : "WHY PARTNER\nWITH EVO CONCEPTS"}
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "36px auto 0",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "38px",
            }}
          >
            {applicationType === "dealer"
              ? "Join our growing dealer network and unlock exclusive benefits designed to help your automotive business grow."
              : "Collaborate with EVO Concepts through wholesale, business partnerships and long-term strategic opportunities."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "34px",
          }}
        >        
           {benefits.map((item, index) => (
            <div
              key={item.number}
              style={{
                position: "relative",
                padding: "42px",
                borderRadius: "30px",
                border: "1px solid rgba(110,30,255,.22)",
                background: "rgba(255,255,255,.04)",
                backdropFilter: "blur(24px)",
                overflow: "hidden",
                minHeight: "285px",
                transform:
                  index % 2 === 1
                    ? "translateY(60px)"
                    : "translateY(0px)",
                transition: ".35s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-120px",
                  right: "-120px",
                  width: "260px",
                  height: "260px",
                  borderRadius: "999px",
                  background: "rgba(110,30,255,.14)",
                  filter: "blur(120px)",
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
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: "rgba(110,30,255,.12)",
                    border: "1px solid rgba(110,30,255,.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8B42FF",
                    fontSize: "22px",
                    fontWeight: 700,
                    fontFamily: "var(--font-orbitron)",
                    marginBottom: "28px",
                  }}
                >
                  {item.number}
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: "#FFFFFF",
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "28px",
                    lineHeight: "38px",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#CFCFCF",
                    fontFamily: "var(--font-avenir-roman)",
                    fontSize: "18px",
                    lineHeight: "34px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}