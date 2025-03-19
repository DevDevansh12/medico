import React from "react";
import Doc from "../assets/Doctorone.jpg";
import Doctwo from "../assets/Doctortwo.jpg";
import Docthree from "../assets/Doctorthree.jpg";

const SpecialistsSection = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#125774] mb-6">
            Meet Our Specialists
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Our team of highly qualified specialists are dedicated to providing
            personalized care and innovative solutions to meet your healthcare
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Doc}
                alt="Jessica Jones"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-[#125774] mb-2">
                Jessica Jones
              </h4>
              <p className="text-gray-600 mb-4">CARDIOLOGIST</p>
              <button className="bg-[#125774] text-white py-3 px-6 rounded-full  transition-colors duration-300">
                MAKE APPOINTMENT
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Doctwo}
                alt="Ahel Natasha"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-[#125774] mb-2">
                Ahel Natasha
              </h4>
              <p className="text-gray-600 mb-4">DENTAL SURGEON</p>
              <button className="bg-[#125774] text-white py-3 px-6 rounded-full transition-colors duration-300">
                MAKE APPOINTMENT
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={Docthree}
                alt="Gabriela Beckett"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-[#125774] mb-2">
                Gabriela Beckett
              </h4>
              <p className="text-gray-600 mb-4">COSMETIC SURGEON</p>
              <button className="bg-[#125774] text-white py-3 px-6 rounded-full transition-colors duration-300">
                MAKE APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistsSection;
