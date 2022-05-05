import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SignUp(props) {
  // State to store value from the input field
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    eMail: "",
    mobileNumber: "",
  });

  let name, value;
  let handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitValidation = (e) => {
    if (userData.userName === "") {
      alert("Enter your first name");
    } else if (userData.password === "") {
      alert("Enter your password");
    } else if (userData.firstName === "") {
      alert("Enter your firstName");
    } else if (userData.lastName === "") {
      alert("Enter your lastName");
    } else if (userData.eMail === "") {
      alert("Enter your eMail");
    } else if (userData.mobileNumber === "") {
      alert("Enter your mobileNumber");
    }
    return true;
  };

  //submit user data
  let submitUserData = (e) => {
    e.preventDefault();

    submitValidation();
    if (submitValidation) {
      console.log("heloooooooooooooooo");
      let userDataObj = {
        userName: userData.userName,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        eMail: userData.eMail,
        mobileNumber: userData.mobileNumber,
      };

      // Put the object into Local storage
      localStorage.setItem("userDataObj", JSON.stringify(userDataObj));
    }
  };

  return (
    <>
      <form onSubmit={submitUserData}>
        <div className="mb-3 container">
          <div>
            <h1>Sign Up</h1>
          </div>
          <div>
            <label className="form-label">User Name</label>
            <input
              type="text"
              name="userName"
              value={userData.userName}
              onChange={handleInputs}
              className="form-control"
              placeholder="Enter your User Name"
              autoComplete="off"
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputs}
              className="form-control"
              placeholder="Password"
              autoComplete="off"
            />

            <label className="form-label">First Name</label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputs}
              className="form-control"
              placeholder="Enter your First Name"
              autoComplete="off"
            />

            <label className="form-label">Last Name</label>
            <input
              id="fast-name"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputs}
              className="form-control"
              placeholder="Enter your Last Name"
            />
          </div>
          <div>
            <label className="form-label">E-Mail</label>
            <input
              id="email"
              name="eMail"
              type="email"
              value={userData.eMail}
              onChange={handleInputs}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={userData.mobileNumber}
              onChange={handleInputs}
              className="form-control"
              id="mobile-number"
              placeholder="Enter your Mobile Number"
            />
          </div>
          <button
            id="submit-btn"
            type="submit"
            className="btn btn-primary mx-2 my-2"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

SignUp.prototype = {
  firstName: PropTypes.string.is,
  lastName: PropTypes.string.is,
  mobileNumber: PropTypes.string.is,
};
