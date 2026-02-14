import React from "react";

const Showcase: React.FC = () => {
  return (
    <section className="w-full bg-black text-white pb-20 px-6 md:px-20">
      {/* CONTAINER WITH CONSISTENT WIDTH */}
      <div className="max-w-[1100px] mx-auto py-32">

        {/* Top Banner */}
        <div className="relative w-full h-[380px] rounded-lg overflow-hidden">
          <img
            src="/image1.jpg"
            alt="Banner"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

          {/* Banner Text */}
          <div className="absolute bottom-10 left-10 max-w-[600px]">
            <h2 className="text-yellow-400 font-bold text-2xl md:text-3xl">
              IDENTITY & IMAGE
            </h2>

            <p className="text-sm md:text-base mt-2 opacity-90">
              Projects focused on defining, clarifying, or evolving how a brand
              is understood.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Brand strategy & positioning",
                "Logo & visual identity systems",
                "Brand guidelines",
                "Naming & messaging frameworks",
                "Rebrands and brand refreshes",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1 rounded-full bg-white/10 backdrop-blur text-xs border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full mt-10 border-b border-white/20">
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            {[
              "IDENTITY & IMAGE",
              "DIGITAL PLATFORMS & UX",
              "OPERATIONAL SYSTEMS & ERP",
              "CROSS-PLATFORM & MOBILE",
            ].map((tab, i) => (
              <button
                key={i}
                className={`pb-3 ${
                  i === 0
                    ? "border-b-2 border-yellow-400 text-yellow-400 font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div
            className="rounded-2xl overflow-hidden h-[28rem]  relative bg-cover bg-center border border-white/10"
            style={{ backgroundImage: "url('/laptop1.jpg')" }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="absolute bottom-0 p-5">
              <h3 className="text-yellow-400 font-bold text-lg">
                BRAND VISIBILITY ONLINE
              </h3>
              <p className="text-sm text-white/80 mt-2">
                Complete ERP system for manufacturing with inventory, production,
                and financial modules.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="rounded-2xl overflow-hidden h-[28rem]  relative bg-cover bg-center border border-white/10"
            style={{ backgroundImage: "url('/laptop1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-5">
              <h3 className="text-yellow-400 font-bold text-lg">
                BRAND IDENTITY FOR A COFFEE HOUSE
              </h3>
              <p className="text-sm text-white/80 mt-2">
                Custom logistics management system with real-time tracking and
                route optimization.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="rounded-2xl overflow-hidden h-[28rem] relative bg-cover bg-center border border-white/10"
            style={{ backgroundImage: "url('/laptop1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-0 p-5">
              <h3 className="text-yellow-400 font-bold text-lg">TECHFLOW SOLUTIONS</h3>
              <p className="text-sm text-white/80 mt-2">
                Corporate website with lead generation, service showcase, 
                and client portal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
