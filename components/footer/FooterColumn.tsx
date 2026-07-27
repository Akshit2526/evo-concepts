"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FooterColumnProps {
  title: string;
  icon: React.ReactNode;
  links: [string, string][];
}

export default function FooterColumn({
  title,
  icon,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 30,
        }}
      >
        <div style={{ color: "#8B42FF" }}>
          {icon}
        </div>

        <h3
          style={{
            color: "#FFFFFF",
            fontSize: "28px",
            letterSpacing: "1px",
            fontFamily: "var(--font-orbitron)",
          }}
        >
          {title}
        </h3>
      </div>

      {links.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#CFCFCF",
            textDecoration: "none",
            marginBottom: "18px",
            fontSize: "18px",
            fontFamily: "var(--font-avenir-roman)",
            transition: ".25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.paddingLeft = "8px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#CFCFCF";
            e.currentTarget.style.paddingLeft = "0";
          }}
        >
          <span>{label}</span>

          <ChevronRight
            size={16}
            color="#8B42FF"
          />
        </Link>
      ))}
    </div>
  );
}