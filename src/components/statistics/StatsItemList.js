import React from "react";

import StatsItem from "./StatsItem";

import classes from "./StatsItemList.module.css";

function StatsItemList({ items }) {
  return (
    <ul className={classes.container}>
      {items.map((item) => (
        <StatsItem key={item.id} itemInfo={item} />
      ))}
    </ul>
  );
}

export default StatsItemList;
