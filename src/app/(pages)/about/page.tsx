"use client";

import Image from "next/image";

const stores = [
  {
    id: 1,
    name: "IRC Village",
    phone: "72059 59343",
    address: "IRC Village, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2961, lng: 85.8245 },
    image: "/stores/1.jpg",
  },
  {
    id: 2,
    name: "Chandrasekharpur",
    phone: "72059 59351",
    address: "Chandrasekharpur, Bhubaneswar, Odisha",
    coordinates: { lat: 20.3441, lng: 85.8097 },
    image: "/stores/2.jpeg",
  },
  {
    id: 3,
    name: "Dumduma",
    phone: "72059 59348",
    address: "Dumduma, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2549, lng: 85.8097 },
    image: "/stores/1.jpg",
  },
  {
    id: 4,
    name: "GGP Colony",
    phone: "72059 59353",
    address: "GGP Colony, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2941, lng: 85.8097 },
    image: "/stores/2.jpeg",
  },
  {
    id: 5,
    name: "Kalinga Vihar",
    phone: "72059 59346",
    address: "Kalinga Vihar, Bhubaneswar, Odisha",
    coordinates: { lat: 20.3041, lng: 85.8297 },
    image: "/stores/1.jpg",
  },
  {
    id: 6,
    name: "Mausima Square",
    phone: "72059 59344",
    address: "Mausima Square, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2741, lng: 85.8197 },
    image: "/stores/2.jpeg",
  },
  {
    id: 7,
    name: "Sum Hospital",
    phone: "72059 59352",
    address: "Sum Hospital Area, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2641, lng: 85.8097 },
    image: "/stores/1.jpg",
  },
  {
    id: 8,
    name: "VSS Nagar",
    phone: "72059 59349",
    address: "VSS Nagar, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2841, lng: 85.7997 },
    image: "/stores/2.jpeg",
  },
  {
    id: 9,
    name: "Samantrapur",
    phone: "72059 59350",
    address: "Samantrapur, Bhubaneswar, Odisha",
    coordinates: { lat: 20.2141, lng: 85.7797 },
    image: "/stores/1.jpg",
  },
  {
    id: 10,
    name: "Jaydev Vihar",
    phone: "72059 59340",
    address: "Jaydev Vihar, Bhubaneswar, Odisha",
    coordinates: { lat: 20.3041, lng: 85.8397 },
    image: "/stores/2.jpeg",
  },
];

export default function AboutPage() {
  const getMapUrl = (store: (typeof stores)[0]) => {
    return `https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* About Content Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src="/aboux.jpg"
                  alt="WeKeyarPlus Pharmacy"
                  width={600}
                  height={600}
                  className="w-full max-w-xl h-auto object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1">
              <p className="text-lg font-normal mb-2 text-gray-500 uppercase tracking-wider">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                Your Trusted Healthcare Partner
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With increasingly busy schedules, you may often forget to take
                  out the time to buy your medicines. We've got you covered.
                  Just tell us the medicines you need and we'll have them
                  delivered to your doorstep without any hassles at a great
                  discount.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We have ten strategically located stores across Bhubaneswar,
                  ensuring easy access to genuine medicines and healthcare
                  products. From prescription medications to wellness products,
                  we ensure 100% genuineness and maximum affordability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  Your health is our priority, and your trust is our greatest
                  reward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 inline-block">
              Our Locations
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              Visit Our <span className="text-red-600">Stores</span> Across
              Bhubaneswar
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              10 strategically located pharmacies ready to serve you with
              genuine medicines and exceptional care.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Stores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div
                key={store.id}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-slate-300"
              >
                {/* Store Number Badge - RED (Primary) */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">
                      {store.id}
                    </span>
                  </div>
                </div>

                {/* Top Accent Line - Red Primary */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>

                {/* Store Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Store Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                    {store.name}
                  </h3>

                  {/* Phone - RED Accent */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="text-base font-semibold text-slate-900 hover:text-red-600 transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>

                  {/* Address - GREEN Accent (Secondary) */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed flex-1 text-sm">
                      {store.address}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={`tel:${store.phone.replace(/\s/g, "")}`}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      Call
                    </a>
                    <a
                      href={getMapUrl(store)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-200 hover:bg-emerald-100 text-slate-900 font-bold py-3 px-4 rounded-lg text-center transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Map
                    </a>
                  </div>
                </div>

                {/* Subtle Hover Glow - Only on right edge */}
                <div className="absolute right-0 top-0 w-1/4 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-l from-red-600/5 to-transparent"></div>
              </div>
            ))}
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
