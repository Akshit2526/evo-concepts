"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/products/apr-open-pex/1.jpg",
  "/products/apr-open-pex/2.jpg",
  "/products/apr-open-pex/3.jpg",
  "/products/apr-open-pex/4.jpg",
  "/products/apr-open-pex/5.jpg",
  "/products/apr-open-pex/6.jpg",
  "/products/apr-open-pex/7.jpg",
  "/products/apr-open-pex/8.jpg",
];

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "ArrowRight") emblaApi.scrollNext();
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [emblaApi]);

  return (
    <div className="relative ml-50 w-fit">

      <div
  className="
    relative
    h-[460px]
    w-[660px]
    overflow-hidden
    rounded-[100px]
    border
    border-[#8B42FF]/35
    bg-white
    shadow-[0_0_55px_rgba(111,32,255,.18)]
  "
>
      
        <div
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {images.map((src) => (
              <div
                key={src}
                className="
                  relative
                  min-w-0
                  flex-[0_0_100%]
                "
              >
                  <div className="relative flex h-[460px] w-full items-center justify-center">
                  <Image
                    src={src}
                    alt="APR Open PEX"
                    fill
                    priority
                     className="
                     object-contain
                     p-20
                     select-none
                    scale-[0.82]
                  "
                    draggable={false}
                  />

                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            h-12
            w-12
            rounded-full
            border
            border-white/20
            bg-black/45
            text-xl
            text-white
            backdrop-blur
            transition
            hover:bg-[#6E1EFF]
          "
        >
          ‹
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            h-12
            w-12
            rounded-full
            border
            border-white/20
            bg-black/45
            text-xl
            text-white
            backdrop-blur
            transition
            hover:bg-[#6E1EFF]
          "
        >
          ›
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
              h-3
              rounded-full
              transition-all
              duration-300
              ${
                index === selectedIndex
                  ? "w-10 bg-[#6E1EFF]"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }
            `}
          />
        ))}
      </div>

    </div>
  );
}