"use client";

import Container from "../layout/Container";
import StatCard from "./StatCard";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".why-heading", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".why-text",
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".stat-card",
          {
            opacity: 0,
            y: 70,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.25"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative pb-36"
      style={{
        marginTop: "180px",
      }}
    >
      <Container>
        <h2
          className="why-heading text-center text-white"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "65px",
            fontWeight: 700,
          }}
        >
          WHY TO CHOOSE EVO CONCEPTS ?
        </h2>

        <p
          className="why-text text-white/80"
          style={{
            maxWidth: "800px",
            margin: "45px auto 0",
            textAlign: "center",
            lineHeight: "42px",
            fontFamily: "var(--font-avenir)",
            fontSize: "20px",
          }}
        >
          At EVO Concepts, we specialize in VAG vehicles while offering
          premium aftermarket, OEM, and performance parts for all major
          automotive brands. From custom splitters, lighting upgrades,
          wheels, suspension, exhaust systems, interior enhancements,
          genuine OEM replacements, and universal accessories, we provide
          everything enthusiasts need to build and maintain their perfect
          car. Whether you're enhancing performance, refining aesthetics,
          or preserving factory quality, our carefully selected products,
          trusted global brands, and expert support ensure the highest
          standards of reliability, fitment, and driving experience.
        </p>

        <div
          className="flex justify-center"
          style={{
            marginTop: "130px",
            gap: "180px",
          }}
        >
          <StatCard
            value="350+"
            label={"SATISFIED CUSTOMERS"}
          />

          <StatCard
            value="20+"
            label={"PREMIUM BRANDS"}
          />

          <StatCard
            value="100%"
            label={"GENUINE PRODUCTS"}
          />
        </div>
      </Container>
    </section>
  );
}