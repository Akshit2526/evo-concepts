import {
  ShoppingBag,
  ShieldCheck,
  Building2,
  PhoneCall,
    Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";
import FooterFeatureStrip from "./FooterFeatureStrip";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-[1800px]">
        <div className="relative min-h-[900px] rounded-[32px] bg-[#0F0918]">
            

          {/* ========================= */}
          {/* BRAND */}
          {/* ========================= */}

          <div
            className="
              absolute
              left-[50px]
              top-[69px]
            "
          >
        <Image
  src="/footer/footer-logo.png"
  alt="EVO Concepts"
  width={220}
  height={76}
  priority
  className="select-none"
 />

            
          </div>

          <p
            className="
              absolute
              left-[50px]
              top-[190px]
              w-[275px]
              text-[17px]
              leading-[24px]
              text-zinc-400
            "
          >
            Premium performance parts for those
            who demand more. Engineered for
            enthusiasts, built for performance.
          </p>




          <div
  className="
    absolute
    left-[50px]
    top-[300px]
    flex
    items-center
    gap-5
  "
>
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-[54px]
      w-[54px]
      items-center
      justify-center
      rounded-full
      border
      border-[#8B42FF]/40
      bg-[#1A1326]
      transition-all
      duration-300
      hover:border-[#8B42FF]
      hover:shadow-[0_0_20px_rgba(139,66,255,0.35)]
      hover:-translate-y-1
    "
  >
    <img
      src="/footer/facebook.svg"
      alt="Facebook"
      className="h-[24px] w-[24px]"
    />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-[54px]
      w-[54px]
      items-center
      justify-center
      rounded-full
      border
      border-[#8B42FF]/40
      bg-[#1A1326]
      transition-all
      duration-300
      hover:border-[#8B42FF]
      hover:shadow-[0_0_20px_rgba(139,66,255,0.35)]
      hover:-translate-y-1
    "
  >
    <img
      src="/footer/instagram.svg"
      alt="Instagram"
      className="h-[24px] w-[24px]"
    />
  </a>
</div>

          {/* ========================= */}
          {/* SHOP */}
          {/* ========================= */}

          <div
            className="
              absolute
              left-[420px]
              top-[72px]
            "
          >
            <div className="flex items-center gap-3">

              <ShoppingBag
                size={25}
                strokeWidth={1.8}
                className="text-[#8B42FF]"
              />

              <div className="flex flex-col">

                <h3
                  className="
                    font-[var(--font-orbitron)]
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[2px]
                    text-white
                    whitespace-nowrap
                  "
                >
                  SHOP
                </h3>

                <div
                  className="
                    mt-2
                    h-[3px]
                    w-[65px]
                    rounded-full
                    bg-[#8B42FF]
                  "
                />

              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* SUPPORT */}
          {/* ========================= */}
                    <div
            className="
              absolute
              left-[670px]
              top-[72px]
            "
          >
            <div className="flex items-center gap-3">

              <ShieldCheck
                size={25}
                strokeWidth={1.8}
                className="text-[#8B42FF]"
              />

              <div className="flex flex-col">

                <h3
                  className="
                    font-[var(--font-orbitron)]
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[2px]
                    text-white
                    whitespace-nowrap
                  "
                >
                  SUPPORT
                </h3>

                <div
                  className="
                    mt-2
                    h-[3px]
                    w-[109px]
                    rounded-full
                    bg-[#8B42FF]
                  "
                />

              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* COMPANY */}
          {/* ========================= */}

          <div
            className="
              absolute
              left-[950px]
              top-[72px]
            "
          >
            <div className="flex items-center gap-3">

              <Building2
                size={25}
                strokeWidth={1.8}
                className="text-[#8B42FF]"
              />

              <div className="flex flex-col">

                <h3
                  className="
                    font-[var(--font-orbitron)]
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[2px]
                    text-white
                    whitespace-nowrap
                  "
                >
                  COMPANY
                </h3>

                <div
                  className="
                    mt-2
                    h-[3px]
                    w-[117px]
                    rounded-full
                    bg-[#8B42FF]
                  "
                />

              </div>

            </div>
          </div>

          {/* ========================= */}
          {/* CONTACT */}
          {/* ========================= */}

          <div
            className="
              absolute
              left-[1220px]
              top-[72px]
            "
          >
            <div className="flex items-center gap-3">

              <PhoneCall
                size={25}
                strokeWidth={1.8}
                className="text-[#8B42FF]"
              />

              <div className="flex flex-col">

                <h3
                  className="
                    font-[var(--font-orbitron)]
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[2px]
                    text-white
                    whitespace-nowrap
                  "
                >
                  CONTACT
                </h3>

                <div
                  className="
                    mt-2
                    h-[3px]
                    w-[110px]
                    rounded-full
                    bg-[#8B42FF]
                  "
                />

              </div>
              

            </div>
            
          </div>
          

          {/* ========================= */}
          {/* SHOP LINKS */}
          {/* ========================= */}

          <p className="absolute left-[420px] top-[128px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            Performance Parts
          </p>

          <p className="absolute left-[420px] top-[168px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            VAG Parts
          </p>

          <p className="absolute left-[420px] top-[208px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            Interior
          </p>

          <p className="absolute left-[420px] top-[248px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            Exterior
          </p>

          <p className="absolute left-[420px] top-[288px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            Lighting
          </p>

          <p className="absolute left-[420px] top-[328px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
            Audio & Electronics
          </p>


          

          {/* ========================= */}
          {/* SUPPORT LINKS */}
          {/* ========================= */}
                    <Link
  href="/shipping-policy"
  className="absolute left-[670px] top-[128px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Shipping Policy
</Link>

<Link
  href="/refund-policy"
  className="absolute left-[670px] top-[168px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Refund Policy
</Link>

<Link
  href="/privacy-policy"
  className="absolute left-[670px] top-[208px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Privacy Policy
</Link>

<Link
  href="/terms"
  className="absolute left-[670px] top-[248px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Terms & Conditions
</Link>

<Link
  href="/support"
  className="absolute left-[670px] top-[288px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Support
</Link>




          {/* ========================= */}
          {/* COMPANY LINKS */}
          {/* ========================= */}

    <Link
  href="/about"
  className="absolute left-[950px] top-[128px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  About Us
</Link>

<Link
  href="/about#our-story"
  className="absolute left-[950px] top-[168px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Our Story
</Link>

<Link
  href="/about#why-choose-us"
  className="absolute left-[950px] top-[208px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Why Choose Us
</Link>

<Link
  href="/partner-with-evo-concepts"
  className="absolute left-[950px] top-[248px] text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300"
>
  Partner With EVO Concepts
</Link>


          {/* ========================= */}
          {/* CONTACT LINKS */}
          {/* ========================= */}

    
   <div className="absolute left-[1220px] top-[128px] flex items-center gap-3">
  <Phone
    size={18}
    strokeWidth={1.8}
    className="text-[#8B42FF]"
  />

  <p className="text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
    +91 98765 43210
  </p>
</div>


         <div className="absolute left-[1220px] top-[168px] flex items-center gap-3">
  <Mail
    size={18}
    strokeWidth={1.8}
    className="text-[#8B42FF]"
  />

  <p className="text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
    support@evoconcepts.in
  </p>
</div>




          <div className="absolute left-[1220px] top-[208px] flex items-center gap-3">
  <MapPin
    size={18}
    strokeWidth={1.8}
    className="text-[#8B42FF]"
  />

  <p className="text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
    Ahmedabad, Gujarat
  </p>
</div>





          <div className="absolute left-[1220px] top-[248px] flex items-center gap-3">
  <Clock3
    size={18}
    strokeWidth={1.8}
    className="text-[#8B42FF]"
  />

  <p className="text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
    Mon - Sat : 10AM - 7PM
  </p>
</div>

 

          <div className="absolute left-[1220px] top-[288px] flex items-center gap-3">
  <MessageCircle
    size={18}
    strokeWidth={1.8}
    className="text-[#8B42FF]"
  />

  <p className="text-[16px] text-zinc-400 hover:text-violet-500 transition-all duration-300 cursor-pointer">
    WhatsApp Support
  </p>
  
</div>
          

          {/* ========================= */}
          {/* FEATURE STRIP */}
          {/* ========================= */}

          <FooterFeatureStrip />
          <FooterNewsletter /> 
          <FooterBottom />

          </div>

          
      </div>
      
    </footer>
  );
}