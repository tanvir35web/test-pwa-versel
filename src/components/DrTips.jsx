import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import PopupVideo from "./PopupVideo";
import Video from "./Video";
import videoData from "../data/video-data";
import { analytics } from "../firebase-config/firebase";
import { logEvent } from "firebase/analytics";

const DrTips = () => {
  const [isPopup, setPopup] = useState(false);

  function handleClickPopup() {
    setPopup(!isPopup);
  }

  const [url, setUrl] = useState(videoData[0].link);

  function handleClick(videoItem) {
    logEvent(analytics, "video_click", { video_id: videoItem.noOfVideo });
    setPopup(!isPopup);
    setUrl(videoItem.link);
  }

  return (
    <div className="mt-10 flex flex-col gap-0 py-4 pb-12 md:gap-0 md:pb-28">
      <h5 className="font-inter mb-4 text-center text-lg font-semibold leading-[21.2px] text-docWhite-800 md:text-[32px] md:leading-[42.4px] lg:mb-10">
        রমজানে সুস্থতায় ডাক্তারের পরামর্শ
      </h5>

      {isPopup && (
        <div
          onClick={handleClickPopup}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80 backdrop-blur"
        >
          <PopupVideo url={url} />

          <IoClose
            className="absolute right-12 top-10 cursor-pointer text-white "
            size={40}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 ">
        {videoData.map((videoItem, index) => (
          <Video
            key={index}
            onClick={() => handleClick(videoItem)}
            imageSrc={videoItem.thumbnail}
            title={videoItem.title}
          />
        ))}
      </div>
    </div>
  );
};

export default DrTips;
