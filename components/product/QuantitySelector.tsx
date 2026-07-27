"use client";

import { useCheckoutStore } from "@/store/checkoutStore";
export default function QuantitySelector() {
  const {
  quantity,
  increaseQuantity,
  decreaseQuantity,
} = useCheckoutStore();

  return (
    <div className="flex items-center gap-4">

      <button
        onClick={decreaseQuantity}
        className="
          flex
          h-[46px]
          w-[46px]
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
          h-[46px]
          w-[60px]
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
        onClick={increaseQuantity}
        className="
          flex
          h-[46px]
          w-[46px]
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