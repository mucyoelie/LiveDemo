import type { FC } from "react";

const DecisionsSection: FC = () => {
  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* ==== TOP SECTION (TWO COLUMNS) ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold text-yellow-500 mb-3">
              What Guides Our Decisions
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              BUILT ON <span className="text-yellow-500">STRATEGY</span>.<br />
              DRIVEN BY <span className="text-white">EXECUTION</span>.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="text-gray-300 flex flex-col gap-4">
            <p>
              Too often, businesses invest in branding, platforms, or systems
              that don’t grow well together — and pay for it later.
            </p>

            <p>
              We help organizations avoid that by building digital foundations
              where strategy, design, and systems are aligned from the start —
              and built to hold up as the business grows.
            </p>
          </div>
        </div>

        {/* ==== CARDS SECTION (ALIGNED TO THE SAME GRID) ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* CARD 1 */}
          <div className="rounded-2xl p-6 bg-green-900/20 border border-green-800/20">
            <h3 className="text-green-400 font-semibold text-sm mb-2 uppercase">
              Strategy in the Beginning
            </h3>
            <p className="text-gray-300 text-sm">
              Clear direction always comes first.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl p-6 bg-yellow-900/20 border border-yellow-800/20">
            <h3 className="text-yellow-400 font-semibold text-sm mb-2 uppercase">
              Systems Built to Scale
            </h3>
            <p className="text-gray-300 text-sm">
              What we build should still make sense a year from now.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl p-6 bg-blue-900/20 border border-blue-800/20">
            <h3 className="text-blue-400 font-semibold text-sm mb-2 uppercase">
              Clear Communication
            </h3>
            <p className="text-gray-300 text-sm">
              No surprises. No ambiguity.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="rounded-2xl p-6 bg-orange-900/20 border border-orange-800/20">
            <h3 className="text-orange-400 font-semibold text-sm mb-2 uppercase">
              Accountable Delivery
            </h3>
            <p className="text-gray-300 text-sm">
              We stand behind what we ship.
            </p>
          </div>
        </div>

        {/* ==== BOTTOM TEXT ==== */}
        <div className="mt-16 text-gray-300 space-y-6">
          <p>
            If you’re looking for a partner who values clarity, structure, and 
            long-term thinking — we’d be glad to have a conversation.
          </p>

          <p>
            Whether you're launching something new or rethinking what's already 
            in place, our role is the same: help you move forward with confidence.
          </p>

          <button className="text-yellow-500 font-semibold hover:underline">
            Start the conversation →
          </button>
        </div>

      </div>
    </section>
  );
};

export default DecisionsSection;
