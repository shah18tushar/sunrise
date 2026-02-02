"use client";

import React from "react";

const WorkSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f4fbfc] to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Card container — overflow VISIBLE so image breaks out */}
        <div className="relative bg-white rounded-[36px] shadow-[0_30px_60px_rgba(31,41,55,0.06)] overflow-visible">
          {/* soft outer shadow strip */}
          <div className="absolute left-8 right-8 bottom-0 h-6 rounded-b-[36px] bg-gradient-to-t from-[#eef6fb] to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-20 px-8 lg:px-16 relative">
            {/* LEFT: content */}
            <div className="max-w-2xl">
              <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-extrabold leading-tight text-[#1f2d45]">
                We work together <br /> for success.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl">
                One of the key benefits of partnering with Remote IT Solutions is our
                security expertise. We design resilient systems and operational
                processes so your business can scale confidently.
              </p>
            </div>

            {/* RIGHT: floating visual — overflows card top & bottom */}
            <div className="relative h-[420px] lg:h-[520px]">
              {/* Main rocket image — breaks out above and below the card */}
              <img
                src="/cloud.png"
                alt="boy on rocket"
                className="floating-rocket absolute"
                style={{
                  right: "-60px",
                  top: "50%",
                  width: "540px",
                  maxWidth: "none",
                  objectFit: "contain",
                  zIndex: 20,
                }}
              />

              {/* Floating clipboard graphic — top right, outside the card */}
              <div
                className="absolute bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.10)] flex items-center justify-center"
                style={{
                  top: "-80px",
                  right: "-20px",
                  width: "160px",
                  height: "160px",
                  zIndex: 30,
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Clipboard board */}
                  <rect x="12" y="18" width="76" height="72" rx="6" fill="#a78bfa" />
                  {/* Clipboard clip */}
                  <rect x="32" y="10" width="36" height="16" rx="4" fill="#7c3aed" />
                  {/* Lines on clipboard */}
                  <rect x="24" y="40" width="52" height="5" rx="2.5" fill="#c4b5fd" />
                  <rect x="24" y="52" width="40" height="5" rx="2.5" fill="#c4b5fd" />
                  <rect x="24" y="64" width="46" height="5" rx="2.5" fill="#c4b5fd" />
                  {/* Green checkmarks / colored accents */}
                  <rect x="24" y="40" width="8" height="5" rx="2.5" fill="#34d399" />
                  <rect x="24" y="52" width="8" height="5" rx="2.5" fill="#34d399" />
                  <rect x="24" y="64" width="8" height="5" rx="2.5" fill="#fb923c" />
                  {/* Pencil */}
                  <rect
                    x="72"
                    y="12"
                    width="6"
                    height="30"
                    rx="3"
                    fill="#fbbf24"
                    transform="rotate(25 75 27)"
                  />
                  <polygon
                    points="75,42 72,50 78,50"
                    fill="#f59e0b"
                    transform="rotate(25 75 46)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        .floating-rocket {
          transform: translateY(-50%);
          animation: floatRocket 6s ease-in-out infinite;
        }

        @keyframes floatRocket {
          0% {
            transform: translateY(-50%) translateY(0px);
          }
          50% {
            transform: translateY(-50%) translateY(-22px);
          }
          100% {
            transform: translateY(-50%) translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default WorkSection;