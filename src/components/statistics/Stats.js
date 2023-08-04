import React from "react";

import classes from "./Stats.module.css";
import StatsItemList from "./StatsItemList";

function Stats() {
  const statsItems = [
    {
      id: 1,
      iconFileName: "icon-brand-recognition.svg",
      iconAlt: "brand recognition icon",
      heading: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
    },
    {
      id: 2,
      iconFileName: "icon-detailed-records.svg",
      iconAlt: "detailed records icon",
      heading: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      iconFileName: "icon-fully-customizable.svg",
      iconAlt: "fully customizable icon",
      heading: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <div className={classes.container}>
      <h2>Advanced Statistics</h2>
      <StatsItemList items={statsItems} />
    </div>
  );
}

export default Stats;
