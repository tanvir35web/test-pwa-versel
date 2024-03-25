import dhakaTimes from "../data/dhaka-times.json";

export default function (date: string) {
  return dhakaTimes.find((dhakaTime) => dhakaTime.date === date);
}
