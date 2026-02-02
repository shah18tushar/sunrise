"use client";

import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex justify-center">
          {/* ===== MAIN CTA PILL ===== */}
          <div
            className="
              relative
              w-full
              max-w-5xl
              flex items-center justify-between
              px-12 py-4
              rounded-full
              z-10
            "
            style={{
              background: "linear-gradient(90deg, #0B2A5B 0%, #0A3D7A 100%)",
            }}
          >
            {/* LEFT: AVATAR + INFO */}
            <div className="flex items-center gap-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/w.jpg"
                  alt="Arnold Burner"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-white text-base font-semibold leading-tight">
                  William Smith
                </h3>
                <p className="text-sm text-[#9FB3D9]">Support Person</p>
              </div>
            </div>

            {/* CENTER: TEXT */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <h2 className="text-white text-xl font-semibold">
                Contact with us Any time...!
              </h2>
            </div>

            {/* RIGHT: BUTTON */}
            <div>
              <Link href="/contactuspage">
                <button
                  className="
                  text-white
                  text-sm
                  font-semibold
                  px-9 py-2
                  rounded-full
                  transition-all
                  duration-500
                  hover:scale-[1.03]
                  cursor-pointer
                "
                  style={{
                    background:
                      "linear-gradient(90deg, #1E5FD8 0%, #4DA3FF 100%)",
                  }}
                >
                  Contact us!
                </button>
              </Link>
            </div>
          </div>

          {/* ===== SOLID GRAY SHADOW BAR (FIXED) ===== */}
          <div
            className="
              absolute
              -bottom-5
              w-[80%]   
              h-16
              rounded-full
              z-0
            "
            style={{ backgroundColor: "#D7DCE4" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
