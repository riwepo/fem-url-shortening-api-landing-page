import React from "react";

import ShortenedUrl from "./ShortenedUrl";

import classes from "./ShortenedUrlList.module.css";

function ShortenedUrlList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <ShortenedUrl key={item.id} shortenedUrl={item} />
      ))}
    </ul>
  );
}

export default ShortenedUrlList;
