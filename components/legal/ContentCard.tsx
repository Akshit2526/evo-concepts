"use client";

interface ContentCardProps {
  title: string;
  paragraphs: string[];
}

export default function ContentCard({
  title,
  paragraphs,
}: ContentCardProps) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 36px",
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
            border: "1px solid rgba(110,30,255,.22)",
            background: "rgba(255,255,255,.035)",
            backdropFilter: "blur(22px)",
            borderRadius: "34px",
            padding: "65px 70px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Purple Glow */}

          <div
            style={{
              position: "absolute",
              right: "-160px",
              top: "-160px",
              width: "360px",
              height: "360px",
              borderRadius: "999px",
              background: "rgba(110,30,255,.12)",
              filter: "blur(170px)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Section Label */}

            <p
              style={{
                color: "#8B42FF",
                fontFamily: "var(--font-orbitron)",
                letterSpacing: "6px",
                textTransform: "uppercase",
                fontSize: "15px",
                marginBottom: "18px",
              }}
            >
              POLICY SECTION
            </p>

            {/* Heading */}

            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-orbitron)",
                fontSize: "54px",
                lineHeight: "64px",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              {title}
            </h2>

            {/* Paragraphs */}

            {paragraphs.map((text, index) => (
              <p
                key={index}
                style={{
                  color: "#D4D4D4",
                  fontFamily: "var(--font-avenir-roman)",
                  fontSize: "21px",
                  lineHeight: "40px",
                  marginBottom:
                    index === paragraphs.length - 1 ? "0" : "26px",
                  maxWidth: "980px",
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}