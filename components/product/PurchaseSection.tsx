// PurchaseSection.tsx

"use client";

import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { useRouter } from "next/navigation";

export default function PurchaseSection() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  return (
    <div className="mt-12 w-full max-w-[520px]">

      {/* PRICE */}

      <h2
  className="text-white"
  style={{
    fontFamily: '"Avenir Black Oblique"',
    fontSize: "35px",
  }}
>
        RS.44,800.00  
</h2>
 
        <div className="h-4" />

      {/* QUANTITY */}

      <p
        className="mt-10 mb-5 text-white"
        style={{
          fontFamily: "Avenir Medium",
          fontSize: "22px",
        }}
      >
        Quantity :
      </p>
 
      <div className="h-4" />

      <div className="flex items-center gap-6">

        <QuantitySelector />

        <button
          className="
            h-[48px]
            flex-1
            rounded-[14px]
            bg-[#6E1EFF]
            text-white
            transition
            duration-300
            hover:bg-[#7D32FF]
          "
          style={{
            fontFamily: "Avenir Medium",
            fontSize: "19px",
            letterSpacing: ".08em",
          }}
        >
          ADD TO CART
        </button>

      </div>

      

      {/* TERMS */}
      <div className="h-4" />

      <label className="mt-8 flex cursor-pointer items-center gap-3">

        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="h-5 w-5 accent-[#6E1EFF]"
        />

        <span
          className="text-[#E1E1E1]"
          style={{
            fontFamily: "Avenir Light Oblique",
            fontSize: "18px",
          }}
        >
          I agree with Terms And Conditions
        </span>  

      </label>
      
      
      <div className="h-5" />

      {/* BUY NOW */}

        <button
  disabled={!accepted}
  onClick={() => router.push("/checkout")}
  className="
    mt-8
    h-[55px]
    w-full
    rounded-[14px]
    border
    border-[#8B42FF]
    bg-gradient-to-r
    from-[#5C16FF]
    to-[#8C3DFF]
    text-white
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-[0_0_25px_rgba(110,30,255,.45)]
    disabled:opacity-40
    disabled:hover:scale-100
  "
  style={{
    fontFamily: "Avenir Medium",
    fontSize: "19px",
    letterSpacing: ".08em",
    cursor: accepted ? "pointer" : "not-allowed",
  }}
>
  BUY IT NOW
</button>

    </div>
  );
}