"use client";

import Image from "next/image";

const medicineOptions = [
  {
    id: 1,
    title: "Order with Prescription",
    description:
      "Upload your prescription and get authentic medicines delivered to your doorstep with expert verification.",
    icon: "📋",
    action: "Upload Prescription",
    link: "https://wa.me/917205959340",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Quick Phone Order",
    description:
      "Call our pharmacists directly for personalized recommendations and instant order processing with free delivery.",
    icon: "☎️",
    action: "Call Now",
    link: "tel:7205959340",
    color: "from-green-500 to-green-600",
  },
];

export default function Medicine() {
  return (
    <section
      id="medicines"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Health, Our Priority
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            WeKeyarPlus Pharmacy is a one-stop solution for all your health
            needs. Buy medicines with ease and enjoy special discounts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {medicineOptions.map((option) => (
            <div
              key={option.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`}
              />

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className="text-6xl mb-6">{option.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {option.description}
                </p>

                {/* CTA Button */}
                <a
                  href={option.link}
                  target={option.id === 1 ? "_blank" : "_self"}
                  rel={option.id === 1 ? "noopener noreferrer" : ""}
                  className={`inline-block bg-gradient-to-r ${option.color} text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
                >
                  {option.action}
                </a>

                {/* Phone number hint */}
                <p className="text-sm text-gray-500 mt-4">
                  📞 Need help? Call 72059 59340
                </p>
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
