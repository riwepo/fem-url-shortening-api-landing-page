import React from "react";

import classes from "./GetStartedButton.module.css";

function GetStartedButton({ className }) {
  return (
    <button className={`${className} ${classes.button}`}>Get Started</button>
  );
}

export default GetStartedButton;
