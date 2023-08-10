import React from "react";

const MobileMenu = ({ setMobileMenu }) => {
  return (
    <ul className="flex flex-col pt-2 md:hidden font-bold absolute top-[80px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Home
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Health Conditions
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Lab tests
      </li>
      <li className="py-4 px-5 border-b" onClick={() => setMobileMenu(false)}>
        Medicines
      </li>
    </ul>
  );
};

export default MobileMenu;
