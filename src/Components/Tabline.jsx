import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const Tabline = () => {
  return (
    <div className="bg-[#0CB8B6] text-white py-2 px-4 md:py-3 md:px-6 flex items-center justify-around flex-wrap">
      <div className="flex items-center flex-wrap gap-10">
        <div className="flex items-center mb-1 md:mb-0 mr-4">
          <FaPhoneAlt className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">+123 456 7890</span>
        </div>
        <div className="flex items-center mb-1 md:mb-0 mr-4">
          <FaEnvelope className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">info@gmail.com</span>
        </div>
        <div className="flex items-center mb-1 md:mb-0">
          <FaClock className="h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">Mon - Fri (08:00-19:00)</span>
        </div>
      </div>
      <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-1 px-2 md:py-2 md:px-4 rounded flex items-center text-xs md:text-base">
        <FiCalendar className="mr-1 md:mr-2" />
        Make Appointment
      </button>
    </div>
  );
};

export default Tabline;
