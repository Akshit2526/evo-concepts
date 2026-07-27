import FooterTop from "./FooterTop";
import FooterFeatures from "./FooterFeatures";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top,#220033 0%,#12001d 45%,#09000f 100%)",
        borderTop: "1px solid rgba(139,66,255,.25)",
      }}
    >
      {/* Purple Top Glow */}

      <div
        style={{
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(90deg,transparent,#8B42FF,#B366FF,#8B42FF,transparent)",
          boxShadow: "0 0 25px #8B42FF",
        }}
      />

      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          top: "-220px",
          left: "-220px",
          width: "520px",
          height: "520px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.15)",
          filter: "blur(180px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-220px",
          bottom: "-220px",
          width: "520px",
          height: "520px",
          borderRadius: "999px",
          background: "rgba(110,30,255,.12)",
          filter: "blur(180px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "70px 50px 40px",
        }}
      >
        <FooterTop />

        <div style={{ height: 45 }} />

        <FooterFeatures />

        <div style={{ height: 45 }} />

        <FooterNewsletter />

        <div style={{ height: 35 }} />

        <FooterBottom />
      </div>
    </footer>
  );
}