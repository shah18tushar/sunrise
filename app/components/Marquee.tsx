// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";

// const Marquee = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   // Premium tech partners/services
//   const marqueeItems = [
//     { text: "AI Infrastructure", icon: "🤖" },
//     { text: "Cloud Computing", icon: "☁️" },
//     { text: "Edge Computing", icon: "⚡" },
//     { text: "Quantum Ready", icon: "🔬" },
//     { text: "Neural Networks", icon: "🧠" },
//     { text: "GPU Clusters", icon: "💎" },
//     { text: "5G Connectivity", icon: "📡" },
//     { text: "Blockchain Nodes", icon: "⛓️" },
//     { text: "Zero Latency", icon: "🚀" },
//     { text: "Green Energy", icon: "🌱" },
//   ];

//   // Three.js Background Animation
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / 300,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true,
//     });

//     renderer.setSize(window.innerWidth, 300);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     camera.position.z = 5;

//     // Create flowing particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 150;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 15;
//     }

//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.03,
//       color: new THREE.Color("#06b6d4"),
//       transparent: true,
//       opacity: 0.6,
//       blending: THREE.AdditiveBlending,
//     });

//     const particlesMesh = new THREE.Points(
//       particlesGeometry,
//       particlesMaterial
//     );
//     scene.add(particlesMesh);

//     // Create connecting lines
//     const lineGeometry = new THREE.BufferGeometry();
//     const lineMaterial = new THREE.LineBasicMaterial({
//       color: 0x3b82f6,
//       transparent: true,
//       opacity: 0.2,
//     });

//     const linePositions: number[] = [];
//     for (let i = 0; i < 30; i++) {
//       linePositions.push(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 5,
//         (Math.random() - 0.5) * 5
//       );
//     }

//     lineGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(linePositions, 3)
//     );
//     const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
//     scene.add(lines);

//     // Animation loop
//     let animationFrameId: number;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       particlesMesh.rotation.y += 0.001;
//       particlesMesh.rotation.x += 0.0005;
//       lines.rotation.y -= 0.0008;

//       // Flowing effect
//       const positions = particlesGeometry.attributes.position
//         .array as Float32Array;
//       for (let i = 0; i < positions.length; i += 3) {
//         positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
//       }
//       particlesGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / 300;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, 300);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);
//       renderer.dispose();
//       particlesGeometry.dispose();
//       particlesMaterial.dispose();
//       lineGeometry.dispose();
//       lineMaterial.dispose();
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-auto py-10 rounded-t-[12rem]
//      overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-blue-950">
//       {/* Three.js Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full opacity-40"
//       />

//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950" />

//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       {/* Main Content Container */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8 px-4">
        
//         {/* Premium Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center space-y-2"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//             </span>
//             <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
//               Powered by Sunrise
//             </span>
//           </div>
          
//           <h2 className="text-xl font-light">
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Enterprise-Grade Technologies
//             </span>
//           </h2>
//         </motion.div>

//         {/* Marquee Container */}
//         <div className="relative w-full max-w-7xl ">
//           {/* Gradient Fade Edges */}
//           {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" /> */}

//           {/* Marquee Track - First Row (Left to Right) */}
//           <div className="flex gap-8 mb-6">
//             <motion.div
//               animate={{
//                 x: [0, -1920],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 30,
//                   ease: "linear",
//                 },
//               }}
//               className="flex gap-8 flex-shrink-0"
//             >
//               {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
//                 <motion.div
//                   key={`row1-${index}`}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   className="group relative flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
//                 >
//                   {/* Glow effect on hover */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   <div className="relative flex items-center gap-3">
//                     <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </span>
//                     <span className="text-base font-bold text-white whitespace-nowrap tracking-wide">
//                       {item.text}
//                     </span>
//                   </div>

//                   {/* Corner accents */}
//                   <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-cyan-400/50 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-blue-400/50 rounded-br opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Duplicate for seamless loop */}
//             <motion.div
//               animate={{
//                 x: [0, -1920],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 30,
//                   ease: "linear",
//                 },
//               }}
//               className="flex gap-8 flex-shrink-0"
//             >
//               {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
//                 <motion.div
//                   key={`row1-dup-${index}`}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   className="group relative flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
//                 >
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   <div className="relative flex items-center gap-3">
//                     <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </span>
//                     <span className="text-base font-bold text-white whitespace-nowrap tracking-wide">
//                       {item.text}
//                     </span>
//                   </div>

