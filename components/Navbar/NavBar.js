import Image from "next/image";
import { useState } from "react";
import BellefuLogo from "../../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";

import MobileNavbar from "./MobileNavbar";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <nav className="flex px-2 py-4 lg:px-12 lg:py-3 bg-bellefuGreen items-center justify-between sticky top-0 z-50 ">
      {/* left side */}
      <div className="bg-white p-2 rounded-md w-24 md:w-24 h-10 md:h-12 flex items-center justify-center">
        {" "}
        <Image
          src={BellefuLogo}
          alt="bellefu-logo"
          object-fit="cover"
          className="rounded-lg p-3 "
        />
      </div>
      {/* right side */}

      {/* mobile right side */}

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {!isOpen && <FiMenu className="w-10 h-10 text-white" />}
      </button>

      {/* mobile sidebar */}

      {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="hidden md:inline-flex">
        <div className="flex space-x-4 items-center">
          <div className="text-white space-x-4 capitalize text-md font-semibold">
            <a href="">Webinar</a>
            <a href="">Bellefu Radio</a>
            <a href="">Blog</a>
          </div>

          <div className="px-3 text-white text-2xl -mt-2">|</div>
          {/* the user profile */}
          <div className="hidden md:inline-block">
            <div className="flex items-center space-x-2 relative">
              <Image
                src="https://i.pinimg.com/236x/46/93/92/46939219a632dff85f48387b3ea4afb4.jpg"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <p className="text-white font-semibold">
                Hi <span>Mavin</span>
              </p>
              <div className="">
                {open === false ? (
                  <div onClick={() => setOpen(!open)}>
                    <AiOutlineCaretRight className="text-white cursor-pointer" />
                  </div>
                ) : (
                  <div onClick={() => setOpen(!open)}>
                    <AiOutlineCaretDown className="text-white cursor-pointer" />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* drop down beginning */}
          {open === true ? (
            <div className="absolute w-52 bg-bellefuWhite rounded border z-40 shadow-lg top-12 right-80 space-y-3">
              <ul className="rounded px-2 py-3 space-y-2">
                <div className="flex items-center space-x-4 mb-2 bg-bellefuBackground px-2 rounded-md py-3">
                  <BsFillPersonFill className="w-4 h-4 text-bellefuOrange" />
                  <p className="text-xs text-bellefuBlack1 font-normal whitespace-nowrap">
                    My Account
                  </p>
                </div>
                <li className="px-2 py-1  flex space-x-3 items-center cursor-pointer rounded">
                  <RiMessage2Fill className="w-4 h-4 text-bellefuBlack1" />
                  <span className="text-xs text-gray-500">Messages</span>
                </li>
                <li className="px-2 py-1  flex space-x-3 items-center cursor-pointer rounded">
                  <AiFillHeart className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-bellefuBlack1">
                    Favourite Products
                  </span>
                </li>
                <li className="border " />
                <li className="px-2 py-1  flex space-x-3 items-center cursor-pointer rounded">
                  <RiLogoutBoxFill className="w-5 h-5 text-bellefuOrange" />
                  <span className="text-xs text-bellefuOrange">Logout</span>
                </li>
              </ul>
            </div>
          ) : null}
          {/* dropdown end */}
          {/* end of user profile */}
          {/* login register place */}
          <div className="text-white space-x-5 capitalize text-md font-semibold">
            <a href="">Register</a>
            <a href="">Login</a>
          </div>

          <IoMdNotifications className="text-white w-5 h-5" />
          <div className="flex items-center bg-bellefuOrange px-2 py-1 rounded-md space-x-1">
            <IoMdAddCircleOutline className="text-white w-4 h-4 text-md font-semibold" />
            <p className="text-white capitalize text-md font-semibold">
              Post free ads
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
