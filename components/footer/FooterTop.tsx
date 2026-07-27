"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShoppingBag,
  Headphones,
  Building2,
} from "lucide-react";

import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";

export default function FooterTop() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1.15fr",
        gap: "60px",
        alignItems: "flex-start",
      }}
    >
      {/* ===================================== */}
      {/* LOGO */}
      {/* ===================================== */}

      <div>
        <Image
          src="/logo.png"
          alt="EVO Concepts"
          width={260}
          height={90}
          priority
        />

        <div
          style={{
            width: 70,
            height: 3,
            background: "#8B42FF",
            borderRadius: 999,
            marginTop: 25,
            marginBottom: 25,
          }}
        />

        <p
          style={{
            color: "#CFCFCF",
            fontSize: 19,
            lineHeight: "38px",
            maxWidth: 290,
            fontFamily: "var(--font-avenir-roman)",
          }}
        >
          Premium performance parts for enthusiasts who demand genuine quality,
          trusted brands and exceptional driving experiences.
        </p>

        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 35,
          }}
        >
          <SocialIcon href="#">
            <Instagram size={22} />
          </SocialIcon>

          

          <SocialIcon href="#">
            <Facebook size={22} />
          </SocialIcon>

          <SocialIcon href="#">
            X
          </SocialIcon>
        </div>
      </div>

      {/* Divider */}

      <div
        style={{
          position: "absolute",
          left: "26%",
          top: 70,
          bottom: 0,
          width: 1,
          background: "rgba(255,255,255,.08)",
        }}
      />

      {/* ===================================== */}
      {/* SHOP */}
      {/* ===================================== */}

      <FooterColumn
        icon={<ShoppingBag size={22} />}
        title="SHOP"
        links={[
          ["Performance Parts", "/performance-parts"],
          ["VAG Parts", "/vag-parts"],
          ["Interior", "/interior"],
          ["Exterior", "/exterior"],
          ["Lighting", "/lighting"],
          ["Audio & Electronics", "/audio"],
          ["New Arrivals", "#"],
        ]}
      />

      {/* ===================================== */}
      {/* CUSTOMER SERVICE */}
      {/* ===================================== */}

      <FooterColumn
        icon={<Headphones size={22} />}
        title="CUSTOMER SERVICE"
        links={[
          ["About Us", "/about"],
          ["Support", "/support"],
          ["Shipping Policy", "/shipping-policy"],
          ["Return Policy", "/return-policy"],
          ["Privacy Policy", "/privacy-policy"],
          ["Terms & Conditions", "/terms"],
          ["Track Order", "#"],
        ]}
      />

      {/* ===================================== */}
      {/* COMPANY */}
      {/* ===================================== */}

      <FooterColumn
        icon={<Building2 size={22} />}
        title="COMPANY"
        links={[
          ["Our Story", "/about"],
          ["Why Choose Us", "/about"],
          ["Support", "/support"],
          ["Quality Assurance", "#"],
          ["Contact Us", "/support"],
        ]}
      />

      {/* ===================================== */}
      {/* CONTACT */}
      {/* ===================================== */}

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <Mail size={22} color="#8B42FF" />

          <h3
            style={{
              color: "#FFFFFF",
              fontSize: 30,
              fontFamily: "var(--font-orbitron)",
              letterSpacing: 1,
            }}
          >
            CONTACT
          </h3>
        </div>

        <ContactItem
          icon={<Phone size={20} />}
          text="+91 9106001647"
        />

        <ContactItem
          icon={<Mail size={20} />}
          text="evoconceptsindia@gmail.com"
        />

        <ContactItem
          icon={<MapPin size={20} />}
          text="Ahmedabad, Gujarat, India"
        />

        <ContactItem
          icon={<Clock3 size={20} />}
          text="Mon - Sat : 10AM - 7PM"
        />
      </div>
    </section>
  );
}

/* ========================================== */

function ContactItem({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        alignItems: "flex-start",
        marginBottom: 22,
        color: "#CFCFCF",
        fontSize: 18,
        lineHeight: "30px",
        fontFamily: "var(--font-avenir-roman)",
      }}
    >
      <div style={{ color: "#8B42FF" }}>{icon}</div>

      <span>{text}</span>
    </div>
  );
}