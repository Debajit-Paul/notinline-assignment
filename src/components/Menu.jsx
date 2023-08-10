import React from "react";
import PlayStore from "../assets/PlayStore.png";
const Menu = () => {
  return (
    <>
      <div className=" hidden md:flex items-center gap-[64px] w-[53%]">
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

      <button className="bg-[#333] w-[115px] w-max-[23%] h-[35px] rounded-[4px] md:flex hidden gap-[7px] items-center justify-center">
        <img src={PlayStore} alt="playstore" className="w-[21px] h-[20px]" />
        <p className="w-[61px] text-white text-[12px] font-body font-[500] mr-[1.12rem]">
          Play store
        </p>
      </button>
    </>
  );
};

export default Menu;
