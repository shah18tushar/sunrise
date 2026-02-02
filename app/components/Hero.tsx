"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        @keyframes film-grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }

        .film-grain {
          animation: film-grain 8s steps(10) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
        }

        .premium-text {
          font-family: 'Cinzel', serif;
          text-shadow: 
            0 2px 20px rgba(0, 0, 0, 0.8),
            0 4px 40px rgba(0, 0, 0, 0.6),
            0 0 60px rgba(255, 255, 255, 0.1);
          letter-spacing: 0.05em;
        }

        .subtitle-text {
          font-family: 'Montserrat', sans-serif;
          text-shadow: 
            0 2px 15px rgba(0, 0, 0, 0.7),
            0 4px 30px rgba(0, 0, 0, 0.5);
          letter-spacing: 0.15em;
        }

        .body-text {
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 
            0 2px 10px rgba(0, 0, 0, 0.6),
            0 4px 20px rgba(0, 0, 0, 0.4);
          letter-spacing: 0.02em;
        }

        .vignette {
          box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.8),
                      inset 0 0 100px rgba(0, 0, 0, 0.6);
        }
      `}</style>

      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* ===== VIDEO ===== */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-fill"
        >
          <source src="https://geneire.com/wp-content/uploads/2024/12/Geneire-Homepage-x264.mp4" type="video/mp4" />
        </video>

        {/* ===== BASE DARK CINEMATIC LAYER ===== */}
        <motion.div
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
          className="absolute inset-0 bg-black"
        />

        {/* ===== CINEMATIC VIGNETTE ===== */}
        <div className="absolute inset-0 vignette pointer-events-none" />

        {/* ===== FILM GRAIN TEXTURE ===== */}
        <div className="film-grain absolute inset-0 pointer-events-none" />

        {/* ===== ULTRA CINEMATIC LIGHT REVEAL ===== */}
        <>
          {/* Main anamorphic sweep */}
          <motion.div
            initial={{ x: "130%", opacity: 0 }}
            animate={reveal ? { x: "-130%", opacity: 1 } : {}}
            transition={{
              duration: 4.8,
              ease: [0.22, 1, 0.36, 1], // cinema-grade easing
            }}
            className="absolute top-[-20%] h-[140%] w-[70%] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  120deg,
                  transparent 20%,
                  rgba(255,255,255,0.18) 45%,
                  rgba(180,220,255,0.25) 50%,
                  rgba(255,255,255,0.18) 55%,
                  transparent 80%
                )
              `,
              filter: "blur(80px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Secondary bloom diffusion */}
          <motion.div
            initial={{ x: "140%", opacity: 0 }}
            animate={reveal ? { x: "-140%", opacity: 0.6 } : {}}
            transition={{
              duration: 6.2,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="absolute top-[-30%] h-[160%] w-[90%] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(120,180,255,0.22), transparent 70%)",
              filter: "blur(140px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Thin specular highlight (glass realism) */}
          <motion.div
            initial={{ x: "150%", opacity: 0 }}
            animate={reveal ? { x: "-150%", opacity: 0.4 } : {}}
            transition={{
              duration: 3.2,
              delay: 0.6,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-[12%] pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
              filter: "blur(20px)",
              mixBlendMode: "screen",
            }}
          />
        </>

        {/* ===== GRAND ENTRANCE CONTENT ===== */}
        <div className="relative z-10 h-full flex items-end">
          <motion.div
            /* 🔥 CINEMATIC GRAND ENTRANCE FROM CENTER */
            initial={{
              opacity: 0,
              x: "90vw",   // start from center-right
              y: "-80vh",  // start from center-top
              scale: 1.12,
              filter: "blur(8px)",
            }}
            animate={
              reveal
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              duration: 3.6,
              ease: [0.16, 1, 0.3, 1], // luxury cinematic easing
            }}
            className="pb-20 pl-28 max-w-3xl"
          >
            {/* DECORATIVE TOP LINE */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={reveal ? { width: "120px", opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }}
              className="h-[2px] bg-gradient-to-r from-white to-transparent mb-3"
            />

            {/* PREMIUM OVERLINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4, duration: 1.6 }}
              className="subtitle-text text-xs md:text-sm text-white uppercase tracking-[0.3em] font-semibold mb-4"
            >
              Excellence Thru Experience
            </motion.div>

            {/* MAIN HEADING - STAGGERED REVEAL */}
            <div className="">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={reveal ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="premium-text text-2xl font-semibold text-white leading-[1.1] mb-2"
              >
                Engineering Tomorrow's Data Centers
              </motion.h1>
            </div>

            {/* DESCRIPTION - REFINED TYPOGRAPHY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 3.2, duration: 2.2 }}
              className="body-text text-sm text-white font-bold leading-relaxed max-w-lg mb-5"
            >
              Delivering world-class infrastructure solutions engineered for
              resilience, scalability, and operational excellence across the globe.
            </motion.p>

            {/* CTA BUTTON - PREMIUM STYLING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={reveal ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 3.8, duration: 2 }}
              className=""
            >
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl
                  border-2 border-white/80 text-white font-semibold text-sm
                  hover:bg-white/10 transition-all duration-700 backdrop-blur-sm"
                style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}
              >
                <span>Explore Our Solutions</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>

     
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;





