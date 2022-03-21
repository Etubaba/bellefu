import Image from "next/image";
import BellefuLogo from "../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
const NavBar = () => {
  return (
    <nav className="flex px-16 py-5 bg-bellefuGreen items-center justify-between">
      {/* left side */}
      <div className="bg-white p-3 rounded-lg w-32 h-14">
        {" "}
        <Image
          src={BellefuLogo}
          alt="bellefu-logo"
          object-Fit="cover"
          className="rounded-lg p-3"
        />
      </div>
      {/* right side */}
      <div className="flex space-x-6 items-center">
        <div className="text-white space-x-5 capitalize text-[20px] font-semibold">
          <a href="">Webinar</a>
          <a href="">Bellefu Radio</a>
          <a href="">Blog</a>
        </div>

        <div className="px-5 text-white text-3xl -mt-2">|</div>
        <div className="text-white space-x-5 capitalize text-[20px] font-semibold">
          <a href="">Register</a>
          <a href="">Login</a>
        </div>

        <IoMdNotifications className="text-white w-7 h-7" />
        <div className="flex items-center bg-bellefuOrange px-4 py-3 rounded-md space-x-2">
          <IoMdAddCircleOutline className="text-white w-6 h-6 text-[20px] font-semibold" />
          <p className="text-white capitalize text-[20px] font-semibold">
            Post free ads
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
