import { useState } from "react";
import BrandStrategyModal from "../Components/Service/BrandStrategyModal";
import DigitalPlatformsModal from "../Components/Service/DigitalPlatformsModal";
import OperationalSystemsModal from "../Components/Service/OperationalSystemsModal";
import CrossPlatformModal from "../Components/Service/CrossPlatformModal";

// Reusable Card Component
interface ServiceCardProps {
  title: string;
  color: string;
  onClick: () => void;
}

function ServiceCard({ title, color, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-gradient-to-br ${color} rounded-2xl 
      h-40 sm:h-44 md:h-48 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold
      hover:scale-105 transition-transform transform`}
    >
      {title}
    </div>
  );
}

function Service() {
  const [brandModal, setBrandModal] = useState(false);
  const [platformModal, setPlatformModal] = useState(false);
  const [opsModal, setOpsModal] = useState(false);
  const [crossModal, setCrossModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-10 md:px-20 lg:px-40 py-20 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
        Our Services
      </h1>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl">
        
        <ServiceCard 
          title="Brand Strategy" 
          color="from-pink-600 to-pink-700" 
          onClick={() => setBrandModal(true)} 
        />

        <ServiceCard 
          title="Digital Platforms" 
          color="from-green-600 to-green-700" 
          onClick={() => setPlatformModal(true)} 
        />

        <ServiceCard 
          title="Operational Systems" 
          color="from-sky-600 to-sky-700" 
          onClick={() => setOpsModal(true)} 
        />

        <ServiceCard 
          title="Cross-Platform & Mobile" 
          color="from-yellow-600 to-yellow-700" 
          onClick={() => setCrossModal(true)} 
        />
      </div>

      {/* Modals */}
      <BrandStrategyModal open={brandModal} onClose={() => setBrandModal(false)} />
      <DigitalPlatformsModal open={platformModal} onClose={() => setPlatformModal(false)} />
      <OperationalSystemsModal open={opsModal} onClose={() => setOpsModal(false)} />
      <CrossPlatformModal open={crossModal} onClose={() => setCrossModal(false)} />
    </div>
  );
}

export default Service;
