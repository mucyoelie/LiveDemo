import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 animate-fadeIn">
      {/* Modal container */}
      <div className="bg-[#0e0e0e] text-white w-[90%] max-w-lg p-8 rounded-xl shadow-xl relative">

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Icon */}
        <div className="flex gap-1 mb-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
          <div className="w-3 h-3 bg-blue-400 rounded-full" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3">
          WHY <span className="text-green-400">START WITH A DEMO</span>?
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Instead of guessing or selling you a predefined package, we take your input and
          turn it into something tangible — a demo that reflects your goals, your audience, 
          and your reality.
          <br /><br />
          No pressure. <br />
          No obligation. <br />
          Just clarity.
          <br /><br />
          This allows you to evaluate direction, not promises.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-green-500 px-5 py-3 rounded-lg font-medium hover:bg-green-600">
            START A FREE DEMO
          </button>

          <button className="border border-gray-400 px-5 py-3 rounded-lg font-medium hover:bg-gray-800">
            SEND A BRIEF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;