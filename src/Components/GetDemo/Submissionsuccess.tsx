interface SubmissionSuccessProps {
  onClose?: () => void;
}

export default function SubmissionSuccess({ onClose }: SubmissionSuccessProps) {

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

        {/* ── Success card ──────────────────────────────────────────────────── */}
        <div className="w-full bg-[#181818] border border-white/[0.07] rounded-2xl overflow-hidden shadow-2xl relative">

          {/* ── Close button — top right ─────────────────────────────────── */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors duration-200 p-1"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ── Two-column layout: illustration left, text right ─────────── */}
          <div className="flex flex-col-reverse lg:flex-row">

            {/* ── LEFT — illustration area with decorative stars ────────── */}
            <div className="relative flex-1 min-h-[420px] lg:min-h-[460px] bg-[#111111] flex items-end justify-center overflow-hidden">

              {/* Decorative scattered stars / sparkles */}
              {/* Top-left star */}
              <span className="absolute top-8 left-10 text-white text-xl select-none">✦</span>
              {/* Top-center-left small plus */}
              <span className="absolute top-12 left-[38%] text-gray-500 text-xs select-none">+</span>
              {/* Top-center sparkle */}
              <span className="absolute top-10 left-[52%] text-white text-lg select-none">✦</span>
              {/* Top-center-right small plus */}
              <span className="absolute top-16 right-[28%] text-yellow-400/60 text-xs select-none">+</span>
              {/* Top-right small sparkle */}
              <span className="absolute top-8 right-16 text-white text-sm select-none">✦</span>

              {/* Left-mid plus */}
              <span className="absolute top-[38%] left-6 text-yellow-400 text-xs select-none">+</span>
              {/* Left-mid large sparkle */}
              <span className="absolute top-[45%] left-14 text-white text-2xl select-none">✦</span>
              {/* Right-mid small dot */}
              <span className="absolute top-[30%] right-10 text-gray-500 text-lg select-none">•</span>
              {/* Right-mid plus */}
              <span className="absolute top-[55%] right-6 text-yellow-400/40 text-xs select-none">+</span>

              {/* Bottom-left small plus */}
              <span className="absolute bottom-16 left-8 text-yellow-400/50 text-xs select-none">+</span>
              {/* Bottom-right sparkle */}
              <span className="absolute bottom-12 right-14 text-yellow-400 text-lg select-none">✦</span>

              {/* Decorative blurred circles (background blobs) */}
              <div className="absolute top-10 right-16 w-20 h-20 rounded-full bg-[#3a2a00]/60 blur-sm" />
              <div className="absolute top-[28%] left-[30%] w-14 h-14 rounded-full bg-[#2a1a00]/80" />
              <div className="absolute top-[22%] right-[22%] w-8 h-8 rounded-full bg-gray-600/50" />
              <div className="absolute bottom-[20%] right-[28%] w-20 h-20 rounded-full bg-gray-700/40" />
              <div className="absolute bottom-[10%] right-[18%] w-28 h-28 rounded-full bg-gray-800/60" />
              <div className="absolute top-[40%] left-[8%] w-6 h-6 rounded-full bg-green-600/50" />
              <div className="absolute top-[20%] left-[14%] w-10 h-10 rounded-full bg-purple-800/50" />
              <div className="absolute bottom-[30%] left-[20%] w-9 h-9 rounded-full bg-purple-700/40" />
              <div className="absolute top-[35%] left-[50%] w-5 h-5 rounded-full bg-orange-600/50" />
              <div className="absolute top-[18%] left-[60%] w-4 h-4 rounded-full bg-gray-500/60" />

              {/* Purple/pink star bottom-right of illustration area */}
              <span className="absolute bottom-[32%] right-[10%] text-purple-400 text-xl select-none">★</span>

              {/* ── Illustration image placeholder ───────────────────────── */}
              {/* Replace src with your actual illustration path              */}
              <img
                src="/submission-illustration.png"
                alt="Submission illustration"
                className="relative z-10 h-[340px] lg:h-[400px] w-auto object-contain object-bottom"
                onError={(e) => {
                  // Fallback placeholder while image is not yet added
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Fallback shown when image is missing */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="text-center space-y-2 opacity-30">
                  <svg
                    className="w-20 h-20 mx-auto text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-600 text-xs">Replace with illustration</p>
                </div>
              </div>

            </div>

            {/* ── RIGHT — thank you text ────────────────────────────────── */}
            <div className="flex flex-col justify-center px-10 py-12 lg:w-[380px] shrink-0 space-y-5">

              {/* Heading — yellow, large, bold */}
              <h2 className="text-yellow-400 text-2xl sm:text-3xl font-black leading-snug">
                Thank you for<br />your submission.
              </h2>

              {/* Body copy */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Your inquiry has been received successfully.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                We'll review the details and get back to you shortly with the
                best way forward.
              </p>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease both; }
      `}</style>
    </div>
  );
}