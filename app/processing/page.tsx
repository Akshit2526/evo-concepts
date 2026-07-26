import ProcessingAnimation from "@/components/checkout/ProcessingAnimation";

export default function ProcessingPage() {
  return (
    <main
      className="w-full min-h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProcessingAnimation />
    </main>
  );
}