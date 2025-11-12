"use client";
import React from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. Ananya Sen",
    role: "Family Physician",
    quote:
      "I trust Wekeyar for every prescription I write. Their delivery and verification give my patients complete peace of mind.",
  },
  {
    name: "Rahul Mehta",
    role: "Customer for 6+ years",
    quote:
      "From managing my father's chronic meds to urgent deliveries, the team has always gone the extra mile.",
  },
  {
    name: "Saira Khan",
    role: "Wellness Coach",
    quote:
      "Their curated wellness programs and genuine supplements have elevated my clients' health journeys.",
  },
];

const avatarUrls = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

const TestimonialSection: React.FC = () => (
  <section
    className="relative py-10 px-4 bg-white overflow-hidden"
    id="testimonials"
  >
    {/* Decorative blobs */}
    <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Voices We're Proud Of
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Health professionals and families alike rely on us every day.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden pb-10">
        <div className="flex gap-8 animate-marquee hover:pause-animation">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (item, index) => (
              <figure
                key={`${item.name}-${index}`}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 backdrop-blur-sm flex-shrink-0 w-full md:w-96 mb-6"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                {/* Decorative quote icon */}
                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg
                    className="w-32 h-32 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C3 0 0 3.75 0 5c0 1.972.235 5.973 2 8 .75 1.25 2 4 2 7" />
                  </svg>
                </div>
                {/* User avatar */}
                <div className="relative z-10">
                  <blockquote className="italic text-gray-700 mb-8 relative text-lg leading-relaxed font-light">
                    "{item.quote}"
                  </blockquote>
                  <figcaption className="border-t border-gray-200 pt-6 flex items-center justify-between">
                    <div>
                      <strong className="block font-bold text-gray-900 text-lg mb-1">
                        {item.name}
                      </strong>
                      <span className="text-emerald-600 text-sm font-medium tracking-wide">
                        {item.role}
                      </span>
                    </div>
                    <img
                      src={avatarUrls[index % avatarUrls.length]}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-emerald-100 shadow-md object-cover ml-4"
                    />
                  </figcaption>
                </div>
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-pink-50/0 group-hover:from-emerald-50/50 group-hover:to-pink-50/50 pointer-events-none transition-all duration-500"></div>
              </figure>
            )
          )}
        </div>
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  </section>
);

export default TestimonialSection;
