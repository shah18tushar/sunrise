"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Premium Image */}
          <div className="relative">
            {/* soft frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100/40 to-cyan-100/40 blur-xl -z-10" />

            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2000&q=90"
              alt="Sunrise Consulting executive team meeting"
              className="w-full h-[420px] md:h-[620px] object-cover rounded-3xl shadow-2xl"
            />

            {/* subtle corner badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-700">
              Global Consulting
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="max-w-xl">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              About Sunrise Consulting
            </span>

            <h2 className="text-3xl font-semibold text-[#1f2d45] leading-tight mb-3">
              Driving Innovation for Global Enterprises
            </h2>

            <p className="text-base text-gray-600 mb-6">
              Sunrise Consulting is a multinational management and technology
              consulting firm specializing in digital transformation, enterprise
              modernization, and strategic advisory services for organizations
              operating across international markets.
            </p>

            <p className="text-gray-600 mb-8">
              Our global team of industry experts partners with leadership teams
              to design secure, scalable, and future-ready solutions that
              accelerate growth, optimize operations, and create long-term
              competitive advantage.
            </p>

            {/* Executive Delivery Workflow */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                How We Deliver Value
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "Discover",
                    desc: "Executive alignment, business diagnostics, and enterprise architecture assessment.",
                  },
                  {
                    step: "Design",
                    desc: "Secure solution blueprints, governance models, and transformation roadmaps.",
                  },
                  {
                    step: "Deploy",
                    desc: "Global rollout with performance tracking, change management, and risk controls.",
                  },
                  {
                    step: "Govern",
                    desc: "Ongoing optimization, compliance monitoring, and executive reporting frameworks.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
                  >
                    <p className="font-semibold text-[#1f2d45] mb-1">
                      {item.step}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
