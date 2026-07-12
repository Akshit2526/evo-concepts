"use client";

import Image from "next/image";

export default function Steering() {
  return (
<div className="steering absolute right-[-130px] top-[345px] z-20 w-[560px]">
      {/* Steering Image */}

      <Image
        src="/images/sterring.png"
        alt="Carbon Fiber Steering"
        width={500}
        height={500}
        priority
        className="mx-auto steering-image"
      />

      {/* Title */}

      <h2
        className="absolute left-[235px] top-[338px] -translate-x-1/2 whitespace-nowrap text-white"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        Carbon Fiber Steering
      </h2>

      {/* Button */}

      <button
        className="absolute left-[235px] top-[385px] -translate-x-1/2 flex h-[45px] w-[220px] items-center justify-center rounded-xl border-2 border-white text-white transition-all duration-300 hover:scale-105 hover:bg-[#8B42FF]"
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