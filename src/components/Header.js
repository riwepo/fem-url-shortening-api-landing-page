import React from "react";

import NavBar from "./NavBar";

import logo from "../images/logo.svg";
import openMenu from "../images/open-menu-6208.svg";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.container}>
      <img className={classes.logo} src={logo} alt="company logo" />
      <NavBar />
      <img
        className={classes.openMenu}
        src={openMenu}
        alt="hamburger menu icon"
      />
    </header>
  );
}

export default Header;
