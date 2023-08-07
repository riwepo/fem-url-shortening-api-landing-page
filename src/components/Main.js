import React from "react";

import Hero from "./Hero";
import ShortenForm from "./shorten/ShortenForm";
import ShortenedUrlList from "./shorten/ShortenedUrlList";
import Stats from "./statistics/Stats";
import CallToAction from "./CallToAction";

import classes from "./Main.module.css";

const dummyData = [
  { id: 1, original: "original1", shortened: "shortened1" },
  { id: 2, original: "original2", shortened: "shortened2" },
  { id: 3, original: "original3", shortened: "shortened3" },
];

function Main() {
  const onLinkSubmittedHandler = () => {
    console.log("submitted");
  };
  return (
    <main className={classes.main}>
      <Hero />
      <ShortenForm onLinkSubmitted={onLinkSubmittedHandler} />
      <ShortenedUrlList items={dummyData} />
      <Stats />
      <CallToAction />
    </main>
  );
}

export default Main;
