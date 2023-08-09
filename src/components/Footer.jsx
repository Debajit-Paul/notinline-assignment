import React from "react";
import Copyright from "../assets/Copyright.svg";
import FooterLogo from "../assets/FooterLogo.svg";
import CallFooter from "../assets/CallFooter.svg";
const Footer = () => {
  return (
    <div className=" font-body w-screen h-[811px] bg-[#1F1F1F] absolute top-[2820px] pl-[26px] pr-[23px]">
      <div className="flex justify-between items-center">
        <div className="mt-[81px] flex flex-col">
          <img
            src={FooterLogo}
            alt="FooterLogo"
            className="w-[137px] h-[137px]"
          />
          <p className="text-white w-[422px] text-[18px] font-[400] mt-[32px]">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>

          <div className="text-white w-[420px] h-[88px] rounded-[14px] text-[20px] font-[600] flex items-center mt-[71px] bg-[#FFFFFF3F]">
            <span className="relative left-[35px]">+91</span>
            <input
              type="text"
              className=" relative left-[65px] w-[175px] pl-[35px] py-[15px] border-l-[2px] border-[#00A6FF] focus:outline-none bg-[#565656] text-white"
            />
            <button className="bg-[#00A6FF] w-[117px] h-[88px] relative z-20 left-[96px] rounded-e-[15px]">
              <img src={CallFooter} alt="CallFooter" className="pl-[38px]" />
            </button>
          </div>
        </div>

        <div className="flex justify-evenly w-[50%]">
          <div className="flex flex-col mt-[182px]">
            <p className="text-white text-[32px] font-[600]">Services</p>
            <ul className="list-none flex flex-col mt-[24px] gap-[32px]">
              <li className="text-white text-[15px] font-[400]">
                Appointments
              </li>
              <li className="text-white text-[15px] font-[400]">Lab tests</li>
              <li className="text-white text-[15px] font-[400]">
                A-Z medicine
              </li>
              <li className="text-white text-[15px] font-[400]">
                Doctor support
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-[182px]">
            <p className="text-white text-[32px] font-[600]">Legal</p>
            <ul className="list-none flex flex-col mt-[24px] gap-[32px]">
              <li className="text-white text-[15px] font-[400]">
                General info
              </li>
              <li className="text-white text-[15px] font-[400]">
                Privacy policy
              </li>
              <li className="text-white text-[15px] font-[400]">
                Terms of services
              </li>
              <li className="text-white text-[15px] font-[400]">
                Consultation
              </li>
              <li className="text-white text-[15px] font-[400]">
                How it works
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-[182px]">
            <p className="text-white text-[32px] font-[600]">Talk to us</p>
            <ul className="list-none flex flex-col mt-[24px] gap-[32px]">
              <li className="text-white text-[15px] font-[400]">
                support@notinline.com
              </li>
              <li className="text-white text-[15px] font-[400]">
                appointment@notinline.com
              </li>
              <li className="text-white text-[15px] font-[400]">
                +91 12345 67899
              </li>
              <li className="text-white text-[15px] font-[400]">
                +91 97642 09752
              </li>
            </ul>
          </div>
        </div>
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
