import React from "react";
import imgMd from "../assets/image sm.png";
import imgSm from "../assets/image md.png";

const Hero = () => {
  return (
    <div className="absolute left-0 right-0 top-0">
      <img
        src={imgSm}
        alt="Hero image for small devices"
        className="hidden h-[466px] w-full object-cover sm:block "
      />
      <img
        src={imgMd}
        alt="Hero image for Large devices"
        className="block h-[259px] w-full object-cover sm:hidden"
      />
    </div>
  );
};

export default Hero;
