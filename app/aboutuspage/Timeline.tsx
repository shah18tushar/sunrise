"use client";

import React, { useRef, useEffect, useState } from "react";

const NAVBAR_OFFSET = 0;

const timelineData = [
  { year: "2018", title: "Foundation & Strategic Vision", desc: "Established Sunrise Consulting with a focus on enterprise advisory, cloud modernization, and board-level digital transformation." },
  { year: "2019", title: "Global Technology Alliances", desc: "Formed strategic partnerships with international cloud, cybersecurity, and ERP leaders to enable multinational delivery." },
  { year: "2020", title: "Enterprise Resilience Programs", desc: "Led compliance-driven remote transformation programs and secure cloud adoption for global organizations." },
  { year: "2021", title: "Global Delivery Model", desc: "Launched cross-border delivery operations with standardized governance, compliance, and executive reporting." },
  { year: "2022", title: "Industry Expansion", desc: "Expanded into healthcare, finance, and manufacturing with sector-specific digital transformation frameworks." },
  { year: "2023", title: "AI & Data Governance", desc: "Introduced enterprise AI platforms, automation, and data governance strategies for executive intelligence." },
  { year: "2024", title: "Global Office Network", desc: "Established regional headquarters across North America, Europe, and Asia-Pacific." },
  { year: "2025", title: "Enterprise Advisory Leadership", desc: "Recognized as a trusted board-level transformation partner for multinational organizations." },
  { year: "2026", title: "Future-Ready Consulting", desc: "Driving ESG-aligned transformation and next-generation digital governance for global enterprises." },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const rafRef = useRef<number | null>(null);
  const targetX = useRef(0);
  const currentX = useRef(0);

  const [_, force] = useState(0);

  const EASING = 0.08;
  const WHEEL_SENSITIVITY = 1.1;

  const metrics = useRef({
    maxScroll: 0,
    centerOffset: 0,
    sectionTop: 0,
    sectionHeight: 0,
  });

  // Smooth animation loop
  const animate = () => {
    const diff = targetX.current - currentX.current;
    currentX.current += diff * EASING;
    if (Math.abs(diff) < 0.1) currentX.current = targetX.current;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentX.current}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  const recalc = () => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track) return;

    const viewportWidth = sticky.clientWidth;
    const trackWidth = track.scrollWidth;

   const maxScroll = Math.max(0, trackWidth - viewportWidth + viewportWidth / 2);
    const centerOffset = maxScroll / 2;

    // We create just enough vertical scroll space for horizontal travel
    const sectionHeight = window.innerHeight * 0;

    const rect = section.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;

    metrics.current = {
      maxScroll,
      centerOffset,
      sectionTop,
      sectionHeight,
    };

    section.style.minHeight = `${sectionHeight}px`;

    // Center timeline when user first arrives
    targetX.current = centerOffset;
    currentX.current = centerOffset;

    force((t) => t + 1);
  };

  useEffect(() => {
    recalc();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", recalc);
    window.addEventListener("orientationchange", recalc);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("orientationchange", recalc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const { maxScroll } = metrics.current;
      if (maxScroll <= 0) return;

      const delta = e.deltaY * WHEEL_SENSITIVITY;

      const atStart = targetX.current <= 0.5;
      const atEnd = targetX.current >= maxScroll - 0.5;

      const shouldConsume =
        (delta > 0 && !atEnd) || (delta < 0 && !atStart);

      if (shouldConsume) {
        e.preventDefault();
        targetX.current = Math.min(
          Math.max(0, targetX.current + delta),
          maxScroll
        );
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 82, 204, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Sticky header under navbar */}
      <div
        className="sticky z-30 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-8 py-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-600/90 uppercase">
              Corporate Evolution
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Strategic <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Growth Journey</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm font-medium">
            A decade of innovation, expansion, and enterprise leadership in global digital transformation
          </p>
        </div>
      </div>

      {/* Sticky timeline viewport */}
      <div
        ref={stickyRef}
        className="sticky flex items-center"
        style={{ top: NAVBAR_OFFSET + 20 }}
      >
        <div className="relative w-full py-20">
          {/* Enhanced ambient lighting with realistic gradients */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/5 blur-[180px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-cyan-400/10 via-transparent to-blue-400/5 blur-[180px] animate-pulse delay-1000" />
            
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                                linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>

          {/* Premium timeline spine with glow effect */}
          <div className="absolute left-0 right-0 top-1/2 z-0">
            <div className="relative h-[3px]">
              {/* Main gradient line with metallic shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-60 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 h-[2px]"></div>
              
              {/* Glowing dots along the line */}
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/40 blur-sm"
                  style={{ left: `${i * 5}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Year markers on timeline */}
          <div className="absolute left-0 right-0 top-1/2 z-0 h-6">
            {timelineData.map((item, idx) => (
              <div 
                key={idx}
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: `${(idx / (timelineData.length - 1)) * 100}%` }}
              >
                <div className="w-[1px] h-8 bg-gradient-to-b from-blue-400/40 to-transparent"></div>
                <div className="mt-8 text-xs font-semibold text-slate-500 tracking-widest opacity-80">
                  {item.year}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation hint */}
          <div className="absolute top-8 left-8 z-20 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
            </svg>
            <span>Scroll horizontally</span>
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="relative flex items-center gap-32 px-32 z-10 will-change-transform"
            style={{ transform: `translateX(-${currentX.current}px)` }}
          >
            {timelineData.map((item, idx) => {
              const top = idx % 2 === 0;
              const isCurrentYear = item.year === "2023";
              const delay = idx * 100;

              return (
                <div
                  key={idx}
                  className="relative min-w-[400px] flex flex-col items-center transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Enhanced connector with glow */}
                  <div
                    className={`relative w-[3px] bg-gradient-to-b from-blue-400/80 via-blue-300 to-cyan-300/80 shadow-lg shadow-blue-400/30 ${
                      top ? "h-36 mb-0" : "h-36 mt-0 order-2"
                    }`}
                    style={{
                      animationDelay: `${delay}ms`
                    }}
                  >
                    {/* Connector glow effect */}
                    <div className={`absolute inset-0 w-full bg-gradient-to-b from-blue-400/20 to-transparent blur-md ${
                      top ? "animate-pulse-glow" : "animate-pulse-glow-reverse"
                    }`}></div>
                    
                    {/* Floating orb at connection point */}
                    <div className={`absolute ${top ? '-bottom-1' : '-top-1'} left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-lg shadow-blue-400/50`}>
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Premium card with enhanced styling */}
                  <article
                    className={`relative z-20 w-[400px] p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/50 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-blue-300/50 group ${
                      isCurrentYear ? 'ring-2 ring-blue-500/30 ring-offset-2' : ''
                    }`}
                    style={{
                      transform: top ? "translateY(-10px)" : "translateY(10px)",
                      animationDelay: `${delay + 200}ms`,
                      boxShadow: '0 20px 60px -12px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Year badge with premium styling */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-xl tracking-[0.1em] z-30 border border-white/20">
                      {item.year}
                      {isCurrentYear && (
                        <span className="ml-2 w-2 h-2 inline-block bg-white rounded-full animate-pulse"></span>
                      )}
                    </div>

                    {/* Card content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>

                      {/* Premium divider */}
                      <div className="mt-6 pt-4 border-t border-slate-100 relative">
                        <div className="absolute -top-px left-0 w-12 h-px bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium">Milestone {idx + 1}</span>
                          <span className="text-blue-600 font-semibold flex items-center gap-1">
                            Learn More
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-blue-400/30"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-cyan-400/30"></div>
                  </article>

                  {/* Connecting line end accent */}
                  <div className={`absolute ${top ? '-bottom-2' : '-top-2'} w-4 h-4 transform rotate-45 bg-gradient-to-br from-blue-100 to-white border border-slate-200/50 shadow-sm z-10`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}











// "use client";

// import React, { useRef, useEffect, useState } from "react";

// const NAVBAR_OFFSET = 0;

// const timelineData = [
//   { year: "2018", title: "Foundation & Strategic Vision", desc: "Established Sunrise Consulting with a focus on enterprise advisory, cloud modernization, and board-level digital transformation." },
//   { year: "2019", title: "Global Technology Alliances", desc: "Formed strategic partnerships with international cloud, cybersecurity, and ERP leaders to enable multinational delivery." },
//   { year: "2020", title: "Enterprise Resilience Programs", desc: "Led compliance-driven remote transformation programs and secure cloud adoption for global organizations." },
//   { year: "2021", title: "Global Delivery Model", desc: "Launched cross-border delivery operations with standardized governance, compliance, and executive reporting." },
//   { year: "2022", title: "Industry Expansion", desc: "Expanded into healthcare, finance, and manufacturing with sector-specific digital transformation frameworks." },
//   { year: "2023", title: "AI & Data Governance", desc: "Introduced enterprise AI platforms, automation, and data governance strategies for executive intelligence." },
//   { year: "2024", title: "Global Office Network", desc: "Established regional headquarters across North America, Europe, and Asia-Pacific." },
//   { year: "2025", title: "Enterprise Advisory Leadership", desc: "Recognized as a trusted board-level transformation partner for multinational organizations." },
//   { year: "2026", title: "Future-Ready Consulting", desc: "Driving ESG-aligned transformation and next-generation digital governance for global enterprises." },
// ];

// export default function Timeline() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const stickyRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   const rafRef = useRef<number | null>(null);
//   const targetX = useRef(0);
//   const currentX = useRef(0);

//   const [_, force] = useState(0);

//   const EASING = 0.08;
//   const WHEEL_SENSITIVITY = 1.1;

//   const metrics = useRef({
//     maxScroll: 0,
//     centerOffset: 0,
//     sectionTop: 0,
//     sectionHeight: 0,
//   });

//   // Smooth animation loop
//   const animate = () => {
//     const diff = targetX.current - currentX.current;
//     currentX.current += diff * EASING;
//     if (Math.abs(diff) < 0.1) currentX.current = targetX.current;

//     if (trackRef.current) {
//       trackRef.current.style.transform = `translateX(-${currentX.current}px)`;
//     }

//     rafRef.current = requestAnimationFrame(animate);
//   };

//   const recalc = () => {
//     const section = sectionRef.current;
//     const sticky = stickyRef.current;
//     const track = trackRef.current;
//     if (!section || !sticky || !track) return;

//     const viewportWidth = sticky.clientWidth;
//     const trackWidth = track.scrollWidth;

//     const maxScroll = Math.max(0, trackWidth - viewportWidth);
//     const centerOffset = maxScroll / 2;

//     // We create just enough vertical scroll space for horizontal travel
//     const sectionHeight = window.innerHeight * 0;

//     const rect = section.getBoundingClientRect();
//     const sectionTop = window.scrollY + rect.top;

//     metrics.current = {
//       maxScroll,
//       centerOffset,
//       sectionTop,
//       sectionHeight,
//     };

//     section.style.minHeight = `${sectionHeight}px`;

//     // Center timeline when user first arrives
//     targetX.current = centerOffset;
//     currentX.current = centerOffset;

//     force((t) => t + 1);
//   };

//   useEffect(() => {
//     recalc();
//     rafRef.current = requestAnimationFrame(animate);

//     window.addEventListener("resize", recalc);
//     window.addEventListener("orientationchange", recalc);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", recalc);
//       window.removeEventListener("orientationchange", recalc);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const onWheel = (e: WheelEvent) => {
//       const { maxScroll } = metrics.current;
//       if (maxScroll <= 0) return;

//       const delta = e.deltaY * WHEEL_SENSITIVITY;

//       const atStart = targetX.current <= 0.5;
//       const atEnd = targetX.current >= maxScroll - 0.5;

//       const shouldConsume =
//         (delta > 0 && !atEnd) || (delta < 0 && !atStart);

//       if (shouldConsume) {
//         e.preventDefault();
//         targetX.current = Math.min(
//           Math.max(0, targetX.current + delta),
//           maxScroll
//         );
//       }
//     };

//     section.addEventListener("wheel", onWheel, { passive: false });
//     return () => section.removeEventListener("wheel", onWheel);
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative bg-white overflow-hidden">
//       {/* Sticky header under navbar */}
//       <div
//         className="sticky z-30 bg-white/90 backdrop-blur border-b border-gray-200"
//       >
//         <div className="max-w-6xl mx-auto px-6 py-6 text-center">
//           <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
//             Corporate History
//           </span>
//           <h2 className="text-3xl font-semibold text-[#1f2d45] mt-2">
//             Enterprise Growth Timeline
//           </h2>
//         </div>
//       </div>

//       {/* Sticky timeline viewport */}
//       <div
//         ref={stickyRef}
//         className="sticky flex items-center"
//         style={{ top: NAVBAR_OFFSET + 20 }} // space for heading block
//       >
//         <div className="relative w-full py-20">
//           {/* Ambient lighting */}
//           <div className="pointer-events-none absolute inset-0 z-0">
//             <div className="absolute top-1/4 left-24 w-[480px] h-[480px] rounded-full blur-[140px] bg-blue-100/30" />
//             <div className="absolute bottom-1/4 right-24 w-[480px] h-[480px] rounded-full blur-[140px] bg-cyan-100/30" />
//           </div>

//           {/* Horizontal spine (behind cards) */}
//           <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-gradient-to-r from-blue-200 via-blue-500 to-cyan-400 opacity-90 z-0" />

//           {/* Track */}
//           <div
//             ref={trackRef}
//             className="relative flex items-center gap-24 px-24 z-10 will-change-transform"
//             style={{ transform: `translateX(-${currentX.current}px)` }}
//           >
//             {timelineData.map((item, idx) => {
//               const top = idx % 2 === 0;

//               return (
//                 <div
//                   key={idx}
//                   className="relative min-w-[360px] flex flex-col items-center"
//                 >
//                   {/* Connector */}
//                   <div
//                     className={`w-[2px] bg-gradient-to-b from-blue-400 to-cyan-300 ${
//                       top ? "h-28 mb-0" : "h-28 mt-0 order-2"
//                     }`}
//                   />

//                   {/* Card */}
//                   <article
//                     className="relative z-20 w-[360px] p-6 rounded-3xl bg-white shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
//                     style={{
//                       transform: top
//                         ? "translateY(-10px)"
//                         : "translateY(10px)",
//                     }}
//                   >
//                     <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-widest">
//                       {item.year}
//                     </div>

//                     <h3 className="text-lg font-semibold text-[#1f2d45] mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {item.desc}
//                     </p>

//                     <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-200 via-blue-400 to-transparent" />
//                   </article>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }