import React from "react";
import { useRamadanContext } from "../context-api/RamadanContext";
import SearchBar from "./SearchBar";
import SearchSelect from "./SearchSelect";

const SearchSection = () => {

    const {
        selectedLocation,
        isSearchSuggestionsOpen,
        handleOnItemChange,
        handleToggle,
        isSearchSuggestionsClose,
      } = useRamadanContext();

  return (
    <div className="relative">
      <SearchBar
        onClick={handleToggle}
        locationName={selectedLocation.nameBn}
      />
      <div className="absolute top-16 w-full rounded-xl md:top-24">
        {isSearchSuggestionsOpen && (
          <SearchSelect
            isSearchSuggestionsClose={isSearchSuggestionsClose}
            onItemChange={handleOnItemChange}
          />
        )}
      </div>
    </div>
  );
};

export default SearchSection;
