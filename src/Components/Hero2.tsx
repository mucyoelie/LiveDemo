const Hero2 = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 bg-[#111]">
      {/* TOP CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="xl:mx-[140px]">
          <p className="text-[#F6BE00] mb-3 text-sm uppercase">What We Do</p>

          <h1 className="font-extrabold text-2xl md:text-2xl leading-tight uppercase">
            EVERY <span className="text-[#F6BE00]">PLATFORM.</span>
            <br />
            ONE <span className="text-[#00C2FF]">CLEAR</span> PURPOSE
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-300 space-y-5 text-[16px] leading-relaxed xl:mx-[-40px]">
          <p>
            We design brands, platforms, and operational systems that work
            together — not in 
            <br/>
            isolation.
          </p>
          <p>
            Each capability supports the next, creating clarity for users,
            teams, and the business 
            <br/>
            as a whole.
          </p>
        </div>
      </div>

      {/* 🔥 SERVICE CARDS SECTION */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:ml-[140px]">
        {/* CARD 1 */}
        <div className="rounded-2xl border border-[#442] p-6 bg-[#1A1A1A] hover:-translate-y-2 transition-all">
          <div className="text-4xl mb-3">🏅</div>
          <h2 className="text-[#F6BE00] font-bold uppercase text-sm">BRAND STRATEGY
            <br/> & IDENTITY</h2>
          <p className="text-gray-300 text-sm mt-3">
            Clear positioning and consistent expression that build trust and recognition.
          </p>
          <p className="text-[#F6BE00] mt-4 text-sm font-semibold cursor-pointer">
            Find out more →
          </p>
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl border border-green-700 p-6 bg-[#002B15] hover:-translate-y-2 transition-all">
          <div className="text-4xl mb-3">🖥️</div>
          <h2 className="text-green-400 font-bold uppercase text-sm">DIGITAL PLATFORMS & UX</h2>
          <p className="text-gray-300 text-sm mt-3">
            Websites & platforms designed to communicate clearly and convert with purpose.
          </p>
          <p className="text-green-400 mt-4 text-sm font-semibold cursor-pointer">
            Find out more →
          </p>
        </div>

        {/* CARD 3 */}
        <div className="rounded-2xl border border-blue-700 p-6 bg-[#001C2A] hover:-translate-y-2 transition-all">
          <div className="text-4xl mb-3">🔗</div>
          <h2 className="text-blue-400 font-bold uppercase text-sm">OPERATIONAL SYSTEMS & ERP</h2>
          <p className="text-gray-300 text-sm mt-3">
            Streamlined workflows & real-time data visibility that support smarter decisions.
          </p>
          <p className="text-blue-400 mt-4 text-sm font-semibold cursor-pointer">
            Find out more →
          </p>
        </div>

        {/* CARD 4 */}
        <div className="rounded-2xl border border-yellow-700 p-6 bg-[#231A00] hover:-translate-y-2 transition-all h-70">
          <div className="text-4xl mb-3">📱</div>
          <h2 className="text-yellow-400 font-bold uppercase text-sm">CROSS-PLATFORM MOBILE SOLUTIONS</h2>
          <p className="text-gray-300 text-sm mt-3">
            Consistent, reliable experiences across devices — wherever the user happens.
          </p>
          <p className="text-yellow-400 mt-4 text-sm font-semibold cursor-pointer">
            Find out more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

