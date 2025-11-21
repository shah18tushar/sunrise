"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* ===== Animated Background Video ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9] scale-105"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ===== Premium Multi-Layer Overlays ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/95 to-blue-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      
      {/* ===== Animated Mesh Gradient ===== */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      {/* ===== Floating Particles Effect ===== */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* ===== Main Content Grid ===== */}
      <div className="relative z-10 h-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 h-full items-center">
          
          {/* ===== LEFT SECTION (7 columns) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-7 space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-cyan-300">Enterprise AI Infrastructure</span>
            </motion.div>

            {/* Main Heading with Gradient */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl font-light leading-[1.1] tracking-tight"
              >
                <span className="text-white drop-shadow-2xl">
                  AI-Powered
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Next-Gen Data Centers
                </span>
              </motion.h1>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full max-w-md"
              />
            </div>

            {/* Description with Glass Effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              Accelerate your infrastructure with{" "}
              <span className="text-cyan-400 font-semibold">intelligent</span>,{" "}
              <span className="text-blue-400 font-semibold">hyper-efficient</span>,
              self-optimizing AI Data Centers engineered for tomorrow's most demanding workloads.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-6 lg:gap-8"
            >
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "< 5ms", label: "Latency" },
                { value: "24/7", label: "AI Monitoring" },
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-3xl md:text-4xl font-light bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-cyan-500/50 text-white font-bold rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all shadow-lg hover:border-cyan-400"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT SECTION (5 columns) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="hidden lg:block col-span-12 lg:col-span-5"
          >
            <div className="relative group">
              {/* Glow Effect */}
              {/* <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" /> */}
              
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <Image
                    src="/img.jpg"
                    alt="AI Data Center Infrastructure"
                    fill
                    priority
                    className="object-cover transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-blue-900/20" />
                </div>

                {/* Floating Elements */}
                {/* <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-60"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-60"
                /> */}

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-blue-400 rounded-br-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cyan-400"
        >
          <span className="text-xs font-medium tracking-wider">SCROLL</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;