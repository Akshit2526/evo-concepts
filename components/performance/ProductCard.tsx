"use client";

import type { Product } from "./data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col items-center">

      {/* Card */}
      <div
        className="
          relative
          flex
          h-[175px]
          w-[250px]
          items-center
          justify-center
          overflow-hidden
          rounded-[35px]
          border
          border-[#9D4DFF]
          bg-white
          transition-all
          duration-300
          ease-out
          shadow-[0_0_18px_rgba(157,77,255,.30)]
          group-hover:-translate-y-2
          group-hover:scale-[1.02]
          group-hover:shadow-[0_0_42px_rgba(157,77,255,.55)]
        "
      >
        {/* Ambient Glow */}
        <div
          className="
            absolute
            -bottom-16
            h-28
            w-28
            rounded-full
            bg-[#8B42FF]/20
            blur-3xl
            transition-all
            duration-300
            group-hover:bg-[#8B42FF]/35
          "
        />

        {/* Placeholder */}
        <div className="flex flex-col items-center gap-3">

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-[#D7D7D7]
              bg-[#F8F8F8]
            "
          >
            <span className="text-[34px]">📦</span>
          </div>

          <p
            className="tracking-[3px] text-[#9A9A9A]"
            style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "11px",
            }}
          >
            IMAGE COMING SOON
          </p>

        </div>
      </div>

      {/* Product Name */}
      <h3
        className="
          mt-5
          max-w-[240px]
          text-center
          text-white
          transition-colors
          duration-300
          group-hover:text-[#D9B6FF]
        "
        style={{
          fontFamily: "var(--font-avenir)",
          fontSize: "18px",
          fontWeight: 500,
          lineHeight: "28px",
        }}
      >
        {product.name}
      </h3>

    </div>
  );
}