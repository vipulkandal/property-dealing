import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

export default function Login(props) {
  const [currentUserName, setUserName] = useState("");
  const [currentPassword, setPassword] = useState("");
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const navigate = useNavigate();



  const clearValues = () => {
    setUserName("");
    setPassword("");
    setIsValidCredentials(true);
  };

  const userArr = [
    {
      name: "vipul",
      password: "123",
    },
    {
      name: "piyush",
      password: "123",
    },
    {
      name: "Prashant",
      password: "123",
    },
  ];

  const navigateToSignUp = () => {
    navigate("/SignUp");
  };

  // Submit: fetch local storage values
  // If it matches with current username and passowrd then Welcome ........ to website
  let onSubmit = (e) => {
    e.preventDefault();

    let authenticatedUser = userArr.find(
      (user) =>
        user.name.toLocaleLowerCase === currentUserName.toLocaleLowerCase && user.password === currentPassword
    );

    if (authenticatedUser) {
      setIsValidCredentials(true);
      sessionStorage.setItem(
        "authenticatedUserObj",
        JSON.stringify({
          userName: authenticatedUser.name,
          password: authenticatedUser.password,
        })
      );
      navigate("/HomePage");
    } else {
      setIsValidCredentials(false);
    }
  };

  useEffect(() => {
    let authenticatedUserObj = JSON.parse(
      sessionStorage.getItem("authenticatedUserObj")
    );
    if (authenticatedUserObj) {
      navigate("/HomePage");
    } else {
      navigate("/Login");
    }
  }, []);




  return (
    <>
      <div className="container ">
        <h2>Login Page</h2>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3 container">
          <div>
            <label className="form-label">{props.userName}</label>
            <input
              id="user-name"
              value={currentUserName}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              placeholder="User Name"
              autoComplete="off"
            />

            <label className="form-label">{props.password}</label>
            <input
              id="password"
              value={currentPassword}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
            <div style={isValidCredentials ? { visibility: 'hidden' } : { visibility: 'visible' }}>
              <p style={{ color: "red" }}>* Invalid login credentials</p>
            </div>
          </div>

          <button
            id="submit-login"
            type="submit"
            className="btn btn-primary my-2"
          >
            Sign In
          </button>
          <div
            onClick={() => clearValues()}
            className="btn btn-primary mx-2 my-2"
          >
            Clear Values
          </div>
          <div onClick={navigateToSignUp} className="btn btn-primary mx-2 my-2">
            Sign Up
          </div>
        </div>
      </form>
    </>
  );
}
