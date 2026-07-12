"use client";

import PerformanceText from "./PerformanceText";
import Turbo from "./Turbo";
import Exhaust from "./Exhaust";
import Steering from "./Steering";

export default function HeroBackground() {
  return (
    <>
      {/* Left Purple Glow */}
      <div className="absolute -left-72 -top-48 h-[950px] w-[950px] rounded-full bg-[#8b42ff]/35 blur-[200px]" />

      {/* Right Purple Glow */}
      <div className="absolute -right-72 bottom-[-200px] h-[900px] w-[900px] rounded-full bg-[#8b42ff]/20 blur-[220px]" />

      {/* Main Hero Container */}
      <div className="relative mx-auto h-screen w-full max-w-[1920px] overflow-hidden">
        <PerformanceText />
        <Turbo />
        <Exhaust />
        <Steering />
      </div>
    </>
  );
}