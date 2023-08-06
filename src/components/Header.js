import React, { useState } from "react";

import NavBar from "./NavBar";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as OpenMenu } from "../images/open-menu-6208.svg";

import classes from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuClickHandler = () => {
    setIsMenuOpen((current) => !current);
  };
  return (
    <header className={classes.container}>
      <Logo className={classes.logo} />
      {isMenuOpen && <NavBar />}
      <OpenMenu
        className={`${classes.openMenu} ${
          isMenuOpen ? classes.openMenuIsOpen : null
        }`}
        onClick={openMenuClickHandler}
      />
    </header>
  );
}

export default Header;
