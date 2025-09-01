import React from "react";
import Subcription from "./Subcription";
import SliderBanner from "./SliderBanner";
import AboutSection from "./About";
import Services from "./Services";
import Achievements from "./Achievements";
import Plans from "./Plans";



export default function LandingPage() {
  return (
    <div>
      <Subcription />
      <SliderBanner />
      <AboutSection />
      <Services />
      <Achievements />
    
      <Plans />
    </div>
  );
}
