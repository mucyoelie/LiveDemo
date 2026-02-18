import React from "react";
import { X } from "lucide-react";

interface OperationalSystemsModalProps {
  open: boolean;
  onClose: () => void;
}

const perfectFor = [
  "Operations",
  "Automation",
  "Visibility",
  "Scale",
  "Efficiency",
  "Digital Shift",
];

const whatYouGet = [
  "Process mapping",
  "Custom systems",
  "Integrations",
  "Dashboards",
  "Access control",
  "Documentation",
];

const OperationalSystemsModal: React.FC<OperationalSystemsModalProps> = ({
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

        {/* Icon */}
        <div className="mb-3 text-4xl text-sky-400">🧩</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-sky-400">
          OPERATIONAL SYSTEMS <br /> & ERP
        </h2>

        <div className="w-24 h-[2px] bg-gray-600 my-3"></div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-3">
          As teams grow, complexity creeps in — often quietly. Spreadsheets multiply,
          tools disconnect, and visibility fades. We design operational systems that
          bring structure back, helping teams work smarter, see clearly, and make
          better decisions without unnecessary friction.
        </p>

        <p className="text-gray-300 mb-6">
          Systems should support people, not slow them down.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 mt-6">

          {/* Perfect For */}
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
          Simplify Operations →
        </button>
      </div>
    </div>
  );
};

export default OperationalSystemsModal;
