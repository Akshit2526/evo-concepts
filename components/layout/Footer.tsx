import Container from "./Container";
import FooterColumn from "./FooterColumn";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#6E1EFF] bg-[#170021]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A2BFF]/10 blur-[180px]" />
      </div>

      <Container className="relative pt-20 pb-14">

        <div className="flex items-start gap-17">

          {/* LEFT SIDE */}
<div className="flex gap-20">
            {/* SHOP */}
  <div className="flex items end gap-20">
    .   
              <FooterColumn
                title="SHOP"
                links={[
                  {
                    label: "Performance Parts",
                    href: "#",
                  },
                  {
                    label: "VAG Parts",
                    href: "#",
                  },
                  {
                    label: "Interior",
                    href: "#",
                  },
                  {
                    label: "Exterior",
                    href: "#",
                  },
                  {
                    label: "Lighting",
                    href: "#",
                  },
                  {
                    label: "Audio & Electronics",
                    href: "#",
                  },
                ]}
              />

            </div>

            {/* CUSTOMER SERVICE */}

  <div className="ml-20 flex gap-20">
              <FooterColumn
                title="CUSTOMER SERVICE"
                links={[
                  {
                    label: "About Us",
                    href: "#",
                  },
                  {
                    label: "Contact Us",
                    href: "#",
                  },
                  {
                    label: "Shipping Policy",
                    href: "#",
                  },
                  {
                    label: "Return Policy",
                    href: "#",
                  },
                  {
                    label: "Privacy Policy",
                    href: "#",
                  },
                  {
                    label: "Terms & Conditions",
                    href: "#",
                  },
                ]}
              />

            </div>

            {/* CONTACT */}

    <div className="w-[320px] shrink-0">

              <h3 className="mb-7 font-orbitron text-[23px] font-bold uppercase tracking-[3px] text-white">
                CONTACT
              </h3>

              <div className="space-y-5 font-avenir text-[19px] text-white/80">

                <div className="flex items-center gap-4">
                  <Phone
                    size={19}
                    className="text-[#B56CFF]"
                  />
                  <span>+91 9106001647</span>
                </div>

                <div className="flex items-center gap-4">
                  <Mail
                    size={19}
                    className="text-[#B56CFF]"
                  />
                  <span>
                    evoconceptsindia@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-4">

                  <MapPin
                    size={19}
                    className="mt-1 text-[#B56CFF]"
                  />

                  <span>
                    Ahmedabad,
                    <br />
                    Gujarat, India
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* PAYMENT */}


  <div className="ml-auto flex w-[300px] flex-col items-start gap-9">

            <h3 className="mb-7 whitespace-nowrap font-orbitron text-[23px] font-bold uppercase tracking-[3px] text-white">
              PAYMENT GATEWAY
            </h3>

            <div className="flex items-center gap-3"> 

                          <div className="flex h-[42px] w-[74px] items-center justify-center rounded-sm bg-white">
                <Image
                  src="/payment/visa.png"
                  alt="Visa"
                  width={58}
                  height={22}
                />
              </div>

              <div className="flex h-[42px] w-[74px] items-center justify-center rounded-sm bg-white">
                <Image
                  src="/payment/mastercard.png"
                  alt="MasterCard"
                  width={58}
                  height={22}
                />
              </div>

              <div className="flex h-[42px] w-[74px] items-center justify-center rounded-sm bg-white">
                <Image
                  src="/payment/paypal.png"
                  alt="PayPal"
                  width={58}
                  height={22}
                />
              </div>

              <div className="flex h-[42px] w-[74px] items-center justify-center rounded-sm bg-white">
                <Image
                  src="/payment/gpay.png"
                  alt="Google Pay"
                  width={58}
                  height={22}
                />
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex items-center justify-center pt-8">

          <p className="font-avenir text-[18px] text-white/60">
            © 2026 EVO CONCEPTS. All Rights Reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
}