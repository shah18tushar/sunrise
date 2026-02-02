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
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    // Only enable transparent behavior on home page
    if (pathname === "/") {
      const handleScroll = () => {
        const heroHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrolled = scrollPosition > heroHeight - 100;
        setIsScrolled(scrolled);
        setIsTransparent(!scrolled);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // On other pages, navbar should always have background
      setIsScrolled(true);
      setIsTransparent(false);
    }
  }, [pathname]);

  const handleMenuItemClick = (route: string) => {
    setIsOpen(false); // Close the navbar
    router.push(route); // Navigate to the page
  };

  return (
    <>
      {/* === CINEMATIC PREMIUM BRANDING STYLES === */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');

        @keyframes shimmer-flow {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes cinematic-glow {
          0%, 100% {
            box-shadow: 
              0 0 40px rgba(107, 182, 232, 0.2),
              0 0 80px rgba(31, 79, 163, 0.15),
              inset 0 1px 3px rgba(255, 255, 255, 0.3),
              inset 0 -1px 3px rgba(107, 182, 232, 0.2);
          }
          50% {
            box-shadow: 
              0 0 60px rgba(107, 182, 232, 0.3),
              0 0 100px rgba(31, 79, 163, 0.2),
              inset 0 1px 3px rgba(255, 255, 255, 0.4),
              inset 0 -1px 3px rgba(107, 182, 232, 0.3);
          }
        }

        @keyframes elegant-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes light-ray {
          0% {
            transform: translateX(-100%) rotate(-45deg);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(200%) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: -500% center;
          }
          100% {
            background-position: 500% center;
          }
        }

        .cinematic-logo-container {
          animation: elegant-float 8s ease-in-out infinite;
        }

        .glass-brand-frame {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.12) 100%
          );
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          animation: cinematic-glow 6s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .shimmer-overlay {
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-flow 10s linear infinite;
        }

        .light-ray-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(107, 182, 232, 0.4),
            transparent
          );
          animation: light-ray 8s ease-in-out infinite;
        }

        .brand-title {
          font-family: 'Cinzel', serif;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #6BB6E8 30%,
            #ffffff 50%,
            #6BB6E8 70%,
            #ffffff 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 8s linear infinite;
          text-shadow: 0 0 30px rgba(107, 182, 232, 0.5);
          letter-spacing: 0.15em;
        }

        .brand-tagline {
          font-family: 'Montserrat', sans-serif;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 
            0 2px 10px rgba(31, 79, 163, 0.6),
            0 0 20px rgba(107, 182, 232, 0.4);
          letter-spacing: 0.25em;
        }

        .accent-border-top {
          background: linear-gradient(
            90deg,
            transparent 0%,
            #6BB6E8 20%,
            #1F4FA3 50%,
            #6BB6E8 80%,
            transparent 100%
          );
        }

        .accent-border-bottom {
          background: linear-gradient(
            90deg,
            transparent 0%,
            #1F4FA3 20%,
            #6BB6E8 50%,
            #1F4FA3 80%,
            transparent 100%
          );
        }

        .decorative-corner {
          background: linear-gradient(135deg, #6BB6E8, #1F4FA3);
        }

        .excellence-badge {
          background: linear-gradient(135deg, #1F4FA3 0%, #6BB6E8 100%);
          box-shadow: 
            0 4px 15px rgba(31, 79, 163, 0.4),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
        }

        .side-ornament {
          background: linear-gradient(
            180deg,
            transparent,
            rgba(107, 182, 232, 0.4),
            transparent
          );
        }
      `}</style>

      {/* === NAVBAR === */}
      <nav 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-lg"
        }`}
      >
        {/* DYNAMIC PADDING: py-10 when transparent, py-1.5 when scrolled */}
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
          isTransparent ? "py-10" : "py-1.5"
        }`}>
          {/* === CINEMATIC BRANDING === */}
          <div>
            {isTransparent ? (
              /* TRANSPARENT STATE — CINEMATIC TEXT-BASED BRANDING */
              <div className="cinematic-logo-container relative flex items-center gap-6">
                
                {/* MAIN GLASS BRAND FRAME */}
                <div className="glass-brand-frame relative px-6 py-3 rounded-2xl">
                  
                  {/* SHIMMER OVERLAY */}
                  <div className="shimmer-overlay absolute inset-0 rounded-2xl pointer-events-none" />
                  
                  {/* LIGHT RAY EFFECT */}
                  <div className="light-ray-effect absolute inset-0 rounded-2xl pointer-events-none w-32 h-full" />
                  
                  {/* BRAND CONTENT */}
                  <div className="relative space-y-1">
                    {/* COMPANY NAME */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-white/60" />
                      <h1 className="brand-title text-4xl font-black tracking-widest">
                        SUNRISE
                      </h1>
                      <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-white/40 to-white/60" />
                    </div>

                    {/* SUBTITLE - CONSULTING */}
                    <div className="flex justify-center">
                      <span className="text-white/90 text-sm font-semibold tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: '0 2px 8px rgba(31, 79, 163, 0.5)' }}>
                        Consulting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* SCROLLED STATE — LOGO IMAGE */
              <img
                src="/logo.jpeg"
                alt="Sunrise Logo"
                className="w-32 h-16 rounded-lg cursor-pointer"
                onClick={() => router.push("/")}
              />
            )}
          </div>

          {/* === CONDITIONAL MENU BUTTONS === */}
          {isTransparent ? (
            /* TRANSPARENT STATE — MINIMAL WHITE BUTTON */
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center cursor-pointer gap-2 px-5 py-2.5 font-semibold hover:scale-125 transition duration-500 text-2xl text-white"
            >
              <HiMiniBars3BottomRight className="text-2xl" />
              <span>Menu</span>
            </button>
          ) : (
            /* SOLID STATE — BORDERED CYAN BUTTON */
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 border border-cyan-600 bg-transparent text-cyan-600 hover:shadow-[#6BB6E8]/40"
            >
              <HiMiniBars3BottomRight className="text-2xl" />
              <span>Menu</span>
            </button>
          )}
        </div>
      </nav>

      {/* === MENU OVERLAY === */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              key="first-layer"
              className="fixed inset-0 z-[90]"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(31,79,163,0.3) 0%, transparent 45%),
                  radial-gradient(circle at 80% 70%, rgba(107,182,232,0.25) 0%, transparent 55%),
                  linear-gradient(135deg, #000000 0%, #001233 30%, #1F4FA3 60%, #6BB6E8 90%, #ffffff 100%)`,
                boxShadow: `inset 0 0 200px rgba(0, 0, 0, 0.9),
                  inset 0 0 300px rgba(31, 79, 163, 0.4),
                  inset 0 0 350px rgba(107, 182, 232, 0.3)`,
              }}
              initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
              exit={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />

            <motion.div
              key="second-layer"
              className="fixed inset-0 z-[95]"
              initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
              exit={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut" }}
            >
              <ParticleCanvas />

              <div className="relative z-10 flex items-center justify-center h-full w-full">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-16 right-34 cursor-pointer flex items-center gap-2 text-lg px-5 py-2 rounded-xl bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#1F4FA3] text-white font-semibold shadow-lg"
                >
                  <IoClose className="text-2xl" />
                  <span>Close</span>
                </button>

                <SocialMediaIcons />
                <ContactInfo />
                <MenuItems 
                  hoveredIndex={hoveredIndex} 
                  setHoveredIndex={setHoveredIndex}
                  onMenuItemClick={handleMenuItemClick}
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
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//   }, [isOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroHeight = window.innerHeight;
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > heroHeight - 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* === CINEMATIC PREMIUM BRANDING STYLES === */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');

//         @keyframes shimmer-flow {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         @keyframes cinematic-glow {
//           0%, 100% {
//             box-shadow: 
//               0 0 40px rgba(107, 182, 232, 0.2),
//               0 0 80px rgba(31, 79, 163, 0.15),
//               inset 0 1px 3px rgba(255, 255, 255, 0.3),
//               inset 0 -1px 3px rgba(107, 182, 232, 0.2);
//           }
//           50% {
//             box-shadow: 
//               0 0 60px rgba(107, 182, 232, 0.3),
//               0 0 100px rgba(31, 79, 163, 0.2),
//               inset 0 1px 3px rgba(255, 255, 255, 0.4),
//               inset 0 -1px 3px rgba(107, 182, 232, 0.3);
//           }
//         }

//         @keyframes elegant-float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes light-ray {
//           0% {
//             transform: translateX(-100%) rotate(-45deg);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.3;
//           }
//           100% {
//             transform: translateX(200%) rotate(-45deg);
//             opacity: 0;
//           }
//         }

//         @keyframes text-shimmer {
//           0% {
//             background-position: -500% center;
//           }
//           100% {
//             background-position: 500% center;
//           }
//         }

//         .cinematic-logo-container {
//           animation: elegant-float 8s ease-in-out infinite;
//         }

//         .glass-brand-frame {
//           background: linear-gradient(
//             135deg,
//             rgba(255, 255, 255, 0.15) 0%,
//             rgba(255, 255, 255, 0.08) 50%,
//             rgba(255, 255, 255, 0.12) 100%
//           );
//           backdrop-filter: blur(25px) saturate(180%);
//           -webkit-backdrop-filter: blur(25px) saturate(180%);
//           border: 1.5px solid rgba(255, 255, 255, 0.25);
//           animation: cinematic-glow 6s ease-in-out infinite;
//           position: relative;
//           overflow: hidden;
//         }

//         .shimmer-overlay {
//           background: linear-gradient(
//             110deg,
//             transparent 0%,
//             transparent 40%,
//             rgba(255, 255, 255, 0.4) 50%,
//             transparent 60%,
//             transparent 100%
//           );
//           background-size: 200% 100%;
//           animation: shimmer-flow 10s linear infinite;
//         }

//         .light-ray-effect {
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(107, 182, 232, 0.4),
//             transparent
//           );
//           animation: light-ray 8s ease-in-out infinite;
//         }

//         .brand-title {
//           font-family: 'Cinzel', serif;
//           background: linear-gradient(
//             135deg,
//             #ffffff 0%,
//             #6BB6E8 30%,
//             #ffffff 50%,
//             #6BB6E8 70%,
//             #ffffff 100%
//           );
//           background-size: 300% 300%;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: text-shimmer 8s linear infinite;
//           text-shadow: 0 0 30px rgba(107, 182, 232, 0.5);
//           letter-spacing: 0.15em;
//         }

//         .brand-tagline {
//           font-family: 'Montserrat', sans-serif;
//           color: rgba(255, 255, 255, 0.95);
//           text-shadow: 
//             0 2px 10px rgba(31, 79, 163, 0.6),
//             0 0 20px rgba(107, 182, 232, 0.4);
//           letter-spacing: 0.25em;
//         }

//         .accent-border-top {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             #6BB6E8 20%,
//             #1F4FA3 50%,
//             #6BB6E8 80%,
//             transparent 100%
//           );
//         }

//         .accent-border-bottom {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             #1F4FA3 20%,
//             #6BB6E8 50%,
//             #1F4FA3 80%,
//             transparent 100%
//           );
//         }

//         .decorative-corner {
//           background: linear-gradient(135deg, #6BB6E8, #1F4FA3);
//         }

//         .excellence-badge {
//           background: linear-gradient(135deg, #1F4FA3 0%, #6BB6E8 100%);
//           box-shadow: 
//             0 4px 15px rgba(31, 79, 163, 0.4),
//             inset 0 1px 2px rgba(255, 255, 255, 0.3);
//         }

//         .side-ornament {
//           background: linear-gradient(
//             180deg,
//             transparent,
//             rgba(107, 182, 232, 0.4),
//             transparent
//           );
//         }
//       `}</style>

//       {/* === NAVBAR === */}
//       <nav 
//         className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
//           isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//         }`}
//       >
//         {/* DYNAMIC PADDING: py-10 when not scrolled, py-1.5 when scrolled */}
//         <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
//           isScrolled ? "py-1.5" : "py-10"
//         }`}>
//           {/* === CINEMATIC BRANDING === */}
//           <div>
//             {!isScrolled ? (
//               /* TRANSPARENT STATE — CINEMATIC TEXT-BASED BRANDING */
//               <div className="cinematic-logo-container relative flex items-center gap-6">
                
//                 {/* MAIN GLASS BRAND FRAME */}
//                 <div className="glass-brand-frame relative px-6 py-3 rounded-2xl">
                  
//                   {/* SHIMMER OVERLAY */}
//                   <div className="shimmer-overlay absolute inset-0 rounded-2xl pointer-events-none" />
                  
//                   {/* LIGHT RAY EFFECT */}
//                   <div className="light-ray-effect absolute inset-0 rounded-2xl pointer-events-none w-32 h-full" />
                  
//                   {/* BRAND CONTENT */}
//                   <div className="relative space-y-1">
//                     {/* COMPANY NAME */}
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-white/60" />
//                       <h1 className="brand-title text-4xl font-black tracking-widest">
//                         SUNRISE
//                       </h1>
//                       <div className="w-12 h-[2px] bg-gradient-to-l from-transparent via-white/40 to-white/60" />
//                     </div>

//                     {/* SUBTITLE - CONSULTING */}
//                     <div className="flex justify-center">
//                       <span className="text-white/90 text-sm font-semibold tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: '0 2px 8px rgba(31, 79, 163, 0.5)' }}>
//                         Consulting
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               /* SCROLLED STATE — LOGO IMAGE */
//               <img
//                 src="/logo.jpeg"
//                 alt="Sunrise Logo"
//                 className="w-32 h-16 rounded-lg"
//               />
//             )}
//           </div>

//           {/* === CONDITIONAL MENU BUTTONS === */}
//           {!isScrolled ? (
//             /* NOT SCROLLED — MINIMAL WHITE BUTTON */
//             <button
//               onClick={() => setIsOpen(true)}
//               className="flex items-center cursor-pointer gap-2 px-5 py-2.5 font-semibold hover:scale-125 transition duration-500 text-2xl text-white"
//             >
//               <HiMiniBars3BottomRight className="text-2xl" />
//               <span>Menu</span>
//             </button>
//           ) : (
//             /* SCROLLED — BORDERED CYAN BUTTON */
//             <button
//               onClick={() => setIsOpen(true)}
//               className="flex items-center cursor-pointer gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300 border border-cyan-600 bg-transparent text-cyan-600 hover:shadow-[#6BB6E8]/40"
//             >
//               <HiMiniBars3BottomRight className="text-2xl" />
//               <span>Menu</span>
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* === MENU OVERLAY === */}
//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <>
//             <motion.div
//               key="first-layer"
//               className="fixed inset-0 z-[90]"
//               style={{
//                 backgroundImage: `radial-gradient(circle at 20% 30%, rgba(31,79,163,0.3) 0%, transparent 45%),
//                   radial-gradient(circle at 80% 70%, rgba(107,182,232,0.25) 0%, transparent 55%),
//                   linear-gradient(135deg, #000000 0%, #001233 30%, #1F4FA3 60%, #6BB6E8 90%, #ffffff 100%)`,
//                 boxShadow: `inset 0 0 200px rgba(0, 0, 0, 0.9),
//                   inset 0 0 300px rgba(31, 79, 163, 0.4),
//                   inset 0 0 350px rgba(107, 182, 232, 0.3)`,
//               }}
//               initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
//               exit={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               transition={{ duration: 1.3, ease: "easeInOut" }}
//             />

//             <motion.div
//               key="second-layer"
//               className="fixed inset-0 z-[95]"
//               initial={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
//               exit={{ clipPath: "circle(0% at 100% 0%)", opacity: 0 }}
//               transition={{ duration: 1.5, delay: 0.15, ease: "easeInOut" }}
//             >
//               <ParticleCanvas />

//               <div className="relative z-10 flex items-center justify-center h-full w-full">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-16 right-34 cursor-pointer flex items-center gap-2 text-lg px-5 py-2 rounded-xl bg-gradient-to-r from-[#1F4FA3] via-[#6BB6E8] to-[#1F4FA3] text-white font-semibold shadow-lg"
//                 >
//                   <IoClose className="text-2xl" />
//                   <span>Close</span>
//                 </button>

//                 <SocialMediaIcons />
//                 <ContactInfo />
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