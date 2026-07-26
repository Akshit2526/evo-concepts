"use client";

export default function AddressForm() {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "62px",
    borderRadius: "16px",
    border: "1px solid rgba(110,30,255,.30)",
    background: "rgba(255,255,255,.03)",
    padding: "0 22px",
    color: "#FFFFFF",
    fontFamily: "Avenir Roman",
    fontSize: "17px",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Avenir Medium",
    color: "#FFFFFF",
    fontSize: "18px",
    marginBottom: "12px",
    display: "block",
  };

  return (
    <section>

      <h2
        style={{
          fontFamily: "Orbitron",
          fontSize: "34px",
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        Shipping Address
      </h2>

      <div style={{ height: "35px" }} />

      {/* Address */}

      <div>
        <label style={labelStyle}>Street Address</label>

        <input
          type="text"
          placeholder="House No, Street, Area"
          style={inputStyle}
        />
      </div>

      <div style={{ height: "24px" }} />

      {/* Apartment */}

      <div>
        <label style={labelStyle}>
          Apartment / Suite (Optional)
        </label>

        <input
          type="text"
          placeholder="Apartment, Floor, Landmark"
          style={inputStyle}
        />
      </div>

      <div style={{ height: "24px" }} />

      {/* City + State */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <div>
          <label style={labelStyle}>City</label>

          <input
            type="text"
            placeholder="Ahmedabad"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>State</label>

          <input
            type="text"
            placeholder="Gujarat"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ height: "24px" }} />

      {/* PIN + Country */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <div>
          <label style={labelStyle}>PIN Code</label>

          <input
            type="text"
            placeholder="380015"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Country</label>

          <input
            type="text"
            placeholder="India"
            style={inputStyle}
          />
        </div>
      </div>

    </section>
  );
}