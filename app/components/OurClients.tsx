"use client";

import Image from "next/image";

const clients = [
  "/logo.jpeg",
  "/logo.jpeg",
  "/logo.jpeg",
  "/logo.jpeg",
  "/logo.jpeg",
  "/logo.jpeg",
];

const OurClients = () => {
  return (
    <section className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT: LOGO GRID (REFERENCE MATCH) ================= */}
          <div className="relative">

            {/* Vertical grid lines (taller) */}
            <div className="absolute -inset-[36px] grid grid-cols-3 pointer-events-none">
              <div className="border-r border-gray-300 h-full" />
              <div className="border-r border-gray-300 h-full" />
              <div />
            </div>

            {/* Horizontal grid lines (wider) */}
            <div className="absolute inset-0 grid grid-rows-2 pointer-events-none">
              <div className="border-b border-gray-300 w-full" />
              <div />   
            </div>

            {/* Logos */}
            <div className="grid grid-cols-3 grid-rows-2 gap-x-0 gap-y-16">
              {clients.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center group"
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={80}
                    height={36}
                    className="
                      object-contain
                      grayscale
                      opacity-50
                      transition-all
                      duration-700
                      ease-in-out
                      group-hover:grayscale-0
                      group-hover:opacity-100
                      cursor-pointer
                    "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: CONTENT (UNCHANGED) ================= */}
          <div>
            {/* Overline with Line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#1F4FA3] font-bold text-base uppercase tracking-wide" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}>
                Our Partners
              </span>
              <div className="h-[1px] w-20 bg-[#1F4FA3] rounded-full" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif", lineHeight: '1.3' }}>
              Long Time Project, with Our <br />
              <span className="text-[#1F4FA3]">Best Partner</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}>
              We've been lucky to collaborate with a long list of customers,
              located in and out of the country. Thanks to them we have grown
              as professionals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurClients;