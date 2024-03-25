import { useEffect, useState } from "react";
import convertToBanglaNumber from "../utils/convertNumberEnToBn";

const useCurrentDate = () => {
  const [islamicDate, setIslamicDate] = useState("");

  const islamicMonthNamesInBangla = [
    "মুহররম",
    "সফর",
    "রবিউল আউয়াল",
    "রবিউস সানি",
    "জমাদিউল আউয়াল",
    "জমাদিউস সানি",
    "রজব",
    "শাবান",
    "রমজান",
    "শাওয়াল",
    "জুল কাদাহ",
    "জুল হজ্জ",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/gToH?adjustment=-1",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Hijri date");
        }

        const data = await response.json();
        const hijriDate = data.data.hijri;

        // Convert regular numbers to Bengali numerals
        const bengaliDay = convertToBanglaNumber(hijriDate.day);
        const bengaliYear = convertToBanglaNumber(hijriDate.year);

        setIslamicDate(
          `${bengaliDay} ${islamicMonthNamesInBangla[hijriDate.month.number - 1]}, ${bengaliYear}`,
        );
      } catch (error) {
        console.error("Error fetching Hijri date:", error.message);
      }
    };

    fetchData();
  }, []);

  let now = new Date();
  // Specify the locale as 'bn-BD' for Bengali (Bangladesh)
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZoneName: "short",
    hour12: true,
    timeZone: "Asia/Dhaka",
  };

  let banglaDateTime = now.toLocaleString("bn-BD", options);
  let parts = banglaDateTime.split(",");

  let date = parts[1].trim();
  let year = parts[2].trim().slice(0, 4);

  return {
    islamicDate,
    date,
    year,
  };
};

export default useCurrentDate;
