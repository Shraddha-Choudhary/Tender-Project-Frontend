
import React from 'react'
import Navbar from './Components/Navbar'
import Subcription from './Pages/Subcription'
import SliderBanner from './Pages/SliderBanner'
import AboutSection from './Pages/About'
import Stats from './Pages/Achievements'
import Services from './Pages/Services'
import Plans from './Pages/Plans'
import Achievements from './Pages/Achievements'

export default function App() {
  return (
    <div>
      <Navbar />
      <Subcription />
      <SliderBanner />

      <AboutSection />
      <Services />
    <Achievements/>
      <Plans/>
    </div>
  );
}
