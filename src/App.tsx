import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Components/Footer";
import CoffeeShowcase from "./Components/works/CoffeeShowcase";
import ShowcaseSection from "./Components/works/ShowcaseSection";
import Service from "./pages/Service";
import Showcase from "./Components/works/Showcase";
function App() {
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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

