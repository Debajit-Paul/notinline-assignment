import React from "react";
import BgMid from "../assets/BgMid.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import Vector from "../assets/Vector.svg";
import Form from "./Form";
import Offer from "../assets/Offer.svg";
import Hero from "../assets/Hero.svg";
import SmallCard from "./SmallCard";
import PackagesCard from "./PackagesCard";
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
    <div className="w-[100%] w-max-[1400px] m-auto bg-[url('../../public/BG.svg')] bg-no-repeat">
      <div className="flex gap-[182px] absolute top-[123px] w-screen">
        <div className="flex flex-col w-[45%] ml-[123px]">
          <Form />
          <img src={Offer} alt="offer" className="mt-[13px]" />
        </div>
        <img src={Hero} alt="hero" className="w-[45%] h-[623px]" />
      </div>

      <img
        src={BgMid}
        alt="MidBackground"
        className="w-fit h-[3075px] relative top-[425px] -z-10"
      />

      <div className="flex flex-col items-center absolute top-[693px] w-screen">
        <div className="flex items-center gap-[47px]">
          <div className="flex items-center">
            <img
              src={icon1}
              alt="NABL Accredited Labs"
              className="w-[60px] h-[66px]"
            />
            <p className="text-[24px] font-[500] text-[#333]">
              NABL Accredited Labs
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={icon2}
              alt="Free sample collection"
              className="w-[60px] h-[66px]"
            />
            <p className="text-[24px] font-[500] text-[#333]">
              Free sample collection
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[36px]">
          <h5 className="text-[#333] text-[48px] font-[600]">
            We Keep <span className="text-[#138ED1]">expanding</span>!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[230px] h-[19px] ml-[200px]"
          />
          <div className="flex mt-[69px] gap-[86px]">
            <SmallCard />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center absolute top-[1121px] w-screen mt-[15px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[48px] font-[600]">
            Top <span className="text-[#138ED1]">packages</span>!
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[230px] h-[19px] ml-[80px]"
          />
          <p className="mt-[18px] text-center text-[#6E6E6E] font-[500] text-[24px] w-[53rem]">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>
          <div className="flex mt-[38px] gap-[69px]">
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

      <div className="flex flex-col items-center absolute top-[1801px] w-screen mt-[10px]">
        <div className="flex flex-col items-center">
          <h5 className="text-[#333] text-[48px] font-[600]">
            Why <span className="text-[#138ED1]">choose</span> us?
          </h5>
          <img
            src={Vector}
            alt="strips"
            className="w-[230px] h-[19px] ml-[80px]"
          />
          <p className="mt-[12px] text-center text-[#6E6E6E] font-[500] text-[24px] w-[43rem]">
            We want you and your heart to be healthy so you can live a happy
            life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
