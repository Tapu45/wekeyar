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
        <div className="absolute inset-0 w-full h-full bg-[#087056]/80 z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-16">
        {/* Left: Text & Stats */}
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-white text-4xl md:text-5xl lg:text-[3.5rem] mb-5 leading-tight drop-shadow">
            Get Flat 20% off on All Medicine Orders
          </h1>
          <p className="text-white text-lg md:text-xl font-medium mb-8 leading-relaxed drop-shadow">
            We're your local full service pharmacy offering online pharmacy &
            medical store services for people.
          </p>
          <div className="flex items-center gap-8 mt- text-white text-base">
            {/* Stat 1 */}
            <div className="flex gap-5 items-center">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/icons/storeM.png"
                  alt="store icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-lg font-bold">Nine Stores</strong>
                <span className="font-medium text-sm">
                  We have seven stores across Bhubaneswar.
                </span>
              </div>
            </div>
            {/* Separator */}
            <div className="h-[50px] w-px bg-white/30 mx-4" />
            {/* Stat 2 */}
            <div className="flex gap-5 items-center">
              <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Image
                  src="/icons/4.png"
                  alt="trust icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-lg font-bold">Trusted Pharmacy</strong>
                <span className="font-medium text-sm">
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

          {/* Accent Circles */}
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/20 rounded-full pointer-events-none" />
          <div className="absolute bottom-16 left-5 w-16 h-16 border-2 border-white/20 rounded-full pointer-events-none" />

          {/* Main Image Container */}
          <div className="w-full max-w-[520px] h-[420px] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            {storeImages.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                fill
                sizes="700px"
                className={`object-cover absolute inset-0 transition-opacity duration-700 ${
                  current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                priority={idx === 0}
              />
            ))}
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
