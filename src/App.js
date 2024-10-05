// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WaterConservation from './pages/WaterConservation.js';
import RenewableEnergy from './pages/RenewableEnergy.js';
import WasteManagement from "./pages/WasteManagement";
import BiodiversityConservation from "./pages/BiodiversityConservation";
import WaterElement from "./pages/WaterElement";
import WasteElement from "./pages/WasteElement";
import EnergyElement from "./pages/EnergyElement";
import AirQuality from "./pages/AirQuality.js";
import BiodiversityElement from "./pages/BiodiversityElement.js";
import WCsolution from "./pages/WCsolution.js";
import WMsolution from "./pages/WMsolution.js";
import BCsolution from "./pages/BCsolution.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water-element" element={<WaterElement />} />  {/* Add new route */}
        <Route path="/energy-element" element={<EnergyElement />} />  {/* Add new route */}
        <Route path="/waste-element" element={<WasteElement />} />  {/* Add new route */}
        <Route path="/biodiversity-element" element={<BiodiversityElement />} />  {/* Add new route */}

        <Route path="/water-conservation-campaigns" element={<WaterConservation />} />  {/* Add new route */}
        <Route path="/waste-management-programs" element={<WasteManagement />} />  {/* Add new route */}
        <Route path="/renewable-energy-projects" element={<RenewableEnergy />} />  {/* Add new route */}
        <Route path="/biodiversity-conservation-projects" element={<BiodiversityConservation />} />  {/* Add new route */}
        <Route path="/air-quality-improvement-projects" element={<AirQuality />} />  {/* Add new route */}

        <Route path="/water-conservation" element={<WCsolution />} />  {/* Add new route */}
        <Route path="/waste-management" element={<WMsolution />} />  {/* Add new route */}
        <Route path="/biodiversity-conservation" element={<BCsolution />} />  {/* Add new route */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
