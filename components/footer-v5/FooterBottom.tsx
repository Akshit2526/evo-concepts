export default function FooterBottom() {
  return (
<section
  className="
    absolute
    left-1/2
    -translate-x-1/2
    top-[840px]
    w-[1460px]
  "
> 
      <div className="mx-auto max-w-[1600px]">

        <div className="relative flex items-center justify-center">

          {/* Left Gradient Line */}

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              via-[#8B42FF]/50
              to-transparent
            "
          />

          {/* Center */}

          <div className="mx-10 text-center">

            <p
              className="
                text-[15px]
                font-medium
                text-zinc-400
              "
            >
              © 2026 EVO CONCEPTS. All Rights Reserved.
            </p>

            <p
              className="
                mt-3
                text-[13px]
                uppercase
                tracking-[4px]
                text-[#8B42FF]
              "
            >
              Crafted For Enthusiasts • Built For Performance
            </p>

          </div>

          {/* Right Gradient Line */}

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              via-[#8B42FF]/50
              to-transparent
            "
          />

        </div>

      </div>

    </section>
  );
}