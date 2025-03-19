import React, { useEffect, useRef } from "react";
import bgimg from "../assets/bgimg.jpg";
import { HashLink } from "react-router-hash-link";
const Banner = () => {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateElement = (ref, delay) => {
      if (ref.current) {
        ref.current.style.opacity = 0;
        ref.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          ref.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          ref.current.style.opacity = 1;
          ref.current.style.transform = "translateY(0)";
        }, delay);
      }
    };

    animateElement(headingRef, 300);
    animateElement(descRef, 500);
    animateElement(buttonRef, 700);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <p className="text-lg md:text-xl font-semibold uppercase mb-4 tracking-wide text-gray-300">
            {" "}
            {/* Increased font size here */}
            BEST SERVICE GOOD HEALTH
          </p>
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6" // Increased font size here
            style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.6)" }}
          >
            Expert medical care <br className="hidden md:block" /> for good
            health
          </h1>
          <p ref={descRef} className="text-lg md:text-xl mb-8 text-gray-200">
            {" "}
            {/* Increased font size here */}
            Providing comprehensive medical services with a focus on your
            well-being.
          </p>
          <HashLink to="/about">
            <button
              ref={buttonRef}
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              Schedule an Appointment
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
