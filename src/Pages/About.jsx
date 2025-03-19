import React from "react";
import AppointmentSection from "../Components/AppointmentSection";
import AboutInfo from "../Components/AboutInfo";
import SpecialistsSection from "../Components/SpecialistsSection";
import StatsSection from "../Components/StatsSection.JSX";
const About = () => {
  return (
    <div>
      <AppointmentSection />
      <AboutInfo />
      <SpecialistsSection />
      <StatsSection />
    </div>
  );
};

export default About;
