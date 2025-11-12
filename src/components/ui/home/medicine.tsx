"use client";

import Image from "next/image";

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
    bgColor: "bg-red-50",
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
    bgColor: "bg-green-50",
  },
];

export default function Medicine() {
  return (
    <section
      id="medicines"
      className="py-10 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
            WeKeyarPlus Pharmacy is a one-stop shop for all your health needs.
            Buy medicines and get special offers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {medicineOptions.map((option) => (
            <div
              key={option.id}
              className={`group relative ${option.bgColor} rounded-3xl shadow-lg  transition-all duration-300 overflow-hidden border-2 border-gray-100`}
            >
              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl">{option.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {option.title}
                  </h3>
                </div>

                {/* Description - Italic style */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base italic font-light">
                  {option.description}
                </p>

                {/* CTA Button */}
                <a
                  href={option.link}
                  target={option.id === 1 ? "_blank" : "_self"}
                  rel={option.id === 1 ? "noopener noreferrer" : ""}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${option.color} text-white font-bold px-8 py-4 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-base`}
                >
                  {option.id === 1 ? "📱" : "📞"}
                  {option.action}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
