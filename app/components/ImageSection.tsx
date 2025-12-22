"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ImageSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Product Engineering",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    },
    {
      title: "Firewall Advance",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    },
    {
      title: "Data Management",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    },
    {
      title: "Big Data & Analytics",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    },
    {
      title: "Research & Energy",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations.",
    },
  ];

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/g.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Blue Overlay */}
        {/* <div className="absolute inset-0 bg-blue-900/60" /> */}
      </div>

      {/* 5 Column Grid */}
      <div className="relative h-full grid grid-cols-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative h-full cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Vertical Divider Line (except last one) */}
            {index < sections.length - 1 && (
              <div className="absolute top-0 right-0 w-[1px] h-full bg-white/30 z-10" />
            )}

            {/* Default State - Just Title */}
            <div className="absolute inset-0 flex items-end justify-start p-8 lg:p-10">
              <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight max-w-[200px]" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '600' }}>
                {section.title}
              </h3>
            </div>

            {/* Hover State - Dark Overlay with Content */}
            <div
              className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Title */}
              <h3 className="text-white text-2xl font-bold text-center mb-6 leading-tight" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}>
                {section.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm lg:text-base leading-relaxed mb-8 max-w-[280px]" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}>
                We will identify where <span className="text-[#00A8E8]">potential</span> problems might occur and provide you with a detailed set of recommendations.
              </p>

              {/* Read More Button */}
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#00A8E8] text-white font-semibold rounded-full hover:bg-[#0096D1] transition-all duration-300 hover:scale-105" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}>
                <span>Read More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;