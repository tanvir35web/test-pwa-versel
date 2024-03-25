import React from "react";
import useDistrictSearch from "../customHooks/useDistrictSearch";

const SearchSelect = ({ isSearchSuggestionsClose, onItemChange }) => {
  const {
    searchRef,
    searchTerm,
    filteredData,
    activeIndex,
    handleSearch,
    handleSelectItem,
  } = useDistrictSearch(isSearchSuggestionsClose, onItemChange);

  return (
    <div
      className="m-auto mt-2 overflow-hidden rounded-xl shadow-xl md:w-[630px]"
      ref={searchRef}
    >
      <div className=" m-auto flex justify-between rounded-lg text-lg text-black md:w-[630px]">
        <input
          autoFocus
          className="w-full rounded-lg border-b-[1px] border-gray-200 p-3 text-lg font-normal outline-none md:p-4 md:text-[22px]"
          type="text"
          placeholder="জেলার নাম"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value.trim())}
        />
      </div>

      <div className="z-50 m-auto max-h-80 w-full overflow-y-auto shadow md:max-h-96 md:w-[630px] md:shadow-xl">
        {filteredData.map((item, index) => (
          <div
            className={`w-full cursor-pointer p-3 text-lg font-normal leading-[23.85px] text-docWhite-800 outline-none hover:bg-gray-100 md:text-[22px] md:leading-[29.15px]  ${
              index === activeIndex ? "bg-gray-100" : "bg-white"
            }`}
            key={index}
            onClick={() => handleSelectItem(item)}
          >
            {item.nameBn}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSelect;
