import React from "react";

import Button from "./Button";

import classes from "./NavBar.module.css";

function NavBar({ className, isOpen, onOverlayClicked }) {
  return (
    <>
      <nav
        className={`${className} ${classes.nav} ${
          isOpen ? classes.navOpen : null
        }`}
      >
        <a className={classes.a} href="#features">
          Features
        </a>
        <a className={classes.a} href="#pricing">
          Pricing
        </a>
        <a className={classes.a} href="#resources">
          Resources
        </a>
        <div className={classes.separator}></div>
        <button className={classes.loginButton}>Login</button>
        <Button className={classes.signupButton} label="Sign Up" />
      </nav>
      {isOpen && (
        <div className={classes.overlay} onClick={onOverlayClicked}></div>
      )}
    </>
  );
}

export default NavBar;
