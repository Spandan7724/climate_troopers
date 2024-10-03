// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WaterConservation from './pages/WaterConservation.js';
import WasteManagement from "./pages/WasteManagement";
import BiodiversityConservation from "./pages/BiodiversityConservation";
import WaterElement from "./pages/WaterElement";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water-element" element={<WaterElement />} />  {/* Add new route */}
      </Routes>
    </Router>
  );
}

export default App;