import React from "react";
import CountdownTimer from "./CountdownTimer";

const Timer = ({
  title,
  time,
  targetTime,
  nextScheduleMassage,
  nextScheduleTime,
}) => {
  return (
    <div className=" flex h-full w-full  flex-col items-center justify-center gap-4 rounded-[12px] bg-white px-[14px] py-[24px] text-center text-docWhite-700 shadow-allSide md:w-[630px] lg:gap-4 lg:px-[23.5px] lg:py-[31.5px] ">
      <h1 className=" text-[14px] font-semibold leading-[18.2px] md:mb-2 md:text-[22px] md:leading-[29.05px]">
        {title}
        <span className="text-docBlue-900"> {time} </span>
      </h1>
      <p className=" text-[12px] font-medium leading-[15.9px] text-docWhite-700 md:text-xl md:leading-[26.5px]">
        সময় বাকি আছে
      </p>
      <div>
        <CountdownTimer targetDate={targetTime} />
      </div>

      <div>
        <p className=" mt-1 rounded-lg bg-docBlue-50 px-3 md:px-4 py-2 text-[14px] font-medium leading-[18.2px] -tracking-[0.7px] md:mb-2 md:mt-3 md:text-[22px] md:leading-[29.05px] ">
          {nextScheduleMassage}{" "}
          <span className="font-bold text-docBlue-900">{nextScheduleTime}</span>
        </p>
      </div>
    </div>
  );
};

export default Timer;
