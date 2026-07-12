"use client";

import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";

const navLinks = [
  "Performance Parts",
  "VAG Parts",
  "Interior",
  "Exterior",
  "Lighting",
  "Audio & Electronics",
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">

      <div className="relative mx-auto h-[115px] max-w-[1700px]">

        {/* Logo */}

        <div className="absolute left-[-90px] top-[-90px]">
          <Image
            src="/images/logo.png"
            alt="EVO Concepts"
            width={460}
            height={240}
            priority
          />
        </div>

        {/* Menu */}

        <nav className="absolute left-[350px] top-[48px] flex items-center gap-11">
          {navLinks.map((item) => (
            <a
  key={item}
  href="#"
  className="nav-item text-[19px] text-white"
  style={{
    fontFamily: "var(--font-avenir)",
  }}
>
  {item}

  <span className="nav-line">
    <span className="nav-streak"></span>
  </span>

</a>
          ))}
        </nav>

        {/* Support */}

        <div
          className="absolute right-[40px] top-[12px] flex gap-6 text-[16px] text-white"
          style={{
            fontFamily: "var(--font-avenir)",
          }}
        >
          <a href="#">Support</a>
          <a href="#">About US</a>
        </div>

        {/* Icons */}

        <div className="absolute right-[50px] top-[48px] flex items-center gap-6 text-white">

          <Search size={24} strokeWidth={2} />

          <ShoppingCart size={24} strokeWidth={2} />

          <User size={24} strokeWidth={2} />

        </div>

      </div>

    </header>
  );
}