"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
}: AnimatedCounterProps) {
  const numberRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const counter = { value: 0 };

    const animation = gsap.to(counter, {
      value: end,
      duration: 1,
      ease: "power2.out",

      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 85%",
        once: true,
      },

      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent =
            Math.floor(counter.value) + suffix;
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [end, suffix]);

  return (
    <h3
      ref={numberRef}
      className="
        text-[82px]
        leading-none
        text-white
        drop-shadow-[0_0_18px_rgba(139,66,255,.45)]
      "
      style={{
        fontFamily: "var(--font-orbitron)",
        fontWeight: 700,
      }}
    >
      0
    </h3>
  );
}