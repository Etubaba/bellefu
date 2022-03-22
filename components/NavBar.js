import Image from "next/image";
import BellefuLogo from "../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
const NavBar = () => {
  return (
    <nav className="flex px-12 py-6 bg-bellefuGreen items-center justify-between">
      {/* left side */}
      <div className="bg-white p-3 rounded-md w-28 h-8 flex items-center justify-center">
        {" "}
        <Image
          src={BellefuLogo}
          alt="bellefu-logo"
          object-Fit="cover"
          className="rounded-lg p-3 "
        />
      </div>
      {/* right side */}
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
    </nav>
  );
};

export default NavBar;
