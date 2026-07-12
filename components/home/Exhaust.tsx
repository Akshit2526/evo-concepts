"use client";

import Image from "next/image";

export default function Exhaust() {
  return (
<div className="exhaust absolute left-[460px] top-[300px] z-20 w-[560px]">
      {/* Exhaust Image */}
      <Image
        src="/images/exhuast.png"
        alt="Full System Exhaust"
        width={520}
        height={360}
        priority
       className="mx-auto exhaust-image"      />

      {/* Title */}
      <h2
        className="absolute left-[250px] top-[325px] -translate-x-1/2 whitespace-nowrap text-white"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        Full System Exhaust
      </h2>

      {/* Button */}
      <button
        className="absolute left-[250px] top-[375px] -translate-x-1/2 flex h-[45px] w-[220px] items-center justify-center rounded-xl border-2 border-white text-white transition-all duration-300 hover:scale-105 hover:bg-[#8B42FF]"
        style={{
          fontFamily: "var(--font-avenir)",
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        Explore
      </button>

    </div>
  );
}