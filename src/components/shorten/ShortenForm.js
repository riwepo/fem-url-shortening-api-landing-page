import React, { useState } from "react";

import classes from "./ShortenForm.module.css";

function ShortenForm({ onLinkSubmitted }) {
  const [enteredUrl, setEnteredUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValid) return;
    onLinkSubmitted(enteredUrl);
    setEnteredUrl("");
    setIsValid(false);
  };

  const inputChangeHandler = (event) => {
    const localValue = event.target.value;
    setEnteredUrl(localValue);
    // add more validation??
    if (localValue !== "") {
      setIsValid(true);
      setIsError(false);
    } else {
      setIsError(true);
      setIsValid(false);
    }
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={`${classes.input} ${isError ? classes.inputError : null}`}
          type="text"
          placeholder="Shorten a link here..."
          onChange={inputChangeHandler}
          value={enteredUrl}
        />
        {isError && <p className={classes.errorMessage}>Please add a link</p>}
        <button className={classes.button} disabled={!isValid}>
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default ShortenForm;
