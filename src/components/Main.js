import React, { useState } from "react";

import Hero from "./Hero";
import ShortenForm from "./shorten/ShortenForm";
import ShortenedUrlList from "./shorten/ShortenedUrlList";
import Stats from "./statistics/Stats";
import CallToAction from "./CallToAction";

import getShortenedLink from "../shorten";

import classes from "./Main.module.css";

// const dummyData = [
//   { id: 1, original: "original1", shortened: "shortened1" },
//   { id: 2, original: "original2", shortened: "shortened2" },
//   { id: 3, original: "original3", shortened: "shortened3" },
// ];
const dummyData = [];

const convertShortenedResult = (existingCount, shortenedResult) => {
  const result = {
    id: existingCount + 1,
    original: shortenedResult.result.original_link,
    shortened: shortenedResult.result.full_short_link,
  };
  return result;
};

function Main() {
  const [shortenedLinks, setShortenedLinks] = useState(dummyData);

  const onLinkSubmittedHandler = async (linkToShorten) => {
    console.log("linkToShorten", linkToShorten);
    const result = await getShortenedLink(linkToShorten);
    console.log(" get shortened result", result);
    if (result.isOk) {
      const convertedResult = convertShortenedResult(
        shortenedLinks.length,
        result.value
      );
      console.log("convertedResult", convertedResult);
      setShortenedLinks([...shortenedLinks, convertedResult]);
    }
  };
  return (
    <main className={classes.main}>
      <Hero />
      <ShortenForm onLinkSubmitted={onLinkSubmittedHandler} />
      <ShortenedUrlList items={shortenedLinks} />
      <Stats />
      <CallToAction />
    </main>
  );
}

export default Main;
