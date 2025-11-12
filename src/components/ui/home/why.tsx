"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

// Alternate red and green for both pattern and icon container
const features = [
  {
    title: "100 % Genuine Medicines",
    description:
      "100% genuine pharmaceutical medicines and healthcare products available at our store.",
    lottiePath: "/lottie/preventive-health-care.json",
    lottieStyle: { width: 140, height: 140 },
    patternColor: "#FECACA", // red-200
    accentColor: "bg-red-100",
  },
  {
    title: "Delivery to your doorstep",
    description:
      "Buy medicines online at affordable prices and get them delivered at your doorstep.",
    lottiePath: "/lottie/delivery-boy.json",
    lottieStyle: { width: 130, height: 130 },
    patternColor: "#BBF7D0", // green-200
    accentColor: "bg-green-100",
  },
  {
    title: "Store Pick up",
    description:
      "We are one of the most trusted online pharmacy & medical stores offering genuine medicines.",
    lottiePath: "/lottie/delivery-service.json",
    lottieStyle: { width: 140, height: 140 },
    patternColor: "#FECACA", // red-200
    accentColor: "bg-red-100",
  },
  {
    title: "Huge Savings",
    description:
      "Get 20% flat off on all your health and wellness needs & free home delivery only on WeKeyarPlus.",
    lottiePath: "/lottie/business-sales-profit.json",
    lottieStyle: { width: 125, height: 125 },
    patternColor: "#BBF7D0", // green-200
    accentColor: "bg-green-100",
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
    <section className="relative py-10 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
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
              className="group relative bg-white rounded-3xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden pointer-events-none">
                <svg
                  viewBox="0 0 140 140"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  {/* Smooth S-curve with cubic Bezier for sophisticated appearance */}
                  <path
                    d="M 140 0 C 110 25 90 35 70 55 C 50 75 40 95 20 120 L 0 140 L 140 140 Z"
                    fill={feature.patternColor}
                    opacity="0.2"
                  />
                  {/* Additional subtle inner curve for depth */}
                  <path
                    d="M 140 8 C 115 28 100 42 82 62 C 65 80 55 98 40 125 L 140 125 Z"
                    fill="white"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center p-8">
                {/* Icon container - Only red/green */}
                <div
                  className={`mb-6 flex items-center justify-center rounded-2xl ${feature.accentColor} p-4 shadow-sm`}
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

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
