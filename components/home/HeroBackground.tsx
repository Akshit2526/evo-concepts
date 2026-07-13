"use client";
import Container from "../layout/Container";
import PerformanceText from "./PerformanceText";
import Turbo from "./Turbo";
import Exhaust from "./Exhaust";
import Steering from "./Steering";

export default function HeroBackground() {
  return (
    <>
    


    {/* Left Ambient Glow */}
<div className="ambient-left absolute -left-72 -top-48 h-[950px] w-[950px] rounded-full bg-[#8b42ff]/22 blur-[220px]" />

{/* Right Ambient Glow */}
<div className="ambient-right absolute -right-72 bottom-[-220px] h-[900px] w-[900px] rounded-full bg-[#8b42ff]/15 blur-[230px]" />

{/* Center Spotlight */}
<div
  className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
  style={{
    background:
      "radial-gradient(circle, rgba(139,66,255,.05) 0%, rgba(139,66,255,.03) 45%, transparent 75%)",
    filter: "blur(100px)",
  }}
/>
    
      {/* Turbo Halo */}
      <div
        className="absolute left-[135px] top-[165px] h-[330px] w-[330px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,66,255,.16) 0%, transparent 72%)",
          filter: "blur(55px)",
        }}
      />

      {/* Exhaust Halo */}
      <div
        className="absolute left-[620px] top-[335px] h-[280px] w-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.08) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Steering Halo */}
      <div
        className="absolute right-[65px] top-[360px] h-[320px] w-[320px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,66,255,.13) 0%, transparent 72%)",
          filter: "blur(55px)",
        }}
      />

      {/* Hero Container */}
<Container className="relative h-screen overflow-hidden">
        <PerformanceText />
        <Turbo />
        <Exhaust />
        <Steering />

      </Container>
      
    </>
  );
}