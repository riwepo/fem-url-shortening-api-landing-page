import React from "react";

import classes from "./Button.module.css";

function Button({ className, label }) {
  return <button className={`${className} ${classes.button}`}>{label}</button>;
}

export default Button;
