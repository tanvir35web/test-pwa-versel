import React, { createContext, useState, useContext, useEffect } from "react";
import districtDifference from "../data/district-differences.json";
import getIndexByName from "../utils/getIndexByName";
import moment from "moment";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase-config/firebase";
import dhakaTimes from "../data/dhaka-times.json";
import findTime from "../utils/getTimeForSpecificDate";
import Cookies from "js-cookie";

const RamadanContext = createContext();

export const useRamadanContext = () => useContext(RamadanContext);

export const RamadanProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] =
    useState(getDefaultLocation());
  const [iftarTime, setIftarTime] = useState(null);
  const [sahariTime, setSahariTime] = useState(null);
  const [dayOfRamadanForIftari, setDayOfRamadanForIftari] = useState(null);
  const [dayOfRamadanForSahari, setDayOfRamadanForSahari] = useState(null);
  const [isSearchSuggestionsOpen, setIsSearchSuggestionsOpen] = useState(false);
  const [rerender, setRerender] = useState(1);
  const [rerenderCounter, setRerenderCounter] = useState(0);
  const [ rerenderCountdownTimer, setRerenderCountdownTimer ] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setRerenderCounter((prevCounter) => prevCounter + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleOnVisibilityChange() {
      if (document.visibilityState === "hidden") {
        return;
      }

      setSelectedLocation(selectedLocation);
      setRerenderCountdownTimer((prevCount) => prevCount + 1);
      
    }

    document.addEventListener("visibilitychange", handleOnVisibilityChange);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleOnVisibilityChange,
      );
    };
  }, []);

  function getDefaultLocation() {
    const defaultLocation = districtDifference[0];
    const url = new URL(location.href);
    let district = url.searchParams.get("district");
    if (!district) {
      district = Cookies.get("selectedDistrict");
    }

    if (!district) {
      return defaultLocation;
    }

    const index = getIndexByName(districtDifference, "nameEn", district, {
      convertToLowercase: true,
    });

    if (index === -1) {
      setQueryParam("district", "Dhaka");
      return defaultLocation;
    }

    return districtDifference[index];
  }

  useEffect(() => {
    const url = new URL(location.href);
    let district = url.searchParams.get("district");
    if (!district) {
      district = Cookies.get("selectedDistrict");
    }
    if (district) {
      setQueryParam("district", district);
    } else {
      setQueryParam("district", "Dhaka");
    }
  }, []);

  useEffect(() => {
    logEvent(analytics, "page_view", { Page: "RamadanCalendar" });
  }, []);

  const handleToggle = () => {
    setIsSearchSuggestionsOpen(!isSearchSuggestionsOpen);
  };

  const isSearchSuggestionsClose = () => {
    if (isSearchSuggestionsOpen) {
      setIsSearchSuggestionsOpen(!isSearchSuggestionsOpen);
    }
  };

  // const handleSahariTimeChange = (_sahariTime) => {
  //   setSahariTimeFromChild(_sahariTime);
  // };

  const handleSelectedItemChange = (selectedItem) => {
    setSelectedLocation(selectedItem);
    setIsSearchSuggestionsOpen(false);

    //set cookies
    Cookies.set("selectedDistrict", selectedItem.nameEn);
    setQueryParam("district", selectedItem.nameEn);
  };

  function setQueryParam(key, value) {
    const url = new URL(location.href);
    url.searchParams.set(key, value);
    window.history.replaceState(null, "", url);
  }

  const handleOnItemChange = (item) => {
    // handleSahariTimeChange(item.difference);
    handleSelectedItemChange(item);
  };

  function getLastRamadanDay() {
    return dhakaTimes[dhakaTimes.length - 1];
  }

  const lastRamadanIftarTime = getLastRamadanDay().iftarTime;
  const lastRamadanSahariTime = getLastRamadanDay().sehriEndTime;
  const eidDay = moment(lastRamadanIftarTime)
    .add(1, "d")
    .format("YYYY-MM-DD HH:mm:ss");

  // function for next iftar time
  function getNextIftarTime(date, differenceInSeconds) {
    const lastRamadanDay = getLastRamadanDay();
    const lastRamadanDate = moment(lastRamadanDay.date, "YYYY-MM-DD");

    if (date.isAfter(lastRamadanDate)) {
      // return the last ramadan iftar time
      return moment(lastRamadanDay.iftarTimes, "YYYY-MM-DD HH:mm:ss").add(
        differenceInSeconds,
        "seconds",
      );
    }

    const ramadanDay = findTime(date.format("YYYY-MM-DD"));

    if (!ramadanDay) {
      return getNextIftarTime(date.add(1, "day"), differenceInSeconds);
    }

    const iftarTime = moment(ramadanDay.iftarTime, "YYYY-MM-DD HH:mm:ss").add(
      differenceInSeconds,
      "seconds",
    );

    if (moment().isAfter(iftarTime)) {
      // expired
      return getNextIftarTime(moment(date).add(1, "day"), differenceInSeconds);
    }
    const dayOfRamadanForIftar = ramadanDay.dayOfRamadan;

    return {
      iftarTime,
      dayOfRamadanForIftar,
    };
  }

  // function for next sahari time
  function getNextSahariTime(date, differenceInSeconds) {
    const lastRamadanDay = getLastRamadanDay();
    const lastRamadanDate = moment(lastRamadanDay.date, "YYYY-MM-DD");

    if (date.isAfter(lastRamadanDate)) {
      // return the last ramadan iftar time
      return moment(lastRamadanDay.sehriEndTime, "YYYY-MM-DD HH:mm:ss").add(
        differenceInSeconds,
        "seconds",
      );
    }

    const ramadanDay = findTime(date.format("YYYY-MM-DD"));

    if (!ramadanDay) {
      return getNextSahariTime(date.add(1, "day"), differenceInSeconds);
    }

    const sahariTime = moment(
      ramadanDay.sehriEndTime,
      "YYYY-MM-DD HH:mm:ss",
    ).add(differenceInSeconds, "seconds");

    if (moment().isAfter(sahariTime)) {
      // expired
      return getNextSahariTime(moment(date).add(1, "day"), differenceInSeconds);
    }

    const dayOfRamadanForSahari = ramadanDay.dayOfRamadan;

    return { sahariTime, dayOfRamadanForSahari };
  }

  useEffect(() => {
    const nextIftarTime = getNextIftarTime(
      moment(),
      selectedLocation?.ifterTimeDifference || 0,
    );

    if (!nextIftarTime.iftarTime) {
      setIftarTime(lastRamadanIftarTime);
    } else {
      setIftarTime(nextIftarTime.iftarTime.format("YYYY-MM-DD HH:mm:ss"));
    }

    if (!nextIftarTime.iftarTime) {
      setDayOfRamadanForIftari(30);
    } else {
      setDayOfRamadanForIftari(nextIftarTime.dayOfRamadanForIftar);
    }

    const nextSahariTime = getNextSahariTime(
      moment(),
      selectedLocation?.sahariTimeDifference || 0,
    );

    if (!nextSahariTime.sahariTime) {
      setSahariTime(lastRamadanSahariTime);
    } else {
      setSahariTime(nextSahariTime.sahariTime.format("YYYY-MM-DD HH:mm:ss"));
    }

    if (!nextSahariTime.sahariTime) {
      setDayOfRamadanForSahari(30);
    } else {
      setDayOfRamadanForSahari(nextSahariTime.dayOfRamadanForSahari);
    }
  }, [selectedLocation, rerender]);

  let iftarHour = moment(iftarTime).format("h");
  let iftarMinute = moment(iftarTime).format("m");
  let sahariHour = moment(sahariTime).format("h");
  let sahariMinute = moment(sahariTime).format("m");

  const handleComponentRerender = () => {
    setRerender(rerender + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (moment().isAfter(iftarTime) || moment().isAfter(sahariTime)) {
        handleComponentRerender();
      }
    });
    return () => clearInterval(intervalId);
  }, [iftarTime, sahariTime, selectedLocation]);

  const foundTime = findTime(moment().format("YYYY-MM-DD"));
  const currentIftarTime = foundTime
    ? foundTime.iftarTime
    : lastRamadanIftarTime;
  const currentSahariTime = foundTime
    ? foundTime.sehriEndTime
    : lastRamadanIftarTime;

  const currentDayIftarTime = moment(currentIftarTime)
    .add(selectedLocation.ifterTimeDifference, "s")
    .format("YYYY-MM-DD HH:mm:ss");

  const iftarTimeWithExtraMin = moment(currentDayIftarTime)
    .add(5, "m")
    .format("YYYY-MM-DD HH:mm:ss");

  const currentDaySahariTime = moment(currentSahariTime)
    .add(selectedLocation.sahariTimeDifference, "s")
    .format("YYYY-MM-DD HH:mm:ss");

  const sahariTimeWithExtraMin = moment(currentDaySahariTime)
    .add(5, "m")
    .format("YYYY-MM-DD HH:mm:ss");

  const startOfTheDay = moment().startOf("day").format("YYYY-MM-DD HH:mm:ss"); // 00:00:00
  const endOfTheDay = moment().endOf("day").format("YYYY-MM-DD HH:mm:ss"); // 23:59:59

  const afterCurrentDayIftarTime = moment().isAfter(currentDayIftarTime);
  const beforeIftarTimeWithExtraMin = moment().isBefore(iftarTimeWithExtraMin);
  const afterIftarTimeWithExtraMin = moment().isAfter(iftarTimeWithExtraMin);
  const beforeEndOfTheDay = moment().isBefore(endOfTheDay);
  const afterStartOfTheDay = moment().isAfter(startOfTheDay);
  const beforeCurrentDaySahariTime = moment().isBefore(currentDaySahariTime);
  const afterCurrentDaySahariTime = moment().isAfter(currentDaySahariTime);
  const beforeSahariTimeWithExtraMin = moment().isBefore(
    sahariTimeWithExtraMin,
  );
  const afterSahariTimeWithExtraMin = moment().isAfter(sahariTimeWithExtraMin);
  const beforeCurrentDayIftarTime = moment().isBefore(currentDayIftarTime);

  return (
    <RamadanContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        iftarTime,
        setIftarTime,
        sahariTime,
        setSahariTime,
        dayOfRamadanForIftari,
        setDayOfRamadanForIftari,
        dayOfRamadanForSahari,
        setDayOfRamadanForSahari,
        isSearchSuggestionsOpen,
        setIsSearchSuggestionsOpen,
        iftarHour,
        iftarMinute,
        sahariHour,
        sahariMinute,
        handleOnItemChange,
        handleToggle,
        isSearchSuggestionsClose,
        currentDayIftarTime,
        iftarTimeWithExtraMin,
        currentDaySahariTime,
        sahariTimeWithExtraMin,
        startOfTheDay,
        endOfTheDay,
        rerenderCounter,
        lastRamadanIftarTime,
        eidDay,
        afterCurrentDayIftarTime,
        beforeIftarTimeWithExtraMin,
        afterIftarTimeWithExtraMin,
        beforeEndOfTheDay,
        afterStartOfTheDay,
        beforeCurrentDaySahariTime,
        afterCurrentDaySahariTime,
        beforeSahariTimeWithExtraMin,
        afterSahariTimeWithExtraMin,
        beforeCurrentDayIftarTime,
        rerenderCountdownTimer
      }}
    >
      {children}
    </RamadanContext.Provider>
  );
};
