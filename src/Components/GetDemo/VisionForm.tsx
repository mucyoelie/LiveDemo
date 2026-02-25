import { useState } from "react";

const VisionForm = () => {
  const [tab, setTab] = useState<"vision" | "details" | "about">("vision");
  const [summary, setSummary] = useState("");

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-16 flex justify-center">
      <div className="max-w-3xl">
        {/* Header text */}
        <p className="text-yellow-500 mb-2">Let's Shape your Vision</p>

        <h1 className="text-3xl font-bold mb-3">
          YOUR <span className="text-green-400">IDEA</span> IS READY TO TAKE{" "}
          <span className="text-green-400">SHAPE</span>
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl">
          Before we design or build anything, we need to understand how you see this
          project — the problem it's meant to solve, the direction you want to take,
          and what success should look like. This isn’t about perfect answers; it’s
          about clarity of intent.
          <br />
          <br />
          This brief gives us that starting point. It helps us align quickly, think
          strategically, and build with purpose. It only takes a few minutes, but it
          shapes every decision that comes next.
        </p>

        {/* Form container */}
        <div className="rounded-2xl bg-[#111]/70 border border-gray-700 shadow-xl backdrop-blur p-6">
          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-700 pb-2">
            <button
              className={`pb-2 ${
                tab === "vision"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-400"
              }`}
              onClick={() => setTab("vision")}
            >
              YOUR VISION
            </button>
            <button
              className={`pb-2 ${
                tab === "details"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-400"
              }`}
              onClick={() => setTab("details")}
            >
              THE DETAILS
            </button>
            <button
              className={`pb-2 ${
                tab === "about"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-400"
              }`}
              onClick={() => setTab("about")}
            >
              ABOUT YOU
            </button>
          </div>

          {/* Tab Content */}
          {tab === "vision" && (
            <div className="space-y-6">

              {/* Question 1 */}
              <div>
                <p className="text-gray-300 mb-3">
                  1. What are you looking to build?
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Brand Identity",
                    "Website & UX",
                    "App UI / UX",
                    "ERP or Internal Platform",
                    "Cross-platform Solution",
                    "Mobile Experience",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="build"
                        value={item}
                        className="accent-yellow-400"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <p className="text-gray-300 mb-3">
                  2. What should this work feel like to the people using it?
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  {["Clear", "Confident", "Energetic", "Structured", "Warm", "Minimal"].map(
                    (item) => (
                      <label key={item} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="tone"
                          value={item}
                          className="accent-yellow-400"
                        />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <p className="text-gray-300 mb-3">
                  3. In one sentence, what matters most about this project?
                </p>

                <input
                  type="text"
                  placeholder="What's the one thing this project needs to accomplish?"
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              {/* Button */}
              <button className="mt-4 text-yellow-400 hover:underline text-sm">
                Continue →
              </button>
            </div>
          )}

          {/* Placeholder content for other tabs */}
          {tab === "details" && (
            <div className="text-gray-400">Details section coming soon…</div>
          )}

          {tab === "about" && (
            <div className="text-gray-400">About You section coming soon…</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisionForm;