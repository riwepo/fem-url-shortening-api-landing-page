import React from "react";

import StatsItem from "./StatsItem";

import classes from "./StatsItem.module.css";

function StatsItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <StatsItem key={item.id} itemInfo={item} />
      ))}
    </ul>
  );
}

export default StatsItemList;
