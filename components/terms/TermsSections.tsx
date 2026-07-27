"use client";

const sections = [
  {
    title: "ACCEPTANCE OF TERMS",
    content:
      "By accessing or using the EVO Concepts website, you acknowledge that you have read, understood and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or place an order.",
  },
  {
    title: "PRODUCTS & PRICING",
    content:
      "All product descriptions, specifications, availability and pricing are subject to change without prior notice. While we strive for accuracy, EVO Concepts reserves the right to correct pricing or product information errors at any time.",
  },
  {
    title: "ORDERS & PAYMENTS",
    content:
      "Orders are confirmed only after successful payment verification. EVO Concepts reserves the right to cancel or refuse any order due to pricing errors, stock unavailability, suspected fraud or other unforeseen circumstances.",
  },
  {
    title: "PRODUCT COMPATIBILITY",
    content:
      "Customers are responsible for ensuring that the selected product is compatible with their vehicle before placing an order. If you are unsure, please contact EVO Concepts before purchasing. EVO Concepts is not responsible for issues arising from the purchase of incompatible products.",
  },
  {
    title: "INSTALLATION",
    content:
      "Unless specifically stated otherwise, all performance parts should be installed by a qualified professional. EVO Concepts shall not be responsible for any damage, performance issues or safety concerns caused by improper installation.",
  },
  {
    title: "SHIPPING & DELIVERY",
    content:
      "Delivery timelines are estimates only and may vary depending on courier services, product availability and destination. Customers are responsible for providing accurate shipping information during checkout.",
  },
  {
    title: "ORDER CANCELLATION",
    content:
      "Orders may only be cancelled before dispatch. Once an order has been packed or shipped, cancellation requests may not be accepted.",
  },
  {
    title: "RETURNS & WARRANTY",
    content:
      "Return eligibility is governed by our Return & Refund Policy. Manufacturer warranty, where applicable, is subject to the respective manufacturer's inspection, terms and approval process.",
  },
  {
    title: "LIMITATION OF LIABILITY",
    content:
      "EVO Concepts shall not be liable for any indirect, incidental, consequential or special damages arising from the use, installation or inability to use any product purchased through our website.",
  },
];

export default function TermsSections() {
  return (
    <>
      {/* ================= IMPORTANT NOTICE ================= */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 40px 80px",
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
              borderRadius: "32px",
              border: "2px solid rgba(110,30,255,.45)",
              background:
                "linear-gradient(135deg, rgba(110,30,255,.18), rgba(255,255,255,.04))",
              backdropFilter: "blur(24px)",
              padding: "60px",
              boxShadow: "0 0 45px rgba(110,30,255,.22)",
            }}
          >
            <p
              style={{
                color: "#8B42FF",
                fontFamily: "var(--font-orbitron)",
                letterSpacing: "6px",
                textTransform: "uppercase",
                fontSize: "16px",
                marginBottom: "18px",
              }}
            >
              IMPORTANT POLICY
            </p>

            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-orbitron)",
                fontSize: "52px",
                lineHeight: "62px",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Mandatory
              <br />
              Unboxing Video
            </h2>

            <p
              style={{
                color: "#D8D8D8",
                fontFamily: "var(--font-avenir-roman)",
                fontSize: "20px",
                lineHeight: "38px",
                marginBottom: "35px",
              }}
            >
              Every customer must record a complete, continuous and unedited
              unboxing video from the moment the sealed package is opened until
              the product has been fully inspected.
            </p>

            <div
              style={{
                borderLeft: "4px solid #8B42FF",
                paddingLeft: "22px",
                marginBottom: "35px",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-avenir-medium)",
                  fontSize: "20px",
                  lineHeight: "36px",
                }}
              >
                A complete unboxing video is mandatory for:
              </p>

              <ul
                style={{
                  marginTop: "18px",
                  color: "#CFCFCF",
                  lineHeight: "34px",
                  fontSize: "18px",
                  paddingLeft: "24px",
                }}
              >
                <li>Damaged products</li>
                <li>Broken products</li>
                <li>Missing items</li>
                <li>Wrong products received</li>
              </ul>
            </div>

            <div
              style={{
                borderRadius: "20px",
                background: "rgba(255,255,255,.05)",
                padding: "28px",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                WITHOUT A VALID UNBOXING VIDEO
              </p>

              <ul
                style={{
                  color: "#CFCFCF",
                  lineHeight: "34px",
                  fontSize: "18px",
                  paddingLeft: "24px",
                }}
              >
                <li>No Return Request will be accepted.</li>
                <li>No Replacement will be issued.</li>
                <li>No Refund will be processed.</li>
                <li>The product will remain with the customer.</li>
              </ul>

              <p
                style={{
                  marginTop: "22px",
                  color: "#AFAFAF",
                  lineHeight: "34px",
                  fontSize: "17px",
                }}
              >
                By placing an order with EVO Concepts, you acknowledge and
                agree to this Mandatory Unboxing Video Requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TERMS ================= */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 40px 120px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gap: "28px",
          }}
        >
          {sections.map((section) => (
            <div
              key={section.title}
              style={{
                borderRadius: "28px",
                border: "1px solid rgba(110,30,255,.22)",
                background: "rgba(255,255,255,.035)",
                backdropFilter: "blur(22px)",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {section.title}
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "19px",
                  lineHeight: "36px",
                }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}