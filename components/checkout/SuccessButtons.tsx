"use client";

import { useRouter } from "next/navigation";
import { useCheckoutStore } from "@/store/checkoutStore";

export default function SuccessButtons() {
  const router = useRouter();

  const { clearProduct } = useCheckoutStore();

const handleContinueShopping = () => {
  clearProduct();

  router.push("/");
};

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "64px",
    borderRadius: "18px",
    fontFamily: "Avenir Medium",
    fontSize: "18px",
    cursor: "pointer",
    marginBottom: "18px",
  };

  return (
    <section>

      <button
      onClick={handleContinueShopping}
          style={{
          ...buttonStyle,
          border: "none",
          color: "#FFFFFF",
          background:
            "linear-gradient(90deg,#5D16FF,#8C3DFF)",
        }}
      >
        CONTINUE SHOPPING
      </button>

      <button
        style={{
          ...buttonStyle,
          background: "transparent",
          border: "1px solid #6E1EFF",
          color: "#FFFFFF",
        }}
      >
        TRACK ORDER
      </button>

      <button
        style={{
          ...buttonStyle,
          background: "transparent",
          border: "1px solid rgba(255,255,255,.15)",
          color: "#CFCFCF",
        }}
      >
        DOWNLOAD INVOICE
      </button>

    </section>
  );
}