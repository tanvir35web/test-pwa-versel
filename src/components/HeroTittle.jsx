import React from "react";
import useCurrentDate from "../customHooks/useCurrentDate";

const HeroTittle = () => {
  const { date, year, islamicDate } = useCurrentDate();

  return (
    <div className="flex flex-col gap-[2px] text-center text-white md:gap-3 md:pb-2 ">
      <h1 className="text-xl font-medium leading-[26.5px] md:text-[40px] md:leading-[53px]">
        ডকটাইম রমজান ক্যালেন্ডার
      </h1>
      <p className=" font-light leading-[18.55px] sm:text-[14px] md:text-2xl md:leading-[31.8px]">
        {date}, {year} | {islamicDate}
      </p>
    </div>
  );
};

export default HeroTittle;
