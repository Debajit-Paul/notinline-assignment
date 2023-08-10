import React from "react";
import Vector from "../assets/Vector.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import SmallCard from "./SmallCard";
import PackagesCard from "./PackagesCard";
import PackagesCardMobile from "./PackagesCardMobile";
const MainMid = () => {
  return (
    <>
      <div className="flex flex-col items-center absolute top-[650px] md:top-[692px] w-full">
        <div className="flex flex-col md:flex-row items-center gap-[1rem] md:gap-[47px]">
          <div className="flex items-center gap-[20px]">
            <img
              src={icon1}
              alt="NABL Accredited Labs"
              className="w-[2rem] md:w-[60px] h-[2.125rem] md:h-[66px]"
            />
            <p className="text-[1rem] md:text-[24px] font-[500] text-[#333]">
              NABL Accredited Labs
            </p>
          </div>
          <div className="flex items-center gap-[20px]">
            <img
              src={icon2}
              alt="Free sample collection"
              className="w-[2rem] md:w-[60px] h-[2.125rem] md:h-[66px]"
            />
            <p className="text-[1rem] md:text-[24px] font-[500] text-[#333]">
              Free sample collection
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[1.62rem] md:mt-[36px]">
          <h5 className="text-[#333] text-[1.5rem] md:text-[48px] font-[600]">
            We Keep <span className="text-[#138ED1]">expanding</span>!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[7.5rem] md:w-[230px] h-[0.8rem] md:h-[19px] ml-[6rem] md:ml-[200px]"
          />
          <div className=" grid md:grid-cols-5 grid-cols-2 mt-[1.12rem] md:mt-[69px] gap-[0.63rem] md:gap-[86px]">
            <SmallCard />
            <div className=" w-[151px] h-[79px] bg-[#138ED1] rounded-[16px] flex flex-col items-center justify-center relative left-[80px] md:left-[0px]">
              <p className="text-white text-[24px] font-[600]">5+</p>
              <p className="text-white text-[14px] w-[120px]  text-center">
                Cities present in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////// */}

      <div className="flex flex-col items-center absolute top-[1090px] w-full mt-[1rem] md:mt-[15px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[1.5rem] md:text-[48px] font-[600]">
            Top <span className="text-[#138ED1]">packages</span>!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[7.5rem] md:w-[230px] h-[0.6875rem] md:h-[19px] ml-[3rem] md:ml-[80px]"
          />
          <p className="mt-[0.75rem] md:mt-[18px] text-center text-[#6E6E6E] font-[500] text-[0.65rem] md:text-[24px] w-[18rem] md:w-[53rem]">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>

          <div className=" w-[75rem] hidden md:flex h-[30rem] mt-2 flex-col ml-[-190px]">
            <PackagesCard />
          </div>
          <div className="md:hidden flex flex-col mt-[38px] gap-[1.69rem] md:gap-[69px]">
            <PackagesCardMobile />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMid;
