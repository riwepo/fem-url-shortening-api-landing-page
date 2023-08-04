import React from "react";

import classes from "./StatsItem.module.css";

function StatsItem({ itemInfo }) {
  const createImgSource = (iconFileName) => {
    const source = `${process.env.PUBLIC_URL}/images/${iconFileName}`;
    return source;
  };
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.img}
          src={createImgSource(itemInfo.iconFileName)}
          alt={itemInfo.iconAlt}
        />
      </div>
      <h2 className={classes.heading}>{itemInfo.heading}</h2>
      <p className={classes.text}>{itemInfo.text}</p>
    </div>
  );
}

export default StatsItem;
