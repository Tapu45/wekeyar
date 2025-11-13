"use client";

import { useState } from "react";

const medicineOptions = [
  {
    id: 1,
    title: "Order Medicines With Prescription",
    description:
      "Share photo of prescription and get delivery of medicines at your doorstep. For any assistance, call us at 72059 59340.",
    icon: "💊",
    action: "Upload Prescription",
    link: "https://wa.me/917205959340",
    color: "from-red-500 to-red-600",
    accentColor: "bg-red-500",
    iconBg: "from-red-100 to-red-200",
  },
  {
    id: 2,
    title: "Order Medicine through Phone Call",
    description:
      "Get genuine medicine at maximum discount. Free delivery at your doorstep*. For any assistance, call us at 72059 59340.",
    icon: "🛵",
    action: "Call Us & Order Now",
    link: "tel:7205959340",
    color: "from-green-500 to-green-600",
    accentColor: "bg-green-500",
    iconBg: "from-green-100 to-green-200",
  },
];

export default function Medicine() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="medicines"
      className="py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Complex Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-100 to-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>

        {/* Floating medical icons - larger and more visible */}
        <div
          className="absolute top-20 left-10 text-7xl opacity-20 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          🏥
        </div>
        <div
          className="absolute top-10 right-16 text-8xl opacity-15 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        >
          💊
        </div>
        <div
          className="absolute top-40 left-1/4 text-5xl opacity-15 animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          ⚕️
        </div>
        <div
          className="absolute bottom-32 right-24 text-7xl opacity-20 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "1s" }}
        >
          ❤️
        </div>
        <div
          className="absolute bottom-20 left-16 text-6xl opacity-15 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1.5s" }}
        >
          🩺
        </div>
        <div
          className="absolute top-1/2 right-10 text-5xl opacity-15 animate-bounce"
          style={{ animationDuration: "4.5s" }}
        >
          💉
        </div>
        <div
          className="absolute top-1/3 left-20 text-6xl opacity-15 animate-pulse"
          style={{ animationDuration: "3.5s", animationDelay: "0.8s" }}
        >
          🚑
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Animated dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#22c55e" : "#3b82f6",
              opacity: 0.15,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}

        {/* Plus symbols scattered */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`plus-${i}`}
            className="absolute text-3xl font-bold opacity-10 animate-pulse"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              color: i % 2 === 0 ? "#ef4444" : "#22c55e",
              animationDuration: `${2 + Math.random()}s`,
              animationDelay: `${Math.random()}s`,
            }}
          >
            +
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-12 relative">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-red-400"></div>
            <span className="text-sm font-bold text-[#e63946] uppercase tracking-widest px-4 py-2 bg-white rounded-full shadow-sm">
              Easy Ordering Process
            </span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-red-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 py-2 relative inline-block">
            Your Health, Our Priority
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full"></div>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed italic mt-6">
            WeKeyarPlus Pharmacy is a one-stop shop for all your health needs.
            Buy medicines and get special offers.
          </p>
        </div>

        {/* Cards Grid with enhanced design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {medicineOptions.map((option) => (
            <div
              key={option.id}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-lg bg-white/70 border border-white/20 transform hover:-translate-y-2"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Glassmorphism shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50"></div>

              {/* Animated gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Decorative corner patterns - enhanced */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <div
                  className="absolute top-3 right-3 w-8 h-8 border-3 border-current rounded-full animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
                <div className="absolute top-10 right-10 w-6 h-6 border-2 border-current rounded-full"></div>
                <div className="absolute top-6 right-14 w-4 h-4 bg-current rounded-full animate-pulse"></div>
                <div className="absolute top-14 right-6 w-3 h-3 bg-current rounded-full"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10">
                <div
                  className="absolute bottom-3 left-3 w-8 h-8 border-3 border-current rounded-full animate-spin"
                  style={{
                    animationDuration: "12s",
                    animationDirection: "reverse",
                  }}
                ></div>
                <div className="absolute bottom-10 left-10 w-6 h-6 border-2 border-current rounded-full"></div>
                <div
                  className="absolute bottom-6 left-14 w-4 h-4 bg-current rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute bottom-14 left-6 w-3 h-3 bg-current rounded-full"></div>
              </div>

              {/* Accent stripe */}
              <div
                className={`absolute top-0 left-0 w-2 h-full ${option.accentColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="p-8 md:p-10 relative z-10">
                {/* Icon and Title side by side */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon with colored gradient background */}
                  <div className="relative inline-block">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${option.iconBg} rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-br ${option.iconBg} rounded-2xl p-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <span className="text-5xl block">{option.icon}</span>
                    </div>
                  </div>
                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors">
                    {option.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base italic font-light">
                  {option.description}
                </p>
                {/* CTA Button - Hidden by default, shows on hover */}
                <div className="mt-4">
                  <a
                    href={option.link}
                    target={option.id === 1 ? "_blank" : "_self"}
                    rel={option.id === 1 ? "noopener noreferrer" : ""}
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${option.color} text-white font-bold px-8 py-4 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-base relative overflow-hidden group/button`}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-20 transition-opacity duration-300"></span>
                    <span className="text-2xl relative z-10">
                      {option.id === 1 ? "📱" : "📞"}
                    </span>
                    <span className="relative z-10">{option.action}</span>
                    <svg
                      className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-red-400 animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-green-400 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
