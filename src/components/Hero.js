import React from "react";

import GetStartedButton from "./GetStartedButton";

import illustrationWorking from "../images/illustration-working.svg";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.container}>
      <img
        className={classes.illustrationWorking}
        src={illustrationWorking}
        alt="woman working at desk"
      />
      <h1 className={classes.heading}>More than just shorter links</h1>
      <p className={classes.text}>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <GetStartedButton className={classes.button} />
    </div>
  );
}

export default Hero;
