import React from "react";
import logo from "../assets/logo.svg";
import InstallPrompt from "./InstallPrompt";

const Header = () => {
  return (
    <div className=" h-full w-full  ">
      <div className="m-auto flex h-12 max-w-[1400px] items-center px-5 md:h-24 md:px-0">
        <img
          className=" h-[32px] w-[104px] md:h-[56px] md:w-[224px]"
          src={logo}
          alt="DocTime logo"
        />
      </div>
    </div>
  );
};

export default Header;
