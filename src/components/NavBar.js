import React from "react";

import logo from "../images/logo.svg";
import openMenu from "../images/open-menu-6208.svg";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="company logo" />
      <img
        className={classes.openMenu}
        src={openMenu}
        alt="hamburger menu icon"
      />
    </div>
  );
}

export default NavBar;
