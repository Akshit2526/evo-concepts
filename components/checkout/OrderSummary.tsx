"use client";

export default function OrderSummary() {
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

        {/* PRODUCT */}

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
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.10)",
            }}
          />

          <div>

            <div
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              APR 1.5 TSI
              <br />
              OPEN PEX INTAKE
            </div>

            <div style={{ height: "10px" }} />

            <div
              style={{
                color: "#9F9F9F",
                fontFamily: "Avenir Roman",
                fontSize: "15px",
              }}
            >
              Qty : 1
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
          <span style={{ color: "#BFBFBF" }}>Subtotal</span>

          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
            }}
          >
            ₹44,800
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <span style={{ color: "#BFBFBF" }}>
            Shipping
          </span>

          <span
            style={{
              color: "#7C3AED",
              fontFamily: "Avenir Medium",
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
          <span style={{ color: "#BFBFBF" }}>
            GST
          </span>

          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
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
              }}
            >
              ₹44,800
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