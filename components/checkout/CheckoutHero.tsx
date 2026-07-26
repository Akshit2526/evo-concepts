"use client";

export default function CheckoutHero() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: "110px",
      }}
    >
      <div
        style={{
          maxWidth: "1650px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        <p
          style={{
            fontFamily: "Avenir Medium",
            color: "#8B42FF",
            fontSize: "16px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          SECURE CHECKOUT
        </p>

        <div style={{ height: "18px" }} />

        <h1
          style={{
            fontFamily: "Orbitron",
            fontSize: "58px",
            lineHeight: "72px",
            color: "#FFFFFF",
            textTransform: "uppercase",
            maxWidth: "900px",
          }}
        >
          COMPLETE YOUR BUILD
        </h1>

        <div style={{ height: "24px" }} />

        <p
          style={{
            fontFamily: "Avenir Roman",
            fontSize: "19px",
            lineHeight: "34px",
            color: "#CFCFCF",
            maxWidth: "760px",
          }}
        >
          You're one step away from upgrading your vehicle. Complete your
          details below to place your order securely with EVO Concepts.
        </p>

        <div style={{ height: "45px" }} />

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {[
            "100% Secure Checkout",
            "Premium Performance Parts",
            "Fast Nationwide Shipping",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 22px",
                border: "1px solid rgba(139,66,255,.35)",
                borderRadius: "999px",
                background: "rgba(255,255,255,.03)",
                color: "#FFFFFF",
                fontFamily: "Avenir Medium",
                fontSize: "15px",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}