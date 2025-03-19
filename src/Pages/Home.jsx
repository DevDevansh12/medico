import React from "react";
import Banner from "../Components/Banner";
import AppointmentSection from "../Components/AppointmentSection";
import CentresOfExcellence from "../Components/CentresOfExcellence";
import SpecialistsSection from "../Components/SpecialistsSection";
import FinderOffice from "../Components/FinderOffice";
const Home = () => {
  return (
    <div>
      <Banner />
      <AppointmentSection />
      <CentresOfExcellence />
      <SpecialistsSection />
      <FinderOffice />
    </div>
  );
};

export default Home;
