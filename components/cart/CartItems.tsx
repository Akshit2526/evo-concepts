"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartItems() {
  const [items, setItems] = useState<any[]>([]);

  const increase = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <section
      id="cart-items"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 120px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {items.length === 0 ? (
          <div
            style={{
              border: "1px solid rgba(110,30,255,.20)",
              background: "rgba(255,255,255,.04)",
              borderRadius: "36px",
              backdropFilter: "blur(24px)",
              padding: "120px 60px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "999px",
                margin: "0 auto 30px",
                background: "rgba(110,30,255,.10)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingBag
                size={55}
                color="#8B42FF"
              />
            </div>

            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: "var(--font-orbitron)",
                fontSize: "46px",
                marginBottom: "22px",
                textTransform: "uppercase",
              }}
            >
              Your Cart Is Empty
            </h2>

            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto 45px",
                color: "#CFCFCF",
                fontSize: "20px",
                lineHeight: "38px",
              }}
            >
              Looks like you haven't added any performance
              parts yet. Browse our collection and build
              your dream setup.
            </p>

            <Link
              href="/performance-parts"
              style={{
                display: "inline-block",
                padding: "18px 42px",
                borderRadius: "999px",
                background: "#8B42FF",
                color: "#FFFFFF",
                textDecoration: "none",
                fontFamily: "var(--font-orbitron)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "35px",
                  alignItems: "center",
                  padding: "35px",
                  borderRadius: "34px",
                  background: "rgba(255,255,255,.04)",
                  border:
                    "1px solid rgba(110,30,255,.20)",
                  backdropFilter: "blur(24px)",
                }}
              >
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "24px",
                    background:
                      "rgba(255,255,255,.04)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                </div>

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontFamily:
                        "var(--font-orbitron)",
                      fontSize: "30px",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      color: "#BFBFBF",
                      marginTop: "12px",
                    }}
                  >
                    {item.compatibility}
                  </p>

                  <p
                    style={{
                      color: "#8B42FF",
                      margin: "18px 0 26px",
                    }}
                  >
                    SKU : {item.sku}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <button
                      onClick={() =>
                        decrease(item.id)
                      }
                      style={qtyButton}
                    >
                      <Minus size={18} />
                    </button>

                    <span
                      style={{
                        color: "#FFFFFF",
                        width: "35px",
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increase(item.id)
                      }
                      style={qtyButton}
                    >
                      <Plus size={18} />
                    </button>
                                        <div
                      style={{
                        marginLeft: "20px",
                        color: "#FFFFFF",
                        fontSize: "18px",
                      }}
                    >
                      ₹ {item.price.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    height: "180px",
                  }}
                >
                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#FF5F5F",
                      fontSize: "15px",
                    }}
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <p
                      style={{
                        color: "#BEBEBE",
                        marginBottom: "8px",
                      }}
                    >
                      Total
                    </p>

                    <h3
                      style={{
                        margin: 0,
                        color: "#FFFFFF",
                        fontFamily:
                          "var(--font-orbitron)",
                        fontSize: "34px",
                      }}
                    >
                      ₹{" "}
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString("en-IN")}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const qtyButton: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  border: "1px solid rgba(110,30,255,.25)",
  background: "rgba(255,255,255,.05)",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};