import React from "react";

const ShowcaseSection: React.FC = () => {
  const images = [
    "/kblcoffee7.jpg", 
    "/image1.jpg", 
    "/image1.jpg", 
    "/image1.jpg", 
    "/image1.jpg",
    "/image1.jpg",
    "/image1.jpg", 
    "/image1.jpg", 
    "/kblcoffee1.jpg", 
    "/kblcoffee2.jpg", 
    "/kblcoffee3.jpg", 
    "/kblcoffee5.jpg", 
    "/kblcoffee6.jpg", 
  ];

  return (
    <section
      className="w-full bg-black text-white py-16 px-6 md:px-16 space-y-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Syne:wght@700;800&display=swap');
      `}</style>

      {/* ── TOP BANNER STRIP ── */}
      <div className="max-w-6xl mx-auto relative">
        <div
          className="w-full rounded-2xl overflow-hidden relative"
          style={{ height: "160px", boxShadow: "0 16px 48px rgba(0,0,0,0.7)" }}
        >
          {/* 4-image horizontal strip */}
          <div className="flex h-full">
            {images.slice(0, 4).map((src, i) => (
              <div
                key={i}
                className="flex-1 overflow-hidden"
                style={{ borderRight: i < 3 ? "2px solid rgba(0,0,0,0.4)" : "none" }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: i === 0 ? "brightness(0.55)" : "brightness(0.85)" }}
                />
              </div>
            ))}
          </div>

          {/* Label + heading overlay on first panel */}
          <div
            className="absolute bottom-0 left-0 px-5 py-4"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              width: "52%",
            }}
          >
            <p
              className="uppercase tracking-widest mb-1"
              style={{ fontSize: "8px", color: "rgba(255,255,255,0.55)" }}
            >
              KBL Coffee
            </p>
            <p
              className="uppercase font-bold leading-snug"
              style={{ fontSize: "11px", fontFamily: "'Syne', sans-serif" }}
            >
              A{" "}
              <span style={{ color: "#f59e0b" }}>BETTER</span> APPROACH TO
              <br />
              EDUCATION ACROSS AFRICA
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION HEADER ── */}
      <div className="max-w-6xl mx-auto space-y-2 pt-2">
        <p
          className="uppercase tracking-widest"
          style={{ fontSize: "9px", color: "#f59e0b", letterSpacing: "0.18em" }}
        >
          Contexte &amp; Objectifs
        </p>
        <h2
          className="uppercase font-extrabold leading-tight"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(18px, 3vw, 26px)",
          }}
        >
          Design &amp;{" "}
          <span style={{ color: "#3b82f6" }}>Develop</span> an Education
          <br />
          Platform that{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #f59e0b 0%, #fb923c 50%, #fde68a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Changes the Norm
          </span>
        </h2>
      </div>

      {/* ── FULL WIDTH HERO IMAGE ── */}
      <div className="max-w-6xl mx-auto">
        <img
          src={images[4]}
          alt="hero"
          className="w-full rounded-2xl object-cover"
          style={{
            aspectRatio: "16/7",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        />
      </div>

      {/* ── GRID ROW 1 (2 cols) ── */}
      <div
        className="max-w-6xl mx-auto grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {images.slice(5, 7).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full rounded-2xl object-cover"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </div>

      {/* ── GRID ROW 2 (2 cols) ── */}
      <div
        className="max-w-6xl mx-auto grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {images.slice(7, 9).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full rounded-2xl object-cover"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </div>

      {/* ── GRID ROW 3 (2 cols) ── */}
      <div
        className="max-w-6xl mx-auto grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        {images.slice(9, 11).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full rounded-2xl object-cover"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </div>

      {/* ── BOTTOM PARTIAL ROW (2 cols, half visible) ── */}
      <div
        className="max-w-6xl mx-auto grid gap-4"
        style={{ gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}
      >
        {images.slice(11, 13).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full rounded-2xl object-cover"
            style={{
              aspectRatio: "4/3",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
