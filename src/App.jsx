import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import LandingPage from "./Pages/LandingPage";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import TendeerList from "./Pages/TendeerList";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Tenderlist" element={<TendeerList />} />
      </Routes>

      <Footer />
    </Router>
  );
}
