import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

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
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <Content />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
