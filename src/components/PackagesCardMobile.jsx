import React from "react";
import PackagesData from "../data/PackagesData";
import star from "../assets/star.svg";
const PackagesCardMobile = () => {
  return (
    <>
      {PackagesData.map((item) => (
        <div
          key={item.id}
          className="w-[19.5rem] font-body md:w-[343px] h-[16rem] md:h-[329px] bg-[#FFF] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col pt-[1.49rem] md:pt-[21px] p-[1.12rem] md:pl-[22px]">
            <h4 className="text-[2F2F2F] text-[1rem] md:text-[26px] font-[600] w-[14.375rem] md:w-[235px]">
              {item.title}
            </h4>
            <p className="flex items-center mt-[1.18rem] md:mt-[18px]">
              <span className="text-[#2F2F2F] text-[1rem] md:text-[20px] font-[600]">
                {item.rating}
              </span>
              <img
                src={star}
                alt="star"
                className="ml-[0.19rem] md:ml-[3px] mr-[4px]"
              />
              <span className="text-[#6E6E6E] text-[0.75rem] md:text-[20px] font-[500]">
                ({item.reviews} Reviews)
              </span>
            </p>
            <p className="text-[#2F2F2F] text-[1rem] md:text-[20px] font-[600] mt-[0.69rem] md:mt-[9px] mb-[0.38rem] md:mb-[5px]">
              Number of tests - {item.tests}
            </p>
            <p className="text-[#6E6E6E] text-[1.125rem] md:text-[18px] font-[500] flex">
              MRP:{" "}
              <span className=" line-through text-[#6E6E6E] text-[1.25rem] md:text-[20px] font-[500] ml-[0.25rem] md:ml-[5px]">
                {item.MRP}
              </span>{" "}
              <span className="text-[#2F2F2F] text-[1.25rem] md:text-[20px] font-[500] ml-[1.31rem] md:ml-[21px]">
                {item.onSale}
              </span>
            </p>
          </div>
          <button className="w-[12.75rem] md:w-[264px] h-[2.57rem] md:h-[43px] rounded-[6px] bg-[#008DD9] mt-[0] md:mt-[24px] ml-[3.38rem] md:ml-[44px] text-[1rem] md:text-[20px] text-[#FFF] font-[500] md:mb-[40px]">
            Book now
          </button>
        </div>
      ))}
      <p className="md:hidden font-body flex text-[1.12rem] font-[600] text-[#00486C] mt-[-0.5rem] ml-[80%]">
        See All
      </p>
    </>
  );
};

export default PackagesCardMobile;
