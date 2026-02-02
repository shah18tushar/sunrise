"use client";

import Link from "next/link";
import React from "react";

const FormWithDetailsSection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-[4.8rem] mb-16">
      {/* Background Image */}
      <div
        className="relative min-h-[90vh] bg-cover bg-no-repeat bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=90')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl">
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6 border border-white/20 shadow-lg">
                <Link href="/" className="focus:outline-none">
                  <span className="hover:text-blue-300 transition cursor-pointer">
                    Home
                  </span>
                </Link>
                <span className="opacity-60">›</span>
                <span className="font-medium text-white">Contact Us</span>
              </div>

              {/* Company Title */}
              <h1 className="text-3xl font-semibold leading-tight mb-3">
                Get in Touch With Our
                <br />
                Expert Team
              </h1>

              <p className="text-base text-gray-200 mb-8">
                Our enterprise specialists deliver secure, scalable solutions
                that empower global organizations to innovate and lead digital
                transformation.
              </p>

              {/* Company Info Cards */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600/90 flex items-center justify-center shadow-xl ring-2 ring-blue-400/40">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-gray-300">
                      501, Corporate Plaza, Business Bay Road, Mumbai, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600/90 flex items-center justify-center shadow-xl ring-2 ring-blue-400/40">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600/90 flex items-center justify-center shadow-xl ring-2 ring-blue-400/40">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">contact@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-600/90 flex items-center justify-center shadow-xl ring-2 ring-blue-400/40">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition px-8 py-3 rounded-full font-semibold shadow-2xl ring-2 ring-blue-400/50">
                  Get Directions
                  <span className="text-lg">🗺️</span>
                </button>
              </div>
            </div>

            {/* RIGHT FORM CARD — TRUE TRANSPARENT EXECUTIVE GLASS */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative bg-transparent border border-white/30 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-8 w-full max-w-md">
                {/* Premium Glow Frame */}
                {/* <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/40 via-cyan-400/30 to-blue-500/40 blur-xl opacity-80 -z-10" /> */}

                <h2 className="text-2xl font-bold text-white mb-2 text-center tracking-wide">
                  Schedule Your Appointment
                </h2>
                <p className="text-gray-300 text-center mb-6">
                  We here to help you 24/7 with experts
                </p>

                <form className="space-y-4">
                  {["Name", "E-Mail", "Phone Number", "Your Message"].map(
                    (placeholder, index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder={placeholder}
                        className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-inner"
                      />
                    )
                  )}

                  <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold shadow-2xl hover:from-blue-700 hover:to-cyan-600 transition tracking-wide">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,40 C120,80 300,0 480,20 660,40 840,80 1020,60 1200,40 1320,20 1440,30 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default FormWithDetailsSection;
