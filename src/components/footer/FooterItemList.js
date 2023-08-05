import React from "react";

import FooterItem from "./FooterItem";

import classes from "./FooterItemList.module.css";

function FooterItemList() {
  const items = [
    {
      id: 1,
      heading: "Features",
      subItems: [
        { id: 1, heading: "Link Shortening", url: "#linkShortening" },
        { id: 2, heading: "Branded Links", url: "#lbrandedLinks" },
        { id: 3, heading: "Analytics", url: "#analytics" },
      ],
    },
    {
      id: 2,
      heading: "Resources",
      subItems: [
        { id: 1, heading: "Blog", url: "#blog" },
        { id: 2, heading: "Developers", url: "#developers" },
        { id: 3, heading: "Support", url: "#support" },
      ],
    },
    {
      id: 3,
      heading: "Company",
      subItems: [
        { id: 1, heading: "About", url: "#about" },
        { id: 2, heading: "Our Team", url: "#ourTeam" },
        { id: 3, heading: "Careers", url: "#careers" },
        { id: 4, heading: "Contact", url: "#contact" },
      ],
    },
  ];
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <FooterItem
          key={item.id}
          heading={item.heading}
          subItems={item.subItems}
        />
      ))}
    </ul>
  );
}

export default FooterItemList;
