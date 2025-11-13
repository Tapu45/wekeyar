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

      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100 via-red-50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-green-100 via-green-50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-50 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Medical Icons Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Medical Crosses */}
          <g opacity="0.6">
            <rect
              x="100"
              y="50"
              width="3"
              height="20"
              fill="#22c55e"
              rx="1.5"
            />
            <rect
              x="91.5"
              y="58.5"
              width="20"
              height="3"
              fill="#22c55e"
              rx="1.5"
            />

            <rect
              x="85%"
              y="15%"
              width="3"
              height="20"
              fill="#dc2626"
              rx="1.5"
            />
            <rect
              x="calc(85% - 8.5px)"
              y="calc(15% + 8.5px)"
              width="20"
              height="3"
              fill="#dc2626"
              rx="1.5"
            />

            <rect
              x="20%"
              y="80%"
              width="3"
              height="20"
              fill="#22c55e"
              rx="1.5"
            />
            <rect
              x="calc(20% - 8.5px)"
              y="calc(80% + 8.5px)"
              width="20"
              height="3"
              fill="#22c55e"
              rx="1.5"
            />
          </g>

          {/* Pills */}
          <g opacity="0.5">
            <ellipse cx="15%" cy="25%" rx="15" ry="8" fill="#dc2626" />
            <ellipse cx="90%" cy="70%" rx="15" ry="8" fill="#22c55e" />
          </g>

          {/* Heartbeat Lines */}
          <g opacity="0.4" stroke="#dc2626" strokeWidth="2" fill="none">
            <path d="M 50 120 L 70 120 L 80 100 L 90 140 L 100 120 L 120 120" />
            <path d="M calc(80% - 50px) calc(90% - 20px) L calc(80% - 30px) calc(90% - 20px) L calc(80% - 20px) calc(90% - 40px) L calc(80% - 10px) calc(90%) L calc(80%) calc(90% - 20px) L calc(80% + 20px) calc(90% - 20px)" />
          </g>
        </svg>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="0"
            cy="0"
            r="150"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.5"
          />
          <circle
            cx="0"
            cy="0"
            r="90"
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="90"
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.5"
          />
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

        {/* Main Container - Premium Design */}
        <div className="relative bg-white/80 border-2 border-gray-200/60 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-50/40 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-50/40 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          {/* Watermark Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="watermark"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <text
                    x="10"
                    y="50"
                    fontSize="12"
                    fill="#000"
                    opacity="0.5"
                    fontWeight="bold"
                    transform="rotate(-45 50 50)"
                  >
                    WeKeyarPlus
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#watermark)" />
            </svg>
          </div>

          <div className="relative z-10">
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
                      <span className="text-green-600 font-semibold">Plus</span>
                      , we believe that healthcare should be accessible,
                      reliable, and delivered with genuine care. Our mission is
                      simple yet profound: to bring authentic medicines and
                      compassionate service to your doorstep.
                    </p>
                    <p
                      className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      With nine strategically positioned locations across
                      Bhubaneswar, we've established a trusted network serving
                      thousands of families daily. From prescription medications
                      to premium wellness products, we guarantee 100%
                      authenticity and exceptional value.
                    </p>
                    <p
                      className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                      style={{ fontFamily: "Lora, serif" }}
                    >
                      Your wellbeing remains our highest priority, and your
                      trust is our most valued asset. We're honored to be your
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
                      <stop
                        offset="100%"
                        stopColor="#dcfce7"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                    <linearGradient
                      id="accentGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
                      <stop
                        offset="100%"
                        stopColor="#991b1b"
                        stopOpacity="0.7"
                      />
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
                    <circle
                      cx="-15"
                      cy="-8"
                      r="4"
                      fill="#1f2937"
                      opacity="0.8"
                    />
                    <circle
                      cx="15"
                      cy="-8"
                      r="4"
                      fill="#1f2937"
                      opacity="0.8"
                    />
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
                    <circle
                      cx="0"
                      cy="0"
                      r="35"
                      fill="#22c55e"
                      opacity="0.15"
                    />
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
                  <circle
                    cx="310"
                    cy="320"
                    r="7"
                    fill="#dc2626"
                    opacity="0.45"
                  />
                  <circle
                    cx="80"
                    cy="290"
                    r="4.5"
                    fill="#22c55e"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* Signature Section - Enhanced Separate Below Content */}
            <div className="mt-12 pt-8 border-t-2 border-gray-300/50 relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-red-600/40 font-serif">"</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-red-600"></span>
                    Sincerely
                    <span className="w-8 h-px bg-red-600"></span>
                  </p>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                      Rameswar Panda
                    </p>
                    <p className="text-lg font-semibold text-gray-700 mb-1">
                      Founder & CEO
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      WeKeyarPlus Pharmacy Network
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex gap-4 items-center opacity-60">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-2 border border-green-200/50">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-gray-600">
                      100% Authentic
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-2 border border-red-200/50">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-gray-600">
                      Trusted by 1000s
                    </p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
