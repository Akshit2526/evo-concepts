"use client";

export default function FeaturesList() {
  const features = [
    "Improved performance: +10 FT-LBS and +6 HP at the wheels!",
    "Massive flow improvement: +113% CFM gain over stock with up to 935 CFM @ 28 in.H2O",
    "High heat deflection PEX construction with less heat retention compared to metal systems",
    "Optimized throttle response, reduced pressure drop, and decreased turbocharger strain",
    "Intoxicating engine sound through the large 7” reusable cotton filter",
    "Plug-and-play design installs in minutes and doesn’t impact emissions",
  ];

  return (
    <div className="max-w-[1500px]">

      <h2
        className="text-white"
        style={{
          fontFamily: "Avenir Black Oblique",
          fontSize: "22px",
        }}
      >
        Features :
      </h2>

      <div className="h-8" />

      <ul className="space-y-4">

        {features.map((feature) => (
          <li
            key={feature}
            style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "16px",
           }}

          >



            <span
  style={{
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#fff",
    marginTop: "9px",
    flexShrink: 0,
  }}
/>

            <span
  style={{
    fontFamily: "Avenir Roman",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#D4D4D4",
    flex: 1,
  }}
>
              {feature}
            </span>

          </li>
        ))}

      </ul>

    </div>
  );
}