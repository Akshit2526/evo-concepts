"use client";

import Image from "next/image";
import ExploreButton from "../ui/ExploreButton";

export default function Turbo() {
  return (
    <div className="turbo group absolute left-[-20px] top-[140px] z-20 w-[560px]">

      {/* Image Wrapper */}
      <div className="relative overflow-hidden rounded-2xl">

        <Image
          src="/images/turbo.png"
          alt="Turbo"
          width={520}
          height={520}
          priority
          className="mx-auto turbo-image transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
        />

        

      </div>

      {/* Title */}
      <h2
        className="absolute left-[245px] top-[340px] -translate-x-1/2 whitespace-nowrap text-white transition-all duration-300 group-hover:text-[#d8c2ff]"
        style={{
          fontFamily: "var(--font-orbitron)",
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
        TurboCharger Upgrade
      </h2>

      {/* Button */}
      <ExploreButton
  className="absolute left-[242px] top-[390px] -translate-x-1/2"
/>

    </div>
  );
}