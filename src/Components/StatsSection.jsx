// StatsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import bannerImg from "../assets/bannerImg.jpg";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    doctors: 0,
    departments: 0,
    services: 0,
  });

  const targetCounts = {
    patients: 1295,
    doctors: 50,
    departments: 28,
    services: 1315,
  };

  const incrementRef = useRef(null);

  useEffect(() => {
    let startTime;

    const animateCounts = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const updatedCounts = {
        patients: Math.min(
          Math.floor((progress / 2000) * targetCounts.patients),
          targetCounts.patients
        ),
        doctors: Math.min(
          Math.floor((progress / 2000) * targetCounts.doctors),
          targetCounts.doctors
        ),
        departments: Math.min(
          Math.floor((progress / 2000) * targetCounts.departments),
          targetCounts.departments
        ),
        services: Math.min(
          Math.floor((progress / 2000) * targetCounts.services),
          targetCounts.services
        ),
      };

      setCounts(updatedCounts);

      if (progress < 2000) {
        incrementRef.current = requestAnimationFrame(animateCounts);
      }
    };

    incrementRef.current = requestAnimationFrame(animateCounts);

    return () => cancelAnimationFrame(incrementRef.current);
  }, []);

  return (
    <div
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">{counts.patients}+</div>
            <div className="text-lg">SATISFIED PATIENTS</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{counts.doctors}</div>
            <div className="text-lg">REGULAR DOCTORS</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{counts.departments}</div>
            <div className="text-lg">DEPARTMENTS</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{counts.services}+</div>
            <div className="text-lg">SERVICES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
