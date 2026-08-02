"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply to partner with EVO Concepts?",
    answer:
      "Automotive retailers, performance workshops, tuning specialists, distributors and established businesses looking to work with EVO Concepts are welcome to apply.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applications are reviewed within 2–5 business days. Additional verification may require slightly more time.",
  },
  {
    question: "Is there a minimum order requirement?",
    answer:
      "Order requirements depend on the type of partnership and the products involved. Our team will discuss these details after reviewing your application.",
  },
  {
    question: "Will I receive dealer pricing?",
    answer:
      "Approved authorised dealers receive access to exclusive dealer pricing and business support based on their partnership agreement.",
  },
  {
    question: "How will I know if my application is approved?",
    answer:
      "Our team will contact you using the email address or phone number provided in your application with the next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
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
            Frequently Asked Questions
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "58px",
              lineHeight: "68px",
              textTransform: "uppercase",
              margin: "20px 0",
            }}
          >
            GOT
            <br />
            QUESTIONS?
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "36px",
            }}
          >
            Here are answers to some of the most common questions regarding
            dealership applications and business partnerships.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(110,30,255,.20)",
                  background: "rgba(255,255,255,.04)",
                  backdropFilter: "blur(20px)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "28px 34px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      fontSize: "18px",
                      textAlign: "left",
                    }}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={24}
                    style={{
                      transform: isOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: ".3s ease",
                      color: "#8B42FF",
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 34px 30px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#CFCFCF",
                        fontFamily: "var(--font-avenir-roman)",
                        fontSize: "18px",
                        lineHeight: "34px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}