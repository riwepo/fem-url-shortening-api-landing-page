import React from "react";

import Button from "./Button";

import classes from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Boost your links today</h2>
      <Button className={classes.button} label="Get Started" />
    </div>
  );
}

export default CallToAction;
