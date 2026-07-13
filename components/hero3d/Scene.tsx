"use client";

import FloatingGlow from "./FloatingGlow";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <FloatingGlow />
    </>
  );
}