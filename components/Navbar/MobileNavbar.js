import React from "react";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="absolute bg-[#333333] w-80 space-y-3 px-2 py-5 top-0 -left-1 h-[80vh] text-white lg:hidden shadow-md animate-slide-in">
      <div
        className="-mb-2 flex items-center justify-end"
        onClick={() => setIsOpen(false)}
      >
        {isOpen && <AiOutlineClose className="w-5 h-5" />}
      </div>
      <div>
        <p className="hover:bg-bellefuOrange p-2 text-center">Dashboard</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Profile</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Webinar</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Bellefu Radio</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Blog</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Login</p>
        <p className="hover:bg-bellefuOrange p-2 text-center">Register</p>

        <div className="flex items-center space-x-1 px-2 py-1 hover:bg-bellefuOrange justify-center">
          <IoMdAddCircleOutline className="text-white w-5 h-5" />
          <p className="">post ads</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
