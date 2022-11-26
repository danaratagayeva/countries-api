import React from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      Countries API
      <About />
      {/* <Search />
      <Filter /> */}
    </div>
  );
};

export default Navbar;
