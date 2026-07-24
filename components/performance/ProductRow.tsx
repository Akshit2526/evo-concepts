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
      opacity: 0,
      y: 50,
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
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