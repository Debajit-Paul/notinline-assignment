import React from "react";
import ArrowLeft from "../assets/ArrowLeft.png";
const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      className=" absolute top-[7rem] left-[0px] z-30 flex items-center justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] w-[6.5rem] h-[6.5rem] rounded-full bg-white"
      onClick={() => onClick()}
    >
      <img src={ArrowLeft} alt="CustomRightArr" />
    </div>
  );
};

export default CustomLeftArrow;
