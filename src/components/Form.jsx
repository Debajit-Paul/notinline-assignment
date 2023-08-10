import React from "react";
import call from "../assets/call.svg";
import person from "../assets/person.svg";
import distance from "../assets/distance.svg";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div className="flex flex-col w-[19.5rem] md:w-[470px] h-[20rem] md:h-[420px] rounded-[34px] bg-[#FFF] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
      <h4 className="text-[0.9rem] md:text-[20px] font-body font-[500] text-center md:mt-[26px] mt-[1.25rem]">
        Fill in the details to get a call!
      </h4>
      <span className="flex items-center mt-[20px] gap-[1.31rem]">
        <img
          src={person}
          alt="personIcon"
          className="ml-[0.8rem] md:ml-[35px] w-[30px] h-[30px] md:w-[2.875rem] md:h[1.2.875rem]"
        />
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#E3E3E3] w-[204px] ml-[-1rem] md:w-[299px] h-[33px] md:h-[47px] rounded-[5px] py-[16px] px-[43px] placeholder:text-[13px] md:placeholder:text-[12px]"
        />
      </span>
      <span className="flex items-center mt-[25px] gap-[1.44rem]">
        <img
          src={call}
          alt="callIcon"
          className="ml-[0.8rem] md:ml-[35px] w-[30px] h-[30px] md:w-[46px] md:[1.56rem]"
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-[#E3E3E3] w-[204px] ml-[-1rem] md:w-[299px] h-[33px] md:h-[47px] rounded-[5px] py-[16px] px-[43px] placeholder:text-[13px] md:placeholder:text-[12px]"
        />
      </span>
      <span className="flex items-center mt-[25px] gap-[1.44rem]">
        <img
          src={distance}
          alt="distanceIcon"
          className="ml-[0.8rem] md:ml-[35px] w-[30px] h-[30px] md:w-[46px] md:[1.56rem]"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-[#E3E3E3] w-[204px] ml-[-1rem] md:w-[299px] h-[33px] md:h-[47px] rounded-[5px] py-[16px] px-[43px] placeholder:text-[13px] md:placeholder:text-[12px]"
        />
      </span>
      <span className="flex mt-[16px] gap-[16px] items-center">
        <input
          type="checkbox"
          className="border-[#75CFFF] w-[22px] h-[22px] ml-[1.6rem] md:ml-[60px] checked:bg-[#138ED1] peer relative left-0 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-['']"
        />
        <p className="text-[0.5rem] md:text-[0.6875rem] font-[600] text-[#2F2F2F] w-[200px] md:w-[280px]">
          By continuing, you agree to our T&C and privacy policy
        </p>
      </span>
      <button className="w-[9.75rem] md:w-[236px] h-[1.875rem] md:h-[42px] rounded-[6px] bg-[#138ED1] text-[#FFF] text-[0.875rem] md:text-[20px] font-[500] mt-[0.56rem] md:mt-[16px] ml-[4.5rem] md:ml-[7rem]">
        Proceed
      </button>
    </div>
  );
};

export default Form;
