import React from "react";

import classes from "./ShortenForm.module.css";

function ShortenForm() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input className={classes.input} type="text" />
        <button className={classes.button}>Shorten it!</button>
      </form>
    </div>
  );
}

export default ShortenForm;
