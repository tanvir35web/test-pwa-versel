import React from "react";
import ramadan_calender_2024 from "../assets/ramadan_calendar.jpg";

const DownloadCalender = () => {
  return (
    <div className="mt-4 text-center md:mt-10">
      <div className="flex flex-col items-center justify-center gap-1 px-4 md:flex-row md:gap-3">
        <p className="text-sm font-normal leading-5 md:text-[22px]">
          পুরো রমজান মাসের ক্যালেন্ডার ডাউনলোড করতে
        </p>
        <a
          href={ramadan_calender_2024}
          download="Ramadan_Calendar_24"
          className="text-sm font-bold leading-5 text-docBlue-900 underline md:text-[22px]"
        >
          এখানে ক্লিক করুন
        </a>
      </div>
    </div>
  );
};

export default DownloadCalender;
