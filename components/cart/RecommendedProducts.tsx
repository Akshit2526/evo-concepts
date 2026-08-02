"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "RacingLine R600 Intake",
    image: "/products/intake/r600.png",
    price: "₹39,999",
    href: "/performance-parts",
  },
  {
    id: 2,
    name: "Milltek Catback Exhaust",
    image: "/products/exhaust/milltek.png",
    price: "₹72,999",
    href: "/performance-parts",
  },
  {
    id: 3,
    name: "H&R Lowering Springs",
    image: "/products/suspension/hr-springs.png",
    price: "₹28,999",
    href: "/performance-parts",
  },
  {
    id: 4,
    name: "RacingLine Turbo Inlet",
    image: "/products/intake/turbo-inlet.png",
    price: "₹17,999",
    href: "/performance-parts",
  },
];

export default function RecommendedProducts() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 140px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#8B42FF",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "15px",
            }}
          >
            Recommended Products
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "58px",
              lineHeight: "68px",
              textTransform: "uppercase",
              margin: "18px 0",
            }}
          >
            YOU MAY
            <br />
            ALSO LIKE
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "28px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(110,30,255,.20)",
                borderRadius: "28px",
                backdropFilter: "blur(20px)",
                padding: "28px",
              }}
            >
              <div
                style={{
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "22px",
                  lineHeight: "32px",
                  marginBottom: "18px",
                }}
              >
                {product.name}
              </h3>

              <h4
                style={{
                  color: "#8B42FF",
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "24px",
                  marginBottom: "26px",
                }}
              >
                {product.price}
              </h4>

              <Link
                href={product.href}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "16px",
                  borderRadius: "16px",
                  background: "#8B42FF",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "var(--font-orbitron)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}