import React from "react";

import classes from "./FooterItem.module.css";

function FooterItem({ heading, subItems }) {
  return (
    <li className={classes.container}>
      <h3 className={classes.heading}>{heading}</h3>
      <ul className={classes.subItemsList}>
        {subItems.map((subItem) => (
          <li key={subItem.id} className={classes.subItem}>
            <a className={classes.a} href={subItem.url}>
              {subItem.heading}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default FooterItem;
