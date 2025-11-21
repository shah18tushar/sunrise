below is navbar code 






// BELOW IS THE ORIGINAL CODE 

// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiMiniBars3BottomRight } from "react-icons/hi2";
// import {
//   IoClose,
//   IoHome,
//   IoBriefcase,
//   IoImages,
//   IoInformationCircle,
//   IoMail,
// } from "react-icons/io5";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// // 3D Cosmic Particles Component
// const CosmicParticles = () => {
//   const particlesRef = useRef<THREE.Points | null>(null);
//   const particleCount = 3000;

//   const particleData = useMemo(() => {
//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 3);
//     const sizes = new Float32Array(particleCount);

//     for (let i = 0; i < particleCount; i++) {
//       const radius = Math.random() * 80 + 20;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.random() * Math.PI;

//       positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions[i * 3 + 2] = radius * Math.cos(phi);

//       velocities[i * 3] = (Math.random() - 0.5) * 0.03;
//       velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.03;
//       velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.03;

//       sizes[i] = Math.random() * 3 + 0.5;
//     }

//     return { positions, velocities, sizes };
//   }, [particleCount]);

//   useFrame((state) => {
//     if (!particlesRef.current) return;

//     const positions = particlesRef.current.geometry.attributes.position
//       .array as Float32Array;
//     const time = state.clock.getElapsedTime();

//     for (let i = 0; i < particleCount; i++) {
//       const i3 = i * 3;

//       positions[i3] += particleData.velocities[i3];
//       positions[i3 + 1] += particleData.velocities[i3 + 1];
//       positions[i3 + 2] += particleData.velocities[i3 + 2];

//       positions[i3] += Math.sin(time * 0.3 + i * 0.01) * 0.01;
//       positions[i3 + 1] += Math.cos(time * 0.4 + i * 0.01) * 0.01;
//       positions[i3 + 2] += Math.sin(time * 0.2 + i * 0.02) * 0.015;

//       const maxDist = 100;
//       if (Math.abs(positions[i3]) > maxDist) positions[i3] *= -0.9;
//       if (Math.abs(positions[i3 + 1]) > maxDist) positions[i3 + 1] *= -0.9;
//       if (Math.abs(positions[i3 + 2]) > maxDist) positions[i3 + 2] *= -0.9;
//     }

//     particlesRef.current.geometry.attributes.position.needsUpdate = true;

//     particlesRef.current.rotation.y = time * 0.03;
//     particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particleData.positions, 3]}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           args={[particleData.sizes, 1]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.2}
//         color="#39ACE2"
//         transparent
//         opacity={0.8}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//         sizeAttenuation={true}
//       />
//     </points>
//   );
// };

// const SecondaryParticles = () => {
//   const particlesRef = useRef<THREE.Points | null>(null);
//   const particleCount = 1500;

//   const particleData = useMemo(() => {
//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 120;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

//       velocities[i * 3] = (Math.random() - 0.5) * 0.015;
//       velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
//       velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
//     }

//     return { positions, velocities };
//   }, [particleCount]);

//   useFrame((state) => {
//     if (!particlesRef.current) return;

//     const positions = particlesRef.current.geometry.attributes.position
//       .array as Float32Array;
//     const time = state.clock.getElapsedTime();

//     for (let i = 0; i < particleCount; i++) {
//       const i3 = i * 3;
//       positions[i3] += particleData.velocities[i3];
//       positions[i3 + 1] += particleData.velocities[i3 + 1];
//       positions[i3 + 2] += particleData.velocities[i3 + 2];

//       if (Math.abs(positions[i3]) > 60) positions[i3] *= -0.95;
//       if (Math.abs(positions[i3 + 1]) > 60) positions[i3 + 1] *= -0.95;
//       if (Math.abs(positions[i3 + 2]) > 30) positions[i3 + 2] *= -0.95;
//     }

//     particlesRef.current.geometry.attributes.position.needsUpdate = true;
//     particlesRef.current.rotation.y = -time * 0.02;
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particleData.positions, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.12}
//         color="#0B5DA7"
//         transparent
//         opacity={0.6}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//         sizeAttenuation={true}
//       />
//     </points>
//   );
// };

