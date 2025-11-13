"use client";

import React from "react";

const FoundersNote = () => {
  return (
    <section className="relative py-6 md:py-6 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          opacity: 0.68,
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      ></div>
      {/* Subtle Decorative Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-50 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3 inline-block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            A Message from Our <span className="text-red-600">Founder</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>

        {/* Main Container - Unified Design */}
        <div className="bg-gradient-to-br from-gray-50/50 to-gray-50/30 border border-gray-200/50 rounded-3xl p-4 md:p-8 lg:p-8 shadow-lg backdrop-blur-sm">
          {/* Content Grid - Left and Right aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Text Content - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-2">
                <span className="text-6xl text-red-600/10 font-serif select-none leading-none flex-shrink-0">
                  "
                </span>
                <div className="space-y-4">
                  <p
                    className="text-lg md:text-xl text-gray-800 leading-relaxed font-light mt-0"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    At WeKeyar
                    <span className="text-green-600 font-semibold">Plus</span>,
                    we believe that healthcare should be accessible, reliable,
                    and delivered with genuine care. Our mission is simple yet
                    profound: to bring authentic medicines and compassionate
                    service to your doorstep.
                  </p>
                  <p
                    className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    With nine strategically positioned locations across
                    Bhubaneswar, we've established a trusted network serving
                    thousands of families daily. From prescription medications
                    to premium wellness products, we guarantee 100% authenticity
                    and exceptional value.
                  </p>
                  <p
                    className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                    style={{ fontFamily: "Lora, serif" }}
                  >
                    Your wellbeing remains our highest priority, and your trust
                    is our most valued asset. We're honored to be your
                    healthcare partner.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Abstract Founder Portrait - Square Frame */}
            <div className="lg:col-span-1 flex items-start justify-center">
              <svg
                className="w-full max-w-[280px] drop-shadow-xl"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="bgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f0fdf4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#dcfce7" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient
                    id="accentGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#991b1b" stopOpacity="0.7" />
                  </linearGradient>
                  <linearGradient
                    id="skinGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#d4a574" />
                    <stop offset="100%" stopColor="#c9985c" />
                  </linearGradient>
                </defs>

                {/* Background Rectangle - Modern Frame */}
                <rect
                  x="40"
                  y="30"
                  width="320"
                  height="340"
                  fill="url(#bgGradient)"
                  rx="20"
                />
                <rect
                  x="40"
                  y="30"
                  width="320"
                  height="340"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  opacity="0.2"
                  rx="20"
                />

                {/* Premium Corner Accents */}
                <line
                  x1="60"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="60"
                  y1="50"
                  x2="60"
                  y2="95"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />

                <line
                  x1="340"
                  y1="50"
                  x2="300"
                  y2="50"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="340"
                  y1="50"
                  x2="340"
                  y2="95"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />

                <line
                  x1="60"
                  y1="350"
                  x2="60"
                  y2="305"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="60"
                  y1="350"
                  x2="100"
                  y2="350"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />

                <line
                  x1="340"
                  y1="350"
                  x2="340"
                  y2="305"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />
                <line
                  x1="340"
                  y1="350"
                  x2="300"
                  y2="350"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  opacity="0.5"
                  strokeLinecap="round"
                />

                {/* Abstract Portrait Silhouette */}
                <g transform="translate(200, 150)">
                  {/* Head - Gradient */}
                  <circle cx="0" cy="0" r="50" fill="url(#skinGradient)" />

                  {/* Hair */}
                  <path
                    d="M -50 -5 Q -50 -45 0 -50 Q 50 -45 50 -5"
                    fill="#2c1810"
                    opacity="0.95"
                  />

                  {/* Face Features */}
                  <circle cx="-15" cy="-8" r="4" fill="#1f2937" opacity="0.8" />
                  <circle cx="15" cy="-8" r="4" fill="#1f2937" opacity="0.8" />
                  <path
                    d="M -5 8 Q 0 12 5 8"
                    stroke="#8b5a3c"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.7"
                  />

                  {/* Shoulders & Upper Body */}
                  <path
                    d="M -65 85 Q -65 50 -50 50 L -25 50 Q -12 50 0 55 Q 12 50 25 50 L 50 50 Q 65 50 65 85 L 65 160 L -65 160 Z"
                    fill="#1f2937"
                    opacity="0.95"
                  />

                  {/* Shirt/Collar */}
                  <path
                    d="M -20 50 L 0 70 L 20 50"
                    fill="#ffffff"
                    opacity="0.95"
                  />

                  {/* Tie - Premium Red */}
                  <path
                    d="M -8 55 L -12 90 L 0 135 L 12 90 L 8 55 Z"
                    fill="url(#accentGradient)"
                    filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))"
                  />

                  {/* Tie Pattern */}
                  <line
                    x1="-8"
                    y1="70"
                    x2="8"
                    y2="70"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.25"
                  />
                  <line
                    x1="-10"
                    y1="85"
                    x2="10"
                    y2="85"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                </g>

                {/* Medical Cross Badge */}
                <g transform="translate(310, 110)">
                  <circle cx="0" cy="0" r="35" fill="#22c55e" opacity="0.15" />
                  <circle
                    cx="0"
                    cy="0"
                    r="30"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <rect
                    x="-4"
                    y="-16"
                    width="8"
                    height="32"
                    fill="#22c55e"
                    opacity="0.85"
                    rx="2"
                  />
                  <rect
                    x="-16"
                    y="-4"
                    width="32"
                    height="8"
                    fill="#22c55e"
                    opacity="0.85"
                    rx="2"
                  />
                </g>

                {/* Trust Shield Badge */}
                <g transform="translate(100, 300)">
                  <path
                    d="M 0 0 L -22 8 L -22 28 Q -22 42 0 50 Q 22 42 22 28 L 22 8 Z"
                    fill="#dc2626"
                    stroke="#dc2626"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <path
                    d="M -8 20 L -2 28 L 11 15"
                    stroke="#dc2626"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </g>

                {/* Accent Dots - Enhanced */}
                <circle
                  cx="100"
                  cy="90"
                  r="5.5"
                  fill="#22c55e"
                  opacity="0.55"
                />
                <circle cx="310" cy="320" r="7" fill="#dc2626" opacity="0.45" />
                <circle cx="80" cy="290" r="4.5" fill="#22c55e" opacity="0.5" />
              </svg>
            </div>
          </div>

          {/* Signature Section - Separate Below Content */}
          <div className="mt-12 pt-8 border-t border-gray-300/40">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-3">
              Sincerely
            </p>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Rameswar Panda
              </p>
              <p className="text-base font-semibold text-gray-700 mb-1">
                Founder & CEO
              </p>
              <p className="text-sm text-gray-600">
                WeKeyarPlus Pharmacy Network
              </p>
              <div className="mt-4 w-32 border-t-2 border-red-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
