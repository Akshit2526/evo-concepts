"use client";

export default function PerformanceText() {
  return (
    <div className="performance-text absolute right-[140px] top-[130px] z-40 text-right">

      <h1
        className="leading-none text-[#8B42FF]"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "92px",
          fontWeight: 600,
          fontStyle: "italic",
          
        }}
      >
        PERFORMANCE
      </h1>

      <h1
        className="-mt-3 leading-none text-[#9D9D9D]"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "86px",
          fontWeight: 600,
          fontStyle: "italic",
        }}
      >
        EVOLUTION
      </h1>

      <p
        className="mt-2 italic text-white"
        style={{
          fontFamily: "var(--font-avenir)",
          fontSize: "42px",
          fontWeight: 600,
        }}
      >
        FUEL YOUR PASSION
      </p>

    </div>
  );
}