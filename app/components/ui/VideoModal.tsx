"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

interface VideoModalProps {
  show: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Animated background particles/glow effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#034D9D]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#034D9D]/10 to-transparent rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden 
          shadow-[0_0_50px_rgba(3,77,157,0.8),0_0_100px_rgba(3,77,157,0.6),0_0_150px_rgba(59,130,246,0.4),0_0_200px_rgba(255,255,255,0.1)] 
          border-2 border-gradient-to-br from-[#034D9D]/60 via-blue-400/40 to-white/20
          bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl
          before:absolute before:inset-0 before:rounded-3xl before:p-[2px] 
          before:bg-gradient-to-br before:from-[#034D9D]/50 before:via-blue-400/30 before:to-white/20 
          before:-z-10 before:animate-pulse"
            initial={{
              scale: 0.3,
              y: 100,
              opacity: 0,
              rotateX: 15,
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            exit={{
              scale: 0.7,
              y: -50,
              opacity: 0,
              rotateX: -10,
              filter: "blur(5px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              scale: {
                type: "spring",
                damping: 25,
                stiffness: 120,
                mass: 1.2,
              },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#034D9D] via-blue-400 to-[#034D9D] rounded-3xl blur-sm opacity-60"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Close button with luxury animation */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full cursor-pointer
            bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl
            border border-white/30 text-white hover:text-[#034D9D] 
            flex items-center justify-center text-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            transition-all duration-300 ease-out
            hover:scale-110 hover:rotate-90 hover:shadow-[0_12px_40px_rgba(3,77,157,0.4)]
            active:scale-95"
              initial={{
                scale: 0,
                rotate: -180,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                rotate: 180,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <FiX />
            </motion.button>

            {/* Premium video container with staggered animation */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              initial={{
                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
              }}
              animate={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              exit={{
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Video loading shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />

              <motion.video
                src="/hero.mp4"
                controls
                autoPlay
                className="w-full h-[70vh] object-cover rounded-xl pointer-events-auto
              shadow-[inset_0_0_50px_rgba(3,77,157,0.3)]"
                initial={{
                  scale: 1.1,
                  opacity: 0,
                  filter: "brightness(0.3) saturate(0.5)",
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  filter: "brightness(1) saturate(1)",
                }}
                exit={{
                  scale: 1.05,
                  opacity: 0,
                  filter: "brightness(0.7) saturate(0.8)",
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </motion.div>

            {/* Luxury corner accents */}
            {[
              { position: "top-0 left-0", rotate: 0 },
              { position: "top-0 right-0", rotate: 90 },
              { position: "bottom-0 right-0", rotate: 180 },
              { position: "bottom-0 left-0", rotate: 270 },
            ].map((corner, index) => (
              <motion.div
                key={index}
                className={`absolute ${corner.position} w-8 h-8 pointer-events-none`}
                style={{ rotate: `${corner.rotate}deg` }}
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotate: corner.rotate - 90,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: corner.rotate,
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  rotate: corner.rotate + 90,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
              >
                <div className="w-full h-full border-l-2 border-t-2 border-[#034D9D] opacity-60" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;