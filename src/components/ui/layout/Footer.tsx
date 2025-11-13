import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#0f1419] text-[#dbe5eb] pt-16 pb-6 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div>
              <img
                src="/logo.png"
                alt="WekeyarPlus Logo"
                className="h-14 w-auto rounded-lg shadow-lg"
              />
              <p className="text-sm text-[#8a94a6] mt-4 leading-relaxed">
                Your trusted online pharmacy for quality medicines and health
                products at great discounts.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#1a2332] border border-[#2a3f5f] rounded-lg p-2.5 hover:bg-[#00d26a] hover:border-[#00d26a] transition-all duration-300 group"
              >
                <Facebook
                  size={18}
                  className="text-[#dbe5eb] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="bg-[#1a2332] border border-[#2a3f5f] rounded-lg p-2.5 hover:bg-[#00d26a] hover:border-[#00d26a] transition-all duration-300 group"
              >
                <Instagram
                  size={18}
                  className="text-[#dbe5eb] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="bg-[#1a2332] border border-[#2a3f5f] rounded-lg p-2.5 hover:bg-[#00d26a] hover:border-[#00d26a] transition-all duration-300 group"
              >
                <Linkedin
                  size={18}
                  className="text-[#dbe5eb] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="bg-[#1a2332] border border-[#2a3f5f] rounded-lg p-2.5 hover:bg-[#00d26a] hover:border-[#00d26a] transition-all duration-300 group"
              >
                <Youtube
                  size={18}
                  className="text-[#dbe5eb] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="bg-[#1a2332] border border-[#2a3f5f] rounded-lg p-2.5 hover:bg-[#00d26a] hover:border-[#00d26a] transition-all duration-300 group"
              >
                <X
                  size={18}
                  className="text-[#dbe5eb] group-hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#00d26a] to-transparent rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#medicines"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Medicines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#00d26a] to-transparent rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#a0aab8] hover:text-[#00d26a] transition-colors duration-300"
                >
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-[#00d26a] to-transparent rounded-full"></span>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:7205959340"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <span className="bg-gradient-to-br from-[#00d26a] to-[#00a850] rounded-lg p-2.5 text-white flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#00d26a]/50 transition-all duration-300">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#8a94a6]">Phone</p>
                  <p className="text-[#dbe5eb] font-semibold">72059 59340</p>
                </div>
              </a>
              <a
                href="mailto:wekeyarplus@gmail.com"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <span className="bg-gradient-to-br from-[#00d26a] to-[#00a850] rounded-lg p-2.5 text-white flex-shrink-0 group-hover:shadow-lg group-hover:shadow-[#00d26a]/50 transition-all duration-300">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-[#8a94a6]">Email</p>
                  <p className="text-[#dbe5eb] font-semibold">
                    wekeyarplus@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="bg-gradient-to-r from-[#1a2332] to-[#0f1419] border border-[#2a3f5f] rounded-xl p-8 mb-10">
          <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <MapPin size={22} className="text-[#00d26a]" />
            Our Presence
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "IRC Village",
              "Chandrasekharpur",
              "Dumduma",
              "GGP Colony",
              "Kalinga Vihar",
              "Mausima Square",
              "Sum Hospital",
              "VSS Nagar",
              "Samantrapur",
            ].map((location) => (
              <div
                key={location}
                className="bg-[#0f1419] border border-[#2a3f5f] rounded-lg px-4 py-3 text-center text-sm text-[#a0aab8] hover:border-[#00d26a] hover:text-[#00d26a] transition-all duration-300 cursor-pointer"
              >
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#2a3f5f]"></div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-sm text-[#7f93a2]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#00d26a] font-bold">WeKeyarPlus</span> . All
            Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#7f93a2]">
            <a href="#" className="hover:text-[#00d26a] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#00d26a] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#00d26a] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
