"use client";
import Container from "../layout/Container";
import Image from "next/image";

const logos = [
  "/brands/apr.png",
  "/brands/borla.png",
  "/brands/brembo.png",
  "/brands/dinan.png",
  "/brands/ecs.png",
  "/brands/forge.png",
  "/brands/holley.png",
  "/brands/ipd.png",
  "/brands/kn.png",
  "/brands/magnaflow.png",
  "/brands/maxton.png",
  "/brands/spec.png",
];

export default function TrustedBrands() {
  return (
    <section className="relative overflow-hidden pt-28 pb-40 bg-transparent">

     <Container>
      {/* Heading */}

      <div className="mb-24 flex items-center justify-center gap-8">

        <div className="h-px w-44 bg-white/15" />

        <h2
          className="text-white tracking-[4px]"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "34px",
            fontWeight: 600,
          }}

        >
          TRUSTED BRANDS
        </h2>

        <div className="h-px w-44 bg-white/15" />

      </div>

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-24 z-20 h-29 w-50 bg-gradient-to-r from-[#120019] to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-24 z-20 h-29 w-50 bg-gradient-to-l from-[#120019] to-transparent" />

      {/* Marquee */}

      <div className="marquee ">
        <div className="marquee-track">
        
          {[...logos, ...logos].map((logo, index) => (

            <div
              key={index}
              className="
                group
                relative
                mx-5
                flex
                h-[120px]
                w-[250px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#141018]
                shadow-[0_0_18px_rgba(139,66,255,.18)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#8B42FF]
                hover:shadow-[0_0_55px_rgba(139,66,255,.45)]
              "
            >

              {/* Reflection */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[-45%]
                  top-0
                  h-full
                  w-[35%]
                  rotate-[20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:left-[130%]
                  group-hover:opacity-100
                "
              />
              

              {/* Bottom Purple Reflection */}

              <div
                className="
                  absolute
                  -bottom-8
                  left-1/2
                  h-10
                  w-40
                  -translate-x-1/2
                  rounded-full
                  bg-[#8B42FF]/20
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:bg-[#8B42FF]/35
                "
              />

              <Image
                src={logo}
                alt="Brand Logo"
                width={170}
                height={80}
                className="relative z-10 object-contain"
              />

            </div>
            

          ))}

        </div>
    
        </div>
      {/* Spacer */}
<div className="h-24"></div>
</Container>   
    </section>
    
  );
}