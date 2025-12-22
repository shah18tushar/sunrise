// "use client";

// import React from "react";
// import Image from "next/image";

// const WhyChooseUs = () => {
//   return (
//     <>
//       {/* ===== FONT IMPORTS (SAME AS ABOUT SECTION) ===== */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 15s linear infinite;
//         }
//       `}</style>

//       <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
//         {/* ===== PREMIUM WATERMARK HEADER (SAME AS ABOUT US) ===== */}
//         <div className="absolute top-[5.5rem] -right-36 -translate-x-1/2 text-center pointer-events-none select-none">
//           <div
//             className="text-[140px] lg:text-[80px] font-bold tracking-tighter opacity-[0.08]"
//             style={{ fontFamily: "'Cormorant Garamond', serif" }}
//           >
//             WHY CHOOSE US
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

//             {/* ================= LEFT SIDE ================= */}
//             <div className="relative flex items-center justify-center">
//               <div className="relative w-full max-w-md">
//                 <div className="relative z-10">
//                   <Image
//                     src="/n1.png"
//                     alt="IT Professional"
//                     width={500}
//                     height={500}
//                     className="w-full h-auto"
//                     priority
//                   />
//                 </div>

//                 <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-20">
//                   <div className="relative w-40 h-40">
//                     <div className="absolute inset-[28px] rounded-full bg-white z-10" />

//                     <div className="absolute inset-0 animate-spin-slow">
//                       <div className="absolute -inset-[10px] rounded-full bg-[#1F4FA3]" />

//                       <svg
//                         className="absolute inset-0 w-full h-full"
//                         viewBox="0 0 160 160"
//                       >
//                         <defs>
//                           <path
//                             id="textCircle"
//                             d="M 80, 80 m -71, 0 a 71,71 0 1,1 142,0 a 71,71 0 1,1 -142,0"
//                           />
//                         </defs>
//                         <text
//                           fontSize="14"
//                           fill="white"
//                           fontWeight="700"
//                           letterSpacing="3"
//                           fontFamily="Montserrat, sans-serif"
//                         >
//                           <textPath href="#textCircle">
//                             ★ Digital Lorem Ipsum dolor sit amet ★ Digital Lorem Ipsum dolor sit
//                           </textPath>
//                         </text>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT SIDE ================= */}
//             <div className="space-y-8">
//               {/* Overline */}
//               <div className="flex items-center justify-center gap-3">
//                 <span
//                   className="text-[#1F4FA3] text-sm font-semibold uppercase tracking-wider text-center"
//                   style={{ fontFamily: "'Montserrat', sans-serif" }}
//                 >
//                   WHY CHOOSE US
//                 </span>
//                 {/* <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} width="20" height="20" viewBox="0 0 24 24" className="text-[#1F4FA3]">
//                       <path
//                         d="M2 12 Q 6 8, 10 12 T 18 12"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   ))}
//                 </div> */}
//               </div>

//               {/* Main Heading */}
//               <h2
//                 className="text-3xl font-light text-gray-900 leading-tight text-center"
//                 style={{ fontFamily: "'Playfair Display', serif" }}
//               >
//                 We Are Innovative Data Center Solutions & Services Company
//               </h2>

//               {/* Description */}
//               <p
//                 className="text-gray-600 text-lg leading-relaxed text-center"
//                 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
//               >
//                 Nor is there anyone who loves or pursues or desires to obtain pain of itself,
//                 because it is pain, but occasionally circumstances occur in which toil and pain
//                 can procure him some great pleasure.
//               </p>


//               {/* Progress Bars */}
//               <div className="space-y-6 pt-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
//                 <div>
//                   <div className="flex justify-between mb-3">
//                     <span className="font-semibold text-lg">Analytics</span>
//                     <span className="font-bold text-lg">95%</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
//                     <div className="absolute top-0 left-0 h-full bg-[#1F4FA3]" style={{ width: "95%" }} />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between mb-3">
//                     <span className="font-semibold text-lg">Development</span>
//                     <span className="font-bold text-lg">75%</span>
//                   </div>
//                   <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
//                     <div className="absolute top-0 left-0 h-full bg-[#1F4FA3]" style={{ width: "75%" }} />
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

// export default WhyChooseUs;




"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      {/* ===== FONT IMPORTS (SAME AS ABOUT SECTION) ===== */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* ===== BACKGROUND IMAGE ===== */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg.jpg"   /* <-- your background image */
            alt="Why Choose Us Background"
            fill
            priority
            className="object-fit"
          />
        </div>

        {/* ===== PREMIUM WATERMARK HEADER ===== */}
        <div className="absolute top-[5.5rem] -right-36 -translate-x-1/2 text-center pointer-events-none select-none">
          <div
            className="text-[140px] lg:text-[80px] font-bold tracking-tighter opacity-[0.08]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            WHY CHOOSE US
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ================= LEFT SIDE ================= */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative z-10">
                  <Image
                    src="/n1.png"
                    alt="IT Professional"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                <div className="absolute top-1/2 -right-24 -translate-y-1/2 z-20">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-[28px] rounded-full bg-white z-10" />

                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute -inset-[10px] rounded-full bg-[#1F4FA3]" />

                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 160 160"
                      >
                        <defs>
                          <path
                            id="textCircle"
                            d="M 80, 80 m -71, 0 a 71,71 0 1,1 142,0 a 71,71 0 1,1 -142,0"
                          />
                        </defs>
                        <text
                          fontSize="14"
                          fill="white"
                          fontWeight="700"
                          letterSpacing="3"
                          fontFamily="Montserrat, sans-serif"
                        >
                          <textPath href="#textCircle">
                            ★ Digital Lorem Ipsum dolor sit amet ★ Digital Lorem Ipsum dolor sit
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="space-y-8">
              {/* Overline */}
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-[#1F4FA3] text-sm font-semibold uppercase tracking-wider text-center"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  WHY CHOOSE US
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl font-light text-gray-900 leading-tight text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We Are Innovative Data Center Solutions & Services Company
              </h2>

              {/* Description */}
              <p
                className="text-gray-600 text-lg leading-relaxed text-center"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                Nor is there anyone who loves or pursues or desires to obtain pain of itself,
                because it is pain, but occasionally circumstances occur in which toil and pain
                can procure him some great pleasure.
              </p>

              {/* Progress Bars */}
              <div className="space-y-6 pt-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">Analytics</span>
                    <span className="font-bold text-lg">95%</span>
                  </div>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-[#1F4FA3]" style={{ width: "95%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">Development</span>
                    <span className="font-bold text-lg">75%</span>
                  </div>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-[#1F4FA3]" style={{ width: "75%" }} />
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

export default WhyChooseUs;
