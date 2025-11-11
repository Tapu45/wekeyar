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
    <header className="sticky top-0 z-[1000] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Wekeyar Plus Logo"
              className="h-[46px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex-1 flex justify-end lg:flex hidden mr-8">
            <ul className="flex gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`px-4 py-2 rounded-lg font-medium text-lg text-[#1a1a1a] transition-colors duration-200 hover:bg-[#ffe5e5] hover:text-[#e63946] ${
                      activeLink === link.href ? "text-[#e63946] relative" : ""
                    }`}
                  >
                    {link.label}
                    {activeLink === link.href && (
                      <span
                        className="absolute left-4 right-4 -bottom-1 h-[3px] bg-[#e63946] rounded-full"
                        style={{}}
                      ></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Contact - Desktop */}
          <a
            href="tel:7205959340"
            className="lg:flex hidden items-center gap-2 px-5 py-2 text-[#e63946] font-medium rounded-xl transition-colors duration-200 hover:bg-[#ffe5e5] no-underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div>
              <div className="text-[15px]">7205 9593 40</div>
              <div className="text-xs text-gray-400">Call For Enquiry</div>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-[#12c99b] border-none rounded-full px-5 py-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
          <div className="lg:hidden border-t border-gray-200 bg-white py-4">
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    handleLinkClick();
                  }}
                  className={`block px-6 py-3 rounded-lg font-medium text-[#1a1a1a] transition-colors duration-200 hover:bg-[#ffe5e5] hover:text-[#e63946] ${
                    activeLink === link.href
                      ? "bg-[#ffe5e5] text-[#e63946]"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:7205959340"
                className="flex items-center gap-2 px-6 py-3 text-[#e63946] font-medium rounded-lg transition-colors duration-200 hover:bg-[#ffe5e5] no-underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div>
                  <div className="text-[15px]">7205 9593 40</div>
                  <div className="text-xs text-gray-400">Call For Enquiry</div>
                </div>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
