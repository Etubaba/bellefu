import React from "react";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { login } from "../../features/bellefuSlice";

const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const getIsLoggedIn = useSelector(login);
  const router = useRouter();

  const toPostAds = () => {
    if (getIsLoggedIn) {
      router.push("/postAds");
      setIsOpen(false);
    } else {
      toast.info("Login to make post", { position: "top-right" });
      router.push("/login");
      setIsOpen(false);
    }
  };
  return (
    <div className="absolute bg-[#333333] w-72 space-y-3 px-2 py-5 top-0 -left-1 h-[100vh] text-white lg:hidden shadow-md animate-slide-in">
      <div
        className="-mb-2 flex items-center justify-end"
        onClick={() => setIsOpen(false)}
      >
        {isOpen && <AiOutlineClose className="w-5 h-5" />}
      </div>
      <div className="space-y-2">
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => (router.push("/users"), setIsOpen(false))}
        >
          Dashboard
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => (router.push("/users/profile"), setIsOpen(false))}
        >
          Profile
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://webinar.bellefu.com/" target="_blank">
            Webinar
          </a>
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://radio.bellefu.com/" target="_blank">
            Bellefu Radio
          </a>
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://blog.bellefu.com/" target="_blank">
            Blog
          </a>
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => (router.push("/login"), setIsOpen(false))}
        >
          Login
        </p>
        <p
          className="hover:bg-bellefuOrange bg-gray-400 p-2 text-center"
          onClick={() => (router.push("/register"), setIsOpen(false))}
        >
          Register
        </p>

        <div
          className="flex items-center space-x-1 px-2 py-1 hover:bg-bellefuOrange bg-gray-400 justify-center"
          onClick={toPostAds}
        >
          <IoMdAddCircleOutline className="text-white w-5 h-5" />
          <p className="">post ads</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
