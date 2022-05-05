import React from "react";
import logo from "../images/home-06.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  let authenticatedUserObj = JSON.parse(
    sessionStorage.getItem("authenticatedUserObj")
  );
  let displayUserName = authenticatedUserObj.userName;
  let logout = () => {
    sessionStorage.removeItem("authenticatedUserObj"); // Remove session
    navigate("/Login");
  };

  return (
    <div className="row">
      <div className="col-lg-3">
        <div style={{ height: "100px" }}>
          <img src={logo} height="40" />
        </div>
      </div>
      <div className="col-lg-6">
        <h2>
          Welcome{" "}
          {displayUserName.charAt(0).toUpperCase() + displayUserName.slice(1)}
        </h2>
      </div>
      <div className="col-lg-3">
        <button onClick={() => logout()} className="btn btn-secondary">
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Header;
