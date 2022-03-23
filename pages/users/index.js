import React, { useState } from "react";
import Image from "next/image";
import { MdAccountBox, MdPending, MdNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin, ImClock } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import UserSideBar from "../../components/usercomponent/UserSideBar";
import Layout from "../../components/Layout";

const Index = () => {
  const [firstName, setFirstName] = useState("fffffffff"),
    [lastName, setLastName] = useState("ttttttttt"),
    [email, setEmail] = useState("ghff"),
    [password, setPassword] = useState("gffss"),
    [image, setImage] = useState(
      "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg"
    );

  return (
    <div className="flex">
      {/* <div className='side-bar h-screen mr-4 overflow-auto'>
        <h3 className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-3'><MdAccountBox /></span>
          <span>Account overview</span>
        </h3>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><HiUser /></span>
          <span className=''>My Profile</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><MdNotifications /></span>
          <span className=''>Notifications</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><RiMessage2Fill /></span>
          <span className=''>Messages</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><ImPushpin /></span>
          <span className=''>My Ads</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><FaHeart /></span>
          <span className=''>My Favourite Items</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><MdPending /></span>
          <span className=''>Pending Ads</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><ImClock /></span>
          <span className=''>Expired Ads</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><FaWallet /></span>
          <span className=''>My Wallet</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><GiWallet /></span>
          <span className=''>Add Money</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><HiUser /></span>
          <span className=''>Account Verification</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><ImKey /></span>
          <span className=''>Reset Password</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><BiLogOut /></span>
          <span>Logout</span>
        </p>
      </div> */}
      <div className="content">
        <div className="flex flex-col">
          <div className="my-2">
            <h3>My Profile Details</h3>
            <hr />
            <div className="flex">
              <div id="avatar" className="pt-20 ">
                <Image
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={image}
                  alt="avatar"
                  width={50}
                  height={50}
                />
              </div>
              <div id="details" className="m-4">
                <div className="my-5 flex">
                  <p className="flex flex-col">
                    <label id="first-name" className="mb-2 font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      htmlFor="first-name"
                      className="mr-3 p-3 rounded-md w-96"
                    />
                  </p>
                  <p className="flex flex-col">
                    <label id="last-name" className="mb-2 font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      htmlFor="last-name"
                      className="p-3 rounded-md w-96"
                    />
                  </p>
                </div>
                <div className="flex">
                  <p className="flex flex-col">
                    <label id="email" className="mb-2 font-semibold">
                      Email
                    </label>
                    <input
                      type="text"
                      value={email}
                      htmlFor="email"
                      className="mr-3 p-3 rounded-md w-96"
                    />
                  </p>
                  <p className="flex flex-col">
                    <label id="password" className="mb-2 font-semibold">
                      Password
                    </label>
                    <input
                      type="text"
                      value={password}
                      htmlFor="password"
                      className="p-3 rounded-md w-96"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <div className="flex justify-between px-8 py-5">
              <h3>Ads Details</h3>
              <button>View Ads</button>
            </div>
            <hr />
            <div
              className="flex justify-between px-8 py-5 my-3"
              style={{ fontFamily: "Poppins", fontWeight: "500px" }}
            >
              <div className="bg-[#f7f8f6] p-3 text-[#76BA1B]">
                <p
                  id="number"
                  className="text-center"
                  style={{ fontSize: "50px", lineHeight: "75px" }}
                >
                  19
                </p>
                <p id="detail" className="flex" style={{ fontSize: "25px" }}>
                  <span className="pt-1">
                    <ImPushpin />
                  </span>
                  <span className="ml-2">Published Ads</span>
                </p>
              </div>
              <div className="bg-[#fffbf4] text-[#FFA500] p-3">
                <p
                  id="number"
                  className="text-center"
                  style={{ fontSize: "50px", lineHeight: "75px" }}
                >
                  9
                </p>
                <p id="detail" className="flex" style={{ fontSize: "25px" }}>
                  <span className="pt-1">
                    <MdPending />
                  </span>
                  <span className="ml-2">Pending Ads</span>
                </p>
              </div>
              <div className="bg-[#fff7f7] text-[#FF0303] p-3">
                <p
                  id="number"
                  className="text-center"
                  style={{ fontSize: "50px", lineHeight: "75px" }}
                >
                  3
                </p>
                <p id="detail" className="flex" style={{ fontSize: "25px" }}>
                  <span className="pt-1">
                    <ImClock />
                  </span>
                  <span className="ml-2">Expired Ads</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <div className="flex justify-between px-8 py-6">
              <h3>Wallet</h3>
              <p>View Wallet</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

Index.Layout = Layout;
export default Index;
