import React from "react";
import Subcription from "./Subcription";
import SliderBanner from "./SliderBanner";
import AboutSection from "./About";
import Services from "./Services";
import Achievements from "./Achievements";
import Plans from "./Plans";
import TendeerList from "./TendeerList";


export default function LandingPage() {
  return (
    <div>
      <Subcription />
      <SliderBanner />
      <AboutSection />
      <Services />
      <Achievements />
      <TendeerList/>
      <Plans />
    </div>
  );
}
