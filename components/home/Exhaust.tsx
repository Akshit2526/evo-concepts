"use client";

import Image from "next/image";
import ExploreButton from "../ui/ExploreButton";

export default function Exhaust() {
  return (
<div className="exhaust group absolute left-[460px] top-[300px] z-20 w-[560px]">
      {/* Exhaust Image */}
      <div className="relative overflow-hidden rounded-2xl">

  <Image
    src="/images/exhuast.png"
    alt="Full System Exhaust"
    width={520}
    height={360}
    priority
    className="mx-auto transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
  />

  
</div>
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
      <ExploreButton
  className="absolute left-[250px] top-[375px] -translate-x-1/2"
/>
    </div>
  );
}