import React from "react";
import "./../Css/Tabline.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Tabline = () => {
  return (
    <div className="wrapper">
      <div className="tabline">
        <div className="data">
          <div className="first">
            <FaLocationDot size={22} />
            <p>California , TX 14412</p>
          </div>
          <div className="second">
            <IoMail size={22} />
            <p>info@medico.com</p>
          </div>
          <div className="third">
            <IoCall size={22} />
            <p>+123 456 789</p>
          </div>
        </div>
        <div className="whatsapp">
          <button className="wp_btn">
            <i>
              <FaWhatsapp size={20} />
            </i>
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabline;
