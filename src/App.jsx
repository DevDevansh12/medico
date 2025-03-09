import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Tabline from "./Components/Tabline";
const App = () => {
  return (
    <>
      <Router>
        <Tabline />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
