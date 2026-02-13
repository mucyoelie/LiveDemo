
import React from "react";

const CoffeeShowcase: React.FC = () => {
  const images = {
    banner: "/image1.jpg",
    wide: "/image1.jpg",
    grid2_top: ["/image1.jpg", "/image1.jpg"],
    grid2_bottom: ["/image1.jpg", "/image1.jpg"],
  };

  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-16 space-y-12">

      {/* ── Top Banner with label overlay ── */}
      <div className="max-w-6xl mx-auto relative">
        {/* Label tag */}
        <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded px-3 py-1">
          <span className="text-white/60 uppercase tracking-widest text-[9px] font-medium">
            Academic Illiade
          </span>
        </div>

        <img
          src={images.banner}
          alt="banner"
          className="w-full rounded-2xl object-cover h-56 md:h-64 shadow-2xl"
        />

        {/* Bottom text overlay */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-5 py-5"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
          <p className="text-white font-bold uppercase tracking-wide leading-snug text-sm md:text-base">
            A <span className="text-blue-500">BETTER APPROACH</span> TO
            <br />EDUCATION ACROSS AFRICA
          </p>
        </div>
      </div>

      {/* ── Section Header ── */}
      <div className="max-w-6xl mx-auto space-y-2">
        <p className="text-blue-500 uppercase tracking-[0.2em] text-[10px] font-medium">
          Contexte &amp; Objectifs
        </p>
        <h2
          className="font-extrabold uppercase leading-tight"
          style={{ fontSize: "clamp(20px, 3.5vw, 30px)", fontFamily: "'Syne', sans-serif" }}
        >
          Design &amp;{" "}
          <span className="text-blue-500">Develop</span> an Education
          <br />
          Platform that{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3b82f6 0%, #a78bfa 55%, #f9fafb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Changes the Norm
          </span>
        </h2>
      </div>

      {/* ── Wide Mockup ── */}
      <div className="max-w-6xl mx-auto">
        <img
          src={images.wide}
          alt="wide mockup"
          className="w-full rounded-2xl object-cover shadow-2xl"
          style={{ aspectRatio: "16/7" }}
        />
      </div>

      {/* ── Grid 2 Top ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {images.grid2_top.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="rounded-2xl object-cover w-full shadow-xl"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>

      {/* ── Grid 2 Bottom ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {images.grid2_bottom.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="rounded-2xl object-cover w-full shadow-xl"
            style={{ aspectRatio: "16/10" }}
          />
        ))}
      </div>

    </section>
  );
};

export default CoffeeShowcase;