//import { FC } from "react";
import type { FC } from "react";

const teamImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";

const OurApproach: FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT — IMAGE */}
        <div className="relative w-full flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[520px]">
            <img
              src={teamImage}
              alt="Team collaborating"
              className="w-full h-[22rem] md:h-[25rem] object-cover"
            />

            {/* Dark Gradient at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col gap-5 text-gray-300">
          <p className="text-sm font-semibold tracking-widest text-amber-400 uppercase">
            Our Approach
          </p>

          <h2 className="text-3xl md:text-2xl font-extrabold leading-tight text-white">
            GOOD <span className="text-blue-400">DIGITAL</span> WORK STARTS
            <br />
            WITH <span className="text-yellow-400">UNDERSTANDING</span>
          </h2>

          <p className="text-lg">
            Before building anything, we focus on clarity: goals, 
            <br/>constraints,
            users, and outcomes.
          </p>

          <p className="text-lg">
            From there, we execute with discipline. We don’t over-<br/>
            design,
            overbuild, or chase trends. We make deliberate 
            <br/>
            choices, document
            decisions, and build systems 
            <br/>
            that teams can actually use.
          </p>
          <p  className="text-lg">
            Our approach is practical by design — because real 
            <br/>
            businesses need
            things that work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
