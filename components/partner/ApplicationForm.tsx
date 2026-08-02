"use client";

import { useState } from "react";

interface ApplicationFormProps {
  applicationType: "dealer" | "business";
}

export default function ApplicationForm({
  applicationType,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    city: "",
    gst: "",
    businessType: "",
    years: "",
    brands: "",
    address: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      applicationType,
      ...formData,
    });

    alert("Application submitted successfully.");
  }

  return (
    <section
      id="application-form"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 40px 140px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#8B42FF",
              fontFamily: "var(--font-orbitron)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontSize: "15px",
            }}
          >
            {applicationType === "dealer"
              ? "Dealer Application"
              : "Business Partnership"}
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "60px",
              lineHeight: "70px",
              margin: "18px 0 28px",
              textTransform: "uppercase",
            }}
          >
            {applicationType === "dealer"
              ? "Apply To Become\nAn Authorised Dealer"
              : "Let's Build\nSomething Bigger"}
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#CFCFCF",
              fontFamily: "var(--font-avenir-roman)",
              fontSize: "20px",
              lineHeight: "36px",
            }}
          >
            {applicationType === "dealer"
              ? "Complete your dealership application. Our team will review your business and contact you after verification."
              : "Tell us about your business and partnership goals. Our team will reach out to discuss collaboration opportunities."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(110,30,255,.20)",
            borderRadius: "36px",
            backdropFilter: "blur(24px)",
            padding: "60px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "24px",
            }}
          >
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              name="website"
              placeholder="Website / Instagram"
              value={formData.website}
              onChange={handleChange}
              style={inputStyle}
            />
                        <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              style={inputStyle}
            />

            {applicationType === "dealer" ? (
              <>
                <input
                  name="gst"
                  placeholder="GST Number"
                  value={formData.gst}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="years"
                  placeholder="Years In Business"
                  value={formData.years}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="brands"
                  placeholder="Brands Currently Selling"
                  value={formData.brands}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </>
            ) : (
              <>
                <input
                  name="businessType"
                  placeholder="Business Type"
                  value={formData.businessType}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="years"
                  placeholder="Years In Business"
                  value={formData.years}
                  onChange={handleChange}
                  style={inputStyle}
                />

                <input
                  name="brands"
                  placeholder="Collaboration Type"
                  value={formData.brands}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </>
            )}

            <textarea
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              style={{
                ...inputStyle,
                gridColumn: "1 / -1",
                minHeight: "130px",
                resize: "vertical",
              }}
            />

            <textarea
              name="description"
              placeholder={
                applicationType === "dealer"
                  ? "Tell us about your business..."
                  : "Tell us about your partnership requirements..."
              }
              value={formData.description}
              onChange={handleChange}
              style={{
                ...inputStyle,
                gridColumn: "1 / -1",
                minHeight: "190px",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "40px",
              width: "100%",
              height: "64px",
              border: "none",
              borderRadius: "18px",
              background: "#8B42FF",
              color: "#FFFFFF",
              fontFamily: "var(--font-orbitron)",
              fontSize: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            {applicationType === "dealer"
              ? "Submit Dealer Application"
              : "Submit Partnership Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "62px",
  borderRadius: "18px",
  border: "1px solid rgba(110,30,255,.20)",
  background: "rgba(255,255,255,.04)",
  color: "#FFFFFF",
  padding: "0 22px",
  outline: "none",
  fontSize: "16px",
  fontFamily: "var(--font-avenir-roman)",
};