"use client";

interface ExploreButtonProps {
  className?: string;
}

export default function ExploreButton({
  className = "",
}: ExploreButtonProps) {
  return (
    <button
      className={`
        ${className}
        group
        flex
        h-[45px]
        w-[220px]
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border-2
        border-white
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:border-[#8B42FF]
        hover:bg-[#8B42FF]
        hover:shadow-[0_0_30px_rgba(139,66,255,.55)]
      `}
      style={{
        fontFamily: "var(--font-avenir)",
        fontSize: "22px",
        fontWeight: 600,
      }}
    >
      {/* Shine */}
      <span
        className="
          pointer-events-none
          absolute
          left-[-40%]
          top-0
          h-full
          w-[35%]
          rotate-[20deg]
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[130%]
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">
        Explore
      </span>
    </button>
  );
}