import React from "react";
import Copyright from "../assets/Copyright.svg";
import FooterLogo from "../assets/FooterLogo.svg";
const Footer = () => {
  return (
    <div className="w-screen h-[811px] bg-[#1F1F1F] absolute top-[2705px] pl-[26px] pr-[23px]">
      <div>
        <div>
          <img src={FooterLogo} alt="FooterLogo" />
          <p className="text-white w-[470px] text-[20px] font-[400]">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>
        </div>
        <div></div>
      </div>
      <hr className="text-white relative bottom-[-712px]" />
      <div className="flex gap-[19px] absolute bottom-[121px]">
        <img
          src={Copyright}
          alt="Copyright"
          className="w-[27px] h-[30px] ml-[24px]"
        />
        <p className="text-white">2021-2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
