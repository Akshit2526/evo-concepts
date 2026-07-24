"use client";

import ProductCard from "./ProductCard";
import { products } from "./data";

export default function ProductGrid() {
  return (
    <section className="w-full">

      {/* Product Grid */}

      <div className="mx-auto mt-[90px] max-w-[1450px] px-8">

        <div
          className="
            grid
            grid-cols-4
            justify-items-center
            gap-x-10
            gap-y-20
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

      {/* Bottom Space */}

      <div className="h-[180px]" />

    </section>
  );
}