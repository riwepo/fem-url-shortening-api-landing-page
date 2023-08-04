import React from "react";

import classes from "./ShortenForm.module.css";

function ShortenForm() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className={classes.button}>Shorten It!</button>
      </form>
    </div>
  );
}

export default ShortenForm;
