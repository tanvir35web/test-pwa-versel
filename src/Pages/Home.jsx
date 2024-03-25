import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroTittle from "../components/HeroTittle";
import NiyotAndDuya from "../components/NiyotAndDuya";
import HealthTipsSection from "../components/HealthTipsSection";
import DrTips from "../components/DrTips";
import DownloadCalender from "../components/DownloadCalender";
import MobileAppSection from "../components/MobileAppSection";
import Footer from "../components/Footer";

// firebase config file import here
import { analytics } from "../firebase-config/firebase";
import { logEvent } from "firebase/analytics";
import CountdownTimers from "../components/CountdownTimers";
import SearchSection from "../components/SearchSection";
import { useRamadanContext } from "../context-api/RamadanContext";

const Home = () => {

  const { rerenderCountdownTimer } = useRamadanContext()

  useEffect(() => {
    logEvent(analytics, "page_view", { Page: "RamadanCalendar" });
  }, []);

 

  return (
    <div>
      <Header />
      <div className="relative">
        <Hero />
        <div className=" relative m-auto max-w-[1142px] px-4 pt-[50px] md:pt-[105px] ">
          <div>
            <HeroTittle />
            <SearchSection />
            <CountdownTimers key={rerenderCountdownTimer} /> 
            <DownloadCalender />
            <NiyotAndDuya />
            <HealthTipsSection />
            <DrTips />
            <MobileAppSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
