import React, { useState } from "react";

import classes from "./ShortenedUrl.module.css";

function ShortenedUrl({ shortenedUrl }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyClickHandler = (event) => {
    setIsCopied(true);
  };
  return (
    <div className={classes.container}>
      <div className={classes.original}>{shortenedUrl.original}</div>
      <div className={classes.shortened}>{shortenedUrl.shortened}</div>
      <button
        className={`${classes.button} ${
          isCopied ? classes.buttonCopied : null
        }`}
        onClick={copyClickHandler}
        disabled={isCopied}
      >
        {!isCopied ? "Copy" : "Copied!"}
      </button>
    </div>
  );
}

export default ShortenedUrl;