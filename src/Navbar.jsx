import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*<img src="images/logo.jpg" className="logo" alt="logo" />*/}
      <ul className="menu-items">
        <li className="">
          <a href="#">Home</a>
        </li>
        <li className="">
          <a href="#">Recipes</a>
        </li>
        <li className="end">
          <a href="#"> Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
