"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Medicine", href: "#medicines" },
  { label: "Why we", href: "#why-we" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          current = `#${section}`;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b border-gray-100 shadow-md">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="Wekeyar Plus Logo"
              className="h-[46px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex-1 flex justify-end lg:flex hidden mr-8">
            <ul className="flex gap-2 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`px-4 py-2.5 rounded-lg font-bold text-lg text-black transition-all duration-300 relative group ${
                      activeLink === link.href
                        ? "text-[#e63946] underline underline-offset-8"
                        : "text-gray-700 hover:text-[#12c99b]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#12c99b] to-[#12c99b] rounded-full transition-transform duration-300 origin-left ${
                        activeLink === link.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Contact - Desktop */}
          <a
            href="tel:7205959340"
            className="lg:flex hidden items-center gap-3 px-6 py-2.5 text-white font-semibold rounded-xl bg-[#e63946] transition-all duration-300 hover:bg-[#12c99b] hover:shadow-lg hover:shadow-green-200 no-underline shadow-md shadow-red-200"
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div>
              <div className="text-sm leading-tight">7205 9593 40</div>
              <div className="text-xs opacity-90">Call For Enquiry</div>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden border-none rounded-full px-5 py-2 cursor-pointer transition-all duration-300 ${
              isMenuOpen
                ? "bg-[#e63946] text-white shadow-lg shadow-red-200"
                : "bg-[#12c99b] text-gray-700 hover:shadow-lg hover:shadow-green-200"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white py-6 animate-in fade-in duration-300">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    handleLinkClick();
                  }}
                  className={`block px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative group ${
                    activeLink === link.href
                      ? "text-[#e63946] underline underline-offset-8"
                      : "text-gray-700 hover:text-[#12c99b]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#12c99b] to-[#12c99b] rounded-full transition-transform duration-300 origin-left ${
                      activeLink === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              ))}
              <a
                href="tel:7205959340"
                className="flex items-center gap-3 px-6 py-3 text-white font-semibold rounded-xl bg-[#e63946] transition-all duration-300 hover:bg-[#12c99b] hover:shadow-lg hover:shadow-green-200 no-underline shadow-md shadow-red-200 mt-4"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <div className="text-sm leading-tight">7205 9593 40</div>
                  <div className="text-xs opacity-90">Call For Enquiry</div>
                </div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
