    "use client";

const values = [
  {
    value: "PERFORMANCE",
    text: "Every product is chosen to enhance the driving experience.",
  },
  {
    value: "PRECISION",
    text: "Quality engineering and perfect fitment come first.",
  },
  {
    value: "TRUST",
    text: "Only genuine brands and transparent customer service.",
  },
  {
    value: "INNOVATION",
    text: "Always evolving with the latest performance technology.",
  },
];

export default function BrandValues() {
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
            border: "1px solid rgba(110,30,255,.20)",
            background: "rgba(255,255,255,.03)",
            backdropFilter: "blur(20px)",
            padding: "80px 60px",
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
            OUR VALUES
          </p>

          <h2
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "56px",
              lineHeight: "68px",
              textTransform: "uppercase",
              marginBottom: "70px",
            }}
          >
            THE FOUNDATION OF
            <br />
            EVO CONCEPTS
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "28px",
            }}
          >
            {values.map((item) => (
              <div
                key={item.value}
                style={{
                  textAlign: "center",
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
                  {item.value}
                </h3>

                <div
                  style={{
                    width: "70px",
                    height: "3px",
                    background: "#8B42FF",
                    margin: "0 auto 22px",
                    borderRadius: "999px",
                  }}
                />

                <p
                  style={{
                    color: "#CFCFCF",
                    fontFamily: "var(--font-avenir-roman)",
                    fontSize: "18px",
                    lineHeight: "32px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}