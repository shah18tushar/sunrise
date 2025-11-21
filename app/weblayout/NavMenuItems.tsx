"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IoHome,
  IoBriefcase,
  IoImages,
  IoInformationCircle,
  IoMail,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

// Menu items data
export const menuItems = [
  { name: "Home", icon: IoHome },
  { name: "Services", icon: IoBriefcase },
  { name: "Contact Us", icon: IoMail },
  { name: "Portfolio", icon: IoImages },
  { name: "About Us", icon: IoInformationCircle },
];

// Social media items
export const socialItems = [
  { Icon: FaFacebookF, link: "#" },
  { Icon: FaInstagram, link: "#" },
  { Icon: FaLinkedinIn, link: "#" },
  { Icon: FaYoutube, link: "#" },
];

// Contact info
export const contactInfo = {
  phone: "+91 98765 43210",
  email: "info@yourbrand.com"
};

// Calculate positions for circular arrangement - FIXED POSITIONING
export const getCircularPosition = (index: number, total: number) => {
  // Start from top (12 o'clock position) and go clockwise
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // -90 degrees to start from top
  const radius = 320; // Increased radius for better spacing
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
};

// Social Media Component
export const SocialMediaIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      className="absolute bottom-10 left-10 flex gap-6 z-[120]"
    >
      {socialItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="p-4 rounded-full bg-gradient-to-br from-[#001830]/70 to-[#000c18]/70 border border-[#39ACE2]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(57,172,226,0.4)] hover:shadow-[0_0_50px_rgba(57,172,226,1)] hover:scale-110 transition-all duration-500 flex items-center justify-center"
        >
          <item.Icon className="text-[#39ACE2] text-xl drop-shadow-[0_0_10px_rgba(57,172,226,1)] hover:text-white transition duration-300" />
        </a>
      ))}
    </motion.div>
  );
};

// Contact Info Component
export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.8 }}
      className="absolute bottom-10 right-10 z-[120] text-right"
    >
      <div className="bg-gradient-to-br from-[#001830]/70 to-[#000c18]/70 backdrop-blur-2xl p-6 rounded-xl border border-[#39ACE2]/40 shadow-[0_0_35px_rgba(57,172,226,0.5)]">
        <p className="text-[#39ACE2] text-lg font-light tracking-wide">
          📞 {contactInfo.phone}
        </p>
        <p className="text-[#39ACE2] text-lg font-light tracking-wide mt-2">
          ✉️ {contactInfo.email}
        </p>
      </div>
    </motion.div>
  );
};

// Center Hub Component
export const CenterHub = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.0, duration: 1, ease: "backOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2000, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <div className="w-full h-full rounded-full border-2 border-[#39ACE2]/30 border-dashed" />
        </motion.div>

        {/* Main core */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#39ACE2] via-[#1a6db5] to-[#0B5DA7] flex items-center justify-center shadow-[0_0_60px_rgba(57,172,226,1),inset_0_0_30px_rgba(57,172,226,0.5)]">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001830] to-[#000c18] flex items-center justify-center border border-[#39ACE2]/50">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#39ACE2] to-[#0B5DA7] shadow-[0_0_30px_rgba(57,172,226,1)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Connecting Beams SVG Component
export const ConnectingBeams = ({ hoveredIndex }: { hoveredIndex: number | null }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <defs>
        {/* Premium Gradient for beams */}
        <linearGradient
          id="beamGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#39ACE2"
            stopOpacity="0.1"
          />
          <stop
            offset="25%"
            stopColor="#1a6db5"
            stopOpacity="0.4"
          />
          <stop
            offset="50%"
            stopColor="#39ACE2"
            stopOpacity="0.8"
          />
          <stop
            offset="75%"
            stopColor="#1a6db5"
            stopOpacity="0.4"
          />
          <stop
            offset="100%"
            stopColor="#39ACE2"
            stopOpacity="0.1"
          />
        </linearGradient>
      </defs>

      {/* Draw beams between all items */}
      {menuItems.map((_, i) => {
        const pos1 = getCircularPosition(i, menuItems.length);
        return menuItems.slice(i + 1).map((__, idx) => {
          const j = i + 1 + idx;
          const pos2 = getCircularPosition(j, menuItems.length);
          const isHovered = hoveredIndex === i || hoveredIndex === j;

          return (
            <g key={`${i}-${j}`}>
              {/* Outer glow layer */}
              <motion.line
                x1={450 + pos1.x}
                y1={450 + pos1.y}
                x2={450 + pos2.x}
                y2={450 + pos2.y}
                stroke="#39ACE2"
                strokeWidth="8"
                strokeOpacity="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: isHovered ? 0.3 : 0.1,
                }}
                transition={{
                  pathLength: {
                    delay: 1.3 + (i + j) * 0.08,
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.3 },
                }}
                filter="url(#advancedGlow)"
              />

              {/* Main beam */}
              <motion.line
                x1={450 + pos1.x}
                y1={450 + pos1.y}
                x2={450 + pos2.x}
                y2={450 + pos2.y}
                stroke="url(#beamGradient)"
                strokeWidth={isHovered ? "3" : "2"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: isHovered ? 1 : 0.5,
                  strokeWidth: isHovered ? 3 : 2,
                }}
                transition={{
                  pathLength: {
                    delay: 1.3 + (i + j) * 0.08,
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.3 },
                  strokeWidth: { duration: 0.3 },
                }}
                filter="url(#glow)"
              />
            </g>
          );
        });
      })}

      {/* Outer circle ring */}
      <motion.circle
        cx="450"
        cy="450"
        r="320"
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{
          delay: 1.0,
          duration: 2,
          ease: "easeInOut",
        }}
        filter="url(#glow)"
      />
    </svg>
  );
};

