"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMegaphoneOutline, IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    title: "Information Security",
    description:
      "Many Managed Services Providers make ambitious promises that they fail to deliver. We back up our services.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    title: "Technology Consulting",
    description:
      "We provide scalable and secure IT solutions to help enterprises grow faster and smarter.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    title: "Enterprise Solutions",
    description:
      "Our experts deliver industry-focused digital transformation strategies.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    title: "Cyber Defense",
    description:
      "Proactive protection for your business infrastructure and critical data.",
  },
];

const WhoWeAre = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#f6f9fc] mb-20">
      {/* LEFT SLIDER */}
      <div className="relative w-full lg:w-1/2 h-[450px] lg:h-screen overflow-hidden bg-black">
        {/* Permanent Black Layer (prevents white flash) */}
        <div className="absolute inset-0 bg-black z-0" />

        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <img
              src={slides[current].image}
              alt="Who We Are"
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay stays visible during transition */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Case Study Content */}
            <div className="absolute bottom-16 left-10 max-w-lg text-white z-20">
              <span className="text-blue-400 uppercase tracking-widest text-sm">
                Case Studies →
              </span>

              <h2 className="text-4xl font-bold mt-3">
                {slides[current].title}
              </h2>

              <p className="text-gray-200 mt-4 leading-relaxed">
                {slides[current].description}
              </p>

              <button className="mt-6 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-16 right-10 flex flex-col items-center space-y-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}

          <div className="mt-4 w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-sm">
            {String(current + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 flex items-center px-10 lg:px-20 py-20">
        <div className="max-w-xl">
          <span className="text-blue-600 font-semibold tracking-wide uppercase flex items-center gap-2">
            Who We Are →
          </span>

          <h2 className="text-4xl font-bold mt-4 leading-tight">
            Our <span className="text-blue-600">penetration testing</span> team
            uses an industry
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            We provide the full spectrum of IT services and consulting for
            various industries.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 text-2xl">
                <IoMegaphoneOutline />
              </div>

              <h4 className="font-bold mt-4 text-lg">Digital Marketer</h4>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Our customers get solutions and business opportunities instead
                of just projects. Our mission is to accelerate.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 text-2xl">
                <IoGlobeOutline />
              </div>

              <h4 className="font-bold mt-4 text-lg">Global Entrepreneur</h4>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Our developers work on trending technologies to design web and
                mobile applications.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link href="/servicespage">
          <button className="mt-12 px-8 py-3 cursor-pointer border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition rounded">
            Our Services
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
