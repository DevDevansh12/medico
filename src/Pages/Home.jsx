import React from "react";
import doctor from "../assets/doctor.png";
import "../Css/Home.css";
const Home = () => {
  return (
    <div className="home_container">
      <div className="main_container">
        <div className="banner">
          <div className="home_content">
            <h1>
              Expert medical care and <br />
              treatment
            </h1>
            <p>
              The ourselves suffering the sincerity. Inhabit her manners adapted
              <br />
              age certain. Debating offended at branched.
            </p>
            <div className="home_button">
              <button className="home_btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
