import React from "react";
import Logo from "../assets/Logo.png";
import NotInLineLogo from "../assets/NotInLineLogo.png";
import PlayStore from "../assets/PlayStore.png";
const Navbar = () => {
  return (
    <div className="w-screen h-[83px] flex items-center justify-around absolute z-10 bg-white">
      <div className="flex w-[277px] w-max-[23%] h-[64px]">
        <img src={Logo} alt="NotInLineLogo" className="w-[63px] h-[64px]" />
        <img
          src={NotInLineLogo}
          alt="NotInLine"
          className="w-[214px] h-[4rem]"
        />
      </div>
      <div className="flex items-center gap-[64px] w-[53%]">
        <ul className="list-none flex justify-between items-center w-[423px] h-[41px] gap-[22px]">
          <li className=" text-[16px] font-[400] cursor-pointer">Home</li>
          <li className=" text-[16px] font-[400] cursor-pointer">
            Health Conditions
          </li>
          <li className=" text-[20px] text-[#138ED1] font-[600] cursor-pointer">
            Lab tests
          </li>
          <li className=" text-[16px] font-[400] cursor-pointer">Medicines</li>
        </ul>
        <div className="flex gap-[17px]">
          <button className="w-[113px] h-[35px] rounded-[4px] bg-[#00486c] text-white text-[14px] font-[400]">
            For patients
          </button>
          <button className="w-[113px] h-[35px] rounded-[4px] bg-[#00486c] text-white text-[14px] font-[400]">
            For hospitals
          </button>
        </div>
      </div>

      <button className="bg-[#333] w-[115px] w-max-[23%] h-[35px] rounded-[4px] flex gap-[7px] items-center justify-center">
        <img src={PlayStore} alt="playstore" className="w-[21px] h-[20px]" />
        <p className="w-[61px] text-white text-[12px] font-body font-[500]">
          Play store
        </p>
      </button>
    </div>
  );
};

export default Navbar;
