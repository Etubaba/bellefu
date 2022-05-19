import React from "react";
import { useRouter } from "next/router";
import {
  MdAccountBox,
  MdPending,
  MdNotifications,
  MdPublishedWithChanges,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import NavLink from "./NavLink";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../features/bellefuSlice";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const UserSideBar = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
      {
        icon: BsShop,
        text: "Shop",
        to: "/users/shop",
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
    <div className="hidden lg:inline h-[90vh]  overflow-auto bg-bellefuWhite w-[25vw] mr-3 mt-6">
      {loading ? (
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
      ) : (
        <Skeleton
          className="rounded hidden sm:block lg:block "
          variant="rectangular"
          animation="wave"
          width={330}
          height={900}
        />
      )}
    </div>
  );
};

export default UserSideBar;
