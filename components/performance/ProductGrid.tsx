"use client";

import ProductRow from "./ProductRow";
import { products } from "./data";

export default function ProductGrid() {
  const rows = [];

  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <section className="relative w-full pt-10">

      <div className="mx-auto max-w-[1450px] px-8">

        <div className="flex flex-col gap-y-20">

          {rows.map((row, index) => (
            <ProductRow
              key={index}
              products={row}
              immediate={index < 2}
            />
          ))}

        </div>

      </div>


      <div className="h-[180px]" />

    </section>
  );
}