import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { login } from "../../features/bellefuSlice";
import axios from "axios";
import { apiData } from "../../constant";
import { FcShop } from "react-icons/fc";

const MobileNavbar = ({ isOpen, setIsOpen, username, msgRead }) => {
  const getIsLoggedIn = useSelector(login);
  const router = useRouter();

  const [unseen, setUnseen] = useState(0);

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

  // new message
  useEffect(() => {
    axios
      .get(`${apiData}unseen/messages/count/${username?.id}`)
      .then((res) => setUnseen(res.data.unseen));
  }, [msgRead]);

  return (
    <div className="absolute bg-[#333333] w-72 space-y-3 px-2 py-5 top-0 -left-1 h-[100vh] font-semibold text-white lg:hidden shadow-md animate-slide-in">
      <div
        className="-mb-2 flex items-center justify-end"
        onClick={() => setIsOpen(false)}
      >
        {isOpen && <AiOutlineClose className="w-5 h-5" />}
      </div>

      {/* avatar for mobile */}
      <div
        onClick={() => router.push("/users/messages")}
        className="cursor-pointer items-center justify-center flex"
      >
        <Image
          // src={username?.avatar ? `https://bellefu.inmotionhub.xyz/get/user/images/${username?.avatar}` : "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg"}
          src={`https://bellefu.inmotionhub.xyz/get/user/images/${username?.avatar}`}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        {unseen !== 0 ? (
          <p className="bg-bellefuOrange -top-2 left-5 h-5 w-5 absolute flex items-center justify-center rounded-full">
            <span className="text-white text-[10px] text-center ">
              {unseen}
            </span>
          </p>
        ) : null}
      </div>

      {/* end of avatar for mobile */}

      <div className="space-y-4">
        {getIsLoggedIn && (
          <p
            className=" bg-bellefuOrange p-2 text-center rounded text-lg"
            onClick={() => (router.push("/users"), setIsOpen(false))}
          >
            Dashboard
          </p>
        )}

        <p
          className=" bg-bellefuOrange p-2 text-center rounded text-lg"
          onClick={() => (router.push("/users/profile"), setIsOpen(false))}
        >
          Profile
        </p>
        <p
          className=" bg-bellefuOrange p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://webinar.bellefu.com/" target="_blank">
            Webinar
          </a>
        </p>
        <p
          className=" bg-bellefuOrange p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://radio.bellefu.com/" target="_blank">
            Bellefu Radio
          </a>
        </p>
        <p
          className=" bg-bellefuOrange p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://blog.bellefu.com/" target="_blank">
            Blog
          </a>
        </p>
        {!getIsLoggedIn && (
          <>
            <p
              className=" bg-bellefuOrange p-2 text-center rounded text-lg"
              onClick={() => (router.push("/login"), setIsOpen(false))}
            >
              Login
            </p>
            <p
              className=" bg-bellefuOrange p-2 text-center rounded text-lg"
              onClick={() => (router.push("/register"), setIsOpen(false))}
            >
              Register
            </p>
          </>
        )}

        <p
          className=" bg-bellefuOrange p-2 justify-center rounded text-lg flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <FcShop className="w-6 h-6" />
          <a href="#" target="_blank">
            Create Shop
          </a>
        </p>

        <div
          className="flex items-center space-x-1 px-2 py-1  bg-bellefuOrange justify-center rounded"
          onClick={toPostAds}
        >
          <IoMdAddCircleOutline className="text-white w-5 h-5" />
          <p className="text-lg capitalize">post ads</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
