import React from "react";

import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import iconInstagram from "../../images/icon-instagram.svg";

import classes from "./FooterSocialsList.module.css";

function FooterSocialsList() {
  return (
    <ul className={classes.list}>
      <li>
        <img
          className={classes.img}
          src={iconFacebook}
          alt="social media icon"
        />
      </li>
      <li>
        <img
          className={classes.img}
          src={iconTwitter}
          alt="social media icon"
        />
      </li>
      <li>
        <img
          className={classes.img}
          src={iconPinterest}
          alt="social media icon"
        />
      </li>
      <li>
        <img
          className={classes.img}
          src={iconInstagram}
          alt="social media icon"
        />
      </li>
    </ul>
  );
}

export default FooterSocialsList;
