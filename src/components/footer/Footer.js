import React from "react";

import { ReactComponent as Logo } from "../../images/logo.svg";

import FooterItemList from "./FooterItemList";
import FooterSocialsList from "./FooterSocialsList";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.contentContainer}>
        <Logo className={classes.logo} />
        <FooterItemList />
        <FooterSocialsList />
      </div>
    </footer>
  );
}

export default Footer;
