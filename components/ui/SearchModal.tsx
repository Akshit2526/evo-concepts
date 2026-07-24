"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  "APR",
  "Forge",
  "Bilstein",
  "Akrapovič",
  "Milltek",
  "Coilovers",
];

export default function SearchModal({
  isOpen,
  onClose,
}: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[980px]
          h-[295px]
          rounded-[30px]
          border
          border-[#8B42FF]
          bg-[#170021]
          p-12
          shadow-[0_0_70px_rgba(139,66,255,.35)]
        "
      >

        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-8
            top-5
            text-white/60
            transition-all
            duration-300
            hover:rotate-90
            hover:text-white
          "
        >
          <X size={28} />
        </button>

        {/* Heading */}

        <h2
          className="text-center text-white"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "34px",
            fontWeight: 700,
          }}
        >
          SEARCH PRODUCTS
        </h2>

        <p
          className="mt-4 text-center text-white/55"
          style={{
            fontFamily: "var(--font-avenir)",
            fontSize: "17px",
          }}
        >
          Search by brand, category or product name
        </p>

        {/* Search */}

       <div className="mt-10 flex justify-center">
      <div className="relative w-full max-w-[795px]">

         <Search
         size={24}
         className="absolute left-7 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
         />

          <input
  ref={inputRef}
  type="text"
  placeholder="Search Performance Parts..."
  className="
    h-[58px]
    w-200
    rounded-2xl
    border
    border-[#8B42FF]
    bg-transparent
    text-white
    outline-none
    transition-all
    duration-300
    placeholder:text-white/40
  "
  style={{
    fontFamily: "var(--font-avenir)",
    fontSize: "21px",
    paddingLeft: "76px",
    paddingRight: "40px",
  }}
/>  
        </div>
        </div>  

        <div className="h-6"></div> 
             {/* Popular Searches */}

       <div className="mt-24 flex flex-col items-center">

          <h3
            className="mb-9 text-white"
            style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "19px",
              fontWeight: 700,
            }}
          >
            POPULAR SEARCHES
          </h3>
          <div className="h-2"></div>
          <div className="flex flex-wrap justify-center gap-4">

            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                className="
                h-[30px]
                w-[90px]
                  rounded-full
                  border
                  border-[#8B42FF]  
                  text-white/80
                  transition-all
                  duration-300
                  hover:border-[#B56CFF]
                  hover:bg-[#8B42FF]
                  hover:text-white
                  hover:shadow-[0_0_18px_rgba(139,66,255,.35)]
                "
                style={{
                  fontFamily: "var(--font-avenir)",
                  fontSize: "14px",
                }}
              >
                {item}
              </button>
            ))}

          </div>

        </div>


        <div className="h-4"></div>

                  
                     {/* Bottom Text */}

        <div className="mt-20 text-center">
          <p
            className="text-white/45"
            style={{
              fontFamily: "var(--font-avenir)",
              fontSize: "15px",
            }}
          >
            Can't find what you're looking for? Our complete catalogue
            will be available soon with thousands of premium
            performance, OEM and aftermarket parts.
          </p>
        </div>

      </div>
    </div>
    
  );
}   