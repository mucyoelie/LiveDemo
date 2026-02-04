import { Phone, Sparkles } from "lucide-react";

const DirectionSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 xl:mx-[140px]">

      {/* TOP TEXT SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-2xl font-extrabold uppercase leading-tight">
            <span className="text-[#B6FF3D]">SEE</span> THE DIRECTION
            <br />
            BEFORE YOU <span className="text-[#00C2FF]">COMMIT</span>
          </h2>
        </div>

        {/* RIGHT PARAGRAPH */}
        <p className="text-gray-300 md:w-[90%] leading-relaxed">
          Before timelines, budgets, or long-term decisions, we believe you should
          experience what’s possible.
          <br /><br />
          We translate your idea into a working direction — shaped around your goals,
          your users, and your reality — so you can evaluate clarity before
          committing to scale.
        </p>
      </div>

      {/* BOTTOM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-[#2A1E16] rounded-3xl px-10 py-12 shadow-xl">
          <Phone className="text-[#F6BE00] w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold uppercase text-[#F6BE00] mb-4">
            TALK WITH THE PEOPLE WHO’LL BUILD IT
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you’re ready to move forward, let’s start with a real conversation.
            <br /><br />
            We’ll listen closely, ask the right questions, and outline a clear,
            realistic path — including scope, timing, and cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F6BE00] text-black font-semibold px-6 py-3 rounded-lg">
              BOOK A CALL
            </button>
            <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white/10 transition">
              START THE CONVERSATION
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#002419] rounded-3xl px-10 py-12 shadow-xl">
          <Sparkles className="text-[#00FF95] w-10 h-10 mb-4" />
          <h3 className="text-xl font-bold uppercase text-[#00FF95] mb-4">
            START WITH A LIVE DEMO
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            This isn’t a sales pitch. It’s a way to explore ideas safely.
            <br /><br />
            A chance to see how things could work — before deciding how far to take them.
          </p>

          <button className="bg-[#00FF95] text-black font-semibold px-6 py-3 rounded-lg">
            GET A FREE DEMO →
          </button>
        </div>

      </div>
    </section>
  );
};

export default DirectionSection;

