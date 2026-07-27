"use client";

export default function ContactCard() {
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
        <div
          style={{
            borderRadius: "34px",
            border: "1px solid rgba(110,30,255,.22)",
            background: "rgba(255,255,255,.035)",
            backdropFilter: "blur(22px)",
            padding: "70px",
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
            CONTACT US
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "56px",
              lineHeight: "68px",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            NEED
            <br />
            ASSISTANCE?
          </h2>

          <p
            style={{
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "36px",
              maxWidth: "720px",
              marginBottom: "50px",
            }}
          >
            If you couldn't find the answer you're looking for, our team is
            always ready to help you with product recommendations, order
            support and technical guidance.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "30px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(110,30,255,.18)",
                borderRadius: "24px",
                padding: "32px",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                EMAIL
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "18px",
                }}
              >
                support@evoconcepts.in
              </p>
            </div>

            <div
              style={{
                border: "1px solid rgba(110,30,255,.18)",
                borderRadius: "24px",
                padding: "32px",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                BUSINESS HOURS
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "18px",
                  lineHeight: "32px",
                }}
              >
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </p>
            </div>

            <div
              style={{
                border: "1px solid rgba(110,30,255,.18)",
                borderRadius: "24px",
                padding: "32px",
                background: "rgba(255,255,255,.02)",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "22px",
                  marginBottom: "18px",
                }}
              >
                RESPONSE TIME
              </h3>

              <p
                style={{
                  color: "#CFCFCF",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "18px",
                  lineHeight: "32px",
                }}
              >
                Within 24 Hours
                <br />
                On Business Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}