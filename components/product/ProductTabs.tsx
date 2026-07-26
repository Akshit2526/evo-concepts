"use client";

type Props = {
  activeTab: "description" | "shipping";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"description" | "shipping">
  >;
};

export default function ProductTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="w-full">

      <div className="flex items-center justify-center">

        <button
          onClick={() => setActiveTab("description")}
          className="relative pb-4 transition-all duration-300"
        >
          <span
            className={
              activeTab === "description"
                ? "text-white"
                : "text-[#8D8D8D]"
            }
            style={{
              fontFamily: "Avenir Medium",
              fontSize: "22px",
            }}
          >
            Description
          </span>

          {activeTab === "description" && (
            <div className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-white" />
          )}
        </button>

        <div className="w-16" />

        <button
          onClick={() => setActiveTab("shipping")}
          className="relative pb-4 transition-all duration-300"
        >
          <span
            className={
              activeTab === "shipping"
                ? "text-white"
                : "text-[#8D8D8D]"
            }
            style={{
              fontFamily: "Avenir Medium",
              fontSize: "22px",
            }}
          >
            Shipping & Return
          </span>

          {activeTab === "shipping" && (
            <div className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-white" />
          )}
        </button>

      </div>

      <div className="h-px w-full bg-white/15" />

    </div>
  );
}