import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabline from "./Components/Tabline";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Tabline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
