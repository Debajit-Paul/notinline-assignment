import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import NotInLineLogo from "../assets/NotInLineLogo.png";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="w-full h-[81px] md:h-[83px] flex items-center justify-between md:justify-around px-[40px] md:px-[40px] absolute z-10 bg-white">
      <div className="flex md:w-[277px] w-[127px] md:h-[64px] h-[29px]">
        <img
          src={Logo}
          alt="NotInLineLogo"
          className="w-[28px] md:w-[63px] h-[29px] md:h-[64px]"
        />
        <img
          src={NotInLineLogo}
          alt="NotInLine"
          className="w-[98px] md:w-[214px] h-[29px] md:h-[4rem]"
        />
      </div>
      <Menu />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -mr-2">
        {mobileMenu ? (
          <VscChromeClose
            className="text-[16px]"
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <BiMenuAltRight
            className="text-[20px]"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
