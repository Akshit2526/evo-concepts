"use client";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Delivery timelines depend on product availability and your location. Most in-stock products are dispatched quickly, while special-order items may require additional processing time.",
  },
  {
    question: "Do you sell genuine performance parts?",
    answer:
      "Yes. EVO Concepts focuses on genuine products sourced from trusted global performance brands to ensure quality, fitment and reliability.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Goods once sold will not be taken back. In case of product get's broken at a time of delivery then please record an proper unboxing video, without any video or proof goods will not be replaced or taken back.",
  },
  {
    question: "Can you help me choose the right part?",
    answer:
      "Absolutely. If you're unsure about compatibility or the best upgrade for your vehicle, contact our support team and we'll guide you.",
  },
];

export default function FAQ() {
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
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2
          style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontFamily: "var(--font-orbitron)",
            fontSize: "56px",
            textTransform: "uppercase",
            marginBottom: "70px",
          }}
        >
          QUICK
          <br />
          ANSWERS
        </h2>

        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {faqs.map((faq) => (
            <div
              key={faq.question}
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(110,30,255,.22)",
                background: "rgba(255,255,255,.035)",
                backdropFilter: "blur(20px)",
                padding: "34px",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "24px",
                  marginBottom: "16px",
                }}
              >
                {faq.question}
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "18px",
                  lineHeight: "34px",
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}