import React from "react";

const MobileMenu = ({ setMobileMenu }) => {
  return (
    <ul className="flex flex-col pt-2 md:hidden absolute top-[60px] left-0 w-full h-[calc(100vh-50px)] text-[16px] font-[400] bg-white border-t text-black">
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Home
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Health Conditions
      </li>
      <li
        className=" text-[20px] text-[#138ED1] font-[600] py-4 px-5 border-b"
        onClick={() => setMobileMenu(false)}
      >
        Lab tests
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Medicines
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        For patients
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        For hospitals
      </li>
    </ul>
  );
};

export default MobileMenu;
