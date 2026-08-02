"use client";

interface PartnershipOptionsProps {
  applicationType: "dealer" | "business";
  setApplicationType: React.Dispatch<
    React.SetStateAction<"dealer" | "business">
  >;
}

export default function PartnershipOptions({
  applicationType,
  setApplicationType,
}: PartnershipOptionsProps) {
  return (
    <section
      id="partnership-options"
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
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontSize: "15px",
            }}
          >
            Choose Your Partnership
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "60px",
              lineHeight: "70px",
              margin: "18px 0 30px",
              textTransform: "uppercase",
            }}
          >
            LET'S BUILD
            <br />
            TOGETHER
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "36px",
            }}
          >
            Select the partnership that best matches your business goals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "32px",
          }}
        >
          {/* Dealer */}

          <div
            onClick={() => {
              setApplicationType("dealer");

              document
                .getElementById("application-form")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            style={{
              cursor: "pointer",
              padding: "50px",
              borderRadius: "34px",
              background:
                applicationType === "dealer"
                  ? "rgba(110,30,255,.14)"
                  : "rgba(255,255,255,.04)",
              border:
                applicationType === "dealer"
                  ? "2px solid #8B42FF"
                  : "1px solid rgba(110,30,255,.20)",
              backdropFilter: "blur(24px)",
              transition: ".35s ease",
            }}
          >
            <p
              style={{
                color: "#8B42FF",
                fontFamily: "var(--font-orbitron)",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Partnership 01
            </p>

            <h3
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-orbitron)",
                fontSize: "38px",
                lineHeight: "48px",
                margin: "20px 0",
                textTransform: "uppercase",
              }}
            >
              Authorised
              <br />
              Dealer
            </h3>

            <p
              style={{
                color: "#CFCFCF",
                fontFamily: "var(--font-avenir-roman)",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Join the EVO Concepts dealer network and unlock exclusive pricing,
              technical support and premium brands.
            </p>
          </div>

          {/* Business */}

          <div
            onClick={() => {
              setApplicationType("business");

              document
                .getElementById("application-form")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            style={{
              cursor: "pointer",
              padding: "50px",
              borderRadius: "34px",
              background:
                applicationType === "business"
                  ? "rgba(110,30,255,.14)"
                  : "rgba(255,255,255,.04)",
              border:
                applicationType === "business"
                  ? "2px solid #8B42FF"
                  : "1px solid rgba(110,30,255,.20)",
              backdropFilter: "blur(24px)",
              transition: ".35s ease",
            }}
          >
            <p
              style={{
                color: "#8B42FF",
                fontFamily: "var(--font-orbitron)",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Partnership 02
            </p>

            <h3
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-orbitron)",
                fontSize: "38px",
                lineHeight: "48px",
                margin: "20px 0",
                textTransform: "uppercase",
              }}
            >
              Business
              <br />
              Partnership
            </h3>

            <p
              style={{
                color: "#CFCFCF",
                fontFamily: "var(--font-avenir-roman)",
                fontSize: "18px",
                lineHeight: "34px",
              }}
            >
              Looking for wholesale supply, brand collaborations or long-term
              business opportunities? Let's work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}