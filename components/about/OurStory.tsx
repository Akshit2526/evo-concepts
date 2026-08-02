"use client";

export default function OurStory() {
  return (
    <section
      id="our-story"
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
            border: "1px solid rgba(110,30,255,.25)",
            background: "rgba(255,255,255,.035)",
            backdropFilter: "blur(22px)",
            borderRadius: "34px",
            padding: "70px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-180px",
              right: "-120px",
              width: "420px",
              height: "420px",
              borderRadius: "999px",
              background: "rgba(110,30,255,.14)",
              filter: "blur(160px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "90px",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div>
              <p
                style={{
                  color: "#8B42FF",
                  fontFamily: "var(--font-orbitron)",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              >
                OUR STORY
              </p>

              <h2
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "58px",
                  lineHeight: "68px",
                  textTransform: "uppercase",
                }}
              >
                Built By
                <br />
                Enthusiasts.
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p
                style={{
                  color: "#D6D6D6",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "21px",
                  lineHeight: "40px",
                  marginBottom: "28px",
                }}
              >
                EVO Concepts was founded with one goal — to make premium
                automotive performance parts accessible through a clean,
                trustworthy and enthusiast-focused buying experience.
              </p>

              <p
                style={{
                  color: "#BEBEBE",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "20px",
                  lineHeight: "38px",
                }}
              >
                Whether you're upgrading a daily driver or building your dream
                machine, we carefully select genuine products from leading
                global brands so every modification delivers confidence,
                quality and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}