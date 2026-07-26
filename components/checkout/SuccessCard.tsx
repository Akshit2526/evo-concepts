"use client";

export default function SuccessCard() {
  return (
    <section>

      <div
        style={{
          width: "140px",
          height: "140px",
          margin: "0 auto",
          borderRadius: "50%",
          border: "2px solid #6E1EFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 60px rgba(110,30,255,.35)",
          fontSize: "64px",
          color: "#FFFFFF",
        }}
      >
        ✓
      </div>

      <div style={{ height: "40px" }} />

      <h1
        style={{
          fontFamily: "Orbitron",
          fontSize: "58px",
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        Order Confirmed
      </h1>

      <div style={{ height: "20px" }} />

      <p
        style={{
          color: "#CFCFCF",
          fontFamily: "Avenir Roman",
          fontSize: "19px",
          lineHeight: "32px",
        }}
      >
        Thank you for choosing EVO Concepts.
        <br />
        Your order has been placed successfully.
      </p>

      <div style={{ height: "45px" }} />

      <div
        style={{
          borderRadius: "22px",
          border: "1px solid rgba(110,30,255,.30)",
          background: "rgba(255,255,255,.03)",
          padding: "34px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <span style={{ color: "#9D9D9D" }}>Order ID</span>

          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Avenir Medium",
            }}
          >
            #EVO-240731
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <span style={{ color: "#9D9D9D" }}>
            Payment
          </span>

          <span
            style={{
              color: "#6E1EFF",
            }}
          >
            Successful
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#9D9D9D" }}>
            Estimated Delivery
          </span>

          <span
            style={{
              color: "#FFFFFF",
            }}
          >
            30 Jul – 1 Aug
          </span>
        </div>

      </div>

    </section>
  );
}