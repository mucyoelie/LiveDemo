import React from "react";
import { X } from "lucide-react";

interface DigitalPlatformsModalProps {
  open: boolean;
  onClose: () => void;
}

const perfectFor = [
  "Websites",
  "Platforms",
  "MVPs",
  "Conversions",
  "Growth",
  "Digital Shift",
];

const whatYouGet = [
  "UX strategy",
  "Architecture",
  "UI design",
  "Development",
  "Performance",
  "CMS setup",
];

const DigitalPlatformsModal: React.FC<DigitalPlatformsModalProps> = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999] p-4">

      <div className="relative bg-[#0b0b0b] border border-pink-500 rounded-2xl w-full max-w-5xl p-10 text-white shadow-xl">

        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-white hover:scale-110 transition"
        >
          <X size={28} />
        </button>

        {/* Icon */}
        <div className="mb-3 text-4xl text-green-400">🖥️</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-400">
          DIGITAL PLATFORMS <br /> & UX
        </h2>

        <div className="w-24 h-[2px] bg-gray-600 my-3"></div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-3">
          A digital platform should do more than exist — it should communicate,
          guide, and support decisions. We design and build websites and platforms
          that feel intuitive to users and purposeful for the business, balancing
          clarity, performance, and long-term flexibility.
        </p>

        <p className="text-gray-300 mb-6">
          Good UX doesn’t shout. It makes sense.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Perfect for */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Perfect for:</h3>
            <div className="flex flex-wrap gap-2">
              {perfectFor.map((item, index) => (
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
              {whatYouGet.map((item, index) => (
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
          Build Your Platform →
        </button>
      </div>
    </div>
  );
};

export default DigitalPlatformsModal;
