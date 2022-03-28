import React, { Fragment } from "react";
import { MdAccountBox, MdPending, MdNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import NavLink from "./NavLink";

const UserSideBar = () => {
  const iconValues = [
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
      icon: FaHeart,
      text: "My Favourite Items",
      to: "/users/favourite-items",
    },
    { icon: MdPending, text: "Pending Ads", to: "/users/pending-ads" },
    { icon: ImClock, text: "Expired Ads", to: "/users/expired-ads" },
    { icon: false},
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
    lastElem = iconValues.length - 1;

  return (
    <div className="mt-5 bg-bellefuWhite w-[24vw] h-screen mr-3 rounded-lg pt-4">
      <div className="h-screen w-[23vw] overflow-auto" id="side-bar">
        {iconValues.map((iconValue, index) => {
          if (index === lastElem) {
            return (
              <NavLink
                to={iconValue.to}
                className="flex m-4 mb-24 cursor-pointer hover:bg-red-50 rounded-lg py-1.5"
                icon={iconValue}
                key={index}
              />
            );
          }

          if (iconValue.icon) {
            return (
              <NavLink
                to={iconValue.to}
                className="flex m-4 cursor-pointer hover:bg-red-50 rounded-lg py-1.5"
                icon={iconValue}
                key={index}
              />
            );
          } else {
            return <hr key={index}/>;
          }
        })}
      </div>
    </div>
  );
};

export default UserSideBar;
