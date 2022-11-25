import React from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      Countries API
      <About />
    </div>
  );
};

export default Navbar;
