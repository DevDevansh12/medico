import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/YOUR_WHATSAPP_NUMBER", "_blank");
  };

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="relative bg-white py-4 px-6 flex items-center justify-center md:justify-around shadow-md">
      {" "}
      {/* Adjusted justify-center */}
      <div className="flex items-center">
        <span className="font-semibold text-2xl">Medico</span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`hidden md:flex items-center space-x-4`}>
        <Link to="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link to="/About" className="hover:text-gray-600">
          About
        </Link>
        <Link to="/services" className="hover:text-gray-600">
          Services
        </Link>
        <Link to="/contact" className="hover:text-gray-600">
          Contact
        </Link>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center"
        >
          <FaWhatsapp className="inline mr-2" size={24} />
          WhatsApp
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 flex flex-col items-center transition-all duration-300 ease-in-out">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleMobileMenu}
          ></div>
          <div className="relative z-50 w-full">
            <div className="flex flex-col items-center w-full">
              <Link
                to="/"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                About
              </Link>
              <Link
                to="/services"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                SERVICES
              </Link>
              <Link
                to="/blog"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                CONTACT
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center mt-2"
              >
                <FaWhatsapp className="inline mr-2" size={24} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
