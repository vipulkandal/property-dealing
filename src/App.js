import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute.js";
import SignUp from "./Components/SignUp.js";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import WrongURL from "./Components/WrongURL";
import PropertyList from "./pages/property-listing";


function App() {

  const [isSessionMaintained, setSessionMaintained] = useState(false);

  // Check if session is maintained for user
  useEffect(() => {
    let authenticatedUserObj = JSON.parse(
      sessionStorage.getItem("authenticatedUserObj")
    );

    authenticatedUserObj ? setSessionMaintained(true) : setSessionMaintained(false);
  }, []);



  return (
    <>
      <Router>
        <Routes>
          <Route path="/HomePage" element={<PrivateRoute component={HomePage} />} />
          <Route path="/" element={<Login />} />
          <Route path="PropertyList" element={<PropertyList />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<WrongURL />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
