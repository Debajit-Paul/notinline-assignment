import React from "react";
import ArrowRight from "../assets/ArrowRight.png";
const CustomRightArr = ({ onClick }) => {
  return (
    <div
      className="absolute top-[7rem] right-[2px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center w-[6.5rem] h-[6.5rem] rounded-full bg-white"
      onClick={() => onClick()}
    >
      <img src={ArrowRight} alt="CustomRightArr" />
    </div>
  );
};

export default CustomRightArr;
