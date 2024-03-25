import { useEffect, useState, useRef } from "react";
import data from "../data/district-differences.json";

const useDistrictSearch = (searchClose, onItemChange) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef(null);

  const handleSearch = (query) => {
    setSearchTerm(query);

    const filteredResult = data.filter(
      (item) =>
        item.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        item.nameBn.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredData(filteredResult);
    setActiveIndex(-1);
  };

  const handleSelectItem = (item) => {
    const selectedName = item.nameBn;
    setSearchTerm(selectedName);
    setFilteredData([]);
    onItemChange(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex < filteredData.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    } else if (e.key === "Enter" && activeIndex !== -1) {
      handleSelectItem(filteredData[activeIndex]);
    } else if (e.key === "Escape") {
      searchClose();
    }
  };

  const handleClickOutside = (e) => {
    const searchBarRef = document.getElementById("searchBar");

    if (
      searchRef.current &&
      !searchRef.current.contains(e.target) &&
      searchBarRef &&
      !searchBarRef.contains(e.target)
    ) {
      searchClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleKeyDown]);

  return {
    searchRef,
    searchTerm,
    filteredData,
    activeIndex,
    handleSearch,
    handleSelectItem,
  };
};

export default useDistrictSearch;