// const ParticleScene = () => {
//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <pointLight position={[20, 20, 20]} intensity={0.4} color="#39ACE2" />
//       <pointLight position={[-20, -20, -10]} intensity={0.3} color="#0B5DA7" />
//       <CosmicParticles />
//       <SecondaryParticles />
//     </>
//   );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//   }, [isOpen]);

//   const menuItems = [
//     { name: "Home", icon: IoHome },
//     { name: "Services", icon: IoBriefcase },
//     { name: "Contact Us", icon: IoMail },
//     { name: "Portfolio", icon: IoImages },
//     { name: "About Us", icon: IoInformationCircle },
//   ];

//   // Calculate positions for circular arrangement - FIXED POSITIONING
//   const getCircularPosition = (index: number, total: number) => {
//     // Start from top (12 o'clock position) and go clockwise
//     const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // -90 degrees to start from top
//     const radius = 320; // Increased radius for better spacing
//     return {
//       x: Math.cos(angle) * radius,
//       y: Math.sin(angle) * radius,
//     };
//   };

//   return (
//     <>
//       {/* === NAVBAR === */}
//       <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md transition-all duration-500">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           <div>
//             <img src="logo.jpeg" alt="logo" className="w-[8rem] h-16" />
//           </div>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="flex items-center cursor-pointer  gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white font-semibold shadow-lg hover:shadow-[#39ACE2]/40 hover:scale-105 transition duration-300"
//           >
//             <HiMiniBars3BottomRight className="text-2xl" />
//             <span>Menu</span>
//           </button>
//         </div>
//       </nav>

//       {/* === MENU OVERLAY === */}
//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <>
//             {/* FIRST LAYER — Deep Cinematic Glow */}
//             <motion.div
//               key="first-layer"
//               className="fixed inset-0 z-[90]"
//               style={{
//                 backgroundImage: `
//                   radial-gradient(circle at 20% 30%, rgba(11,50,90,0.3) 0%, transparent 45%),
//                   radial-gradient(circle at 80% 70%, rgba(0,26,53,0.35) 0%, transparent 55%),
//                   linear-gradient(135deg, #000000 0%, #000814 30%, #001233 50%, #001a35 70%, #0B5DA7 90%, #39ACE2 100%)`,
//                 boxShadow: `
//                   inset 0 0 200px rgba(0, 0, 0, 0.9),
//                   inset 0 0 300px rgba(0, 20, 40, 0.6),
//                   inset 0 0 350px rgba(11,50,90,0.4)
//                 `,
//               }}
//               initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               animate={{
//                 clipPath: "circle(150% at 50% 50%)",
//                 opacity: 1,
//               }}
//               exit={{
//                 clipPath: "circle(0% at 100% 0%)",
//                 opacity: 0,
//               }}
//               transition={{ duration: 1.3, ease: "easeInOut" }}
//             />

//             {/* SECOND LAYER — Ultra Premium 3D Universe */}
//             <motion.div
//               key="second-layer"
//               className="fixed inset-0 z-[95]"
//               initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               animate={{
//                 clipPath: "circle(150% at 50% 50%)",
//                 opacity: 1,
//               }}
//               exit={{
//                 clipPath: "circle(0% at 100% 0%)",
//                 opacity: 0,
//               }}
//               transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut" }}
//             >
//               {/* Three.js Canvas with 3D Particles */}
//               <div className="absolute inset-0 w-full h-full">
//                 <Canvas
//                   key="canvas"
//                   camera={{ position: [0, 0, 35], fov: 75 }}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     background: `
//                       linear-gradient(170deg, 
//                         #000000 0%, 
//                         #000204 8%,
//                         #000408 15%, 
//                         #00060d 22%, 
//                         #000912 28%,
//                         #000c18 34%,
//                         #000f1e 40%,
//                         #001224 46%, 
//                         #00152a 52%,
//                         #001830 58%,
//                         #001b36 64%,
//                         #001e3c 70%, 
//                         #002242 76%, 
//                         #002648 82%,
//                         #002a4e 86%, 
//                         #003055 90%,
//                         #00365c 93%,
//                         #004068 95%,
//                         #0B5DA7 97%, 
//                         #1a6db5 98.5%, 
//                         #39ACE2 100%)
//                     `,
//                   }}
//                   gl={{
//                     antialias: true,
//                     alpha: true,
//                     powerPreference: "high-performance",
//                   }}
//                   dpr={[1, 2]}
//                   frameloop="always"
//                 >
//                   <ParticleScene />
//                 </Canvas>
//               </div>

