import React from "react";

import GetStartedButton from "./GetStartedButton";

import classes from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Boost your links today</h2>
      <GetStartedButton className={classes.button} />
    </div>
  );
}

export default CallToAction;
