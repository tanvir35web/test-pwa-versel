import React from "react";
import { FaPlay } from "react-icons/fa";
import videoLogo from "../assets/video logo.svg";

const Video = ({ onClick, imageSrc, title, alt }) => {
  return (
    <div
      className="flex cursor-pointer flex-col gap-2 rounded-xl "
      onClick={onClick}
    >
      <div className="relative">
        <img className="rounded-tl-xl rounded-tr-xl" src={imageSrc} alt={alt} />
        <span className="absolute inset-0 overflow-hidden rounded-t-md bg-black bg-opacity-0  opacity-0 duration-300  hover:inline-block hover:bg-opacity-50 hover:opacity-100 ">
          <FaPlay
            size={40}
            className="h-full w-full rounded-t-xl p-[30px] text-white md:p-[60px] lg:p-[50px]"
          />
        </span>
      </div>

      <div className="flex flex-row items-start gap-[3.59px] md:gap-[8.6px]">
        <img
          className="h-4 w-4 md:h-[36px] md:w-[36px]  lg:h-[46px] lg:w-[46px]"
          src={videoLogo}
          alt="docTime video logo"
        />
        <div className="flex flex-col gap-1 ">
          <h5 className="text-[10px] font-medium leading-[13px] -tracking-[0.05px] md:text-xl md:leading-[26px] ">
            {title}
          </h5>
          <p className="text-[8px] font-normal leading-[7.63px] -tracking-[0.02px] text-docWhite-500 md:text-base md:leading-[18.27px]">
            DocTime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
