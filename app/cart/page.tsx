"use client";

import Hero from "@/components/cart/Hero";
import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";
import RecommendedProducts from "@/components/cart/RecommendedProducts";
import Footer from "@/components/footer-v5/Footer";

export default function CartPage() {
  return (
    <>
      <main
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Hero />

        <CartItems />

        <OrderSummary />

        <RecommendedProducts />
      </main>

      <Footer />
    </>
  );
}