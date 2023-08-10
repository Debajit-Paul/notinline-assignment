import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import NotInLineLogo from "../assets/NotInLineLogo.png";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { VscChromeClose } from "react-icons/vsc";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="w-full h-[60px] md:h-[83px] flex items-center justify-between md:justify-around px-[30px] md:px-[20px] absolute z-10 bg-white">
      <div className="flex md:w-[277px] w-[127px] md:h-[64px] h-[29px]">
        <img
          src={Logo}
          alt="NotInLineLogo"
          className="w-[28px] md:w-[50px] h-[29px] md:h-[50px]"
        />
        <img
          src={NotInLineLogo}
          alt="NotInLine"
          className="w-[98px] md:w-[200px] h-[29px] md:h-[3.5rem]"
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
          <img
            src={menu}
            className="text-[20px]"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
