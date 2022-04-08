import React from "react";
import { useRouter } from "next/router";
import {
  MdAccountBox,
  MdPending,
  MdNotifications,
  MdPublishedWithChanges,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import NavLink from "./NavLink";

const UserSideBar = () => {
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
      router.push("/login");
    };

  return (
    <div className="mt-6 bg-bellefuWhite w-80  mr-3 rounded-lg pt-4">
      <div className="h-screen w-80 overflow-auto" id="side-bar">
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

export default UserSideBar;
