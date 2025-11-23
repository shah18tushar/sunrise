"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 50, rotate: 180 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 200
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.92, rotate: -5 }}
            className="relative group cursor-pointer"
            aria-label="Scroll to top"
          >
            {/* Animated outer rings */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1,
                opacity: isHovered ? [0.5, 0, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
            />
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.3, 0, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeOut",
                delay: 0.3
              }}
              className="absolute inset-0 rounded-full border-2 border-blue-500"
            />

            {/* Mega glow effect */}
            <motion.div
              animate={{
                boxShadow: isHovered
                  ? [
                      '0 0 60px rgba(6, 182, 212, 0.8), 0 0 120px rgba(6, 182, 212, 0.5), 0 0 180px rgba(6, 182, 212, 0.3)',
                      '0 0 80px rgba(6, 182, 212, 0.9), 0 0 140px rgba(37, 99, 235, 0.6), 0 0 200px rgba(6, 182, 212, 0.4)',
                      '0 0 60px rgba(6, 182, 212, 0.8), 0 0 120px rgba(6, 182, 212, 0.5), 0 0 180px rgba(6, 182, 212, 0.3)',
                    ]
                  : '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3), 0 0 90px rgba(6, 182, 212, 0.2)',
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
              className="absolute inset-0 rounded-full blur-2xl"
            />

            {/* Main button structure */}
            <div className="relative w-20 h-20">
              {/* Circular progress ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="3"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{ 
                    strokeDashoffset: 2 * Math.PI * 45 * (1 - scrollProgress / 100)
                  }}
                  transition={{ duration: 0.1 }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 3D Button Core */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                {/* Metallic base layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950" />
                
                {/* Glass morphism layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-600/40 to-blue-900/50 backdrop-blur-sm" />
                
                {/* Top glossy highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-full" />
                
                {/* Bottom shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-full" />

                {/* Diagonal shine animation */}
                <motion.div
                  animate={{
                    x: isHovered ? ['0%', '200%'] : '-100%',
                    opacity: isHovered ? [0.6, 0.3, 0] : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 0.5
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  style={{ transform: 'skewX(-20deg)' }}
                />

                {/* Radial pulse from center */}
                <motion.div
                  animate={isHovered ? {
                    scale: [0, 2.5],
                    opacity: [0.8, 0],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400 via-blue-500 to-transparent"
                />

                {/* Inner glow ring */}
                <div className="absolute inset-2 rounded-full border border-cyan-400/50 shadow-[inset_0_0_20px_rgba(6,182,212,0.5)]" />

                {/* 3D edge bevels */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
                <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />
                <div className="absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-transparent via-blue-900/60 to-transparent" />

                {/* Center icon container with depth */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: isHovered ? [-2, 2, -2] : 0,
                      scale: isHovered ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: isHovered ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    {/* Icon glow */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? [0.5, 1, 0.5] : 0.7,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isHovered ? Infinity : 0,
                      }}
                      className="absolute inset-0 blur-md"
                    >
                      <BsArrowUp className="w-8 h-8 text-cyan-400" strokeWidth={3} />
                    </motion.div>
                    
                    {/* Actual icon */}
                    <BsArrowUp 
                      className="relative w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>

                {/* Particle effects */}
                {isHovered && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, Math.cos((i * 60 * Math.PI) / 180) * 30],
                      y: [0, Math.sin((i * 60 * Math.PI) / 180) * 30],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400"
                  />
                ))}
              </div>
            </div>

            {/* 3D floating shadow */}
            <motion.div
              animate={{
                opacity: isHovered ? [0.4, 0.7, 0.4] : 0.3,
                scale: isHovered ? [1, 1.2, 1] : 1,
                y: isHovered ? [0, 2, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-blue-950/60 blur-xl rounded-full"
            />

            {/* Enhanced tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="absolute right-24 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-cyan-500/40">
                    {/* Tooltip glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-sm" />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <BsArrowUp className="w-4 h-4 text-cyan-400" strokeWidth={2.5} />
                      </motion.div>
                      <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Back to Top
                      </span>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                      />
                    </div>
                    
                    {/* Arrow pointer */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-gradient-to-br from-slate-900 to-blue-950 border-r border-t border-cyan-500/40" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Background ambient glow */}
          <motion.div
            animate={{
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
              scale: isHovered ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-radial from-cyan-500/30 via-blue-600/20 to-transparent blur-3xl -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;