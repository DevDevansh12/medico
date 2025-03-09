import React from "react";
import { Link } from "react-router-dom";
import "./../Css/Navbar.css";
import logo from "./../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" width={200} />
        </div>
        <div className="nav_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="btn">MAKE APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