// Individual Menu Item Component
export const MenuItem = ({ 
  item, 
  index, 
  hoveredIndex, 
  setHoveredIndex 
}: { 
  item: typeof menuItems[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const position = getCircularPosition(index, menuItems.length);
  const Icon = item.icon;

  // Calculate absolute position from center
  const centerX = 400; // Half of 900px container
  const centerY = 400;
  const itemX = centerX + position.x;
  const itemY = centerY + position.y;

  return (
    <motion.div
      key={item.name}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.3 + index * 0.15,
        duration: 0.8,
        ease: "backOut",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="absolute cursor-pointer group"
      style={{
        left: `${itemX}px`,
        top: `${itemY}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
      }}
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Icon Container */}
        <div className="relative">
          {/* Main icon circle */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#001830]/80 to-[#000c18]/80 backdrop-blur-xl border-2 border-[#39ACE2]/50 flex items-center justify-center shadow-[0_0_40px_rgba(57,172,226,0.6),inset_0_0_20px_rgba(57,172,226,0.1)] group-hover:border-[#39ACE2] group-hover:shadow-[0_0_60px_rgba(57,172,226,1),inset_0_0_30px_rgba(57,172,226,0.3)] transition-all duration-500"
          >
            <Icon className="text-5xl text-[#39ACE2] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(57,172,226,0.8)]" />

            {/* Corner accents */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#39ACE2] rounded-full opacity-60 group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#39ACE2] rounded-full opacity-60 group-hover:opacity-100" />
          </motion.div>

          {/* Rotating ring on hover */}
          {hoveredIndex === index && (
            <motion.div
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 -m-2 w-32 h-32 rounded-full border-2 border-dashed border-[#39ACE2]/60"
            />
          )}
        </div>

        {/* Label with premium styling */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.5 + index * 0.15,
            duration: 0.6,
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#39ACE2]/0 via-[#39ACE2]/20 to-[#39ACE2]/0 blur-xl group-hover:via-[#39ACE2]/40 transition-all duration-300" />
          <span
            className="relative text-2xl font-light text-white font-serif whitespace-nowrap group-hover:text-[#39ACE2] transition-colors duration-300 tracking-wider"
            style={{
              textShadow:
                "0 0 30px rgba(57,172,226,0.6), 0 0 60px rgba(11,93,167,0.4), 0 4px 20px rgba(0,0,0,0.8)",
              letterSpacing: "0.05em",
            }}
          >
            {item.name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Menu Items Component
export const MenuItems = ({ 
  hoveredIndex, 
  setHoveredIndex 
}: { 
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  return (
    <div className="relative w-[900px] h-[900px]">
      <ConnectingBeams hoveredIndex={hoveredIndex} />
      <CenterHub />
      
      {menuItems.map((item, index) => (
        <MenuItem
          key={item.name}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

const NavMenuItems = () => {
  return (
    <div>NavMenuItems</div>
  )
}

export default NavMenuItems;