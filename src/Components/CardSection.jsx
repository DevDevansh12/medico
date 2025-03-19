import React from "react";
import { FaEye, FaHeartbeat, FaBrain } from "react-icons/fa"; // Import icons

const CardSection = () => {
  const cardData = [
    {
      title: "EYE CARE",
      description:
        "Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
      link: "/eye-care",
    },
    {
      title: "BLOOD CANCER",
      description:
        "Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
      link: "/blood-cancer",
    },
    {
      title: "NEUROLOGY SARGERY",
      description:
        "Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
      link: "/neurology-surgery",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 w-full md:w-80 transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#E0F7FA] rounded-full p-4">
                {index === 0 && <FaEye className="h-10 w-10 text-[#0CB8B6]" />}
                {index === 1 && (
                  <FaHeartbeat className="h-10 w-10 text-[#0CB8B6]" />
                )}
                {index === 2 && (
                  <FaBrain className="h-10 w-10 text-[#0CB8B6]" />
                )}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
              {card.title}
            </h3>
            <p className="text-base text-gray-700 text-center mb-6 leading-relaxed">
              {card.description}
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  window.location.href = card.link; // Navigate on button click
                }}
                className="bg-[#0CB8B6] text-white font-medium py-2 px-4 rounded"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;
