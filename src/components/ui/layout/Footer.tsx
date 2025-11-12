import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-[#dbe5eb] pt-10 pb-4" id="contact">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-[auto_1fr]">
        {/* Left: Brand & Social */}
        <div className="bg-[#333] rounded-md p-6 flex flex-col items-start gap-6 w-auto max-w-fit">
          {/* Brand Logo */}
          <div className="mb-4">
            <img
              src="/logo.png"
              alt="WekeyarPlus Logo"
              className="h-12 w-auto rounded-xl"
            />
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mb-4">
            <a
              href="#"
              className="border border-[#dbe5eb] rounded-md p-2 hover:bg-[#222]"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="border border-[#dbe5eb] rounded-md p-2 hover:bg-[#222]"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="border border-[#dbe5eb] rounded-md p-2 hover:bg-[#222]"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="border border-[#dbe5eb] rounded-md p-2 hover:bg-[#222]"
            >
              <Youtube size={22} />
            </a>
            <a
              href="#"
              className="border border-[#dbe5eb] rounded-md p-2 hover:bg-[#222]"
            >
              <X size={22} />
            </a>
          </div>
          {/* Contact Info */}
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#00d26a] rounded-md p-2 text-white">
              <Phone size={22} />
            </span>
            <span className="text-lg text-[#dbe5eb]">72059 59340</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[#00d26a] rounded-md p-2 text-white">
              <Mail size={22} />
            </span>
            <span className="text-lg text-[#dbe5eb]">
              wekeyarplus@gmail.com
            </span>
          </div>
        </div>
        {/* Right: About & Presence */}
        <div className="flex flex-col justify-between py-2">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-white">About Us</h3>
            <p className="text-[#b0b8c1]">
              Buy medicines online from WeKeyar Plus Pharmacy at great discounts
              and get home delivery of medicines without any hassles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Our Presence
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[#b0b8c1]">
              <span>IRC Village</span>
              <span>Chandrasekharpur</span>
              <span>Dumduma</span>
              <span>GGP Colony</span>
              <span>Kalinga Vihar</span>
              <span>Mausima Square</span>
              <span>Sum Hospital</span>
              <span>VSS Nagar</span>
              <span>Samantrapur</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#333] mt-8 pt-4">
        <p className="text-center text-sm text-[#7f93a2]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00d26a] font-semibold">WeKeyarPlus</span> .
          All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
