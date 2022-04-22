import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";
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
  const [unread, setUnread] = useState(2);

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

  //notification method
  const handleNotify = () => {
    if (getIsLoggedIn) {
      router.push("/users/notification");
      setIsOpen(false);
      axios
        .post(`${apiData}change/notification/read`, { userId: username?.id })
        .then((res) => {
          if (res.data.status) {
            console.log("na lie ");
          }
        });
    } else {
      toast.info("Login to view notification", { position: "top-right" });
    }
  };

  // new message
  useEffect(() => {
    axios
      .get(`${apiData}unseen/messages/count/${username?.id}`)
      .then((res) => setUnseen(res.data.unseen));
  }, [msgRead]);

  //new notification
  useEffect(() => {
    axios
      .get(`${apiData}notification/count/${username?.id}`)
      .then((res) => setUnread(res.data.unread));
  }, []);

  return (
    <div className="absolute bg-gradient-to-b to-bellefuGreen from-[#191a1c] w-72 space-y-3 px-2 py-5 top-0 -left-1 h-[100vh] font-semibold text-white lg:hidden shadow-md animate-slide-in">
      <div
        className="-mb-2 flex items-center justify-end"
        onClick={() => setIsOpen(false)}
      >
        {isOpen && <AiOutlineClose className="w-6 h-6" />}
      </div>

      {/* avatar for mobile */}
      {getIsLoggedIn && (
        <>
          <div
            onClick={() => (router.push("/users/messages"), setIsOpen(false))}
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
              <p className="bg-orange-400 -mt-20 ml-14 h-8 w-8 absolute flex items-center justify-center rounded-full">
                <span className="text-white text-base text-center font-semibold">
                  {unseen}
                </span>
              </p>
            ) : null}
          </div>
          <div className="w-3/5 mx-auto flex justify-between">
            <p className="text-lg font-bold tracking-wide ">
              {username?.username}
            </p>
            <div className="relative cursor-pointer" onClick={handleNotify}>
              <IoMdNotifications
                className={
                  unread !== 0
                    ? "text-white w-6 h-6 animate-shake"
                    : "text-white w-6 h-6"
                }
              />

              {unread !== 0 ? (
                <p className=" bg-orange-400 -top-1 left-3 h-5 w-5 absolute flex items-center justify-center rounded-full">
                  <span className="text-white text-sm text-center ">
                    {unread}
                  </span>
                </p>
              ) : null}
            </div>
          </div>
        </>
      )}

      {/* end of avatar for mobile */}

      <div className="space-y-4 text-white">
        {getIsLoggedIn && (
          <p
            className=" bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
            onClick={() => (router.push("/users"), setIsOpen(false))}
          >
            Dashboard
          </p>
        )}
        {getIsLoggedIn && (
          <p
            className=" bg-orange-400 font-bold tracking-wider p-2  text-center rounded text-lg"
            onClick={() => (router.push("/users/profile"), setIsOpen(false))}
          >
            Profile
          </p>
        )}

        {getIsLoggedIn && (
          <p
            className=" bg-orange-400 font-bold tracking-wider p-2  text-center rounded text-lg"
            onClick={() => (router.push("/users/messages"), setIsOpen(false))}
          >
            Message
          </p>
        )}

        {getIsLoggedIn && (
          <p
            className=" bg-orange-400 font-bold tracking-wider p-2  text-center rounded text-lg"
            onClick={() => (
              router.push("/users/favourite-items"), setIsOpen(false)
            )}
          >
            Favourite Products
          </p>
        )}

        <p
          className="bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://webinar.bellefu.com/" target="_blank">
            Webinar
          </a>
        </p>
        <p
          className=" bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://radio.bellefu.com/" target="_blank">
            Bellefu Radio
          </a>
        </p>
        <p
          className="bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
          onClick={() => setIsOpen(false)}
        >
          <a href="https://blog.bellefu.com/" target="_blank">
            Blog
          </a>
        </p>
        {!getIsLoggedIn && (
          <>
            <p
              className="bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
              onClick={() => (router.push("/login"), setIsOpen(false))}
            >
              Login
            </p>
            <p
              className=" bg-orange-400 font-bold tracking-wider p-2 text-center rounded text-lg"
              onClick={() => (router.push("/register"), setIsOpen(false))}
            >
              Register
            </p>
          </>
        )}
        {getIsLoggedIn && (
          <p
            className=" bg-orange-400 font-bold tracking-wider p-2 justify-center rounded text-lg flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <FcShop className="w-6 h-6" />
            <a href="#" target="_blank">
              Create Shop
            </a>
          </p>
        )}
        {getIsLoggedIn && (
          <div
            className="flex items-center space-x-1 px-2 py-1  bg-orange-400 font-bold tracking-wider justify-center rounded"
            onClick={toPostAds}
          >
            <IoMdAddCircleOutline className="text-white w-5 h-5" />
            <p className="text-lg capitalize">post ads</p>
          </div>
        )}

        {getIsLoggedIn && (
          <div className="w-2/5 mx-auto pt-6">
            <div
              className="flex items-center justify-center space-x-1 px-2 py-1  bg-orange-400 font-bold tracking-wider rounded"
              onClick={() => {
                dispatch(isLoggedIn(false));
                localStorage.clear();
                router.push("/login");
                setOpen(false);
                toast.info("You have logged out successfully", {
                  position: "top-center",
                });
              }}
            >
              <RiLogoutBoxFill className="text-white w-6 h-6" />
              <p className="text-base capitalize py-1">Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
