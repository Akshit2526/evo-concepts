"use client";

import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
        stat-card
        group
        flex
        flex-col
        items-center
        text-center
      "
    >
      <div
        className="
          transition-all
          duration-500
          group-hover:scale-105
        "
      >
        <AnimatedCounter
          end={parseInt(value)}
          suffix={value.replace(/[0-9]/g, "")}
        />
      </div>

      <p
        className="
          mt-5
          whitespace-pre-line
          text-[28px]
          tracking-[2px]
          text-white/75
          transition-all
          duration-300
          group-hover:text-white
        "
        style={{
          fontFamily: "var(--font-avenir)",
          fontWeight: 500,
          lineHeight: "90px",
        }}
      >
        {label}
      </p>
    </div>
  );
}