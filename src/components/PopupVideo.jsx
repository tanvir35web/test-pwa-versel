import React from "react";

const PopupVideo = ({ url }) => {
  return (
    <div className=" relative aspect-video w-11/12 rounded-xl bg-white shadow-2xl md:w-2/3">
      <div className="aspect-video ">
        <iframe
          className="h-full w-full  rounded-xl"
          src={url}
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PopupVideo;
