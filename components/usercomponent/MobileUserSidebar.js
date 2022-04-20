import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  MdAccountBox,
  MdPending,
  MdNotifications,
  MdPublishedWithChanges,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import NavLink from "./NavLink";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../features/bellefuSlice";
import Skeleton from "@mui/material/Skeleton";

const MobileUserSideBar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const router = useRouter(),
    iconValues = [
      { icon: MdAccountBox, text: "Account overview", to: "/users" },
      { icon: false },
      { icon: HiUser, text: "My Profile", to: "/users/profile" },
      {
        icon: MdNotifications,
        text: "Notifications",
        to: "/users/notification",
      },
      { icon: RiMessage2Fill, text: "Messages", to: "/users/messages" },
      { icon: false },
      { icon: ImPushpin, text: "My Ads", to: "/users/myads" },
      {
        icon: MdPublishedWithChanges,
        text: "Published Ads",
        to: "/users/published",
      },
      {
        icon: FaHeart,
        text: "My Favourite Items",
        to: "/users/favourite-items",
      },
      { icon: MdPending, text: "Pending Ads", to: "/users/pending-ads" },
      { icon: ImClock, text: "Expired Ads", to: "/users/expired-ads" },
      { icon: false },
      { icon: FaWallet, text: "My Wallet", to: "/users/my-wallet" },
      { icon: GiWallet, text: "Add Money", to: "/users/add-money" },
      { icon: false },
      {
        icon: HiUser,
        text: "Account Verification",
        to: "/users/verify-account",
      },
      { icon: ImKey, text: "Reset Password", to: "/users/reset-password" },
      { icon: BiLogOut, text: "Logout", to: "/users/logout" },
    ],
    lastElem = iconValues.length - 1,
    handleLogout = () => {
      dispatch(isLoggedIn(false));
      localStorage.clear();
      router.push("/login");
      toast.info("You have logged out successfully", {
        position: "top-center",
      });
    };

  return (
    <div className="lg:hidden bg-bellefuWhite w-full absolute left-0 pt-4 z-40 ">
      <div className="w-full h-[100vh] overflow-auto" id="side-bar">
        <p
          className="absolute flex justify-end pr-3 mt-3 right-0"
          onClick={() => setIsOpen(false)}
        >
          <MdClose className="w-5 h-5" />
        </p>
        {iconValues.map((iconValue, index) => {
          if (index === lastElem) {
            return (
              <p
                className="flex m-4 mb-24 cursor-pointer hover:bg-bellefuBackground rounded-lg py-1.5"
                onClick={handleLogout}
                key={index}
              >
                <span className="pt-1 px-3">
                  <iconValue.icon />
                </span>
                <span>{iconValue.text}</span>
              </p>
            );
          }

          if (iconValue.icon) {
            return (
              <NavLink
                onClick={() => setIsOpen(false)}
                to={iconValue.to}
                className="flex m-4 cursor-pointer hover:bg-bellefuBackground rounded-lg py-1.5"
                icon={iconValue}
                key={index}
              />
            );
          } else {
            return <hr key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default MobileUserSideBar;
