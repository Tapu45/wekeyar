"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const features = [
  {
    title: "100 % Genuine Medicines",
    description:
      "100% genuine pharmaceutical medicines and healthcare products available at our store.",
    lottiePath: "/lottie/preventive-health-care.json",
    lottieStyle: { width: 140, height: 140 },
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Delivery to your doorstep",
    description:
      "Buy medicines online at affordable prices and get them delivered at your doorstep.",
    lottiePath: "/lottie/delivery-boy.json",
    lottieStyle: { width: 130, height: 130 },
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Store Pick up",
    description:
      "We are one of the most trusted online pharmacy & medical stores offering genuine medicines.",
    lottiePath: "/lottie/delivery-service.json",
    lottieStyle: { width: 140, height: 140 },
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    title: "Huge Savings",
    description:
      "Get 20% flat off on all your health and wellness needs & free home delivery only on WeKeyarPlus.",
    lottiePath: "/lottie/business-sales-profit.json",
    lottieStyle: { width: 125, height: 125 },
    bgGradient: "from-green-50 to-emerald-50",
  },
];

const Why = () => {
  const [lottieData, setLottieData] = useState<Array<any>>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    features.forEach((feature, idx) => {
      fetch(feature.lottiePath)
        .then((res) => res.json())
        .then((data) => {
          setLottieData((prev) => {
            const updated = [...prev];
            updated[idx] = data;
            return updated;
          });
        });
    });
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative curved top border */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white -z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,120 1080,120 1440,0 L1440,120 L0,120 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      {/* Slight reddish pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(circle at 40% 50%, rgba(255, 0, 0, 0.18) 0%, transparent 80%)",
          mixBlendMode: "screen",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why WeKeyarPlus Pharmacy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Buy prescribed medicines ranging from generic medicines to OTC
            products & much more at most affordable price and get delivered at
            home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon container with gradient background */}
                <div
                  className={`mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.bgGradient} p-4 shadow-md group-hover:scale-110 transition-transform duration-500`}
                  style={{ height: 140, width: 140 }}
                >
                  {lottieData[index] && (
                    <Lottie
                      animationData={lottieData[index]}
                      loop
                      style={feature.lottieStyle}
                    />
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
