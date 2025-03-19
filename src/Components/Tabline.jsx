import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa"; // Using react-icons/fa
import { HashLink } from "react-router-hash-link";

const Tabline = () => {
  return (
    <div className="bg-[#0CB8B6] text-white py-2 px-4 md:py-3 md:px-6 flex flex-col md:flex-row items-center justify-around">
      <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
        <div className="flex items-center mb-1 md:mb-0 mr-4">
          <FaPhoneAlt className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm whitespace-nowrap">
            +123 456 7890
          </span>
        </div>
        <div className="flex items-center mb-1 md:mb-0 mr-4">
          <FaEnvelope className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm whitespace-nowrap">
            info@gmail.com
          </span>
        </div>
        <div className="flex items-center mb-1 md:mb-0">
          <FaMapMarkerAlt className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm whitespace-nowrap">
            California, United States
          </span>
        </div>
      </div>
      <HashLink
        to="/about#appointment" //adding an appointment id to the about page.
        className="text-white font-bold text-xl font-body mt-2 md:mt-0"
      >
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-2 md:py-2 md:px-4 rounded flex items-center text-xs md:text-base whitespace-nowrap">
          <FaCalendarAlt className="mr-1 md:mr-2" />
          Make Appointment
        </button>
      </HashLink>
    </div>
  );
};

export default Tabline;
