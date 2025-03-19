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
    <nav className="relative bg-white py-4 px-6 flex items-center justify-around shadow-md">
      <div className="flex items-center">
        <span className="font-bold text-3xl text-[#0CB8B6]">Medico</span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-4">
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 flex flex-col items-center transition-all duration-300 ease-in-out z-50">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={toggleMobileMenu}
          ></div>
          <div className="w-full relative z-50">
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
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-600 py-2 w-full text-center"
              >
                Contact
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
