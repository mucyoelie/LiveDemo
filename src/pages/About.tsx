import React from 'react';
import ApproachSection from '../Components/ApproachSection';

const About: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gray-900 flex items-end ">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 py-16 lg:py-24 xl:mx-[140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Left Column */}
            <div className="space-y-6">
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Who we are</span>

              <h1 className="text-2xl lg:text-3xl xl:text-3xl font-bold leading-tight">
                <span className="text-white">BUILT ON </span>
                <span className="text-amber-500">STRATEGY.</span>
                <br />
                <span className="text-white">DRIVEN BY EXECUTION.</span>
              </h1>

              <p className="text-cyan-400 text-lg lg:text-xl max-w-md">
                <span className="font-semibold text-yellow-400">GoLive24h</span> exists to solve a common problem in digital work: misalignment.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-gray-300 xl:relative right-24">
              <p className="text-base lg:text-lg leading-relaxed xl:w-[140%]">
                Too often, businesses invest in branding, platforms, or systems that don't grow well 
                <br/>together — and pay for it later.
              </p>

              <p className="text-base lg:text-lg leading-relaxed xl:w-[140%]">
                We help organizations avoid that by building digital foundations where strategy,
                <br/>
                design, and systems are aligned from the start — and built to hold up as 
                <br/>the business grows.
              </p>
            </div>

          </div>
        </div>

        {/* Decoration */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
      </div>

      {/* FIX: Put Approach section outside */}
      <ApproachSection />
    </>
  );
};

export default About;
