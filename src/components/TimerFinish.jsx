import React from "react";

const TimerFinish = ({
  Image,
  Massage,
  nextScheduleMassage,
  nextScheduleTime,
}) => {
  return (
    <div className=" flex w-full  flex-col items-center justify-center gap-4 rounded-[12px] bg-white px-[12px] py-[14px] text-center text-docWhite-700 shadow-allSide md:w-[630px] lg:gap-4 lg:px-[20.5px] lg:py-[31.5px] ">
      <div className="w-[174px] md:w-[220px]">
        <img src={Image} alt="Sahari/Iftar Icon Image" />
      </div>
      <p className="text-xl font-bold text-docBlue-900 md:text-3xl  ">
        {Massage}
      </p>
      <div>
        <p className="  mt-1 rounded-lg bg-docBlue-50 px-3 md:px-4 py-2 text-2xl text-[14px] font-medium leading-[18.2px] -tracking-[0.6px] md:mb-2 md:py-4 md:text-[22px] md:font-normal md:leading-[29.05px] ">
          {nextScheduleMassage}
          <span className="font-bold text-docBlue-900 md:font-semibold">
            {nextScheduleTime}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TimerFinish;
