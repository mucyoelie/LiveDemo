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

      <div className="relative bg-[#0b0b0b] border border-pink-500 rounded-2xl 
                      w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 
                      p-6 sm:p-8 md:p-10 text-white shadow-xl overflow-y-auto max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <X size={24} className="sm:!w-7 sm:!h-7" />
        </button>

        {/* Title Icon */}
        <div className="mb-3 text-3xl sm:text-4xl md:text-5xl text-center">🏅</div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 text-center">
          BRAND STRATEGY & IDENTITY
        </h2>

        <div className="w-16 sm:w-20 md:w-24 h-[2px] bg-gray-600 my-3 mx-auto"></div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-3 text-center md:text-left">
          Every strong brand starts with clarity. Not just how it looks, but what
          it stands for, who it speaks to, and why it earns trust. We work with
          you to define that foundation and shape it into an identity that feels
          consistent, intentional, and unmistakably yours — wherever it shows up.
        </p>

        <p className="text-gray-300 text-sm sm:text-base mb-6 text-center md:text-left">
          This is about alignment before amplification.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6">
          {/* Perfect For */}
          <div>
            <h3 className="text-sm sm:text-base text-gray-400 mb-2">Perfect for:</h3>
            <div className="flex flex-wrap gap-2">
              {pillsPerfectFor.map((item, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 border border-gray-500 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* What You Get */}
          <div>
            <h3 className="text-sm sm:text-base text-gray-400 mb-2">What You Get:</h3>
            <div className="flex flex-wrap gap-2">
              {pillsWhatYouGet.map((item, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 border border-gray-500 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center md:justify-start">
          <button className="mt-6 sm:mt-10 text-yellow-400 font-semibold hover:underline text-sm sm:text-base md:text-lg">
            Shape Your Brand →
          </button>
        </div>

      </div>
    </div>
  );
};

export default BrandStrategyModal;
