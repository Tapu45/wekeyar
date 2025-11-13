"use client";

import React from "react";

const categories = [
  {
    id: 1,
    name: "Prescription Medicines",
    description:
      "100% genuine prescription medications from trusted pharmaceutical companies",
    icon: "💊",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    patternColor: "#FECACA",
    count: "10,000+",
  },
  {
    id: 2,
    name: "Wellness & Vitamins",
    description:
      "Essential vitamins, supplements, and wellness products for your daily health",
    icon: "🌿",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    patternColor: "#BBF7D0",
    count: "500+",
  },
  {
    id: 3,
    name: "Personal Care",
    description:
      "Premium personal care products for your hygiene and grooming needs",
    icon: "🧴",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    patternColor: "#BFDBFE",
    count: "800+",
  },
  {
    id: 4,
    name: "Baby Care",
    description: "Safe and gentle baby care products for your little ones",
    icon: "👶",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    patternColor: "#FBCFE8",
    count: "300+",
  },
  {
    id: 5,
    name: "Health Devices",
    description: "Medical devices and health monitoring equipment for home use",
    icon: "🩺",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    patternColor: "#E9D5FF",
    count: "200+",
  },
  {
    id: 6,
    name: "OTC Products",
    description:
      "Over-the-counter medicines and health products available without prescription",
    icon: "📦",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    patternColor: "#FED7AA",
    count: "1,500+",
  },
];

const ProductCategories = () => {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#e63946] uppercase tracking-widest mb-4 inline-block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Explore Our <span className="text-red-600">Product</span>{" "}
            <span className="text-green-600">Categories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From prescription medicines to wellness products, we have everything
            you need for your health and well-being.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              {/* Decorative Pattern Background */}
              <div className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg
                  viewBox="0 0 140 140"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M 140 0 C 110 25 90 35 70 55 C 50 75 40 95 20 120 L 0 140 L 140 140 Z"
                    fill={category.patternColor}
                  />
                </svg>
              </div>

              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon Container */}
                <div
                  className={`mb-6 flex items-center justify-center w-20 h-20 rounded-2xl ${category.bgColor} border-2 ${category.borderColor} group-hover:scale-110 transition-transform duration-500 shadow-md`}
                >
                  <span className="text-4xl">{category.icon}</span>
                </div>

                {/* Category Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {category.description}
                </p>

                {/* Product Count */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Products
                  </span>
                  <span
                    className={`text-2xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.count}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`}
                ></div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <a
            href="tel:7205959340"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
          >
            📞 Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
