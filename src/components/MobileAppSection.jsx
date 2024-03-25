import React from "react";
import mobileApp from "../assets/mobileApp.svg";
import appStoreImage from "../assets/App Store.svg";
import browserImage from "../assets/Browser.svg";
import playStoreImage from "../assets/Play Store.svg";

const MobileAppSection = () => {
  return (
    <div className="flex flex-col gap-10 overflow-hidden rounded-t-xl p-4 shadow-allSide md:mb-36 md:flex-row md:items-center md:rounded-xl md:p-10 md:px-14">
      <div className="flex flex-col gap-3 md:gap-6">
        <p className="text-base font-bold leading-[22px] text-docWhite-800 md:text-2xl md:leading-[30px]  lg:text-3xl lg:leading-[42px]">
          রমজানে স্বাস্থ্য বিষয়ক যেকোনো সমস্যায় দিন-রাত ২৪ ঘন্টা মাত্র ১০ মিনিটে
          অভিজ্ঞ ডাক্তারের পরামর্শ নিন DocTime অ্যাপে
        </p>
        <p className="mb-1 text-[14px] font-semibold text-docWhite-800 md:text-xl lg:text-2xl">
          অ্যাপ ডাউনলোডের জন্য{" "}
          <a
            className="font-semibold text-docBlue-900 underline opacity-90"
            href="https://link.doctime.com.bd/app"
            target="_blank"
          >
            এখানে ক্লিক করুন
          </a>
        </p>
        <div className="flex flex-row items-center gap-2 ">
          <a
            href="https://play.google.com/store/apps/details?id=com.media365ltd.doctime"
            target="_blank"
          >
            {" "}
            <img
              className="md:w-44"
              src={playStoreImage}
              alt="PLayStore Image"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/dt-healthcare/id1586295223"
            target="_blank"
          >
            {" "}
            <img
              className="md:w-44"
              src={appStoreImage}
              alt="Apple Store Image"
            />
          </a>
          <a href="https://doctime.com.bd/" target="_blank">
            <img className="md:w-44" src={browserImage} alt="Browser Image" />
          </a>
        </div>
      </div>
      <div className=" m-auto -mb-5 md:-mb-10 ">
        <img
          className="lg:w[800px] h-[200px] w-[200px] md:h-[290px] md:w-[800px] lg:h-[330px]"
          src={mobileApp}
          alt=" DocTime Mobile app "
        />
      </div>
    </div>
  );
};

export default MobileAppSection;
