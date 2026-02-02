"use client";

import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
    <section className="relative w-full overflow-hidden mt-[4.9rem]">
      {/* Background Image */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2400&q=90')",
        }}
      >
        {/* Enterprise Overlay */}
         <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          {/* Premium Breadcrumb */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full border border-white/20 shadow-xl mb-6">
            <Link href="/" className="focus:outline-none">
            <span className="text-gray-200 hover:text-blue-300 transition cursor-pointer">
              Home
            </span>
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-white font-semibold tracking-wide">
              About Us
            </span>
          </div>

          {/* Company Title */}
          <h1 className="text-5xl font-semibold tracking-tight text-white leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Sunrise Consulting
            </span>
          </h1>

          {/* Enterprise Description */}
          <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-gray-200">
            Sunrise Consulting is a global management and technology consulting
            firm delivering secure, scalable, and future-ready solutions that
            help multinational enterprises accelerate innovation, optimize
            operations, and lead digital transformation across global markets.
          </p>
        </div>
      </div>

      {/* Bottom Curve Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,60 C120,90 300,20 480,40 660,60 840,100 1020,80 1200,60 1320,40 1440,50 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default BreadCrumb;
