"use client";

import { useState } from "react";

import ProductTabs from "./ProductTabs";
import DescriptionContent from "./DescriptionContent";
import FeaturesList from "./FeaturesList";
import ShippingReturn from "./ShippingReturn";

export default function ProductInfo() {
  const [activeTab, setActiveTab] = useState<
    "description" | "shipping"
  >("description");

  return (
    <section className="w-full pt-[130px] pb-[140px]">

      {/* ---------- Tabs ---------- */}

      <div className="w-full">

        <div style={{ height: "100px" }} />
        <ProductTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* ---------- Content ---------- */}

      <div
  
  style={{
    marginLeft: "60px",
    marginRight: "60px",
    marginTop: "60px",
  }}
>
 

          {activeTab === "description" ? (
            <>
              <DescriptionContent />

           <div
           style={{
           marginTop: "30px",
           }}
           >

                <FeaturesList />
              </div>
            </>
          ) : (
            <ShippingReturn />
          )}

        </div>

      

    </section>
  );
}