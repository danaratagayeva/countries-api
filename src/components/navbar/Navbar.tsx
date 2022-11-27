import React from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import "./navbar.scss";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <PublicTwoToneIcon />
        Countries API
      </div>
      <About />
      {/* <Search />
      <Filter /> */}
    </div>
  );
};

export default Navbar;
