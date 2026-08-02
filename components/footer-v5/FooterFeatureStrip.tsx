import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    subtitle: "Genuine Performance Parts",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    subtitle: "Across India",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    subtitle: "Trusted Global Brands",
  },
  {
    icon: Headset,
    title: "Expert Support",
    subtitle: "Before & After Purchase",
  },
];

export default function FooterFeatureStrip() {
  return (
<section
  className="
    absolute
    left-1/2
    -translate-x-1/2
    top-[430px]
    w-[1380px]
  "
>      
<div
        className="
          mx-auto
          max-w-[1600px]
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          overflow-hidden
        "
      >
        <div className="grid grid-cols-4 divide-x divide-white/10">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-8
                  py-10
                  transition-all
                  duration-500
                  hover:bg-white/[0.02]
                "
              >
                {/* Purple Accent */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[3px]
                    w-0
                    bg-[#8B42FF]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#8B42FF]/10
                    transition-all
                    duration-500
                    group-hover:border-[#8B42FF]/40
                    group-hover:shadow-[0_0_30px_rgba(139,66,255,.25)]
                  "
                >
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="
                      text-[#B884FF]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-7
                    font-[var(--font-orbitron)]
                    text-[18px]
                    font-semibold
                    tracking-[1px]
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Subtitle */}

                <p
                  className="
                    mt-3
                    text-center
                    text-[15px]
                    leading-7
                    text-zinc-400
                  "
                >
                  {feature.subtitle}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}