//                   <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-cyan-400/50 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-blue-400/50 rounded-br opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Marquee Track - Second Row (Right to Left) */}
//           <div className="flex gap-8">
//             <motion.div
//               animate={{
//                 x: [-1920, 0],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 35,
//                   ease: "linear",
//                 },
//               }}
//               className="flex gap-8 flex-shrink-0"
//             >
//               {[...marqueeItems, ...marqueeItems, ...marqueeItems].reverse().map((item, index) => (
//                 <motion.div
//                   key={`row2-${index}`}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   className="group relative flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
//                 >
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   <div className="relative flex items-center gap-3">
//                     <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </span>
//                     <span className="text-base font-bold text-white whitespace-nowrap tracking-wide">
//                       {item.text}
//                     </span>
//                   </div>

//                   <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-blue-400/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-purple-400/50 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Duplicate for seamless loop */}
//             <motion.div
//               animate={{
//                 x: [-1920, 0],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 35,
//                   ease: "linear",
//                 },
//               }}
//               className="flex gap-8 flex-shrink-0"
//             >
//               {[...marqueeItems, ...marqueeItems, ...marqueeItems].reverse().map((item, index) => (
//                 <motion.div
//                   key={`row2-dup-${index}`}
//                   whileHover={{ scale: 1.1, y: -5 }}
//                   className="group relative flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
//                 >
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   <div className="relative flex items-center gap-3">
//                     <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </span>
//                     <span className="text-base font-bold text-white whitespace-nowrap tracking-wide">
//                       {item.text}
//                     </span>
//                   </div>

//                   <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-blue-400/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
//                   <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-purple-400/50 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Floating Stats Bar */}
//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="flex flex-wrap justify-center gap-6 px-6 py-3 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20"
//         >
//           {[
//             { value: "500+", label: "Data Centers" },
//             { value: "99.99%", label: "Uptime" },
//             { value: "150+", label: "Countries" },
//           ].map((stat, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 {stat.value}
//               </div>
//               <div className="text-xs text-gray-400">{stat.label}</div>
//               {idx < 2 && (
//                 <div className="w-px h-6 bg-cyan-500/30 ml-2" />
//               )}
//             </div>
//           ))}
//         </motion.div> */}
//       </div>

//       {/* Bottom Glow */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
//     </section>
//   );
// };

// export default Marquee;






"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Marquee = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect navbar menu open via body overflow lock
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setMenuOpen(document.body.style.overflow === "hidden");
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  const marqueeItems = [
    { text: "AI Infrastructure", icon: "🤖" },
    { text: "Cloud Computing", icon: "☁️" },
    { text: "Edge Computing", icon: "⚡" },
    { text: "Quantum Ready", icon: "🔬" },
    { text: "Neural Networks", icon: "🧠" },
    { text: "GPU Clusters", icon: "💎" },
    { text: "5G Connectivity", icon: "📡" },
    { text: "Blockchain Nodes", icon: "⛓️" },
    { text: "Zero Latency", icon: "🚀" },
    { text: "Green Energy", icon: "🌱" },
  ];

  return (
    <section className="relative w-full py-10 rounded-t-[12rem] overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-blue-950">
      
      {/* Animated Gradient Glow (paused when menu open) */}
      <motion.div
        animate={
          menuOpen
            ? { opacity: 0.5 }
            : { opacity: [0.4, 0.6, 0.4] }
        }
        transition={
          menuOpen
            ? { duration: 0.2 }
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
      />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/60 to-slate-950" />

      {/* Floating Particles (disabled when menu open) */}
      {!menuOpen && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">
              Powered by Sunrise
            </span>
          </div>

          <h2 className="text-xl font-light">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise-Grade Technologies
            </span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative w-full max-w-7xl">
          <MarqueeRow
            items={marqueeItems}
            reverse={false}
            paused={menuOpen}
            duration={30}
          />
          <MarqueeRow
            items={[...marqueeItems].reverse()}
            reverse
            paused={menuOpen}
            duration={35}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Marquee;

/* ---------------- Row ---------------- */

const MarqueeRow = ({
  items,
  reverse,
  paused,
  duration,
}: {
  items: any[];
  reverse?: boolean;
  paused: boolean;
  duration: number;
}) => {
  const animateX = reverse ? [-1920, 0] : [0, -1920];

  return (
    <div className="flex gap-8 mb-6 overflow-hidden">
      {[0, 1].map((dup) => (
        <motion.div
          key={dup}
          animate={paused ? { x: 0 } : { x: animateX }}
          transition={
            paused
              ? { duration: 0.2 }
              : { repeat: Infinity, duration, ease: "linear" }
          }
          className="flex gap-8 flex-shrink-0"
        >
          {[...items, ...items, ...items].map((item, i) => (
            <MarqueeCard key={`${dup}-${i}`} item={item} />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

/* ---------------- Card ---------------- */

const MarqueeCard = ({ item }: { item: any }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="group relative flex-shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex items-center gap-3">
      <span className="text-3xl">{item.icon}</span>
      <span className="text-base font-bold text-white whitespace-nowrap tracking-wide">
        {item.text}
      </span>
    </div>
  </motion.div>
);





