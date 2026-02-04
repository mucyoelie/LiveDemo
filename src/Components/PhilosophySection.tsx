const principles = [
  {
    text: ["STRATEGY BEFORE", "EXECUTION"],
    bg: "bg-[#1A1605]/60",
  },
  {
    text: ["SYSTEMS BUILT", "TO SCALE"],
    bg: "bg-[#001A14]/60",
  },
  {
    text: ["CLEAR COMMUNICATION,", "ACCOUNTABLE DELIVERY"],
    bg: "bg-[#00170F]/60",
  },
];

const PhilosophySection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 xl:mx-[140px]">

      {/* TEXT HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        
        {/* LEFT SIDE TITLE */}
        <div>
          <p className="text-[#F6BE00] uppercase mb-2">The Philosophy</p>

          <h2 className="text-3xl font-extrabold uppercase leading-tight">
            HOW WE <span className="text-[#F6BE00]">THINK</span> ABOUT  
            <br />
            THE <span className="text-[#00C2FF]">WORK</span>
          </h2>
        </div>

        {/* RIGHT SIDE PARAGRAPH */}
        <p className="text-gray-300 xl:w-[120%] mt-8">
          We believe every project is an opportunity — to observe what’s real, 
          make 
          <br />
          intentional choices, and align with what actually matters.
          <br />
          This philosophy guides every decision we make.
        </p>
      </div>

      {/* PRINCIPLE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {principles.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl px-8 py-10 ${item.bg} backdrop-blur-sm hover:opacity-90 transition`}
          >
            <h3 className="text-lg font-bold uppercase text-white tracking-wide leading-snug">
              {item.text.map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== item.text.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PhilosophySection;

