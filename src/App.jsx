
// import React from 'react'
// import Navbar from './Components/Navbar'
// import Subcription from './Pages/Subcription'
// import SliderBanner from './Pages/SliderBanner'
// import AboutSection from './Pages/About'
// import Stats from './Pages/Achievements'
// import Services from './Pages/Services'
// import Plans from './Pages/Plans'
// import Achievements from './Pages/Achievements'
// import Footer from './Components/Footer'
// import FAQ from './Pages/FAQ'
// import Contact from './Pages/Contact'

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Subcription />
//       <SliderBanner />

//       <AboutSection />
//       <Services />
//     <Achievements/>
//       <Plans/>
//       <Footer />
//       <FAQ/>
//       <Contact/>
//     </div>
//   );
// }



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import LandingPage from "./Pages/LandingPage";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </Router>
  );
}
