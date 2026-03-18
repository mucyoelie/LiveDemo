import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AboutYouForm from "./Components/GetDemo/Aboutyouform";
//import ShowcaseSection from "./Components/works/ShowcaseSection";
import SubmissionSuccess from "./Components/GetDemo/Submissionsuccess";
function App() {
  const [open, setOpen] = React.useState(false);
  
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
            <Route path="/start-demo" element={<Modal open={open} onClose={() => setOpen(false)} />} />
               <Route path="/send-brief" element={<DetailsForm />} />
               <Route path="/demo-pricing" element={<VisionForm />} />
               <Route path="/about-layout" element={<AboutYouForm />} />
                <Route path="/submission" element={<SubmissionSuccess />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

