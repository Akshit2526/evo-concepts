"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-4">

      <button
        onClick={decrease}
        className="
          flex
          h-[56px]
          w-[56px]
          items-center
          justify-center
          rounded-xl
          border
          border-white/15
          bg-[#111111]
          text-[28px]
          text-white
          transition-all
          duration-300
          hover:border-[#6E1EFF]
          hover:bg-[#6E1EFF]
        "
      >
        −
      </button>

      <div
        className="
          flex
          h-[56px]
          w-[90px]
          items-center
          justify-center
          rounded-xl
          border
          border-white/15
          bg-[#161616]
          text-[20px]
          text-white
          font-avenir-medium
        "
      >
        {quantity}
      </div>

      <button
        onClick={increase}
        className="
          flex
          h-[56px]
          w-[56px]
          items-center
          justify-center
          rounded-xl
          border
          border-white/15
          bg-[#111111]
          text-[28px]
          text-white
          transition-all
          duration-300
          hover:border-[#6E1EFF]
          hover:bg-[#6E1EFF]
        "
      >
        +
      </button>

    </div>
  );
}