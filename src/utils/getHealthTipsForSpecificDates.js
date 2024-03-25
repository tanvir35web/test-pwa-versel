import ramadanHealthTips from "../data/ramadan-health-tips.json";

export default function (date) {
  return ramadanHealthTips.find((tips) => tips.date === date);
}
