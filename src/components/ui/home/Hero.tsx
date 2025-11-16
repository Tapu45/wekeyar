"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const storeImages = [
  { src: "/stores/1.jpg", alt: "WeKeyarPlus Store 1" },
  { src: "/stores/2.jpeg", alt: "WeKeyarPlus Store 2" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % storeImages.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover absolute inset-0 pointer-events-none"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Premium Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20 z-5" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text & Stats */}
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-4 sm:mb-5 leading-tight drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
              Get Flat 20% off on All Medicine Orders
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl font-medium mb-6 sm:mb-8 leading-relaxed drop-shadow-md [text-shadow:_1px_1px_3px_rgba(0,0,0,0.4)]">
              We're your local full service pharmacy offering online pharmacy &
              medical store services for people.
            </p>

            {/* Stats Container - Fully Responsive */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 mt-4 text-white text-sm sm:text-base">
              {/* Stat 1 */}
              <div className="w-full sm:w-auto flex gap-3 sm:gap-4 items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 transition-all hover:bg-white/15">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                  <Image
                    src="/icons/storeM.png"
                    alt="store icon"
                    width={40}
                    height={40}
                    className="object-contain drop-shadow"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <strong className="text-base sm:text-lg font-bold drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.4)] leading-tight">
                    Ten Stores
                  </strong>
                  <span className="font-medium text-xs sm:text-sm drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)] leading-tight">
                    Across Bhubaneswar
                  </span>
                </div>
              </div>

              {/* Separator - Hidden on small screens */}
              <div className="hidden sm:block h-12 w-px bg-white/30" />

              {/* Stat 2 */}
              <div className="w-full sm:w-auto flex gap-3 sm:gap-4 items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 transition-all hover:bg-white/15">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                  <Image
                    src="/icons/4.png"
                    alt="trust icon"
                    width={40}
                    height={40}
                    className="object-contain drop-shadow"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <strong className="text-base sm:text-lg font-bold drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.4)] leading-tight">
                    Trusted Pharmacy
                  </strong>
                  <span className="font-medium text-xs sm:text-sm drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)] leading-tight">
                    Online & Medical Store
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Carousel with Decorative Elements */}
          <div className="flex flex-col items-center justify-center w-full relative">
            {/* Decorative Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-white via-transparent to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tl from-white via-transparent to-transparent rounded-full blur-3xl" />
            </div>

            {/* Premium Glow Effect Background */}
            <div className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500 hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl blur-xl" />
            </div>

            {/* Decorative Dots Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 520 420"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="dots"
                    x="40"
                    y="40"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="40" cy="40" r="3" fill="white" />
                  </pattern>
                </defs>
                <rect width="520" height="420" fill="url(#dots)" />
              </svg>
            </div>

            {/* Premium Accent Circles - Responsive */}
            <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-24 sm:w-32 h-24 sm:h-32 border-2 border-white/20 rounded-full pointer-events-none animate-pulse" />
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border border-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 sm:-bottom-16 -left-4 sm:-left-8 w-20 sm:w-28 h-20 sm:h-28 border-2 border-white/20 rounded-full pointer-events-none animate-pulse" />
            <div className="absolute -bottom-8 sm:-bottom-10 -left-1 sm:-left-2 w-16 sm:w-20 h-16 sm:h-20 border border-white/10 rounded-full pointer-events-none" />

            {/* Main Image Container - Responsive */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[520px] aspect-video sm:aspect-auto sm:h-80 lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 group">
              {/* Premium Border & Shadow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/30 pointer-events-none z-20 shadow-lg shadow-white/10" />

              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-15" />

              {/* Top Shine Effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

              {/* Carousel Images */}
              {storeImages.map((img, idx) => (
                <Image
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 520px"
                  className={`object-cover absolute inset-0 transition-all duration-700 ${
                    current === idx
                      ? "opacity-100 z-10 scale-100"
                      : "opacity-0 z-0 scale-95"
                  }`}
                  priority={idx === 0}
                />
              ))}

              {/* Overlay Filter for Consistency */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-5" />
            </div>

            {/* Carousel Indicators - Responsive */}
            <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 z-20">
              {storeImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`transition-all duration-300 rounded-full backdrop-blur-sm border ${
                    current === idx
                      ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-white/60 border-white/80 shadow-lg shadow-white/30"
                      : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/20 border-white/30 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
