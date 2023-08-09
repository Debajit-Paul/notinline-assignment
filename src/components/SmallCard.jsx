import React from "react";
import SmallCardData from "../data/SmallCardData";
const SmallCard = () => {
  return (
    <>
      {SmallCardData.map((item) => (
        <div
          key={item.id}
          className=" w-[151px] h-[79px] bg-[#138ED1] rounded-[16px] flex flex-col items-center justify-center"
        >
          <p className="text-white text-[24px] font-[600] m-0">{item.title}</p>
          <p className="text-white text-[14px] w-[120px]  text-center m-0">
            {item.dec}
          </p>
        </div>
      ))}
    </>
  );
};

export default SmallCard;
