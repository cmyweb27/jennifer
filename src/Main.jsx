import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Slide from "./Slide";
import Footer from "./Footer";
import Body from "./Body";
const Main = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Slide />
      <div className="">
        <Body />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
