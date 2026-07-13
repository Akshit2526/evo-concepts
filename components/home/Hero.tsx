"use client";

import HeroCanvas from "../hero3d/HeroCanvas";
import { useRef } from "react";
import HeroBackground from "./HeroBackground";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.from(".performance-text", {
        opacity: 0,
        filter: "blur(24px)",
        scale: 0.98,
        duration: 0.9,
      })

        .from(
          ".turbo",
          {
            opacity: 0,
            filter: "blur(18px)",
            scale: 0.98,
            duration: 0.8,
          },
          "-=0.55"
        )

        .from(
          ".exhaust",
          {
            opacity: 0,
            filter: "blur(18px)",
            scale: 0.98,
            duration: 0.8,
          },
          "-=0.55"
        )

        .from(
          ".steering",
          {
            opacity: 0,
            filter: "blur(18px)",
            scale: 0.98,
            duration: 0.8,
          },
          "-=0.55"
        );
    },
    { scope: heroRef }
  );

  return (
  <section
    ref={heroRef}
    className="relative h-screen overflow-visible"
  >
    {/* <HeroCanvas /> */}

    <HeroBackground />
  </section>
);
}