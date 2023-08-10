import React from "react";
import ExpandCard from "./ExpandCard";
import Vector from "../assets/Vector.svg";
import StaticCard from "./StaticCard";
const MainBottom = () => {
  return (
    <>
      <div className="flex flex-col items-center absolute top-[132.5rem] md:top-[1801px] w-screen mt-[10px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[1.5rem] md:text-[48px] font-[600]">
            Why <span className="text-[#138ED1]">choose</span> us?
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[5.5rem] md:w-[185px] h-[0.5rem] md:h-[20px] ml-[1rem] md:ml-[20px]"
          />
          <p className="mt-[0.87rem] md:mt-[12px] text-center text-[#6E6E6E] font-[500] text-[0.625rem] md:text-[24px] w-[18.625rem] md:w-[43rem]">
            We want you and your heart to be healthy so you can live a happy
            life!
          </p>
        </div>
        <div className="md:hidden flex flex-col gap-[1.2rem] mt-[2.69rem]">
          <ExpandCard />
        </div>
        <div className="absolute top-[16.5rem] left-[6rem] hidden md:flex gap-[2.37rem] mt-[4rem]">
          <StaticCard start={0} range={2} />
          <StaticCard start={2} range={5} margin={5} />
        </div>
      </div>
    </>
  );
};

export default MainBottom;
