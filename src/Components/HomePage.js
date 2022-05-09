import React from "react";
import Header from "./Header";
// import Footer from "./Footer";
import SearchBox from "./SearchBox";

export default function HomePage(props) {
  let UserDataObj = JSON.parse(localStorage.getItem("userDataObj"));

  return (
    <>
      <div>
        <div className="">
          <Header />
        </div>
        <div className="container" >
          <SearchBox />
        </div>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </>
  );
}