//               {/* Deep Shadow Overlay */}
//               <div
//                 className="absolute inset-0 w-full h-full pointer-events-none"
//                 style={{
//                   background: `
//                     radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)
//                   `,
//                   boxShadow: `
//                     inset 0 0 400px rgba(0, 0, 0, 0.95),
//                     inset 0 0 350px rgba(0, 8, 20, 0.9),
//                     inset 0 0 250px rgba(0, 15, 35, 0.7),
//                     inset 0 -200px 300px rgba(0, 0, 0, 0.95)
//                   `,
//                 }}
//               />

//               {/* Content Layer */}
//               <div className="relative z-10 flex items-center justify-center h-full w-full overflow-hidden">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-6 right-34 cursor-pointer flex items-center gap-2 text-lg px-5 py-2 rounded-xl bg-gradient-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white font-semibold shadow-lg hover:bg-[#39ACE2]/90 hover:text-white hover:shadow-[#39ACE2]/40 transition duration-300 backdrop-blur-sm z-50"
//                 >
//                   <IoClose className="text-2xl" />
//                   <span>Close</span>
//                 </button>

//                 {/* ============================================= */}
//                 {/* ⭐⭐ NEW PREMIUM SOCIAL MEDIA (BOTTOM LEFT) ⭐⭐ */}
//                 {/* ============================================= */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 2.2, duration: 0.8 }}
//                   className="absolute bottom-10 left-10 flex gap-6 z-[120]"
//                 >
//                   {/* Icon Container */}
//                   {[
//                     { Icon: FaFacebookF, link: "#" },
//                     { Icon: FaInstagram, link: "#" },
//                     { Icon: FaLinkedinIn, link: "#" },
//                     { Icon: FaYoutube, link: "#" },
//                   ].map((item, index) => (
//                     <a
//                       key={index}
//                       href={item.link}
//                       className="p-4 rounded-full bg-gradient-to-br from-[#001830]/70 to-[#000c18]/70 border border-[#39ACE2]/40 backdrop-blur-xl shadow-[0_0_25px_rgba(57,172,226,0.4)] hover:shadow-[0_0_50px_rgba(57,172,226,1)] hover:scale-110 transition-all duration-500 flex items-center justify-center"
//                     >
//                       <item.Icon className="text-[#39ACE2] text-xl drop-shadow-[0_0_10px_rgba(57,172,226,1)] hover:text-white transition duration-300" />
//                     </a>
//                   ))}
//                 </motion.div>

//                 {/* ================================================== */}
//                 {/* ⭐⭐ NEW PREMIUM CONTACT INFO (BOTTOM RIGHT) ⭐⭐ */}
//                 {/* ================================================== */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 2.4, duration: 0.8 }}
//                   className="absolute bottom-10 right-10 z-[120] text-right"
//                 >
//                   <div className="bg-gradient-to-br from-[#001830]/70 to-[#000c18]/70 backdrop-blur-2xl p-6 rounded-xl border border-[#39ACE2]/40 shadow-[0_0_35px_rgba(57,172,226,0.5)]">
//                     <p className="text-[#39ACE2] text-lg font-light tracking-wide">
//                       📞 +91 98765 43210
//                     </p>
//                     <p className="text-[#39ACE2] text-lg font-light tracking-wide mt-2">
//                       ✉️ info@yourbrand.com
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* Circular Menu Container */}
//                 <div className="relative w-[900px] h-[900px]">
//                   {/* Connecting Beams - Ultra Premium SVG */}
//                   <svg
//                     className="absolute inset-0 w-full h-full pointer-events-none"
//                     style={{ zIndex: 1 }}
//                   >
//                     <defs>
//                       {/* Premium Gradient for beams */}
//                       <linearGradient
//                         id="beamGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop
//                           offset="0%"
//                           stopColor="#39ACE2"
//                           stopOpacity="0.1"
//                         />
//                         <stop
//                           offset="25%"
//                           stopColor="#1a6db5"
//                           stopOpacity="0.4"
//                         />
//                         <stop
//                           offset="50%"
//                           stopColor="#39ACE2"
//                           stopOpacity="0.8"
//                         />
//                         <stop
//                           offset="75%"
//                           stopColor="#1a6db5"
//                           stopOpacity="0.4"
//                         />
//                         <stop
//                           offset="100%"
//                           stopColor="#39ACE2"
//                           stopOpacity="0.1"
//                         />
//                       </linearGradient>
//                     </defs>

