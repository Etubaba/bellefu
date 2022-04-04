import React from "react";
import { useRouter } from "next/router";
import { MdAccountBox, MdPending, MdNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import NavLink from "./NavLink";

const MobileUserSidebar = ({ open, setOpen }) => {
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
    <div className="absolute top-[4.5rem] -left-1 bg-bellefuOrange w-72 mr-3 rounded-lg pt-4 animate-slide-in z-50">
      <div className="" id="side-bar">
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
                onClick={() => setOpen(false)}
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

export default MobileUserSidebar;
