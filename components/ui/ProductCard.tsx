"use client";

import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  className?: string;
}

export default function ProductCard({
  image,
  title,
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`
        group
        flex
        flex-col
        items-center
        ${className}
      `}
    >
      {/* Card */}

      <div
        className="
          relative
          flex
          h-[165px]
          w-[235px]
          items-center
          justify-center
          overflow-hidden
          rounded-[34px]
          border-[4px]
          border-[#8B42FF]
          bg-white
          shadow-[0_0_30px_rgba(139,66,255,.35)]
          transition-all
          duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_0_60px_rgba(139,66,255,.55)]
        "
      >
        {/* Chrome Shine */}

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
            via-white/45
            to-transparent
            opacity-0
            transition-all
            duration-700
            group-hover:left-[130%]
            group-hover:opacity-100
          "
        />

        <Image
          src={image}
          alt={title}
          width={180}
          height={180}
          className="
            relative
            z-10
            object-contain
            transition-all
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-4
          text-center
          text-white
          transition-all
          duration-300
          group-hover:text-[#d9c4ff]
        "
        style={{
          fontFamily: "var(--font-avenir)",
          fontSize: "17px",
          fontWeight: 500,
        }}
      >
        {title}
      </h3>
    </div>
  );
}