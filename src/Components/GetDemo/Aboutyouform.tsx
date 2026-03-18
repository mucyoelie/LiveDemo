import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AboutYouData {
  fullName: string;
  email: string;
  companyName: string;
  extraInfo: string;
  contactMethod: "Email" | "Call" | "WhatsApp" | "";
}

interface AboutYouFormProps {
  onSubmit?: (data: AboutYouData) => void;
  onBack?: () => void;
}

// ─── Shared styles ────────────────────────────────────────────────────────────
// [color-scheme:dark] prevents browser autofill from forcing white text
// style tag below adds the webkit-autofill override for typed text color

const inputCls =
  "w-full bg-[#232323] border-0 rounded-lg px-4 py-[13px] text-sm " +
  "text-gray-500 placeholder-gray-600 caret-gray-400 " +
  "focus:outline-none focus:ring-1 focus:ring-yellow-400/30 " +
  "transition-colors duration-200 [color-scheme:dark]";

// ─── Radio option (hollow circle) ────────────────────────────────────────────

function RadioOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2.5 group transition-all duration-200"
    >
      {/* Outer ring */}
      <span
        className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
          selected
            ? "border-yellow-400"
            : "border-gray-500 group-hover:border-gray-400"
        }`}
      >
        {/* Inner filled dot — only shown when selected */}
        {selected && (
          <span className="w-2 h-2 rounded-full bg-yellow-400 block" />
        )}
      </span>
      <span
        className={`text-sm transition-colors duration-200 ${
          selected ? "text-gray-200" : "text-gray-500 group-hover:text-gray-300"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

// ─── AboutYouForm ─────────────────────────────────────────────────────────────

export default function AboutYouForm({ onSubmit, onBack }: AboutYouFormProps) {
  const [data, setData] = useState<AboutYouData>({
    fullName: "",
    email: "",
    companyName: "",
    extraInfo: "",
    contactMethod: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const patch = (p: Partial<AboutYouData>) =>
    setData((d) => ({ ...d, ...p }));

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit?.(data);
  };

  const STEPS = ["YOUR VISION", "THE DETAILS", "ABOUT YOU"];
  const CONTACT_METHODS = ["Email", "Call", "WhatsApp"] as const;

  // ── Success screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto">
            <svg
              className="w-7 h-7 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-black tracking-tight">
            Your brief is in.
          </h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
            We'll review your vision and reach out within 24 hours with a
            proper, considered response.
          </p>
        </div>
      </div>
    );
  }

  // ── Main ────────────────────────────────────────────────────────────────────
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
              Before we design or build anything, we need to understand how you
              see this project — the problem it's meant to solve, the direction
              you want to take, and what success should look like. This isn't
              about perfect answers; it's about clarity of intent.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              This brief gives us that starting point. It helps us align
              quickly, think strategically, and build with purpose. It only
              takes a few minutes, but it shapes every decision that comes next.
            </p>
          </div>
        </div>

        {/* ── Form card ─────────────────────────────────────────────────────── */}
        <div className="w-full bg-[#181818] border border-white/[0.07] rounded-2xl px-8 py-8 md:px-10 md:py-10 shadow-2xl">

          {/* Step tabs — YOUR VISION ──── THE DETAILS ──── ABOUT YOU */}
          <div className="flex items-center mb-10 overflow-x-auto">
            {STEPS.map((label, i) => {
              const isActive = i === 2;
              const isDone   = i < 2;
              return (
                <div key={label} className="flex items-center">
                  <span
                    className={`text-xs sm:text-sm font-black tracking-widest whitespace-nowrap ${
                      isActive ? "text-yellow-400"
                      : isDone  ? "text-gray-300"
                      : "text-gray-600"
                    }`}
                  >
                    {label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`mx-3 sm:mx-5 h-px shrink-0 w-24 sm:w-40 md:w-56 ${
                        isDone ? "bg-gray-500" : "bg-gray-700"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Intro ─────────────────────────────────────────────────────── */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Simple contact info plus context.
          </p>

          {/* ── Three-column row: Full Name | Email | Company ─────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => patch({ fullName: e.target.value })}
              placeholder="Full Name"
              className={inputCls}
            />
            <input
              type="email"
              value={data.email}
              onChange={(e) => patch({ email: e.target.value })}
              placeholder="Email"
              className={inputCls}
            />
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => patch({ companyName: e.target.value })}
              placeholder="Company Name (Optional)"
              className={inputCls}
            />
          </div>

          {/* ── Full-width textarea ────────────────────────────────────────── */}
          <textarea
            rows={4}
            value={data.extraInfo}
            onChange={(e) => patch({ extraInfo: e.target.value })}
            placeholder="Tell us anything else you'd like us to know"
            className={`${inputCls} resize-none mb-8`}
          />

          {/* ── Contact method — radio options ─────────────────────────────── */}
          <div className="space-y-4 mb-10">
            <p className="text-yellow-400 text-sm font-bold">
              How should we contact you?
            </p>
            <div className="flex items-center gap-10">
              {CONTACT_METHODS.map((method) => (
                <RadioOption
                  key={method}
                  label={method}
                  selected={data.contactMethod === method}
                  onClick={() => patch({ contactMethod: method })}
                />
              ))}
            </div>
          </div>

          {/* ── Footer — Submit bottom-left ────────────────────────────────── */}
          <div className="flex items-center gap-6">
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
              onClick={handleSubmit}
              className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200 flex items-center gap-1"
            >
              Submit <span className="text-base">›</span>
            </button>
          </div>

        </div>
      </div>

      {/* Fix autofill white text in webkit browsers */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: #6b7280 !important;
          -webkit-box-shadow: 0 0 0px 1000px #232323 inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease both; }
      `}</style>
    </div>
  );
}