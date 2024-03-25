import { differenceInSeconds, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import getZeroBeforeSingleDigit from "../utils/getZeroBeforeSingleDigit";

const useCountdownTimer = (targetDate) => {
  const [secondsLeft, setSecondsLeft] = useState(() =>
    differenceInSeconds(parseISO(targetDate), new Date()),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const hours = getZeroBeforeSingleDigit(Math.floor(secondsLeft / 3600));
  const minutes = getZeroBeforeSingleDigit(
    Math.floor((secondsLeft % 3600) / 60),
  );
  const seconds = getZeroBeforeSingleDigit(secondsLeft % 60);

  return {
    secondsLeft,
    hours,
    minutes,
    seconds,
  };
};

export default useCountdownTimer;
