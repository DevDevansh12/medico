import React from "react";
import { FaUserMd, FaHeartbeat, FaCalendarDay, FaBrain } from "react-icons/fa";
import bgImage from "../assets/bgs.jpg"; // Import your image

const AboutInfo = () => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Advanced Care Card */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#125774] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaUserMd className="text-white text-xl md:text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
              ADVANCED CARE
            </h3>
          </div>

          {/* Respite Care Card */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#125774] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaHeartbeat className="text-white text-xl md:text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
              RESPITE CARE
            </h3>
          </div>

          {/* Daily Care Card */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#125774] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaCalendarDay className="text-white text-xl md:text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
              DAILY CARE
            </h3>
          </div>

          {/* Neurology Care Card */}
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-[#125774] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaBrain className="text-white text-xl md:text-2xl" />
            </div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
              NEUROLOGY CARE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
