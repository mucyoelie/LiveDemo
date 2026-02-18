import React from "react";
import { X } from "lucide-react";

interface CrossPlatformModalProps {
  open: boolean;
  onClose: () => void;
}

const perfectFor = [
  "Mobile-first",
  "Field teams",
  "PWAs",
  "Dashboards",
  "Accessibility",
  "Digital Shift",
];

const whatYouGet = [
  "Mobile UX",
  "Cross-platform builds",
  "QA testing",
  "Offline support",
  "Performance tuning",
  "Deployment-ready apps",
];

const CrossPlatformModal: React.FC<CrossPlatformModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">

      <div className="relative w-full max-w-5xl bg-[#0b0b0b] border border-pink-500 rounded-2xl p-10 text-white shadow-xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white hover:scale-110 transition"
        >
          <X size={28} />
        </button>

        {/* Icon */}
        <div className="text-4xl text-yellow-400 mb-2">📱</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-yellow-400">
          CROSS-PLATFORM & <br /> MOBILE SOLUTIONS
        </h2>

        <div className="w-24 h-[2px] bg-gray-600 my-3"></div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-3">
          Work doesn’t happen on one screen anymore. We create mobile-first and
          cross-platform solutions that feel consistent, responsive, and reliable —
          whether used by customers in the field or teams on the move.
        </p>

        <p className="text-gray-300 mb-6">
          One experience. Wherever it’s needed.
        </p>

        {/* Columns */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Perfect For */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Perfect for:</h3>
            <div className="flex flex-wrap gap-2">
              {perfectFor.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 border border-gray-500 rounded-full hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* What You Get */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">What You Get:</h3>
            <div className="flex flex-wrap gap-2">
              {whatYouGet.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 border border-gray-500 rounded-full hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <button className="mt-10 text-yellow-400 font-semibold hover:underline">
          Design for Every Screen →
        </button>
      </div>
    </div>
  );
};

export default CrossPlatformModal;
