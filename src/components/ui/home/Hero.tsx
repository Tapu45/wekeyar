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
      <div className="relative z-20 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-16">
        {/* Left: Text & Stats */}
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-white text-4xl md:text-5xl lg:text-[3.5rem] mb-5 leading-tight drop-shadow-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)]">
            Get Flat 20% off on All Medicine Orders
          </h1>
          <p className="text-white text-lg md:text-xl font-medium mb-8 leading-relaxed drop-shadow-md [text-shadow:_1px_1px_3px_rgba(0,0,0,0.4)]">
            We're your local full service pharmacy offering online pharmacy &
            medical store services for people.
          </p>
          <div className="flex items-center gap-8 mt-4 text-white text-base">
            {/* Stat 1 */}
            <div className="flex gap-5 items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all hover:bg-white/15">
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-lg">
                <Image
                  src="/icons/storeM.png"
                  alt="store icon"
                  width={50}
                  height={50}
                  className="object-contain drop-shadow"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-lg font-bold drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.4)]">
                  Ten Stores
                </strong>
                <span className="font-medium text-sm drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                  We have ten stores across Bhubaneswar.
                </span>
              </div>
            </div>
            {/* Separator */}
            <div className="h-[50px] w-px bg-white/30 mx-4" />
            {/* Stat 2 */}
            <div className="flex gap-5 items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all hover:bg-white/15">
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-white/10 rounded-lg">
                <Image
                  src="/icons/4.png"
                  alt="trust icon"
                  width={50}
                  height={50}
                  className="object-contain drop-shadow"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-lg font-bold drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.4)]">
                  Trusted Pharmacy
                </strong>
                <span className="font-medium text-sm drop-shadow [text-shadow:_1px_1px_2px_rgba(0,0,0,0.3)]">
                  Trusted online pharmacy & medical stores.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Carousel with Decorative Elements */}
        <div className="flex flex-col items-center justify-center min-h-[400px] relative">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-tl from-white via-transparent to-transparent rounded-full blur-3xl" />
          </div>

          {/* Premium Glow Effect Background */}
          <div className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-500 hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl blur-xl" />
          </div>

          {/* Decorative Dots Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 520 420">
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

          {/* Premium Accent Circles - Enhanced */}
          <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-white/20 rounded-full pointer-events-none animate-pulse" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-8 w-28 h-28 border-2 border-white/20 rounded-full pointer-events-none animate-pulse" />
          <div className="absolute -bottom-10 -left-2 w-20 h-20 border border-white/10 rounded-full pointer-events-none" />

          {/* Main Image Container - Premium Styling */}
          <div className="relative w-full max-w-[520px] h-[420px] rounded-3xl overflow-hidden shadow-2xl z-10 group">
            {/* Premium Border & Shadow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none z-20 shadow-lg shadow-white/10" />

            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-15" />

            {/* Top Shine Effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />

            {/* Carousel Images */}
            {storeImages.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                fill
                sizes="700px"
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

          {/* Carousel Indicators - Premium Style */}
          <div className="flex gap-3 mt-8 z-20">
            {storeImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full backdrop-blur-sm border ${
                  current === idx
                    ? "w-10 h-3 bg-white/60 border-white/80 shadow-lg shadow-white/30"
                    : "w-3 h-3 bg-white/20 border-white/30 hover:bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none blur-sm" />
        </div>
      </div>
    </section>
  );
}