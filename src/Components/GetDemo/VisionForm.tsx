import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 – Your Vision
  buildType: string;
  projectFeel: string[];
  projectMission: string;
  // Step 2 – The Details
  whoIsThisFor: string;
  whatToInclude: string;
  references: string;
  referenceFile: File | null;
  timeline: string;
  budget: string;
  // Step 3 – About You
  name: string;
  email: string;
  company: string;
  role: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BUILD_TYPES = [
  "Brand Identity",
  "Website & UX",
  "App UI / UX",
  "ERP or Internal Platform",
  "Cross-platform Solution",
  "Mobile Experience",
];

const FEEL_OPTIONS = [
  "Clear", "Confident", "Energetic", "Structured", "Warm", "Minimal",
];

const STEPS = ["YOUR VISION", "THE DETAILS", "ABOUT YOU"];

// ─── Radio option (hollow circle) ────────────────────────────────────────────

function RadioOption({ label, selected, onClick }: {
  label: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick}
      className="flex items-center gap-2 group transition-all duration-200">
      <span className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
        selected ? "border-yellow-400" : "border-gray-500 group-hover:border-gray-300"
      }`}>
        {selected && <span className="w-2 h-2 rounded-full bg-yellow-400 block" />}
      </span>
      <span className={`text-sm transition-colors duration-200 ${
        selected ? "text-white" : "text-gray-400 group-hover:text-gray-200"
      }`}>
        {label}
      </span>
    </button>
  );
}

// ─── Shared input styles ──────────────────────────────────────────────────────

const inputCls =
  "w-full bg-[#222222] border-0 rounded-lg px-4 py-3 text-sm text-gray-200 " +
  "placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 " +
  "transition-colors duration-200";

// ─── Step 1 – Your Vision ─────────────────────────────────────────────────────

function StepVision({ data, onChange }: {
  data: FormData; onChange: (p: Partial<FormData>) => void;
}) {
  const toggleFeel = (val: string) => {
    const next = data.projectFeel.includes(val)
      ? data.projectFeel.filter((v) => v !== val)
      : [...data.projectFeel, val];
    onChange({ projectFeel: next });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <p className="text-gray-400 text-sm leading-relaxed">
        A few focused questions to help us understand the direction, tone, and priorities
        of what you're building.
      </p>

      {/* Q1 — 6 cols on desktop */}
      <div className="space-y-4">
        <p className="text-white text-sm font-bold">1. What are you looking to build?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3">
          {BUILD_TYPES.map((opt) => (
            <RadioOption key={opt} label={opt}
              selected={data.buildType === opt}
              onClick={() => onChange({ buildType: opt })} />
          ))}
        </div>
      </div>

      {/* Q2 — 6 cols on desktop */}
      <div className="space-y-4">
        <p className="text-white text-sm font-bold">
          2. What should this work feel like to the people using it?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-3">
          {FEEL_OPTIONS.map((opt) => (
            <RadioOption key={opt} label={opt}
              selected={data.projectFeel.includes(opt)}
              onClick={() => toggleFeel(opt)} />
          ))}
        </div>
      </div>

      {/* Q3 — Textarea */}
      <div className="space-y-3">
        <p className="text-white text-sm font-bold">
          3. In one sentence, what matters most about this project?
        </p>
        <textarea rows={3} value={data.projectMission}
          onChange={(e) => onChange({ projectMission: e.target.value })}
          placeholder="What's the one thing this project needs to accomplish?"
          className={`${inputCls} resize-none`} />
      </div>
    </div>
  );
}

// ─── Step 2 – The Details ─────────────────────────────────────────────────────
// Layout exactly matches screenshot 631:
//
//  LEFT col (questions 4,5,6)          RIGHT col (questions 7,8)
//  ─────────────────────────────────   ──────────────────────────
//  4. Who is this for?                 7. Do you have a timeline in mind?
//     [input]                             [input]
//
//  5. What does the project need       8. What budget range should we consider?
//     to include?                         [input]
//     [input]
//
//  6. Any references or inspiration?
//     [text input]  [Upload file here ↑]

function StepDetails({ data, onChange }: {
  data: FormData; onChange: (p: Partial<FormData>) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange({ referenceFile: file });
  };

  return (
    <div className="space-y-6 animate-fadeIn">

      {/* Intro */}
      <p className="text-gray-400 text-sm leading-relaxed">
        A few practical questions to help us understand the scope, context, and
        expectations behind your project.
      </p>

      {/* ── Two-column grid for Q4–Q8 ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">

        {/* ── LEFT COLUMN ── */}
        <div className="space-y-6">

          {/* Q4 */}
          <div className="space-y-2">
            <p className="text-white text-sm font-bold">4. Who is this for?</p>
            <input
              type="text"
              value={data.whoIsThisFor}
              onChange={(e) => onChange({ whoIsThisFor: e.target.value })}
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
              onChange={(e) => onChange({ whatToInclude: e.target.value })}
              placeholder="High-level scope, features, or deliverables — whatever feels relevant right now."
              className={inputCls}
            />
          </div>

          {/* Q6 — text + upload side by side */}
          <div className="space-y-2">
            <p className="text-white text-sm font-bold">
              6. Any references or inspiration?
            </p>
            <div className="flex gap-3">
              {/* Text input — takes remaining width */}
              <input
                type="text"
                value={data.references}
                onChange={(e) => onChange({ references: e.target.value })}
                placeholder="Links, examples, or other materials"
                className={`${inputCls} flex-1 min-w-0`}
              />

              {/* Upload button — matches screenshot: dark bg, yellow icon */}
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333333] border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-200 whitespace-nowrap transition-colors duration-200 shrink-0"
              >
                <span>
                  {data.referenceFile ? data.referenceFile.name.slice(0, 12) + "…" : "Upload file here"}
                </span>
                {/* Yellow upload arrow — matches screenshot */}
                <span className="w-7 h-7 rounded-md bg-yellow-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0-12L8 8m4-4l4 4" />
                  </svg>
                </span>
              </button>
              <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="space-y-6">

          {/* Q7 */}
          <div className="space-y-2">
            <p className="text-white text-sm font-bold">
              7. Do you have a timeline in mind?
            </p>
            <input
              type="text"
              value={data.timeline}
              onChange={(e) => onChange({ timeline: e.target.value })}
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
              onChange={(e) => onChange({ budget: e.target.value })}
              placeholder="A rough range helps us recommend the right approach and resources."
              className={inputCls}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Step 3 – About You ───────────────────────────────────────────────────────

function StepAboutYou({ data, onChange }: {
  data: FormData; onChange: (p: Partial<FormData>) => void;
}) {
  const fields: { key: keyof FormData; label: string; placeholder: string; type?: string }[] = [
    { key: "name",    label: "Full Name",             placeholder: "Jane Smith" },
    { key: "email",   label: "Email Address",          placeholder: "jane@company.com", type: "email" },
    { key: "company", label: "Company / Project Name", placeholder: "Acme Inc." },
    { key: "role",    label: "Your Role",              placeholder: "Founder, Product Lead, Designer…" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <p className="text-gray-400 text-sm leading-relaxed">
        Last step. We just need to know who we're talking to so we can follow
        up with a proper response — not a template.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.map(({ key, label, placeholder, type }) => (
          <div key={key} className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              {label}
            </label>
            <input
              type={type ?? "text"}
              value={data[key] as string}
              onChange={(e) => onChange({ [key]: e.target.value })}
              placeholder={placeholder}
              className={inputCls}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VisionForm() {
  const [step, setStep]           = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData]           = useState<FormData>({
    buildType: "", projectFeel: [], projectMission: "",
    whoIsThisFor: "", whatToInclude: "", references: "", referenceFile: null,
    timeline: "", budget: "",
    name: "", email: "", company: "", role: "",
  });

  const patch = (p: Partial<FormData>) => setData((d) => ({ ...d, ...p }));

  // ── Success ─────────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mx-auto">
            <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-black tracking-tight">Your brief is in.</h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
            We'll review your vision and reach out within 24 hours with a proper, considered response.
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

        {/* Page header */}
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

        {/* Form card */}
        <div className="w-full bg-[#181818] border border-white/[0.07] rounded-2xl px-8 py-8 md:px-10 md:py-10 shadow-2xl">

          {/* Step tabs */}
          <div className="flex items-center mb-10 overflow-x-auto">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center">
                <button
                  type="button"
                  onClick={() => i < step && setStep(i)}
                  className={`text-xs sm:text-sm font-black tracking-widest whitespace-nowrap transition-colors duration-200 ${
                    i === step
                      ? "text-yellow-400"
                      : i < step
                      ? "text-gray-300 hover:text-white cursor-pointer"
                      : "text-gray-600 cursor-default"
                  }`}
                >
                  {label}
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`mx-3 sm:mx-5 h-px shrink-0 w-24 sm:w-40 md:w-56 transition-colors duration-500 ${
                    i < step ? "bg-gray-500" : "bg-gray-700"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Active step */}
          {step === 0 && <StepVision   data={data} onChange={patch} />}
          {step === 1 && <StepDetails  data={data} onChange={patch} />}
          {step === 2 && <StepAboutYou data={data} onChange={patch} />}

          {/* Footer — Continue bottom-left, Back before it when on step > 0 */}
          <div className="mt-8 flex items-center gap-6">
            {step > 0 && (
              <button type="button" onClick={() => setStep((s) => s - 1)}
                className="text-gray-500 text-sm font-semibold hover:text-gray-300 transition-colors duration-200">
                ‹ Back
              </button>
            )}
            {step < STEPS.length - 1 ? (
              <button type="button" onClick={() => setStep((s) => s + 1)}
                className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200 flex items-center gap-1">
                Continue <span className="text-base">›</span>
              </button>
            ) : (
              <button type="button" onClick={() => setSubmitted(true)}
                className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors duration-200 flex items-center gap-1">
                Submit Brief <span className="text-base">›</span>
              </button>
            )}
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