"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.95);
            opacity: 1;
          }
        }

        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-slide-right {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .pulse-animation {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .fade-slide-up {
          animation: fade-slide-up 1s ease-out forwards;
        }

        .fade-slide-right {
          animation: fade-slide-right 1s ease-out forwards;
        }

        .scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }

        .image-overlay {
          position: relative;
          overflow: hidden;
        }

        .image-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer-slide 6s infinite;
        }

        .stat-number {
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-balance {
          text-wrap: balance;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white py-24 lg:py-16 overflow-hidden"
      >
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, #2563EB 48%, #2563EB 52%, transparent 52%)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Premium Header with Watermark */}
          <div className="absolute -top-[3.3rem] left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
            <div 
              className="text-[140px] lg:text-[90px] font-bold tracking-tighter opacity-[0.06]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ABOUT US
            </div>
          </div>

          {/* Section Header */}
          <div className={`text-center mb-20 ${isVisible ? 'fade-slide-up delay-100' : ''}`}>
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-linear-to-r from-transparent via-slate-400 to-transparent" />
              <span 
                className="text-xs tracking-[0.3em] uppercase text-slate-700 font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Who We Are
              </span>
              <div className="h-px w-16 bg-linear-to-r from-transparent via-slate-400 to-transparent" />
            </div>
            
            <h2 
              className="text-5xl font-light text-slate-900 mb-6 text-balance"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: '1.1' }}
            >
              Engineering the Future of
              <span className="block lg:text-6xl  mt-2 bg-linear-to-r from-[#8635F3] via-[#4F46E5] to-[#2563EB] bg-clip-text text-transparent">
                Infrastructure Excellence
              </span>
            </h2>
            
            <p 
              className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}
            >
              Sunrise stands at the forefront of mission-critical construction, delivering world-class infrastructure projects that power economies and shape industries across the Middle East.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Images with Pulse Animation */}
            <div className={`space-y-8 ${isVisible ? 'fade-slide-right delay-300' : ''}`}>
              {/* Main Image */}
              <div className="relative group">
                <div className="relative image-overlay overflow-hidden">
                  <Image
                    src="/1.jpg"
                    alt="Sunrise Construction Excellence"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-10 right-6">
                    <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-green-500 pulse-animation" />
                      <span className="text-sm font-medium text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Active Projects: 25+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div className={`${isVisible ? 'fade-slide-up delay-400' : ''}`}>
                <h3 
                  className="text-2xl font-light text-slate-900 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Pioneering Excellence Since Inception
                </h3>
                <div 
                  className="space-y-5 text-slate-600 leading-relaxed text-base"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}
                >
                  <p>
                    Founded on the pillars of <strong className="text-slate-900 font-semibold">precision, innovation, and unwavering quality</strong>, Sunrise has evolved into one of the region's most trusted names in critical infrastructure development.
                  </p>
                  <p>
                    Our portfolio spans hyperscale data centers, industrial complexes, commercial developments, and large-scale civil engineering projects—each delivered with meticulous attention to detail and adherence to international standards.
                  </p>
                  <p className="pl-6 border-l-4 border-[#8635F3] italic text-slate-700 font-medium">
                    "We don't just build structures; we engineer solutions that empower businesses, support communities, and stand the test of time."
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'scale-in delay-600' : ''}`}>
                <div className="text-center">
                  <div 
                    className="text-4xl lg:text-5xl font-bold stat-number mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    150+
                  </div>
                  <div 
                    className="text-sm text-slate-500 tracking-wide uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Projects
                  </div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div 
                    className="text-4xl lg:text-5xl font-bold stat-number mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    2M+
                  </div>
                  <div 
                    className="text-sm text-slate-500 tracking-wide uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    SqM Built
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-4xl lg:text-5xl font-bold stat-number mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    25+
                  </div>
                  <div 
                    className="text-sm text-slate-500 tracking-wide uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;




// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

//         @keyframes pulse-ring {
//           0% {
//             transform: scale(0.95);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.05);
//             opacity: 0.7;
//           }
//           100% {
//             transform: scale(0.95);
//             opacity: 1;
//           }
//         }

//         @keyframes fade-slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-slide-right {
//           from {
//             opacity: 0;
//             transform: translateX(-60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes shimmer-slide {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .pulse-animation {
//           animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         .fade-slide-up {
//           animation: fade-slide-up 1s ease-out forwards;
//         }

//         .fade-slide-right {
//           animation: fade-slide-right 1s ease-out forwards;
//         }

//         .scale-in {
//           animation: scale-in 0.8s ease-out forwards;
//         }

//         .delay-100 { animation-delay: 0.1s; opacity: 0; }
//         .delay-300 { animation-delay: 0.3s; opacity: 0; }
//         .delay-400 { animation-delay: 0.4s; opacity: 0; }
//         .delay-600 { animation-delay: 0.6s; opacity: 0; }

//         .image-overlay {
//           position: relative;
//           overflow: hidden;
//         }

//         .image-overlay::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.3),
//             transparent
//           );
//           animation: shimmer-slide 6s infinite;
//         }

//         .stat-number {
//           background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .text-balance {
//           text-wrap: balance;
//         }
//       `}</style>