//                     {/* Draw beams between all items */}
//                     {menuItems.map((_, i) => {
//                       const pos1 = getCircularPosition(i, menuItems.length);
//                       return menuItems.slice(i + 1).map((__, idx) => {
//                         const j = i + 1 + idx;
//                         const pos2 = getCircularPosition(j, menuItems.length);
//                         const isHovered =
//                           hoveredIndex === i || hoveredIndex === j;

//                         return (
//                           <g key={`${i}-${j}`}>
//                             {/* Outer glow layer */}
//                             <motion.line
//                               x1={450 + pos1.x}
//                               y1={450 + pos1.y}
//                               x2={450 + pos2.x}
//                               y2={450 + pos2.y}
//                               stroke="#39ACE2"
//                               strokeWidth="8"
//                               strokeOpacity="0.1"
//                               initial={{ pathLength: 0, opacity: 0 }}
//                               animate={{
//                                 pathLength: 1,
//                                 opacity: isHovered ? 0.3 : 0.1,
//                               }}
//                               transition={{
//                                 pathLength: {
//                                   delay: 1.3 + (i + j) * 0.08,
//                                   duration: 1.2,
//                                   ease: "easeInOut",
//                                 },
//                                 opacity: { duration: 0.3 },
//                               }}
//                               filter="url(#advancedGlow)"
//                             />

//                             {/* Main beam */}
//                             <motion.line
//                               x1={450 + pos1.x}
//                               y1={450 + pos1.y}
//                               x2={450 + pos2.x}
//                               y2={450 + pos2.y}
//                               stroke="url(#beamGradient)"
//                               strokeWidth={isHovered ? "3" : "2"}
//                               initial={{ pathLength: 0, opacity: 0 }}
//                               animate={{
//                                 pathLength: 1,
//                                 opacity: isHovered ? 1 : 0.5,
//                                 strokeWidth: isHovered ? 3 : 2,
//                               }}
//                               transition={{
//                                 pathLength: {
//                                   delay: 1.3 + (i + j) * 0.08,
//                                   duration: 1.2,
//                                   ease: "easeInOut",
//                                 },
//                                 opacity: { duration: 0.3 },
//                                 strokeWidth: { duration: 0.3 },
//                               }}
//                               filter="url(#glow)"
//                             />
//                           </g>
//                         );
//                       });
//                     })}

//                     {/* Outer circle ring */}
//                     <motion.circle
//                       cx="450"
//                       cy="450"
//                       r="320"
//                       fill="none"
//                       stroke="url(#beamGradient)"
//                       strokeWidth="1.5"
//                       strokeOpacity="0.3"
//                       initial={{ pathLength: 0, opacity: 0 }}
//                       animate={{ pathLength: 1, opacity: 0.3 }}
//                       transition={{
//                         delay: 1.0,
//                         duration: 2,
//                         ease: "easeInOut",
//                       }}
//                       filter="url(#glow)"
//                     />
//                   </svg>

//                   {/* Center Hub - Neural Core */}
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 1.0, duration: 1, ease: "backOut" }}
//                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
//                   >
//                     <div className="relative">
//                       {/* Outer rotating ring */}
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 2000, repeat: Infinity, ease: "linear" }}
//                         className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                       >
//                         <div className="w-full h-full rounded-full border-2 border-[#39ACE2]/30 border-dashed" />
//                       </motion.div>

