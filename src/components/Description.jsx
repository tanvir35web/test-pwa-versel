import React from "react";

const Description = ({ title, arabic, spelling, meaning }) => {
  return (
    <div className="mt-6  flex w-full  flex-col p-4 md:mt-14 md:px-0">
      <div className=" flex w-full flex-col items-center gap-4 text-center md:items-start md:gap-6 md:px-8 md:text-justify ">
        <h5 className="mb-2 text-base font-semibold leading-[16.8px] text-black md:text-[24px] md:font-bold md:leading-[33.6px]">
          {title}
        </h5>
        <p className="m-auto text-center text-sm font-normal leading-[16.8px] md:text-center md:text-[20px] md:leading-[33.6px]">
          {arabic}
        </p>
        <p className="w-full text-[12px] font-normal leading-[16.8px] text-docWhite-800 md:text-[20px] md:leading-[33.6px] ">
          <span className="text-justify font-bold text-docWhite-700">
            বাংলা উচ্চারণ :
          </span>
          {spelling}
        </p>
        <p className="w-full text-center text-[12px] font-normal leading-[16.8px] text-docWhite-800 md:text-justify md:text-[20px] md:leading-[33.6px]">
          <span className="font-bold text-docWhite-700">অর্থ :</span>
          {meaning}
        </p>
      </div>
    </div>
  );
};

export default Description;
