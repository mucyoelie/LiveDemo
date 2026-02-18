import { useState } from "react";
import BrandStrategyModal from "../Components/Service/BrandStrategyModal";
import DigitalPlatformsModal from "../Components/Service/DigitalPlatformsModal";
import OperationalSystemsModal from "../Components/Service/OperationalSystemsModal";
import CrossPlatformModal from "../Components/Service/CrossPlatformModal";

function Service() {
  const [brandModal, setBrandModal] = useState(false);
  const [platformModal, setPlatformModal] = useState(false);
  const [opsModal, setOpsModal] = useState(false);
  const [crossModal, setCrossModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-40 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-10">Our Services</h1>

      {/* GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        
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
      h-40 flex items-center justify-center text-xl font-semibold
      hover:scale-105 transition-transform`}
    >
      {title}
    </div>
  );
}

