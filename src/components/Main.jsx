import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import Vector from "../assets/Vector.svg";
import Form from "./Form";
import Offer from "../assets/Offer.svg";
import Hero from "../assets/Hero.svg";
import SmallCard from "./SmallCard";
import PackagesCard from "./PackagesCard";
import ExpandCard from "./ExpandCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Main = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col items-center w-full h-[3138px] md:h-[2850px] bg-[url('./public/MobileBG.png')] md:bg-[url('./public/BG.png')] bg-no-repeat bg-cover">
      <div className="md:hidden flex flex-col items-center relative top-[110px] px-[33px]">
        <div>
          <h5 className="text-[#333] text-center text-[1.5rem] font-[600] w-[17rem]">
            <span className="text-[#138ED1]">Best in class</span> lab tests!
          </h5>
          <img src={Vector} alt="strips" className="w-[10rem] h-[0.625rem]" />
        </div>
        <div className="flex items-center justify-center rounded-[35px] mt-[16px] bg-[#00486C] w-[19rem] h-[3rem] px-[8px] py-[3px]">
          <p className="text-white font-[400] text-[20px]">
            Get Full Body Check up <span>Now</span> at
          </p>
        </div>
        <div className="flex items-center justify-around rounded-[35px] mt-[0.7rem] font-[600] text-white text-[14px] py-[6px] px-[18px] w-[184px] h-[33px] bg-[#00A6FF]">
          <p>
            ₹<span className="line-through">5,999</span>
          </p>
          <p>₹ 999</p>
          <p>70% OFF</p>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////// */}
      <div className="flex absolute md:top-[123px] top-[300px]">
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
      {/* ///////////////////////////////////////////////////////////// */}
      <div className="flex flex-col items-center absolute top-[670px] w-full">
        <div className="flex flex-col md:flex-row items-center gap-[1.5rem] md:gap-[47px]">
          <div className="flex items-center">
            <img
              src={icon1}
              alt="NABL Accredited Labs"
              className="w-[2rem] md:w-[60px] h-[2.125rem] md:h-[66px]"
            />
            <p className="text-[1rem] md:text-[24px] font-[500] text-[#333]">
              NABL Accredited Labs
            </p>
          </div>
          <div className="flex items-center">
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
            className="w-[8.25rem] md:w-[230px] h-[0..625rem] md:h-[19px] ml-[6rem] md:ml-[200px]"
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

      <div className="flex flex-col items-center absolute top-[1121px] w-full mt-[1rem] md:mt-[15px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[1.5rem] md:text-[48px] font-[600]">
            Top <span className="text-[#138ED1]">packages</span>!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[7.5rem] md:w-[230px] h-[0.6875rem] md:h-[19px] ml-[3rem] md:ml-[80px]"
          />
          <p className="mt-[0.75rem] md:mt-[18px] text-center text-[#6E6E6E] font-[500] text-[0.625rem] md:text-[24px] w-[17.5rem] md:w-[53rem]">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>
          <div className="flex md:flex-row flex-col mt-[38px] gap-[1.69rem] md:gap-[69px]">
            {/* <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              containerClass="mx-[20px] z-[1]"
              itemClass="px-[10px]"
              responsive={responsive}
            > */}
            <PackagesCard />
            {/* </Carousel> */}
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////// */}

      <div className="flex flex-col items-center absolute top-[135rem] md:top-[1801px] w-screen mt-[10px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[1.5rem] md:text-[48px] font-[600]">
            Why <span className="text-[#138ED1]">choose</span> us?
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[5.5rem] md:w-[230px] h-[0.5rem] md:h-[19px] ml-[1rem] md:ml-[80px]"
          />
          <p className="mt-[0.87rem] md:mt-[12px] text-center text-[#6E6E6E] font-[500] text-[0.625rem] md:text-[24px] w-[18.625rem] md:w-[43rem]">
            We want you and your heart to be healthy so you can live a happy
            life!
          </p>
        </div>
        <div className="flex flex-col gap-[0.87rem] mt-[2.69rem]">
          <ExpandCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
