import React from "react";

import classes from "./ShortenedUrl.module.css";

function ShortenedUrl({ shortenedUrl }) {
  return (
    <div className={classes.container}>
      <div className={classes.original}>{shortenedUrl.original}</div>
      <div className={classes.shortened}>{shortenedUrl.shortened}</div>
      <button className={classes.button}>Copy</button>
    </div>
  );
}

export default ShortenedUrl;
