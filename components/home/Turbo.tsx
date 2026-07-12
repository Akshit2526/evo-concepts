"use client";

import Image from "next/image";

export default function Turbo() {
  return (

      <div className="turbo absolute left-[-20px] top-[140px] z-20 w-[560px]">
      {/* Turbo Image */}
      <Image
        src="/images/turbo.png"
        alt="Turbo"
        width={520}
        height={520}
        priority
        className="mx-auto turbo-image"
      />

      {/* Title */}
      <h2
        className="absolute left-[245px] top-[340px] -translate-x-1/2 whitespace-nowrap text-white"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
         TurboCharger Upgrade
      </h2>

      {/* Button */}
      <button
        className="absolute left-[242px] top-[390px] -translate-x-1/2 flex h-[45px] w-[220px] items-center justify-center rounded-xl border-2 border-white text-white transition-all duration-300 hover:scale-105 hover:bg-[#8B42FF]"
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