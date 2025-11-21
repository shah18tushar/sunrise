// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiMiniBars3BottomRight } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5";
// import { ParticleCanvas } from "./NavAnimations";
// import { 
//   MenuItems, 
//   SocialMediaIcons, 
//   ContactInfo 
// } from "./NavMenuItems";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//   }, [isOpen]);

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
//             className="flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white font-semibold shadow-lg hover:shadow-[#39ACE2]/40 hover:scale-105 transition duration-300"
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
//               <ParticleCanvas />

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

//                 {/* Social Media Icons */}
//                 <SocialMediaIcons />

//                 {/* Contact Info */}
//                 <ContactInfo />

//                 {/* Menu Items */}
//                 <MenuItems 
//                   hoveredIndex={hoveredIndex} 
//                   setHoveredIndex={setHoveredIndex} 
//                 />
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { ParticleCanvas } from "./NavAnimations";
import { 
  MenuItems, 
  SocialMediaIcons, 
  ContactInfo 
} from "./NavMenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (typically viewport height)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Set isScrolled to true when scrolled past hero section
      setIsScrolled(scrollPosition > heroHeight - 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once on mount to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* === NAVBAR === */}
      <nav 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white shadow-lg" 
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1.5">
          <div>
            <img src="logo.jpeg" alt="logo" className="w-32 h-16" />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 ${
              isScrolled
                ? "bg-linear-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white hover:shadow-[#39ACE2]/40"
                : "bg-linear-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white hover:shadow-[#39ACE2]/40"
            }`}
          >
            <HiMiniBars3BottomRight className="text-2xl" />
            <span>Menu</span>
          </button>
        </div>
      </nav>

      {/* === MENU OVERLAY === */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* FIRST LAYER — Deep Cinematic Glow */}
            <motion.div
              key="first-layer"
              className="fixed inset-0 z-[90]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(11,50,90,0.3) 0%, transparent 45%),
                  radial-gradient(circle at 80% 70%, rgba(0,26,53,0.35) 0%, transparent 55%),
                  linear-gradient(135deg, #000000 0%, #000814 30%, #001233 50%, #001a35 70%, #0B5DA7 90%, #39ACE2 100%)`,
                boxShadow: `
                  inset 0 0 200px rgba(0, 0, 0, 0.9),
                  inset 0 0 300px rgba(0, 20, 40, 0.6),
                  inset 0 0 350px rgba(11,50,90,0.4)
                `,
              }}
              initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              animate={{
                clipPath: "circle(150% at 50% 50%)",
                opacity: 1,
              }}
              exit={{
                clipPath: "circle(0% at 100% 0%)",
                opacity: 0,
              }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />

            {/* SECOND LAYER — Ultra Premium 3D Universe */}
            <motion.div
              key="second-layer"
              className="fixed inset-0 z-[95]"
              initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              animate={{
                clipPath: "circle(150% at 50% 50%)",
                opacity: 1,
              }}
              exit={{
                clipPath: "circle(0% at 100% 0%)",
                opacity: 0,
              }}
              transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut" }}
            >
              {/* Three.js Canvas with 3D Particles */}
              <ParticleCanvas />

              {/* Deep Shadow Overlay */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)
                  `,
                  boxShadow: `
                    inset 0 0 400px rgba(0, 0, 0, 0.95),
                    inset 0 0 350px rgba(0, 8, 20, 0.9),
                    inset 0 0 250px rgba(0, 15, 35, 0.7),
                    inset 0 -200px 300px rgba(0, 0, 0, 0.95)
                  `,
                }}
              />

              {/* Content Layer */}
              <div className="relative z-10 flex items-center justify-center h-full w-full overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-34 cursor-pointer flex items-center gap-2 text-lg px-5 py-2 rounded-xl bg-gradient-to-r from-[#0B5DA7] via-[#39ACE2] to-[#0B5DA7] text-white font-semibold shadow-lg hover:bg-[#39ACE2]/90 hover:text-white hover:shadow-[#39ACE2]/40 transition duration-300 backdrop-blur-sm z-50"
                >
                  <IoClose className="text-2xl" />
                  <span>Close</span>
                </button>

                {/* Social Media Icons */}
                <SocialMediaIcons />

                {/* Contact Info */}
                <ContactInfo />

                {/* Menu Items */}
                <MenuItems 
                  hoveredIndex={hoveredIndex} 
                  setHoveredIndex={setHoveredIndex} 
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;  