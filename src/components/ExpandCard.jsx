import React from "react";
import { useState } from "react";
import ExpandCardData from "../data/ExpandCardData";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
const ExpandCard = () => {
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState(null);
  return (
    <>
      {ExpandCardData.map((item) => (
        <div
          key={item.id}
          className="w-[19.5rem] bg-[#FFF] rounded-[2.4rem] font-body drop-shadow-[0_4px_5px_rgba(0,0,0,0.25)]"
        >
          <div
            className="flex items-center px-[0.94rem] py-[1.31rem]"
            onClick={() => {
              setActive(active ? null : item.id);
              setExpand(!expand);
            }}
          >
            <img
              src={item.img}
              alt="Icon"
              className="w-[2.5rem] h-[2.5rem] rounded-[2.5rem]"
            />
            <h4 className="flex items-center justify-between text-[#2F2F2F] text-[0.875rem] font-[600] ml-[0.8rem] w-[13rem]">
              {item.title}
              {expand && active == item.id ? (
                <VscChromeClose size={"25px"} />
              ) : (
                <IoMdArrowDropdown size={"25px"} />
              )}
            </h4>
          </div>
          {active === item.id && (
            <div className="px-[3rem] pb-[2rem]">
              <p className="w-[14rem] font-body text-[#2F2F2F] text-[0.75rem] font-[500]">
                {item.dec}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ExpandCard;
