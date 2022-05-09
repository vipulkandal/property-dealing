import React from "react";
import logo from "../images/home-06.jpg";
import { useNavigate } from "react-router-dom";
import "./header.css"

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
    <>
      <div className="row ">
        <ul >
          <li ><a href="#buy">Buy</a></li>
          <li><a href="#sell">Sell</a></li>
          <li><a href="#rent">Rent</a></li>
          <li><a href="#pg">PG / Co-living</a></li>
          <li style={{float:"right"}}>
            <button onClick={() => logout()} className="btn btn-secondary">
              <strong>Log Out</strong>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