//       <section 
//         ref={sectionRef}
//         className="relative bg-white py-24 lg:py-16 overflow-hidden"
//       >
//         {/* Background Image with Opacity */}
//         <div className="absolute inset-0  pointer-events-none">
//           <Image
//             src="/bg1.jpg"
//             alt="Background"
//             fill
//             className="object-fit"
//             style={{ opacity: 1 }}
//             priority
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//           {/* Premium Header with Watermark */}
//           <div className="absolute -top-[3.3rem] left-1/2 -translate-x-1/2 text-center pointer-events-none select-none">
//             <div 
//               className="text-[140px] lg:text-[90px] font-bold tracking-tighter opacity-[0.06]"
//               style={{ fontFamily: "'Cormorant Garamond', serif" }}
//             >
//               ABOUT US
//             </div>
//           </div>

//           {/* Section Header */}
//           <div className={`text-center mb-20 ${isVisible ? 'fade-slide-up delay-100' : ''}`}>
//             <div className="inline-flex items-center gap-4 mb-6">
//               <div className="h-px w-16 bg-linear-to-r from-transparent via-slate-400 to-transparent" />
//               <span 
//                 className="text-xs tracking-[0.3em] uppercase text-slate-700 font-medium"
//                 style={{ fontFamily: "'Montserrat', sans-serif" }}
//               >
//                 Who We Are
//               </span>
//               <div className="h-px w-16 bg-linear-to-r from-transparent via-slate-400 to-transparent" />
//             </div>
            
//             <h2 
//               className="text-5xl font-light text-slate-900 mb-6 text-balance"
//               style={{ fontFamily: "'Playfair Display', serif", lineHeight: '1.1' }}
//             >
//               Engineering the Future of
//               <span className="block lg:text-6xl  mt-2 bg-linear-to-r from-[#8635F3] via-[#4F46E5] to-[#2563EB] bg-clip-text text-transparent">
//                 Infrastructure Excellence
//               </span>
//             </h2>
            
//             <p 
//               className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed"
//               style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}
//             >
//               Sunrise stands at the forefront of mission-critical construction, delivering world-class infrastructure projects that power economies and shape industries across the Middle East.
//             </p>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
//             {/* Left: Images with Pulse Animation */}
//             <div className={`space-y-8 ${isVisible ? 'fade-slide-right delay-300' : ''}`}>
//               {/* Main Image */}
//               <div className="relative group">
//                 <div className="relative image-overlay overflow-hidden">
//                   <Image
//                     src="/1.jpg"
//                     alt="Sunrise Construction Excellence"
//                     width={600}
//                     height={400}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-10 right-6">
//                     <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
//                       <div className="w-2 h-2 rounded-full bg-green-500 pulse-animation" />
//                       <span className="text-sm font-medium text-slate-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
//                         Active Projects: 25+
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Content */}
//             <div className="space-y-8">
//               <div className={`${isVisible ? 'fade-slide-up delay-400' : ''}`}>
//                 <h3 
//                   className="text-2xl font-light text-slate-900 mb-6"
//                   style={{ fontFamily: "'Playfair Display', serif" }}
//                 >
//                   Pioneering Excellence Since Inception
//                 </h3>
//                 <div 
//                   className="space-y-5 text-slate-600 leading-relaxed text-base"
//                   style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: '400' }}
//                 >
//                   <p>
//                     Founded on the pillars of <strong className="text-slate-900 font-semibold">precision, innovation, and unwavering quality</strong>, Sunrise has evolved into one of the region's most trusted names in critical infrastructure development.
//                   </p>
//                   <p>
//                     Our portfolio spans hyperscale data centers, industrial complexes, commercial developments, and large-scale civil engineering projects—each delivered with meticulous attention to detail and adherence to international standards.
//                   </p>
//                   <p className="pl-6 border-l-4 border-[#8635F3] italic text-slate-700 font-medium">
//                     "We don't just build structures; we engineer solutions that empower businesses, support communities, and stand the test of time."
//                   </p>
//                 </div>
//               </div>

//               {/* Key Metrics */}
//               <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'scale-in delay-600' : ''}`}>
//                 <div className="text-center">
//                   <div 
//                     className="text-4xl lg:text-5xl font-bold stat-number mb-2"
//                     style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                   >
//                     150+
//                   </div>
//                   <div 
//                     className="text-sm text-slate-500 tracking-wide uppercase"
//                     style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
//                   >
//                     Projects
//                   </div>
//                 </div>
//                 <div className="text-center border-x border-slate-200">
//                   <div 
//                     className="text-4xl lg:text-5xl font-bold stat-number mb-2"
//                     style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                   >
//                     2M+
//                   </div>
//                   <div 
//                     className="text-sm text-slate-500 tracking-wide uppercase"
//                     style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
//                   >
//                     SqM Built
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <div 
//                     className="text-4xl lg:text-5xl font-bold stat-number mb-2"
//                     style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                   >
//                     25+
//                   </div>
//                   <div 
//                     className="text-sm text-slate-500 tracking-wide uppercase"
//                     style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
//                   >
//                     Years
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutSection;