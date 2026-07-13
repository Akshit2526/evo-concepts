"use client";
import Container from "../layout/Container";
import ProductCard from "../ui/ProductCard";
import ExploreButton from "../ui/ExploreButton";

const products = [
  {
    image: "/products/coil.png",
    title: "APR Ignition Coil",
  },
  {
    image: "/products/brakes.png",
    title: "APR Disc Brakes",
  },
  {
    image: "/products/intake.png",
    title: "APR Cold Air Intake",
  },
  {
    image: "/products/coilovers.png",
    title: "APR Coilovers",
  },
  {
    image: "/products/bov.png",
    title: "Forge BOV Valve",
  },
];

export default function FeaturedProducts() {
  return (
<section className="relative">
        <Container className="px-16">
        <h2
          
          className="mb-32 text-center tracking-[4px] text-white"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "40px",
            fontWeight: 600,
          }}
        >
          FEATURED PRODUCTS
        </h2>
        <div className="h-13"></div>

<div className="flex justify-center items-start gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
            />
          ))}

        </div>

        <div
      style={{
           marginTop: "45px",
          }}
          className="flex justify-center"
>
  <ExploreButton />
</div>

            </Container>


    </section>
  );
}
