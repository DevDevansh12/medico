import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Tabline from "./Components/Tabline";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
const App = () => {
  return (
    <>
      <Router>
        <Tabline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
