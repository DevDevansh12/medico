import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading medical facility dedicated to providing
              high-quality healthcare services.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-sm">
              <li>123 Medical Street, City, State</li>
              <li>Phone: +1 123 456 7890</li>
              <li>Email: info@medicalwebsite.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Medical Website. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
