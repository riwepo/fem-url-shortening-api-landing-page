import React from "react";

import Hero from "./Hero";
import ShortenForm from "./shorten/ShortenForm";
import Stats from "./statistics/Stats";
import CallToAction from "./CallToAction";

import classes from "./Main.module.css";

function Main() {
  return (
    <main className={classes.main}>
      <Hero />
      <ShortenForm />
      <Stats />
      <CallToAction />
    </main>
  );
}

export default Main;
