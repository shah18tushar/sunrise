"use client";

import React, { useEffect, useRef } from "react";

const expertise = [
  "Value Engineering",
  "Shop Drawings",
  "Procurement",
  "Materials Management",
  "Foundation Design",
  "Logistics Planning",
  "Sub-Structure Development",
  "Façade Installation",
  "Plumbing Installation",
];

const DataCenterInfo = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .shimmer-border {
          position: relative;
          overflow: hidden;
        }

        .shimmer-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(134, 53, 243, 0.4),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8635F3 0%, #4F46E5 50%, #2563EB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .expertise-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expertise-item:hover {
          transform: translateX(12px);
          color: #8635F3;
        }

        .expertise-item:hover .expertise-number {
          color: #8635F3;
          font-weight: 600;
        }

        .metric-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .metric-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(134, 53, 243, 0.15);
        }

        .decorative-line {
          position: relative;
        }

        .decorative-line::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #8635F3, transparent);
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .data-center-component .absolute {
          position: absolute;
        }

        .data-center-component .relative {
          position: relative;
        }

        .data-center-component .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .data-center-component .pointer-events-none {
          pointer-events: none;
        }

        .data-center-component .overflow-hidden {
          overflow: hidden;
        }
      `}</style>

      <section className="data-center-component relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div 
            ref={parallaxRef}
            className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating-element"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.2] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(134, 53, 243, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(134, 53, 243, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} 
          />
        </div>

        {/* Premium Header with Subtle Typography */}
        <div className="absolute top-0 left-0 right-0 text-center">
          <div className="text-[120px] font-bold tracking-[-0.02em] select-none pointer-events-none opacity-[0.04]" style={{ fontFamily: "'Playfair Display', serif" }}>
           ABOUT DATA CENTER 
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* ================= REFINED HEADER ================= */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-20">
            {/* Elegant Vertical Accent */}
            <div className="col-span-1 hidden lg:flex justify-center items-start pt-8">
              <div className="relative">
                <div className="w-[1px] bg-gradient-to-b from-transparent via-[#8635F3] to-transparent h-64" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8635F3]" />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-11 space-y-10">
              {/* Overline */}
              <div className="animate-fade-in-up stagger-1">
                <span className="inline-flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-[#8635F3]" />
                  <span className="text-[11px] tracking-[0.25em] uppercase text-gray-500 font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    Mission Critical Infrastructure
                  </span>
                </span>
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight animate-fade-in-up stagger-2 decorative-line" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sunrise Data Centers<br />
                <span className="gradient-text">Project Excellence</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="max-w-3xl text-xl text-gray-600 leading-relaxed animate-fade-in-up stagger-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Sunrise was entrusted with the comprehensive Civil, Structural, and Architectural delivery of a{" "}
                <span className="font-semibold text-gray-900 relative inline-block">
                  27,000m² hyperscale data center
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8635F3] to-transparent opacity-40" />
                </span>
                {" "}in the Kingdom of Bahrain—engineered to surpass the highest global standards of security, resilience, and operational excellence.
              </p>
            </div>
          </div>

          {/* ================= PREMIUM PROJECT SHOWCASE ================= */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-gray-900 tracking-tight decorative-line" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Scope & Execution
                </h2>

                <div className="space-y-7 text-gray-600 leading-[1.8] text-base" style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '300' }}>
                  <p>
                    MMR contracted Sunrise to deliver the complete Civil, Structural, and Architectural construction scope for a ±27,000m² Data Center facility on a 55,000m² plot in Bahrain. The scope encompasses site enabling works, site preparation, sub-structure, superstructure, external cladding, internal architectural works, plumbing, and materials.
                  </p>

                  <p>
                    Our approach integrates advanced planning, precise execution, and strict compliance with international data center standards. From foundation systems to façade delivery, every element is engineered to support uninterrupted operations and long-term performance.
                  </p>

                  <p className="border-l-2 border-[#8635F3] pl-6 italic text-gray-700">
                    "Sunrise ensures smooth, efficient traffic flow and road safety through comprehensive traffic management systems and intelligent coordination across all construction phases."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Metrics - Premium Card Design */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Decorative Corner */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#8635F3] opacity-20" />
                
                <div className="relative bg-white border border-gray-200 shadow-2xl shadow-purple-100/50">
                  {/* Purple Accent Bar */}
                  <div className="h-1 bg-gradient-to-r from-[#8635F3] via-[#4F46E5] to-[#2563EB]" />
                  
                  <div className="p-10 space-y-10">
                    <div className="">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          Built-Up Area
                        </span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-300 to-transparent" />
                      </div>
                      <p className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
                        27,000<span className="text-3xl ml-2">m²</span>
                      </p>
                    </div>

                    <div className="">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          Plot Size
                        </span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-300 to-transparent" />
                      </div>
                      <p className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif" }}>
                        55,000<span className="text-3xl ml-2">m²</span>
                      </p>
                    </div>

                    <div className="">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                          Location
                        </span>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-300 to-transparent" />
                      </div>
                      <p className="text-3xl font-semibold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Kingdom of Bahrain
                      </p>
                    </div>

                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5 text-[#8635F3]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>ISO 9001:2015 Certified Construction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= EXPERTISE SHOWCASE ================= */}
          <div className="mt-10">
            <div className="mb-16">
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#8635F3]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-gray-500 font-medium" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Core Competencies
                </span>
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight decorative-line" style={{ fontFamily: "'Playfair Display', serif" }}>
                Specialist Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
              {expertise.map((item, index) => (
                <div key={item} className="expertise-item flex items-start gap-5 group">
                  <span className="expertise-number text-sm text-gray-300 font-medium mt-1 transition-all" style={{ fontFamily: "'IBM Plex Sans', sans-serif", minWidth: '28px' }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-gray-800 font-medium text-lg leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCenterInfo;