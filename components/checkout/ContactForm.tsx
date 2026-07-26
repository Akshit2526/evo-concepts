"use client";

export default function ContactForm() {
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
        Contact Information
      </h2>

      <div style={{ height: "35px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >

        <div>
          <label style={labelStyle}>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            style={inputStyle}
          />
        </div>

      </div>

      <div style={{ height: "24px" }} />

      <div>
        <label style={labelStyle}>Email Address</label>

        <input
          type="email"
          placeholder="example@email.com"
          style={inputStyle}
        />
      </div>

      <div style={{ height: "24px" }} />

      <div>
        <label style={labelStyle}>Phone Number</label>

        <input
          type="tel"
          placeholder="+91 98765 43210"
          style={inputStyle}
        />
      </div>

    </section>
  );
}