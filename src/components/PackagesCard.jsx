import React from "react";
import PackagesData from "../data/PackagesData";
import star from "../assets/star.svg";
const PackagesCard = () => {
  return (
    <>
      {PackagesData.map((item) => (
        <div
          key={item.id}
          className="w-[333px] h-[329px] bg-[#FFF] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col pt-[21px] pl-[22px]">
            <h4 className="text-[2F2F2F] text-[26px] font-[600] w-[235px]">
              {item.title}
            </h4>
            <p className="flex mt-[18px]">
              <span className="text-[#2F2F2F] text-[20px] font-[600]">
                {item.rating}
              </span>
              <img src={star} alt="star" className="ml-[3px] mr-[4px]" />
              <span className="text-[#6E6E6E] text-[20px] font-[500]">
                ({item.reviews} Reviews)
              </span>
            </p>
            <p className="text-[#2F2F2F] text-[20px] font-[600] mt-[9px] mb-[5px]">
              Number of tests - {item.tests}
            </p>
            <p className="text-[#6E6E6E] text-[18px] font-[500] flex gap">
              MRP:{" "}
              <span className=" line-through text-[#6E6E6E] text-[20px] font-[500] ml-[5px]">
                {item.MRP}
              </span>{" "}
              <span className="text-[#2F2F2F] text-[20px] font-[500] ml-[21px]">
                {item.onSale}
              </span>
            </p>
          </div>
          <button className="w-[264px] h-[43px] rounded-[6px] bg-[#008DD9] mt-[24px] ml-[44px] text-[20px] text-[#FFF] font-[500] mb-[40px]">
            Book now
          </button>
        </div>
      ))}
    </>
  );
};

export default PackagesCard;
