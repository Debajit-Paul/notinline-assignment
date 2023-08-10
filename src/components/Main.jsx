import React from "react";
import MainTop from "./MainTop";
import MainMid from "./MainMid";
import MainBottom from "./MainBottom";

const Main = () => {
  return (
    <div className="flex flex-col items-center w-full h-[3138px] md:h-[2850px] bg-[url('../src/assets/MobileBG.png')] md:bg-[url('../src/assets/BG.png')] bg-no-repeat bg-cover">
      <MainTop />
      <MainMid />
      <MainBottom />
    </div>
  );
};

export default Main;
