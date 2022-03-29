import Image from "next/image";
import { useState } from "react";
import BellefuLogo from "../../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import MobileNavbar from "./MobileNavbar";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <nav className="flex px-2 py-4 lg:px-12 lg:py-3 bg-bellefuGreen items-center justify-between sticky top-0 z-50 ">
      {/* left side */}
      <div className="bg-white p-2 rounded-md w-24 md:w-20 h-10 md:h-8 flex items-center justify-center">
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

      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        {!isOpen && <FiMenu className="w-10 h-10 text-white" />}
      </button>

      {/* mobile sidebar */}

      {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="hidden lg:inline-flex">
        <div className="flex space-x-4 items-center">
          <div className="text-white space-x-4 capitalize text-md font-semibold">
            <a href="">Webinar</a>
            <a href="">Bellefu Radio</a>
            <a href="">Blog</a>
          </div>

          <div className="px-3 text-white text-2xl -mt-2">|</div>
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
