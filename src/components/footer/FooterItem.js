import React from "react";

import classes from "./FooterItem.module.css";

function FooterItem({ heading, subItems }) {
  return (
    <div className={classes.container}>
      <h3>{heading}</h3>
      <ul className={classes.subItemsList}>
        {subItems.map((subItem) => (
          <li key={subItem.id} className={classes.subItem}>
            <a href={subItem.url}>{subItem.heading}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterItem;
