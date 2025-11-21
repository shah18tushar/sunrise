"use client";

import React from "react";

interface CarPanel {
  id: number;
  brand: string;
  imageUrl?: string;
  cardType?: string;
  content?: React.ReactNode;
}

const ExpandingCarCards: React.FC = () => {
  const carPanels: CarPanel[] = [
    {
      id: 1,
      brand: "Advanced Technology Facilities",
      imageUrl: "/s.jpg",
      content: (
         <p className="text-sm leading-relaxed mt-4">  
We support the rapidly evolving pharmaceutical industry with comprehensive EPCM and turnkey EPC services, delivering state-of-the-art manufacturing plants, R&D facilities, and specialized containment labs.
        </p>
      ),
    },
    {
      id: 2,
      brand: "Bio-Pharmaceutical",
      imageUrl: "/s.jpg",
      content: (
        <p className="text-sm leading-relaxed mt-4">  
Based in Bahrain, we specialize in delivering comprehensive EPC and EPCM services for complex pharmaceutical and biopharmaceutical projects. We ensure high-quality, compliant solutions from concept development to final handover.        </p>
      ),
    },
    {
      id: 3,
      brand: "Pharmaceutical",
      imageUrl: "/s.jpg",
      content: (
        <p className="text-sm leading-relaxed mt-4">  
We support the rapidly evolving pharmaceutical industry with comprehensive EPCM and turnkey EPC services, delivering state-of-the-art manufacturing plants, R&D facilities, and specialized containment labs.
        </p>
      ),
    },
    {
      id: 4,
      brand: "Sectors We Serve?",
      cardType: "cta",
    },
  ];

  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-br from-black via-blue-950 to-black flex items-center justify-center overflow-hidden p-4 py-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-32 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
            Sectors We Serve
          </h1>

          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We understand that each industry has its own unique product
            requirements, and we work closely with our customers to deliver
            media solutions that exceed their expectations.
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/60 animate-bounce delay-[0.2]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/40 animate-bounce delay-[0.6]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400/20 animate-bounce delay-[0.8]"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex w-full gap-3 h-[70vh]">
          {carPanels.map((car) => {
            if (car.cardType === "cta") {
              return (
                <div
                  key={car.id}
                  className="relative rounded-3xl flex-shrink-0 basis-[22%] bg-transparent flex justify-center items-center"
                >
                  <div className="flex flex-col items-center text-center px-4">
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                      {car.brand}
                    </h3>

                    
                      <button className="relative px-8 py-3 rounded-full font-semibold text-white text-base overflow-hidden group/btn transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 cursor-pointer">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/btn:translate-x-full transition-transform duration-700"></span>
                        <span className="relative flex items-center gap-2">
                          Explore More
                          <svg
                            className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={car.id}
                className="relative bg-cover bg-center bg-no-repeat rounded-3xl flex-[0.5] cursor-pointer transition-all duration-700 ease-out hover:flex-[1.2] group overflow-hidden"
                style={{
                  // ensure backgroundImage is a proper string (quotes inside url help with paths containing spaces)
                  backgroundImage: car.imageUrl ? `url("${car.imageUrl}")` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border border-blue-400/30 group-hover:border-blue-300/60 transition-all duration-700"></div>

                {/* Blue overlay sliding from bottom to top */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-0 bg-[#0C4A9D]/60 group-hover:h-full transition-all duration-700 ease-out"></div>
                </div>

                {/* Original gradient overlay (on top of background image) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Title */}
                <h3 className=" absolute text-white m-0 text-lg font-bold text-center leading-tight whitespace-nowrap transform transition-all left-1/2 bottom-8 -translate-x-1/2 opacity-100 group-hover:opacity-0 z-20">
                  {car.brand}
                </h3>

                {/* Expanded Content Overlay */}
                <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10">
                  <div className="px-6 text-white text-center space-y-4">
                    <span className="text-lg font-semibold underline underline-offset-4">
                      {car.brand}
                    </span>
                    <span className="text-left">{car.content}</span>
                  </div>
                  {/* Button stays at Bottom Center */}
              
                    <button
                      className="mt-6 relative px-10 py-4 cursor-pointer rounded-full font-semibold text-white text-lg overflow-hidden group/btn transition-all duration-500 shadow-2xl hover:shadow-blue-500/50"
                      style={{
                        background:
                          "linear-gradient(135deg, #0C4A9D 0%, #1B5FC9 100%)",
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/btn:translate-x-full transition-transform duration-700"></span>
                      <span className="relative flex items-center gap-2">
                        Explore More
                        <svg
                          className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover/btn:opacity-20 blur-lg transition-opacity duration-500"></div>
                    </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpandingCarCards;