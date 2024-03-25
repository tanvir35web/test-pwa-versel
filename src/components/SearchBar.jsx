import React from "react";
import bottomArrowIcon from "../assets/BottomArrowIcon.svg";

const SearchBar = ({ onClick, locationName }) => {
  return (
    <div id="searchBar" className=" relative m-auto py-2 md:w-[630px] md:py-5">
      <div
        className=" mt-2 flex cursor-pointer  justify-between rounded-lg bg-white p-3 md:p-4 "
        onClick={onClick}
      >
        <p className="w-full text-lg font-normal leading-[18.85px] text-docWhite-800 outline-none md:text-[22px] md:leading-[29.15px]">
          {locationName}
        </p>
        <img src={bottomArrowIcon} alt="bottom arrow" />
      </div>
    </div>
  );
};

export default SearchBar;
