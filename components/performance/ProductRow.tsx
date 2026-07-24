"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductCard from "./ProductCard";
import type { Product } from "./data";

gsap.registerPlugin(ScrollTrigger);

interface ProductRowProps {
  products: Product[];
  immediate?: boolean;
}

export default function ProductRow({
  products,
  immediate = false,
}: ProductRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (immediate) return;

    const cards = rowRef.current?.children;
    if (!cards || cards.length === 0) return;

   gsap.set(cards, {
  opacity: 0.25,
  y: 40,
  filter: "blur(8px)",
  scale: 0.98,
});

gsap.to(cards, {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  scale: 1,
  duration: 1,
  ease: "power4.out",
  stagger: 0.12,
  overwrite: "auto",
  scrollTrigger: {
  trigger: rowRef.current,
  start: "top 95%",
  end: "top 45%",
  scrub: 1.5,
},
});
  }, [immediate]);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-4 justify-items-center gap-x-10"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}