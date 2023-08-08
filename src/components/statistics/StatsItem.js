import React from "react";

import classes from "./StatsItem.module.css";

function StatsItem({ itemInfo }) {
  const createImgSource = (iconFileName) => {
    const source = `${process.env.PUBLIC_URL}/images/${iconFileName}`;
    return source;
  };
  return (
    <li className={classes.listItem}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img
            className={classes.img}
            src={createImgSource(itemInfo.iconFileName)}
            alt={itemInfo.iconAlt}
          />
        </div>
        <h2 className={classes.heading}>{itemInfo.heading}</h2>

        <p
          className={`${classes.text} ${
            itemInfo.id === 3 ? classes.textLast : null
          }`}
        >
          {itemInfo.text}
        </p>
      </div>
      {/* this is the joining stick between items
            the last item doesn't have it */}
      <div
        className={`${classes.joiner} ${
          itemInfo.id === 3 ? classes.joinerLast : null
        }`}
      ></div>
    </li>
  );
}

export default StatsItem;
