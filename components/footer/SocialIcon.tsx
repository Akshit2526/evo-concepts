"use client";

import Link from "next/link";

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialIcon({
  href,
  children,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      style={{
        width: 58,
        height: 58,
        borderRadius: "50%",
        border: "1px solid rgba(139,66,255,.35)",
        background: "rgba(255,255,255,.02)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        textDecoration: "none",
        transition: ".3s ease",
        boxShadow: "0 0 18px rgba(139,66,255,.10)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(139,66,255,.12)";
        e.currentTarget.style.borderColor = "#8B42FF";
        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(139,66,255,.45)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.02)";
        e.currentTarget.style.borderColor = "rgba(139,66,255,.35)";
        e.currentTarget.style.boxShadow =
          "0 0 18px rgba(139,66,255,.10)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </Link>
  );
}