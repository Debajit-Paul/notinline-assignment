import React from "react";
import ExpandCardData from "../data/ExpandCardData";
const StaticCard = ({ range, start, margin }) => {
  return (
    <div
      className="flex flex-col gap-[6.75rem]"
      style={{ marginTop: `${margin}rem` }}
    >
      {ExpandCardData.slice(start, range).map((item) => (
        <div
          key={item.id}
          className="w-[23.3125rem] h-[14.125rem] bg-[#FFF] rounded-[2rem] font-body"
        >
          <img
            src={item.img}
            alt="Icon"
            className="w-[7.5rem] h-[7.5rem] rounded-[7.5rem] relative top-[-3.87rem] left-[16.94rem]"
          />
          <div className="relative top-[-6.2rem] left-[1.8rem] flex flex-col items-start">
            <h4 className="text-[#2F2F2F] text-[1.5rem] font-[600] ml-[0.62rem] w-[13rem]">
              {item.title}
            </h4>
            <p className="w-[17.38rem] mt-[1rem] ml-[0.62rem] font-body text-[#2F2F2F] text-[1rem] font-[500]">
              {item.dec}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticCard;
