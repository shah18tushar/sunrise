"use client";

import React, { useState } from "react";
import {
  FiFileText,
  FiTag,
  FiType,
  FiTarget,
  FiCopy,
  FiBookOpen,
  FiTrendingUp,
  FiPlay,
  FiAward,
  FiUsers,
  FiGlobe,
  FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";
import VideoModal from "./ui/VideoModal";

const leftIcons = [
  FiFileText,
  FiTag,
  FiType,
  FiTarget,
  FiCopy,
  FiBookOpen,
  FiTrendingUp,
];

const bullets = [
  "We make sure that the right keyword is in the page title.",
  "We make sure that the right keyword is in the meta description.",
  "We make sure that the right keyword is in the HTML heading tag.",
  "The keyword must be relevant to your industry.",
  "It cannot be Copied from another website.",
  "It must get through relevant, insightful, and informative content.",
  "We make sure to drives high-quality traffic to your website.",
];

const premiumStats = [
  { icon: FiAward, value: "200+", label: "Awards Won" },
  { icon: FiUsers, value: "98%", label: "Client Retention" },
  { icon: FiGlobe, value: "15+", label: "Global Offices" },
  { icon: FiBarChart2, value: "300%", label: "Average ROI" },
];

const OutsourcedService = () => {
  const [showVideo, setShowVideo] = useState(false);

  const bg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center py-28"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* LUXURY SECTION - DIV ID 1 */}
        <div id="1" className="w-full pt-0">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center justify-center px-6 py-2 bg-[#034D9D] rounded-full mb-8"
              >
                <div className="relative flex items-center">
                  <span className="text-white font-semibold text-xs uppercase tracking-widest" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    Exclusive Premium Excellence
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl md:text-5xl  text-white mb-8 tracking-wide"
              >
                Experience The{" "}
                <span className="relative inline-block">
                  <span className="text-[#4DA6FF]">Ultimate Premium</span>
                  <motion.span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-[#4DA6FF] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 2, ease: "easeIn", delay: 1.2 }}
                  />
                </span>{" "}
                Service Standard
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }} 
                className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                Where{" "}
                <span className="text-[#4DA6FF] font-medium">
                  cutting-edge technology
                </span>{" "}
                meets{" "}
                <span className="text-[#4DA6FF] font-medium">
                  unparalleled luxury
                </span>
                . We deliver{" "}
                <span className="text-[#4DA6FF] font-medium">
                  elite IT solutions
                </span>{" "}
                for discerning clients who expect nothing but the absolute best.
              </motion.p>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-8 mb-0">
              {premiumStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-0 backdrop-blur-none flex flex-col items-center text-center"
                >
                  <div className="mb-4 p-4 bg-blue-700/30 rounded-full">
                    <stat.icon className="h-8 w-8 text-white/80" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-white/70" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="2"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
            {/* LEFT SECTION */}
            <div className="flex flex-col justify-center h-full">
              <ul className="space-y-6">
                {bullets.map((text, i) => {
                  const Icon = leftIcons[i];
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <div className="text-[#4DA6FF] flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-white/95 leading-relaxed text-lg font-normal" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                        {text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* RIGHT SECTION */}
            <div className="relative h-full flex flex-col justify-around gap-6 py-0 -mt-14">
              {/* Stat card */}
              <div className="flex justify-end">
                <div className="bg-[#034D9D]/60 rounded-2xl shadow-2xl px-8 py-6 text-white">
                  <div className="text-5xl font-medium leading-none">46%</div>
                  <div className="mt-3 text-base font-semibold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    Average Traffic Increase
                  </div>
                </div>
              </div>

              {/* Play button */}
              <div className="flex items-center justify-start gap-6">
                <button
                  aria-label="See Our Video"
                  onClick={() => setShowVideo(true)}
                  className="peer relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#034D9D] text-white shadow-2xl hover:bg-[#023a80] transition-colors ring-4 ring-white/30 hover:ring-white/50 cursor-pointer"
                >
                  <FiPlay className="h-8 w-8 translate-x-1" />
                </button>

                <span className="text-white font-semibold text-lg opacity-0 -translate-x-8 transition-all duration-500 ease-out peer-hover:opacity-100 peer-hover:translate-x-0" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  See Our Video
                </span>
              </div>

              {/* Main heading */}
              <div className="mt-0">
                <h2 className="text-white font-medium leading-tight text-4xl lg:text-3xl mb-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Outsourced Service In-
                  <span className="text-[#4DA6FF]">House Feel</span>
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Meet the outstanding performers in our dynamic,
                  industry-award-winning team of passionate and highly skilled
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal show={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  );
};

export default OutsourcedService;