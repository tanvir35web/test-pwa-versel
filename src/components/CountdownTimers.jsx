import React from "react";
import { useRamadanContext } from "../context-api/RamadanContext";
import moment from "moment";
import Timer from "./Timer";
import TimerFinish from "./TimerFinish";
import convertToBanglaNumber from "../utils/convertNumberEnToBn";
import IftarIconImage from "../assets/iftar-Icon.webp";
import SahariIconImage from "../assets/sahari-Icon.webp";
import EidMubarakMassage from "./EidMubarakMassage";

const CountdownTimers = () => {
  const {
    iftarTime,
    sahariTime,
    iftarHour,
    iftarMinute,
    sahariHour,
    sahariMinute,
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
  } = useRamadanContext();

  const countdownTimers =
    sahariTime && iftarTime ? (
      <div className="flex flex-col items-center justify-center gap-2 md:m-auto md:gap-5 lg:flex-row">
        {afterCurrentDayIftarTime && beforeIftarTimeWithExtraMin ? (
          <TimerFinish
            rerenderCounter={rerenderCounter}
            Image={IftarIconImage}
            Massage={"ইফতারের সময় হয়ে গিয়েছে"}
            nextScheduleMassage={"আগামীকাল সেহরির শেষ সময় "}
            nextScheduleTime={`ভোর ${convertToBanglaNumber(
              sahariHour,
            )} টা ${convertToBanglaNumber(sahariMinute)} মিনিট`}
          />
        ) : afterIftarTimeWithExtraMin && beforeEndOfTheDay ? (
          <Timer
            key={sahariTime}
            title={"আগামীকাল সেহরির শেষ সময় "}
            time={`ভোর ${convertToBanglaNumber(
              sahariHour,
            )} টা ${convertToBanglaNumber(sahariMinute)} মিনিট`}
            targetTime={sahariTime}
            nextScheduleMassage={"আগামীকাল ইফতারের সময় "}
            nextScheduleTime={`সন্ধ্যা ${convertToBanglaNumber(
              iftarHour,
            )} টা ${convertToBanglaNumber(iftarMinute)} মিনিট`}
          />
        ) : afterStartOfTheDay && beforeCurrentDaySahariTime ? (
          <Timer
            key={sahariTime}
            title={"আজকে সেহরির শেষ সময় "}
            time={`ভোর ${convertToBanglaNumber(
              sahariHour,
            )} টা ${convertToBanglaNumber(sahariMinute)} মিনিট`}
            targetTime={sahariTime}
            nextScheduleMassage={"আজকে ইফতারের সময় "}
            nextScheduleTime={`সন্ধ্যা ${convertToBanglaNumber(
              iftarHour,
            )} টা ${convertToBanglaNumber(iftarMinute)} মিনিট`}
          />
        ) : afterCurrentDaySahariTime && beforeSahariTimeWithExtraMin ? (
          <TimerFinish
            rerenderCounter={rerenderCounter}
            Image={SahariIconImage}
            Massage={"সেহরির সময় হয়ে গিয়েছে"}
            nextScheduleMassage={"আজকে ইফতারের সময় "}
            nextScheduleTime={`সন্ধ্যা ${convertToBanglaNumber(
              iftarHour,
            )} টা ${convertToBanglaNumber(iftarMinute)} মিনিট`}
          />
        ) : afterSahariTimeWithExtraMin && beforeCurrentDayIftarTime ? (
          <Timer
            key={iftarTime}
            title={"আজকের ইফতারের সময় "}
            time={`সন্ধ্যা ${convertToBanglaNumber(
              iftarHour,
            )} টা ${convertToBanglaNumber(iftarMinute)} মিনিট`}
            targetTime={iftarTime}
            nextScheduleMassage={" আগামীকাল সেহরির শেষ সময় "}
            nextScheduleTime={`ভোর ${convertToBanglaNumber(
              sahariHour,
            )} টা ${convertToBanglaNumber(sahariMinute)} মিনিট`}
          />
        ) : null}
      </div>
    ) : null;

  return (
    <div>
      {moment().isAfter(lastRamadanIftarTime) && moment().isBefore(eidDay) ? (
        <EidMubarakMassage />
      ) : moment().isAfter(eidDay) ? null : (
        countdownTimers
      )}
    </div>
  );
};

export default CountdownTimers;
