import React from "react";
import { X } from "lucide-react";

interface BrandStrategyModalProps {
  open: boolean;
  onClose: () => void;
}

const pillsPerfectFor = [
  "Brand Launch",
  "Rebranding",
  "Positioning",
  "Scaling",
  "Differentiation",
  "Documentation",
];

const pillsWhatYouGet = [
  "Art direction",
  "Brand Discovery",
  "Visual system",
  "Brand voice",
  "Positioning Statements",
  "Brand Guidelines",
  "Core assets",
  "Full usage rights",
];

const BrandStrategyModal: React.FC<BrandStrategyModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999] p-4">

      <div className="relative bg-[#0b0b0b] border border-pink-500 rounded-2xl w-full max-w-5xl p-10 text-white shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <X size={28} />
        </button>

        {/* Title Icon */}
        <div className="mb-3 text-4xl">🏅</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-red-400">
          BRAND STRATEGY & IDENTITY
        </h2>

        <div className="w-24 h-[2px] bg-gray-600 my-3"></div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-3">
          Every strong brand starts with clarity. Not just how it looks, but what
          it stands for, who it speaks to, and why it earns trust. We work with
          you to define that foundation and shape it into an identity that feels
          consistent, intentional, and unmistakably yours — wherever it shows
          up.
        </p>

        <p className="text-gray-300 mb-6">
          This is about alignment before amplification.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">

          {/* Perfect For */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Perfect for:</h3>
            <div className="flex flex-wrap gap-2">
              {pillsPerfectFor.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-500 rounded-full text-sm hover:bg-gray-800 transition"
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
              {pillsWhatYouGet.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-500 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <button className="mt-10 text-yellow-400 font-semibold hover:underline">
          Shape Your Brand →
        </button>
      </div>
    </div>
  );
};

export default BrandStrategyModal;
