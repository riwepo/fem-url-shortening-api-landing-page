import React from "react";

import ShortenedUrl from "./ShortenedUrl";

import classes from "./ShortenedUrlList.module.css";

function ShortenedUrlList({ items }) {
  return (
    <section className={classes.container}>
      <ul className={classes.list}>
        {items.map((item) => (
          <ShortenedUrl key={item.id} shortenedUrl={item} />
        ))}
      </ul>
    </section>
  );
}

export default ShortenedUrlList;
