"use client";

import Image from "next/image";
import { useCheckoutStore } from "@/store/checkoutStore";
import { formatPrice } from "@/lib/formatPrice";

export default function OrderSummary() {
  const { selectedProduct, quantity } = useCheckoutStore();

  if (!selectedProduct) {
    return (
      <aside
        style={{
          position: "sticky",
          top: "120px",
        }}
      >
        <div
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(110,30,255,.30)",
            background: "rgba(255,255,255,.04)",
            padding: "34px",
            backdropFilter: "blur(18px)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Orbitron",
              fontSize: "30px",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            Order Summary
          </h2>

          <div style={{ height: "24px" }} />

          <p
            style={{
              color: "#CFCFCF",
              fontFamily: "Avenir Roman",
              fontSize: "18px",
            }}
          >
            No Product Selected
          </p>
        </div>
      </aside>
    );
  }

  const subtotal = selectedProduct.price * quantity;
  const total = subtotal;

  return (
    <aside
      style={{
        position: "sticky",
        top: "120px",
      }}
    >
      <div
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(110,30,255,.30)",
          background: "rgba(255,255,255,.04)",
          padding: "34px",
          backdropFilter: "blur(18px)",
        }}
      >
        <h2
          style={{
            fontFamily: "Orbitron",
            fontSize: "30px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Order Summary
        </h2>

        <div style={{ height: "30px" }} />

        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.10)",
            }}
          >
            <Image
              src={selectedProduct.images[0]}
              alt={selectedProduct.name}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {selectedProduct.name}
            </div>

            <div style={{ height: "10px" }} />

            <div
              style={{
                color: "#9F9F9F",
                fontFamily: "Avenir Roman",
                fontSize: "15px",
              }}
            >
              Qty : {quantity}
            </div>

            <div
              style={{
                marginTop: "8px",
                color: "#7D7D7D",
                fontFamily: "Avenir Roman",
                fontSize: "13px",
              }}
            >
              SKU : {selectedProduct.sku}
            </div>
          </div>
        </div>

        <div style={{ height: "35px" }} />
                <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              color: "#BFBFBF",
              fontFamily: "Avenir Roman",
              fontSize: "16px",
            }}
          >
            Subtotal
          </span>

          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
              fontSize: "16px",
            }}
          >
            {formatPrice(subtotal)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <span
            style={{
              color: "#BFBFBF",
              fontFamily: "Avenir Roman",
              fontSize: "16px",
            }}
          >
            Shipping
          </span>

          <span
            style={{
              color: "#7C3AED",
              fontFamily: "Avenir Medium",
              fontSize: "16px",
            }}
          >
            FREE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              color: "#BFBFBF",
              fontFamily: "Avenir Roman",
              fontSize: "16px",
            }}
          >
            GST
          </span>

          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
              fontSize: "16px",
            }}
          >
            Included
          </span>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.10)",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "20px",
              }}
            >
              Total
            </span>

            <span
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Black",
                fontSize: "28px",
                transition: "all .25s ease",
              }}
            >
              {formatPrice(total)}
            </span>
          </div>
        </div>

        <div style={{ height: "35px" }} />

        <div
          style={{
            padding: "18px",
            borderRadius: "16px",
            background: "rgba(110,30,255,.10)",
            border: "1px solid rgba(110,30,255,.30)",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
              fontSize: "17px",
            }}
          >
            Estimated Delivery
          </div>

          <div style={{ height: "8px" }} />

          <div
            style={{
              color: "#CFCFCF",
              fontFamily: "Avenir Roman",
              fontSize: "15px",
            }}
          >
            30 July – 1 August
          </div>
        </div>

        <div style={{ height: "28px" }} />

        <div
          style={{
            textAlign: "center",
            color: "#9D9D9D",
            fontFamily: "Avenir Roman",
            fontSize: "14px",
          }}
        >
          🔒 256-bit Secure Checkout
        </div>
      </div>
    </aside>
  );
}