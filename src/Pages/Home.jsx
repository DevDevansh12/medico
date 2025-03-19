import React from "react";
import Banner from "../Components/Banner";
import AppointmentSection from "../Components/AppointmentSection";
import CentresOfExcellence from "../Components/CentresOfExcellence";
import SpecialistsSection from "../Components/SpecialistsSection";

import OfficeFinder from "../Components/OfficeFinder.JSX";

const Home = () => {
  return (
    <div>
      <Banner />
      <AppointmentSection />
      <CentresOfExcellence />
      <SpecialistsSection />
      <OfficeFinder />
    </div>
  );
};

export default Home;
