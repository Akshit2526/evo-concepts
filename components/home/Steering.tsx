"use client";

import Image from "next/image";
import ExploreButton from "../ui/ExploreButton";

export default function Steering() {
  return (
<div className="steering group absolute right-[-130px] top-[345px] z-20 w-[560px]">
    
          {/* Steering Image */}

     <div className="relative overflow-hidden rounded-2xl">

  <Image
    src="/images/sterring.png"
    alt="Carbon Fiber Steering"
    width={500}
    height={500}
    priority
    className="mx-auto transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
  />

  <div
    className="
      absolute
      left-[-45%]
      top-0
      h-full
      w-[35%]
      rotate-[20deg]
      bg-gradient-to-r
      from-transparent
      via-white/35
      to-transparent
      opacity-0
      transition-all
      duration-700
      group-hover:left-[120%]
      group-hover:opacity-100
    "
  />

</div>
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

     <ExploreButton
  className="absolute left-[235px] top-[385px] -translate-x-1/2"
/>

    </div>
  );
}