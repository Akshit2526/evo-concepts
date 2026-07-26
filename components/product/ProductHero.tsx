"use client";

import ImageCarousel from "./ImageCarousel";
import PurchaseSection from "./PurchaseSection";

export default function ProductHero() {
  return (
     <section className="mx-auto w-fit pt-16 pb-28 translate-x-12">

      

      <div className="flex items-start">

        {/* LEFT */}

        <div className="w-[660px] shrink-0">

          <ImageCarousel />

        </div>

        {/* GAP */}

        <div className="w-[150px]" />

        {/* RIGHT */}

        <div
  className="flex-1"
  style={{ marginTop: "-35px" }}
>

          <h1
            className="text-white uppercase tracking-[-0.03em]"
            style={{
              fontFamily: "Avenir Medium",
              fontSize: "32px",
              lineHeight: "52px",
            }}
          >
            APR 1.5 TSI OPEN PEX INTAKE SYSTEM
          </h1>
          <div className="h-0" />
          <p
            className="mt-8 max-w-[600px] text-[#E5E5E5]"
            style={{
              fontFamily: "Avenir Roman",
              fontSize: "18px",
              lineHeight: "26px",
            }}
          >
            The APR Open PEX Intake System is the best dollar-per-horsepower intake
            system for the 1.5 TSI Engine!
          </p>
         
         <div className="h-4" />

          <div
            className="mt-12 space-y-6"
            style={{
              fontFamily: "Avenir Roman",
              fontSize: "18px",
            }}
          >

            <div className="flex items-center h-9">

              <span className="w-[140px] text-[#A4A4A4]">
                Vendor :
              </span>

              <span className="text-white">
                EVO CONCEPTS INDIA
              </span>

            </div>

            <div className="flex items-center">

              <span className="w-[140px] text-[#A4A4A4]">
                SKU :
              </span>

              <span className="text-white">
                CI100063
              </span>

            </div>

            <div className="flex items-center">

              <span className="w-[140px] text-[#A4A4A4]">
                Product Type :
              </span>

              <span className="text-white">
                Air Intake
              </span>

            </div>

          </div>
       
         <div className="h-5" />

          <PurchaseSection />

        </div>

      </div>

    </section>
  );
}