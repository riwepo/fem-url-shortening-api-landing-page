import React, { useState, useEffect } from "react";

import Hero from "./Hero";
import ShortenForm from "./shorten/ShortenForm";
import ShortenedUrlList from "./shorten/ShortenedUrlList";
import Stats from "./statistics/Stats";
import CallToAction from "./CallToAction";

import getShortenedLink from "../shorten";
import { getLinksFromStore, saveLinksToStore } from "../storeLinks";

import classes from "./Main.module.css";

const initialData = [];

const convertShortenedResult = (existingCount, shortenedResult) => {
  const result = {
    id: existingCount + 1,
    original: shortenedResult.result.original_link,
    shortened: shortenedResult.result.full_short_link,
  };
  return result;
};

function Main() {
  const [shortenedLinks, setShortenedLinks] = useState(initialData);
  const [progressMessage, setProgressMessage] = useState("");

  // this gets run once on app startup, due to empty array of dependencies
  useEffect(() => {
    const links = getLinksFromStore();
    setShortenedLinks(links);
  }, []);

  const saveLinks = (shortenedLinks) => {
    saveLinksToStore(shortenedLinks);
    setShortenedLinks(shortenedLinks);
  };

  const onLinkSubmittedHandler = async (linkToShorten) => {
    setProgressMessage("shortening link...");
    const result = await getShortenedLink(linkToShorten);
    if (result.isOk) {
      const convertedResult = convertShortenedResult(
        shortenedLinks.length,
        result.value
      );
      saveLinks([...shortenedLinks, convertedResult]);
      setProgressMessage("");
    } else {
      setProgressMessage(`shorten link failed with error '${result.error}'`);
    }
  };

  return (
    <main className={classes.main}>
      <Hero />
      <ShortenForm
        onLinkSubmitted={onLinkSubmittedHandler}
        progressMessage={progressMessage}
      />
      {shortenedLinks.length > 0 && <ShortenedUrlList items={shortenedLinks} />}
      <Stats />
      <CallToAction />
    </main>
  );
}

export default Main;
