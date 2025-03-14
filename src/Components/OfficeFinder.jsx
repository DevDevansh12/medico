import React from "react";
import bannerImg from "../assets/bannerImg.jpg"; // Import the image

const OfficeFinder = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-sm mb-4">Subscribe to get update</p>
          <h2 className="text-4xl font-bold mb-8">
            LET'S FIND AN OFFICE NEAR YOU.
          </h2>
          <div className="max-w-md mx-auto flex rounded-full bg-white p-2">
            <input
              type="email"
              placeholder="Enter your e-mail here"
              className="flex-1 text-gray-700 px-4 focus:outline-none"
            />
            <button className="bg-blue-500 text-white rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707L9 6.586 8.293 7.293 11.586 10l-3.293 3.293 .707.707L13.707 10l-3.293-3.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeFinder;
