import { useState } from "react";
import BrandStrategyModal from "../Components/Service/BrandStrategyModal";

function Service() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      
      {/* Trigger to Open Modal */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700 transition text-white"
      >
        Open Brand Strategy Modal
      </button>

      {/* Modal */}
      <BrandStrategyModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Service;

