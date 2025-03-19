import React from "react";

const CentresOfExcellence = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#125774] mb-6">
          Centres of Excellence
        </h2>
        <div className="w-20 h-1 bg-[#125774] mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#125774]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.055 3 .16V5m-6 1a9 9 0 1 1 18 0A9.003 9.003 0 0 1 6 7a10.015 10.015 0 0 0-6 2c0 .336.034.66.1.1.984L4 10z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">BLOOD CANCER</h3>
            <p className="text-gray-600 mb-4">
              Attachment astonished to on appearance imprudence so collecting in
              excellence. Tiled way blind lived whose new. The for fully had she
              there leave merit enjoy forth.
            </p>
            <button className="bg-[#125774] text-white py-2 px-4 rounded-full">
              Read More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#125774]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zM12 14v6m-4-7v7m8-7v7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">NEUROLOGY SURGERY</h3>
            <p className="text-gray-600 mb-4">
              Attachment astonished to on appearance imprudence so collecting in
              excellence. Tiled way blind lived whose new. The for fully had she
              there leave merit enjoy forth.
            </p>
            <button className="bg-[#125774] text-white py-2 px-4 rounded-full ">
              Read More
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#125774]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">BODY SURGERY</h3>
            <p className="text-gray-600 mb-4">
              Attachment astonished to on appearance imprudence so collecting in
              excellence. Tiled way blind lived whose new. The for fully had she
              there leave merit enjoy forth.
            </p>
            <button className="bg-[#125774] text-white py-2 px-4 rounded-full ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentresOfExcellence;
