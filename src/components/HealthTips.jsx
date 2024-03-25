import React from "react";

const HealthTips = ({ info, title, descriptions }) => {
  return (
    <div className=" m-auto pt-10 md:my-20 md:pt-5">
      <div className=" flex flex-col gap-2  rounded-lg px-3 py-4 shadow-allSide md:gap-4 md:p-8">
        <h2 className="font-inter text-[12px] font-normal leading-[15.9px] text-docWhite-100 md:text-lg">
          {info}
        </h2>
        <h1 className="text-base font-bold leading-[21.2px] text-docWhite-800 md:text-3xl">
          {title}
        </h1>
        <p className="text-[12px] leading-[15.9px] text-docWhite-800 md:text-xl">
          {descriptions}
        </p>
      </div>
    </div>
  );
};

export default HealthTips;
