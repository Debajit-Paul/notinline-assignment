import React from "react";
import Form from "./Form";
import Offer from "../assets/Offer.svg";
import Hero from "../assets/Hero.svg";
import Vector from "../assets/Vector.svg";
const MainTop = () => {
  return (
    <>
      <div className="md:hidden flex flex-col items-center relative top-[110px] px-[33px]">
        <div>
          <h5 className="text-[#333] text-center text-[1.8rem] font-[600] w-[19rem]">
            <span className="text-[#138ED1]">Best in class</span> lab tests!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[13rem] h-[0.7rem] ml-[-1rem]"
          />
        </div>
        <div className="flex items-center justify-center rounded-[35px] mt-[16px] bg-[#00486C] w-[19rem] h-[3rem] px-[8px] py-[3px]">
          <p className="text-white font-[400] text-[20px]">
            Get Full Body Check up <span>Now</span> at
          </p>
        </div>
        <div className="flex items-center justify-around rounded-[35px] mt-[0.5rem] font-[600] text-white text-[14px] py-[6px] px-[18px] w-[184px] h-[33px] bg-[#00A6FF]">
          <p>
            ₹<span className="line-through">5,999</span>
          </p>
          <p>₹ 999</p>
          <p>70% OFF</p>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////// */}
      <div className="flex absolute md:top-[123px] top-[290px]">
        <div className="flex flex-col w-[45%] md:ml-[123px]">
          <Form />
          <img src={Offer} alt="offer" className="hidden md:flex mt-[13px]" />
        </div>
        <img
          src={Hero}
          alt="hero"
          className="hidden md:flex w-[45%] h-[623px]"
        />
      </div>
    </>
  );
};

export default MainTop;
