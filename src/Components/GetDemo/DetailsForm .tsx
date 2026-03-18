import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DetailsFormData {
  whoIsThisFor: string;
  whatToInclude: string;
  references: string;
  referenceFile: File | null;
  timeline: string;
  budget: string;
}

interface DetailsFormProps {
  onContinue?: (data: DetailsFormData) => void;
  onBack?: () => void;
}

// ─── Shared input className ───────────────────────────────────────────────────

const inputCls =
  "w-full bg-[#232323] border-0 rounded-lg px-4 py-[13px] text-sm " +
  "text-gray-400 placeholder-gray-600 focus:outline-none " +
  "focus:ring-1 focus:ring-yellow-400/30 transition-colors duration-200";

// ─── DetailsForm ──────────────────────────────────────────────────────────────

export default function DetailsForm({ onContinue, onBack }: DetailsFormProps) {
  const [data, setData] = useState<DetailsFormData>({
    whoIsThisFor: "",
    whatToInclude: "",
    references: "",
    referenceFile: null,
    timeline: "",
    budget: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);

  const patch = (p: Partial<DetailsFormData>) =>
    setData((d) => ({ ...d, ...p }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    patch({ referenceFile: file });
  };

  const STEPS = ["YOUR VISION", "THE DETAILS", "ABOUT YOU"];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">

      {/* ── Same container as NavBar: max-w-6xl mx-auto px-6 ─────────────────── */}
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Page header ───────────────────────────────────────────────────── */}
        <div className="mb-10 space-y-3">
          <p className="text-amber-500 text-sm font-medium italic">
            Let's Shape your Vision
          </p>
          <h1 className="text-white font-black text-3xl sm:text-4xl tracking-tight leading-tight">
            YOUR <span className="text-yellow-400">IDEA</span> IS READY TO TAKE{" "}
            <span className="text-green-400">SHAPE</span>
          </h1>
          <div className="space-y-3 pt-1">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Before we design or build anything, we need to understand how you see
              this project — the problem it's meant to solve, the direction you want
              to take, and what success should look like. This isn't about perfect
              answers; it's about clarity of intent.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              This brief gives us that starting point. It helps us align quickly,
              think strategically, and build with purpose. It only takes a few
              minutes, but it shapes every decision that comes next.
            </p>
          </div>
        </div>

        {/* ── Form card ─────────────────────────────────────────────────────── */}
        <div className="w-full bg-[#181818] border border-white/[0.07] rounded-2xl px-8 py-8 md:px-10 md:py-10 shadow-2xl">

          {/* Step tabs — YOUR VISION ──── THE DETAILS ──── ABOUT YOU */}
          <div className="flex items-center mb-10 overflow-x-auto">
            {STEPS.map((label, i) => {
              // Index 1 = "THE DETAILS" = active step
              const isActive  = i === 1;
              const isDone    = i < 1;
              return (
                <div key={label} className="flex items-center">
                  <span className={`text-xs sm:text-sm font-black tracking-widest whitespace-nowrap ${
                    isActive ? "text-yellow-400"
                    : isDone  ? "text-gray-300"
                    : "text-gray-600"
                  }`}>
                    {label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className={`mx-3 sm:mx-5 h-px shrink-0 w-24 sm:w-40 md:w-56 ${
                      isDone ? "bg-gray-500" : "bg-gray-700"
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            A few practical questions to help us understand the scope, context,
            and expectations behind your project.
          </p>

          {/* ── Two-column question grid ───────────────────────────────────── */}
          {/*                                                                   */}
          {/*  LEFT (Q4, Q5, Q6)           RIGHT (Q7, Q8)                      */}
          {/*  ──────────────────          ──────────────                       */}
          {/*  4. Who is this for?         7. Do you have a timeline in mind?   */}
          {/*     [input]                     [input]                           */}
          {/*                                                                   */}
          {/*  5. What does the project    8. What budget range should          */}
          {/*     need to include?            we consider?                      */}
          {/*     [input]                     [input]                           */}
          {/*                                                                   */}
          {/*  6. Any references or                                             */}
          {/*     inspiration?                                                  */}
          {/*     [text] [Upload ↑]                                             */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-0">

            {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
            <div className="flex flex-col gap-7">

              {/* Q4 */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">4. Who is this for?</p>
                <input
                  type="text"
                  value={data.whoIsThisFor}
                  onChange={(e) => patch({ whoIsThisFor: e.target.value })}
                  placeholder="Tell us who this is meant to reach or support."
                  className={inputCls}
                />
              </div>

              {/* Q5 */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">
                  5. What does the project need to include?
                </p>
                <input
                  type="text"
                  value={data.whatToInclude}
                  onChange={(e) => patch({ whatToInclude: e.target.value })}
                  placeholder="High-level scope, features, or deliverables — whatever feels relevant right now."
                  className={inputCls}
                />
              </div>

              {/* Q6 — text input + upload button side by side */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">
                  6. Any references or inspiration?
                </p>
                <div className="flex gap-3 items-stretch">
                  {/* Text part */}
                  <input
                    type="text"
                    value={data.references}
                    onChange={(e) => patch({ references: e.target.value })}
                    placeholder="Links, examples, or other materials"
                    className={`${inputCls} flex-1 min-w-0`}
                  />

                  {/* Upload button — dark bg, label, yellow arrow icon */}
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-2.5 bg-[#2b2b2b] hover:bg-[#333] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-gray-300 whitespace-nowrap shrink-0 transition-colors duration-200"
                  >
                    <span>
                      {data.referenceFile
                        ? data.referenceFile.name.length > 14
                          ? data.referenceFile.name.slice(0, 14) + "…"
                          : data.referenceFile.name
                        : "Upload file here"}
                    </span>
                    {/* Yellow rounded square with up-arrow — matches screenshot */}
                    <span className="w-7 h-7 rounded-md bg-yellow-400 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16V4m0 0L8 8m4-4l4 4M4 20h16"
                        />
                      </svg>
                    </span>
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    className="hidden"
                    onChange={handleFile}
                  />
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN ────────────────────────────────────────────── */}
            <div className="flex flex-col gap-7 mt-7 lg:mt-0">

              {/* Q7 */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">
                  7. Do you have a timeline in mind?
                </p>
                <input
                  type="text"
                  value={data.timeline}
                  onChange={(e) => patch({ timeline: e.target.value })}
                  placeholder="Let us know if there's a deadline or general timeframe."
                  className={inputCls}
                />
              </div>

              {/* Q8 */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">
                  8. What budget range should we consider?
                </p>
                <input
                  type="text"
                  value={data.budget}
                  onChange={(e) => patch({ budget: e.target.value })}
                  placeholder="A rough range helps us recommend the right approach and resources."
                  className={inputCls}
                />
              </div>

            </div>
          </div>

          {/* ── Footer nav — Continue bottom-left ─────────────────────────── */}
          <div className="mt-10 flex items-center gap-6">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="text-gray-500 text-sm font-semibold hover:text-gray-300 transition-colors duration-200"
              >
                ‹ Back
              </button>
            )}
            <button
              type="button"
              onClick={() => onContinue?.(data)}
              className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200 flex items-center gap-1"
            >
              Continue <span className="text-base">›</span>
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease both; }
      `}</style>
    </div>
  );
}