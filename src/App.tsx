import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <NavBar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

