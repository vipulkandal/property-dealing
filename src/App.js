import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import WrongURL from "./Components/WrongURL";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/*" element={<WrongURL />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 