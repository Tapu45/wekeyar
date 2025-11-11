import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2230] text-[#dbe5eb] pt-16 pb-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#12c99b] to-[#ff7676] grid place-items-center text-2xl font-bold text-white">
            +
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-white">
              Wekeyar Pharmacy
            </h3>
            <p className="text-[#a6b6c2] mb-2">
              Delivering trusted care & quality medicines since 1995.
            </p>
          </div>
        </div>
        {/* Visit Us */}
        <div>
          <h4 className="font-bold mb-3 text-white">Visit Us</h4>
          <p className="text-[#a6b6c2] mb-2">
            123 Health Avenue, Wellness City
          </p>
          <p className="text-[#a6b6c2] mb-2">Open Daily 8:00 AM – 10:00 PM</p>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3 text-white">Contact</h4>
          <p className="text-[#a6b6c2] mb-2">Phone: +91-9876543210</p>
          <p className="text-[#a6b6c2] mb-2">Email: care@wekeyar.com</p>
        </div>
        {/* Stay Updated */}
        <div>
          <h4 className="font-bold mb-3 text-white">Stay Updated</h4>
          <form className="flex gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 min-w-[180px] px-4 py-3 rounded-full border-none outline-none text-[#1a2230]"
            />
            <button
              type="submit"
              className="bg-[#12c99b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0fa987] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="mt-12 text-center text-sm text-[#7f93a2]">
        © {new Date().getFullYear()} Wekeyar Pharmacy. All rights reserved.
      </p>
    </footer>
  );
}
