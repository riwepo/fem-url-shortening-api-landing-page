import React, { useState } from "react";

import NavBar from "./NavBar";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as OpenNav } from "../images/open-menu-6208.svg";

import classes from "./Header.module.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNavClickHandler = () => {
    setIsNavOpen((current) => !current);
  };
  return (
    <header className={classes.container}>
      <Logo className={classes.logo} />
      <NavBar isOpen={isNavOpen} onOverlayClicked={openNavClickHandler} />
      <OpenNav
        className={`${classes.openNav} ${
          isNavOpen ? classes.openNavIsOpen : null
        }`}
        onClick={openNavClickHandler}
      />
    </header>
  );
}

export default Header;
