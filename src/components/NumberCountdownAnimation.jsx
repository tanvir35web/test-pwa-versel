import React, { useState, useEffect } from "react";
import convertToBanglaNumber from "../utils/convertNumberEnToBn";

const NumberCountdownAnimation = ({ value }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== currentNumber) {
      setAnimate(true);
      setCurrentNumber(value);
      setTimeout(() => setAnimate(false), 1500); // remove the animation class after 1.5s
    }
  }, [value]);

  return (
    <div className=" h-[1.2em] overflow-hidden text-center leading-[1.2em] ">
      <div className={` ${animate ? "animate-moveNumberOut " : ""}`}>
        {convertToBanglaNumber(currentNumber)}
      </div>
      <div>{convertToBanglaNumber(currentNumber)}</div>
    </div>
  );
};

export default NumberCountdownAnimation;
