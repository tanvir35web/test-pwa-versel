import React from "react";
import CounterDigit from "./CounterDigit";
import TimeUnit from "./TimeUnit";
import NumberCountdownAnimation from "./NumberCountdownAnimation";
import useCountdownTimer from "../customHooks/useCountdownTimer";

const CountdownTimer = ({ targetDate }) => {
  const { secondsLeft, hours, minutes, seconds } =
    useCountdownTimer(targetDate);

  if (secondsLeft <= 0) {
    return null;
  }

  return (
    <div className="flex flex-row items-start gap-3">
      <div className="flex flex-col items-center gap-3">
        <CounterDigit
          secondsLeft={secondsLeft}
          label={
            <div className="flex">
              <NumberCountdownAnimation value={hours.toString()[0]} />
              <NumberCountdownAnimation value={hours.toString()[1]} />
              {hours.toString()[2] && (
                <NumberCountdownAnimation value={hours.toString()[2]} />
              )}
            </div>
          }
        />
        <TimeUnit label={"ঘন্টা"} />
      </div>
      <p className="mt-[11px]  text-2xl lg:mt-6 lg:text-5xl">:</p>
      <div className="flex flex-col items-center gap-3">
        <CounterDigit
          secondsLeft={secondsLeft}
          label={
            <div className="flex">
              <NumberCountdownAnimation value={minutes.toString()[0]} />
              <NumberCountdownAnimation value={minutes.toString()[1]} />
            </div>
          }
        />
        <TimeUnit label={"মিনিট"} />
      </div>
      <p className="mt-[11px]  text-2xl lg:mt-6 lg:text-5xl">:</p>
      <div className="flex flex-col items-center gap-3">
        <CounterDigit
          secondsLeft={secondsLeft}
          label={
            <div className="flex">
              <NumberCountdownAnimation value={seconds.toString()[0]} />
              <NumberCountdownAnimation value={seconds.toString()[1]} />
            </div>
          }
        />

        <TimeUnit label={"সেকেন্ড"} />
      </div>
    </div>
  );
};

export default CountdownTimer;
