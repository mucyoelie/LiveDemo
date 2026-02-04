import { Link } from 'react-router-dom'; 
import Hero from '../Components/Hero';
import Hero2 from '../Components/Hero2';
import FeaturedWorks from '../Components/FeaturedWorks';
import PhilosophySection from '../Components/PhilosophySection';
import DirectionSection from '../Components/DirectionSection';
import ContactSection from '../Components/ContactSection';
function Home() {
  return (
    <div id="home" className="relative bg-black">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        /*<img
          src="/vite.svg"
          alt="Hero"
          className="absolute  w-full h-full  object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-16 xl:mx-[140px]">
          <h1 className="text-white font-bold leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:text-2xl text-2xl  ">
            <span className="block xl:text-2xl text-2xl">
              YOU DON’T NEED MORE <span className="text-yellow-400">TOOLS.</span>
            </span>
            YOU NEED <span className="text-blue-400">ALIGNMENT</span>
          </h1>
          <br/>
          <p className="text-gray-200 mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] ">
            We help you connect strategy, design, and
            <br/>
            systems into something that actually works —
           <br/>
           together.
          </p>

          {/* Button */}
          <Link to="/contact">
            <button className="mt-6  text-yellow-400  py-3 rounded-lg font-medium transition ">
              View Our Approach <span className="text-lg">›</span>
            </button>
          </Link>
        </div>
      </div>
      <Hero/>
      <Hero2/>
      <FeaturedWorks/>
      <PhilosophySection/>
      <DirectionSection/>
      <ContactSection/>
    </div>
  );
}
export default Home;

