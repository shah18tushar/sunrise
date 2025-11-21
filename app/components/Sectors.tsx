"use client";

import React from "react";
import Image from "next/image";

const sectorsData = [
  {
    title: "Pharmaceutical",
    img: "/img.jpg",
    desc: "We support the rapidly evolving pharmaceutical industry with comprehensive EPCM and turnkey EPC services, delivering state-of-the-art manufacturing plants, R&D facilities, and specialized containment labs.",
  },
  {
    title: "Bio-Pharmaceutical",
    img: "/img.jpg",
    desc: "Based in Bahrain, we specialize in delivering comprehensive EPC and EPCM services for complex pharmaceutical and biopharmaceutical projects. We ensure high-quality, compliant solutions from concept development to final handover.",
  },
  {
    title: "Mission Critical Facilities (Data Centers)",
    img: "/img.jpg",
    desc: "Geneire drives innovation in the rapidly evolving data center sector, delivering end-to-end solutions from design to commissioning. Our expertise includes modular data center design for rapid deployment, integrating cutting-edge technology.",
  },
  {
    title: "Oil & Gas",
    img: "/img.jpg",
    desc: "Geneire provides comprehensive turnkey solutions for the oil and gas sector, specializing in refineries, chemical plants, pipelines, and gas compression facilities. We deliver seamless project execution from design to commissioning through EPCM and turnkey EPC models.",
  },
  {
    title: "Advanced Technology Facilities",
    img: "/img.jpg",
    desc: "We ensure strict environmental controls, advanced materials, and seamless integration of specialized systems throughout every project phase, from design to commissioning. With a focus on quality, safety, and efficiency.",
  },
  {
    title: "Food & Beverage",
    img: "/img.jpg",
    desc: "The F&B industry demands precision, hygiene, and efficiency in every aspect of its operations. We specialize in delivering comprehensive turnkey solutions for large-scale catering processing facilities, poultry processing plants, hatcheries, and breweries.",
  },
];

const Sectors = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A66C2] text-center mb-14 tracking-tight">
          SECTORS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sectorsData.map((sector, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                <Image
                  src={sector.img}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0A66C2] mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sector.desc}
                </p>
              </div>

              {/* Highlight bar */}
              <div className="h-2 w-full bg-[#44C0F0] rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
