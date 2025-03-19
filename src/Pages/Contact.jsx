import React from "react";
import Docpic from "../assets/hospital.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
        >
          <img
            src={Docpic}
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          ref={ref}
          className="bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#0CB8B6] text-white py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
