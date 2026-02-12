import { useEffect, useRef, useState } from "react";

const teamImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 md:px-20">
      <div
        ref={sectionRef}
        className="
          grid grid-cols-1 md:grid-cols-2 
          gap-8 lg:gap-12 items-center 
          max-w-6xl mx-auto
        "
      >
        {/* LEFT SIDE — IMAGE */}
        <div
          className={`
            relative transition-all duration-700 ease-out 
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            md:order-1 order-2
          `}
        >
          {/* Glow */}
          <div className="absolute -inset-2 rounded-2xl bg-amber-500/10 blur-2xl pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={teamImage}
              alt="Team Collaborating"
              className="
                w-full object-cover 
                h-[20rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem]
                rounded-2xl
              "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div
          className={`
            flex flex-col gap-6 
            transition-all duration-700 ease-out delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            md:order-2 order-1
            xl:ml-[140px]
          `}
        >
          <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
            Our Approach
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white tracking-tight">
            GOOD <span className="text-amber-400">DIGITAL</span> WORK STARTS
            <br />
            WITH <span className="text-amber-400">UNDERSTANDING</span>
          </h2>

          <div className="w-12 h-[2px] bg-amber-400/60 rounded-full" />

          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-gray-300">
            <p>
              Before building anything, we focus on clarity: goals, constraints,
              users, and outcomes.
            </p>
            <p>
              From there, we execute with discipline. We don't over-design or
              chase trends — we make deliberate choices that scale.
            </p>
            <p>
              Our approach is practical by design — because real businesses need
              things that work.
            </p>
          </div>

          <div className="mt-2 flex items-center gap-3 group cursor-pointer w-fit">
            <span className="text-sm font-semibold text-amber-400 tracking-wide uppercase group-hover:underline transition-all">
              Learn more
            </span>
            <span className="text-amber-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
