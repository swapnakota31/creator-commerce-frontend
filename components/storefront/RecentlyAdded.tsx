"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { useStore } from "@/lib/StoreContext";

export default function RecentlyAdded() {
  const { recentProducts } = useStore();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Re-init when products change (new product added)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
      setSelectedIndex(0);
    }
  }, [recentProducts.length, emblaApi]);

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Recently Added
            </h2>
            {/* Live indicator */}
            <span
              className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-emerald-50
              border
              border-emerald-100
              px-2.5
              py-1
              text-[11px]
              font-semibold
              text-emerald-600
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Fresh recommendations added this week.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={scrollPrev}
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-600
            transition-all
            duration-300
            hover:bg-violet-600
            hover:text-white
            hover:border-violet-600
            "
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={scrollNext}
            className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            text-slate-600
            transition-all
            duration-300
            hover:bg-violet-600
            hover:text-white
            hover:border-violet-600
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {recentProducts.map((product) => (
            <div
              key={product.id}
              className="
              min-w-full
              md:min-w-[48%]
              lg:min-w-[33.33%]
              px-2
              "
            >
              <div
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-200
                hover:shadow-[0_12px_32px_rgba(124,58,237,0.14)]
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="
                    h-44
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                  />
                  {/* NEW badge */}
                  {product.isNew && (
                    <span
                      className="
                      absolute
                      top-3
                      left-3
                      inline-flex
                      items-center
                      gap-1
                      rounded-full
                      bg-gradient-to-r
                      from-violet-600
                      to-fuchsia-500
                      px-2.5
                      py-1
                      text-[11px]
                      font-bold
                      text-white
                      shadow-md
                      "
                    >
                      <Zap size={10} fill="white" />
                      JUST ADDED
                    </span>
                  )}
                  {!product.isNew && (
                    <span
                      className="
                      absolute
                      top-3
                      left-3
                      rounded-full
                      bg-violet-50
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      text-violet-600
                      border
                      border-violet-100
                      "
                    >
                      NEW
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex h-[126px] flex-col p-3.5">
                  <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {product.creatorNote}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-semibold text-violet-600">
                      via {product.affiliatePlatform}
                    </span>

                    <a
                      href={product.affiliateUrl}
                      className="
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-slate-700
                      transition-all
                      duration-300
                      group-hover:bg-violet-600
                      group-hover:text-white
                      "
                    >
                      View →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {recentProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`
              rounded-full
              transition-all
              duration-300
              ${
                selectedIndex === index
                  ? "h-2 w-6 bg-violet-600"
                  : "h-2 w-2 bg-slate-200 hover:bg-slate-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}