import React from "react";
import HealthTips from "./HealthTips";
import ramadanHealthTips from "../utils/getHealthTipsForSpecificDates";
import moment from "moment";
import healthTipsData from "../data/ramadan-health-tips.json";

const HealthTipsSection = () => {
  const currentDate = moment().format("DD-MM-YYYY");
  const healthTips = ramadanHealthTips(currentDate) || healthTipsData[0];

  return (
    <HealthTips
      info={healthTips.info}
      title={healthTips.title}
      descriptions={healthTips.description}
    />
  );
};

export default HealthTipsSection;
