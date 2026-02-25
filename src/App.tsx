import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Components/Footer";
import CoffeeShowcase from "./Components/works/CoffeeShowcase";
import ShowcaseSection from "./Components/works/ShowcaseSection";
import Service from "./pages/Service";
import Modal from "./Components/GetDemo/Model";
import Showcase from "./Components/works/Showcase";
import DetailsForm from "./Components/GetDemo/DetailsForm ";
import VisionForm from "./Components/GetDemo/VisionForm";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <NavBar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-categories" element={<Showcase />} />
           <Route path="/coffee-works" element={<CoffeeShowcase />} />
           <Route path="/portfolio" element={<ShowcaseSection />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/start-demo" element={<Modal open={modalOpen} onClose={() => setModalOpen(false)} />} />
               <Route path="/send-brief" element={<DetailsForm />} />
               <Route path="/demo-pricing" element={<VisionForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

