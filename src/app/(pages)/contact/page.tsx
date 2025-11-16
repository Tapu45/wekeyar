"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I'm ${formData.name}. ${formData.message} Contact me at ${formData.email} or ${formData.phone}`;
    const whatsappUrl = `https://wa.me/917205959340?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      details: ["7205 9593 40", "Call us anytime"],
      link: "tel:7205959340",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      accentColor: "text-red-600",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["7205 9593 40", "Chat with us"],
      link: "https://wa.me/917205959340",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      accentColor: "text-green-600",
    },
    {
      icon: "📍",
      title: "Location",
      details: ["10 Stores", "Across Bhubaneswar"],
      link: "/about",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
    },
    {
      icon: "⏰",
      title: "Timings",
      details: ["Mon - Sat: 8 AM - 10 PM", "Sunday: 9 AM - 9 PM"],
      link: "#",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      accentColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Compact */}
      <section className="relative py-12 md:py-16 px-4 bg-gradient-to-br from-red-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 md:top-20 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 md:bottom-20 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-xs md:text-sm font-bold text-[#e63946] uppercase tracking-widest mb-2 md:mb-4 inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're here to help! Reach out through any channel that works best
            for you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* LEFT SIDE - Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                  Multiple Ways to{" "}
                  <span className="text-red-600">Reach Us</span>
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Choose the most convenient way to connect with us. Our team is
                  ready to assist you!
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  >
                    {/* Top Accent Line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${method.color} rounded-t-2xl`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">{method.icon}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-bold mb-2 ${method.accentColor}`}
                    >
                      {method.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-1">
                      {method.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className={`text-sm ${
                            idx === 0
                              ? "text-gray-900 font-semibold"
                              : "text-gray-600 text-xs"
                          }`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <span className="font-bold text-red-600">
                    ⚡ Quick Response:
                  </span>{" "}
                  We typically respond to WhatsApp and phone calls within
                  minutes during business hours.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Top Accent Line */}
                <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Send us a <span className="text-red-600">Message</span>
                  </h3>

                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm md:text-base"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none text-sm md:text-base"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-base flex items-center justify-center gap-2"
                    >
                      <span>💬</span>
                      Send via WhatsApp
                    </button>
                    <a
                      href="tel:7205959340"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-base flex items-center justify-center gap-2"
                    >
                      <span>📞</span>
                      Call Instead
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner - Compact */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-white text-center md:text-left">
              <p className="text-base md:text-lg font-semibold">
                🚨 Need Immediate Help?
              </p>
              <p className="text-white/90 text-sm md:text-base">
                Available Mon-Sat: 8 AM - 10 PM | Sunday: 9 AM - 9 PM
              </p>
            </div>
            <a
              href="tel:7205959340"
              className="bg-white text-red-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 text-base md:text-lg whitespace-nowrap flex-shrink-0"
            >
              📞 Call: 7205 9593 40
            </a>
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}
