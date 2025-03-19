import React from "react";
import AppointmentSection from "../Components/AppointmentSection";
import AboutInfo from "../Components/AboutInfo";
import SpecialistsSection from "../Components/SpecialistsSection";
import StatsContainer from "../Components/StatsContainer";
const About = () => {
  return (
    <div>
      <AppointmentSection />
      <AboutInfo />
      <SpecialistsSection />
      <StatsContainer />
    </div>
  );
};

export default About;
