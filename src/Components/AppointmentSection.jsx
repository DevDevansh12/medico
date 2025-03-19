import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import femaleImg from "./../assets/female.jpg";

const AppointmentSection = () => {
  const chooseUsRef = useRef(null);
  const chooseUsInView = useInView(chooseUsRef, { once: false });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: false });

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <motion.div
          ref={chooseUsRef}
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={
            chooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 text-center">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-2 text-[#125774]">
              Why Choose Us?
            </h3>
            <p className="text-gray-700">
              Our experienced team is dedicated to providing you with the best
              care, prioritizing personalized treatment plans, compassionate
              care, and a commitment to your overall well-being.
            </p>
          </div>
          <img
            src={femaleImg}
            alt="Why Choose Us"
            className="max-w-full h-auto rounded-lg"
          />
        </motion.div>

        <motion.div
          ref={formRef}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-semibold text-[#125774] mb-2 uppercase">
            Online Appointment
          </h2>
          <h3 className="text-2xl font-medium mb-6">Make An Appointment</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border rounded-md p-2 w-full"
              />
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-md p-2 w-full">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="border rounded-md p-2 w-full">
                <option>Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell Us About Your Disease *"
                className="border rounded-md p-2 w-full h-32 resize-none"
              ></textarea>
            </div>
            <button className="bg-[#125774] mx-auto text-white py-3 px-6 rounded-md transition-colors flex items-center">
              Submit Query
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentSection;
