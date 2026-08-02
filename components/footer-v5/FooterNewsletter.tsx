import Image from "next/image";
import { Mail } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <section
  className="
    absolute
    left-1/2
    -translate-x-1/2
    top-[650px]
    w-[1380px]
  "
> 
      <div className="relative flex items-center justify-between py-10">

 {/* Top Fade Line */}
        
          <div
      className="
        absolute
        top-[-15px]
        left-0
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-[#8B42FF]/60
        to-transparent
      "
    />

        {/* Left */}
        <div className="flex items-center gap-6">
          <div
            className="
              flex
              h-[72px]
              w-[72px]
              items-center
              justify-center
              rounded-full
              border
              border-[#8B42FF]/30
              bg-[#8B42FF]/10
            "
          >

            
            <Mail
              size={34}
              strokeWidth={1.8}
              className="text-[#8B42FF]"
            />
          </div>

          <div>
            <h2
              className="
                font-[var(--font-orbitron)]
                text-[21px]
                font-black
                uppercase
                tracking-[2px]
                text-violet-500
              "
            >
              STAY IN THE LOOP
            </h2>

            <p className="mt-2 max-w-[320px] text-[14px] leading-7 text-zinc-400">
              Get exclusive offers, new product launches and performance
              updates delivered to your inbox.
            </p>
          </div>
        </div>

        {/* Center */}
<div className="flex items-center">

  <div
    className="
      flex
      h-[58px]
      overflow-hidden
      rounded-[14px]
      border
      border-white/10
      bg-[#0F0918]
    "
  >

    <input
      type="email"
      placeholder="Enter your email address"
      className="
        h-full
        w-[360px]
        border-none
        bg-transparent
        pl-[20px]
        pr-[20px]
        text-left
        text-[16px]
        text-white
        placeholder:text-zinc-500
        placeholder:tracking-[0.4px]
        outline-none
      "
    />

    <button
      className="
        h-full
        w-[175px]
        bg-gradient-to-b
        from-[#B15CFF]
        to-[#8B42FF]
        font-[var(--font-orbitron)]
        text-[15px]
        font-bold
        uppercase
        tracking-[1px]
        text-white
        transition-all
        duration-300
        hover:brightness-110
      "
    >
      SUBSCRIBE
    </button>

  </div>

</div>
        {/* Right */}
 {/* Bottom Fade Line */}
  <div
    className="
      absolute
      bottom-[-15px]
      left-0
      h-px
      w-full
      bg-gradient-to-r
      from-transparent
      via-[#8B42FF]/60
      to-transparent
    "
  />

  {/* Divider */}
  <div className="mr-10 h-[80px] w-px bg-white/10" />

  <div className="flex flex-col">

    <h3
      className="
        mb-5
        font-[var(--font-orbitron)]
        text-[15px]
        font-black
        uppercase
        tracking-[1px]
        text-white
      "
    >
      WE ACCEPT
    </h3>

    <div className="flex items-center gap-6">

      <Image
        src="/footer/visa.png"
        alt="Visa"
        width={64}
        height={26}
        className="
          h-[26px]
          w-auto
          object-contain
          transition-all
          duration-300
          hover:scale-105
        "
      />

      <Image
        src="/footer/mastercard.png"
        alt="Mastercard"
        width={64}
        height={26}
        className="
          h-[26px]
          w-auto
          object-contain
          transition-all
          duration-300
          hover:scale-105
        "
      />

      <Image
        src="/footer/paypal.png"
        alt="PayPal"
        width={64}
        height={26}
        className="
          h-[26px]
          w-auto
          object-contain
          transition-all
          duration-300
          hover:scale-105
        "
      />

      <Image
        src="/footer/upi.png"
        alt="UPI"
        width={64}
        height={26}
        className="
          h-[26px]
          w-auto
          object-contain
          transition-all
          duration-300
          hover:scale-105
        "
      />

      <Image
        src="/footer/gpay.png"
        alt="Google Pay"
        width={64}
        height={26}
        className="
          h-[26px]
          w-auto
          object-contain
          transition-all
          duration-300
          hover:scale-105
        "
      />

    </div>

  </div>

</div>


    </section>
  );
}