//                       {/* Main core */}
//                       <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#39ACE2] via-[#1a6db5] to-[#0B5DA7] flex items-center justify-center shadow-[0_0_60px_rgba(57,172,226,1),inset_0_0_30px_rgba(57,172,226,0.5)]">
//                         <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001830] to-[#000c18] flex items-center justify-center border border-[#39ACE2]/50">
//                           <motion.div
//                             animate={{
//                               scale: [1, 1.2, 1],
//                               opacity: [0.8, 1, 0.8],
//                             }}
//                             transition={{
//                               duration: 2,
//                               repeat: Infinity,
//                               ease: "easeInOut",
//                             }}
//                             className="w-8 h-8 rounded-full bg-gradient-to-br from-[#39ACE2] to-[#0B5DA7] shadow-[0_0_30px_rgba(57,172,226,1)]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Menu Items in Circle */}
//                   {menuItems.map((item, i) => {
//                     const position = getCircularPosition(i, menuItems.length);
//                     const Icon = item.icon;

//                     // Calculate absolute position from center
//                     const centerX = 400; // Half of 900px container
//                     const centerY = 400;
//                     const itemX = centerX + position.x;
//                     const itemY = centerY + position.y;

//                     return (
//                       <motion.div
//                         key={item.name}
//                         initial={{ scale: 0, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{
//                           delay: 1.3 + i * 0.15,
//                           duration: 0.8,
//                           ease: "backOut",
//                         }}
//                         onMouseEnter={() => setHoveredIndex(i)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                         className="absolute cursor-pointer group"
//                         style={{
//                           left: `${itemX}px`,
//                           top: `${itemY}px`,
//                           transform: "translate(-50%, -50%)",
//                           zIndex: 20,
//                         }}
//                       >
//                         <div className="relative flex flex-col items-center gap-4">
//                           {/* Icon Container */}
//                           <div className="relative">
//                             {/* Main icon circle */}
//                             <motion.div
//                               whileHover={{ scale: 1.15 }}
//                               transition={{ type: "spring", stiffness: 300 }}
//                               className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#001830]/80 to-[#000c18]/80 backdrop-blur-xl border-2 border-[#39ACE2]/50 flex items-center justify-center shadow-[0_0_40px_rgba(57,172,226,0.6),inset_0_0_20px_rgba(57,172,226,0.1)] group-hover:border-[#39ACE2] group-hover:shadow-[0_0_60px_rgba(57,172,226,1),inset_0_0_30px_rgba(57,172,226,0.3)] transition-all duration-500"
//                             >
//                               <Icon className="text-5xl text-[#39ACE2] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(57,172,226,0.8)]" />

//                               {/* Corner accents */}
//                               <div className="absolute top-2 right-2 w-2 h-2 bg-[#39ACE2] rounded-full opacity-60 group-hover:opacity-100" />
//                               <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#39ACE2] rounded-full opacity-60 group-hover:opacity-100" />
//                             </motion.div>

//                             {/* Rotating ring on hover */}
//                             {hoveredIndex === i && (
//                               <motion.div
//                                 initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
//                                 animate={{ rotate: 360, scale: 1, opacity: 1 }}
//                                 transition={{
//                                   rotate: {
//                                     duration: 10,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                   },
//                                   scale: { duration: 0.3 },
//                                   opacity: { duration: 0.3 },
//                                 }}
//                                 className="absolute inset-0 -m-2 w-32 h-32 rounded-full border-2 border-dashed border-[#39ACE2]/60"
//                               />
//                             )}
//                           </div>

//                           {/* Label with premium styling */}
//                           <motion.div
//                             initial={{ y: 10, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{
//                               delay: 1.5 + i * 0.15,
//                               duration: 0.6,
//                             }}
//                             className="relative"
//                           >
//                             <div className="absolute inset-0 bg-gradient-to-r from-[#39ACE2]/0 via-[#39ACE2]/20 to-[#39ACE2]/0 blur-xl group-hover:via-[#39ACE2]/40 transition-all duration-300" />
//                             <span
//                               className="relative text-2xl font-light text-white font-serif whitespace-nowrap group-hover:text-[#39ACE2] transition-colors duration-300 tracking-wider"
//                               style={{
//                                 textShadow:
//                                   "0 0 30px rgba(57,172,226,0.6), 0 0 60px rgba(11,93,167,0.4), 0 4px 20px rgba(0,0,0,0.8)",
//                                 letterSpacing: "0.05em",
//                               }}
//                             >
//                               {item.name}
//                             </span>
//                           </motion.div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;