import React from "react";
import { CheckCircle } from "lucide-react";

const ApproachSection: React.FC = () => {
  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-xl space-y-6 xl:ml-[140px]">
          
          {/* SMALL TITLE */}
          <p className="text-yellow-500 text-sm font-semibold">Our Approach</p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-blue-400">LEADERSHIP</span>{" "}
            <span className="text-white">WITH A PRACTICAL</span>{" "}
            <span className="text-green-400 block">PERSPECTIVE</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed">
            We design and build brands, digital platforms, and operational systems that
            work together — not in isolation. Our work sits at the intersection of
            brand clarity, user experience, and reliable technology.
          </p>

          {/* LIST SECTION */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <p className="font-semibold text-gray-100">
                Define clear direction
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <p className="font-semibold text-gray-100">
                Translate it into usable platforms
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <p className="font-semibold text-gray-100">
                Support it with systems that scale
              </p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Everything we do is designed to reduce friction and increase confidence —
            for teams, users, and decision-makers.
          </p>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center md:justify-end xl:relative right-32">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2070&q=80"
            alt="Team Collaboration"
            className="rounded-2xl shadow-lg w-full xl:w-[70%] object-cover h-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
