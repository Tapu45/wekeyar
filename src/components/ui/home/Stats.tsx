"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Stores Across Bhubaneswar",
    description: "Conveniently located pharmacies",
    icon: "🏪",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 2,
    value: 50000,
    suffix: "+",
    label: "Happy Customers",
    description: "Trusted by families every day",
    icon: "😊",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 3,
    value: 1000000,
    suffix: "+",
    label: "Medicines Delivered",
    description: "Prescriptions fulfilled with care",
    icon: "💊",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving the community since 2009",
    icon: "⭐",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;
      const hasDecimal = stat.value % 1 !== 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(increment * currentStep),
          stat.value
        );

        setCountedValues((prev) => {
          const updated = [...prev];
          updated[index] = hasDecimal ? newValue : newValue;
          return updated;
        });

        if (currentStep >= steps) {
          setCountedValues((prev) => {
            const updated = [...prev];
            updated[index] = stat.value;
            return updated;
          });
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="stats-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#e63946] uppercase tracking-widest mb-4 inline-block">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Numbers That <span className="text-red-600">Speak</span> for{" "}
            <span className="text-green-600">Themselves</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by thousands, serving millions, and growing every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
              ></div>

              {/* Decorative Corner Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                {/* Icon */}
                <div
                  className={`mb-6 flex items-center justify-center w-20 h-20 mx-auto rounded-2xl ${stat.bgColor} border-2 ${stat.borderColor} group-hover:scale-110 transition-transform duration-500 shadow-md`}
                >
                  <span className="text-4xl">{stat.icon}</span>
                </div>

                {/* Animated Number */}
                <div className="mb-4">
                  <span
                    className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent block`}
                  >
                    {formatNumber(countedValues[index])}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{
                      width: isVisible ? "100%" : "0%",
                    }}
                  ></div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <span className="text-2xl">✨</span>
            <p className="text-lg font-semibold text-gray-700">
              Growing stronger every day
            </p>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Stats;
