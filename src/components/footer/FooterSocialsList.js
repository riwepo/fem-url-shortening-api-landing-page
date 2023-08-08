import React from "react";

import { ReactComponent as IconFacebook } from "../../images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../images/icon-instagram.svg";

import classes from "./FooterSocialsList.module.css";

function FooterSocialsList() {
  return (
    <ul className={classes.list}>
      <li key={1}>
        <a className={classes.a} href="#facebook">
          <IconFacebook className={classes.icon} aria-label="Facebook" />
        </a>
      </li>
      <li key={2}>
        <a className={classes.a} href="#twitter">
          <IconTwitter className={classes.icon} aria-label="Twitter" />
        </a>
      </li>
      <li key={3}>
        <a className={classes.a} href="#pinterest">
          <IconPinterest className={classes.icon} aria-label="Pinterest" />
        </a>
      </li>
      <li key={4}>
        <a className={classes.a} href="#instagram">
          <IconInstagram className={classes.icon} aria-label="Instagram" />
        </a>
      </li>
    </ul>
  );
}

export default FooterSocialsList;
