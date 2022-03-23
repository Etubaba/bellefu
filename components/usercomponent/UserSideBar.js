import React from "react";
import { MdAccountBox, MdPending, MdNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import Link from "next/link";

// import { useRouter } from "next/router";

const UserSideBar = () => {

  return (
    <div className="bg-bellefuWhite  mt-5 rounded-lg">
      <div className="side-bar w-[20vw]  h-screen mr-4 overflow-auto">
        <h3 className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-3">
            <MdAccountBox />
          </span>
          <Link href='users'>Account overview</Link>
        </h3>
        <hr />
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <HiUser />
          </span>
          <span className="">
            My Profile
          </span>
        </p>
        <Link href='/users/notification'>
          <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
            <span className="pt-1 px-5">
              <MdNotifications />
            </span>
            <span className="">Notifications</span>
          </p></Link>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <RiMessage2Fill />
          </span>
          <span className="">Messages</span>
        </p>
        <hr />
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <ImPushpin />
          </span>
          <span className="">My Ads</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <FaHeart />
          </span>
          <span className="">My Favourite Items</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <MdPending />
          </span>
          <span className="">Pending Ads</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <ImClock />
          </span>
          <span className="">Expired Ads</span>
        </p>
        <hr />
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <FaWallet />
          </span>
          <span className="">My Wallet</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <GiWallet />
          </span>
          <span className="">Add Money</span>
        </p>
        <hr />
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <HiUser />
          </span>
          <span className="">Account Verification</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <ImKey />
          </span>
          <span className="">Reset Password</span>
        </p>
        <p className="flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5">
          <span className="pt-1 px-5">
            <BiLogOut />
          </span>
          <span>Logout</span>
        </p>
      </div>
    </div>
  );
};

export default UserSideBar;
