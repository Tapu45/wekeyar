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
    // Create WhatsApp message
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
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["7205 9593 40", "Chat with us"],
      link: "https://wa.me/917205959340",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: "📍",
      title: "Locations",
      details: ["10 Stores", "Across Bhubaneswar"],
      link: "/about",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: "⏰",
      title: "Timings",
      details: ["Mon - Sat: 8 AM - 10 PM", "Sunday: 9 AM - 9 PM"],
      link: "#",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#e63946] uppercase tracking-widest mb-4 inline-block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out to us through any of the following
              ways.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`}
                ></div>

                {/* Content */}
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div
                    className={`mb-6 flex items-center justify-center w-20 h-20 mx-auto rounded-2xl ${method.bgColor} group-hover:scale-110 transition-transform duration-500 shadow-md`}
                  >
                    <span className="text-4xl">{method.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
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
                            : "text-gray-600"
                        }`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Send Us a <span className="text-red-600">Message</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we'll get back to you via WhatsApp as
              soon as possible.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            {/* Top Accent Line */}
            <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-200 text-gray-900 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  Send via WhatsApp
                </button>
                <a
                  href="tel:7205959340"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg flex items-center justify-center gap-2"
                >
                  <span>📞</span>
                  Call Instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white">
              <p className="text-lg font-semibold mb-2">
                Need Immediate Assistance?
              </p>
              <p className="text-white/90">
                Our team is available to help you right away
              </p>
            </div>
            <a
              href="tel:7205959340"
              className="bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 text-lg whitespace-nowrap"
            >
              📞 Emergency: 7205 9593 40
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
