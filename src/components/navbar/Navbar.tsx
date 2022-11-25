import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>Countries</div>
      <ul className="navbar-menu">
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
