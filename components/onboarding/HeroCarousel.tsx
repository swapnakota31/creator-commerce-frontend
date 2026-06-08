"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  { id: 1, src: "/onboarding/slide1.png", alt: "Create Your Storefront" },
  { id: 2, src: "/onboarding/slide2.png", alt: "Add Your First Product" },
  { id: 3, src: "/onboarding/slide3.png", alt: "AI Organizes Products" },
  { id: 4, src: "/onboarding/slide4.png", alt: "Launch Your Store" },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (touchEnd - touchStart > 50) {
      // Swiped right
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="mb-8 w-full">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(161,0,255,0.12)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Container */}
        <div className="relative w-full overflow-hidden bg-white">
          <div className="relative h-60 sm:h-64 w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 pb-6 pt-4 bg-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] w-8"
                  : "bg-[#D1D5DB] w-2.5 hover:bg-[#9CA3AF]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
