"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import SearchModal from "../ui/SearchModal";

const navLinks = [
  {
    label: "Performance Parts",
    href: "/performance-parts",
  },
  {
    label: "VAG Parts",
    href: "/vag-parts",
  },
  {
    label: "Interior",
    href: "/interior",
  },
  {
    label: "Exterior",
    href: "/exterior",
  },
  {
    label: "Lighting",
    href: "/lighting",
  },
  {
    label: "Audio & Electronics",
    href: "/audio-electronics",
  },
];

interface NavbarProps {
  activePage?: string;
}

export default function Navbar({
  activePage,
}: NavbarProps) {
   const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="relative mx-auto h-[115px] max-w-[1700px]">

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-[-90px] top-[-90px]"
        >
          <Image
            src="/images/logo.png"
            alt="EVO Concepts"
            width={460}
            height={240}
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="absolute left-[350px] top-[48px] flex items-center gap-11">
          {navLinks.map((item) => (
      <Link
  key={item.label}
  href={item.href}
  className={`nav-item text-[19px] text-white ${
    activePage === item.href.replace("/", "")
      ? "nav-active"
      : ""
  }`}
  style={{
    fontFamily: "var(--font-avenir)",
  }}
>
              {item.label}

              <span className="nav-line">
                <span className="nav-streak"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Support */}
        <div
          className="absolute right-[40px] top-[12px] flex gap-6 text-[16px] text-white"
          style={{
            fontFamily: "var(--font-avenir)",
          }}
        >
          <Link href="/support">Support</Link>

          <Link href="/about">
            About Us
          </Link>
        </div>

        {/* Icons */}
        <div className="absolute right-[50px] top-[48px] flex items-center gap-6 text-white">

          <button
  onClick={() => setSearchOpen(true)}
  className="transition duration-300 hover:text-[#B56CFF]"
>
  <Search
    size={24}
    strokeWidth={2}
  />
</button>

          <Link href="/cart">
            <ShoppingCart
              size={24}
              strokeWidth={2}
              className="transition duration-300 hover:text-[#B56CFF]"
            />
          </Link>

          <Link href="/account">
            <User
              size={24}
              strokeWidth={2}
              className="transition duration-300 hover:text-[#B56CFF]"
            />
          </Link>

        </div>

      </div>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

    </header>
  );
}