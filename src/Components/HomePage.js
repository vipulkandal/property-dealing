import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage(props) {
  let UserDataObj = JSON.parse(localStorage.getItem("userDataObj"));

  return (
    <>
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="container" style={{ height: "100vh" }}>
          <div className="row">
            
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
