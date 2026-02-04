

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE TEXT */}
        <div className="xl:mx-[140px]">
          <p className="text-[#F6BE00] mb-3 text-sm uppercase">About Us</p>

          <h1 className="font-extrabold text-2xl md:text-2xl leading-tight uppercase">
            DIGITAL{" "}
            <span className="text-[#F6BE00]">WORK SHOULD</span>
            <br />
            CREATE{" "}
            <span className="text-[#00C2FF]">MOMENTUM</span> — 
            <br />
            NOT COMPLEXITY
          </h1>
        </div>

        {/* RIGHT SIDE PARAGRAPH */}
        <div className="text-gray-300 space-y-5 text-[16px] leading-relaxed xl:mx-[-40px]">
          <p>
            Too many businesses invest in branding or technology only to outgrow it months 
            <br/>later.
          </p>

          <p>
            Disconnected decisions lead to inefficiency, confusion, and stalled
            growth.
            <br/>
             We exist to prevent that — by designing brands, platforms,
            and systems that 
            <br/>are built to work together from day one.
          </p>

          <a 
            href="#story" 
            className="text-[#F6BE00] font-semibold inline-flex items-center gap-2"
          >
            Read Our Story  
            <span className="text-lg">›</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
