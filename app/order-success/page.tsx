import SuccessCard from "@/components/checkout/SuccessCard";
import SuccessTimeline from "@/components/checkout/SuccessTimeline";
import SuccessButtons from "@/components/checkout/SuccessButtons";

export default function OrderSuccessPage() {
  return (
    <main
      className="w-full min-h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <SuccessCard />

        <div style={{ height: "60px" }} />

        <SuccessTimeline />

        <div style={{ height: "60px" }} />

        <SuccessButtons />
      </div>
    </main>
  );
}