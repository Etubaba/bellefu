import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdPending } from "react-icons/md";
import { ImPushpin, ImClock } from "react-icons/im";
import { FaWallet } from "react-icons/fa";
import Layout from "../../components/Layout";
import { profileDetails } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiData } from "../../constant";


const Index = () => {
  const user = useSelector(profileDetails) || null;
  const [productStat, setProductStat] = useState({});

  useEffect(() => {
    const getuserProductStat = async () => {
      const res = await axios.get(`${apiData}user/product/stats/${user.id}`);
      if (res.data.status) setProductStat(res.data.data);
    }

    getuserProductStat();
  }, [user, setProductStat])

  return (
    <div className="w-auto mt-2" id="profile-overview">
      {user &&  
      <div className="">
        <div className="flex flex-col">
          <div className="bg-bellefuWhite rounded-[20px] my-4 ">
            <div className="flex justify-between px-8 py-6">
              <h1 className="font-semibold">My Profile Details</h1>
              <button className="text-bellefuOrange hover:underline"><Link href="/users/profile">View Profile</Link></button>
            </div>
            <hr />
            <div className="flex justify-between">
              <div id="avatar" className="py-6 pl-20">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={user?.avatar?`https://bellefu.inmotionhub.xyz/get/user/images/${user?.avatar}`:"https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg"}
                  alt="avatar"
                  width="150"
                  height="150"
                />
              </div>
              <div id="details" className="m-4 ml-24 py-6 flex-auto">
                <table className="w-4/5">
                  <thead>
                    <tr>
                      <th className="text-left pr-10">First Name</th>
                      <th className="text-left">Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">{user?.first_name}</td>
                      <td className="text-left">{user?.last_name}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th className="text-left">Email</th>
                      <th className="text-left">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left">{user?.email}</td>
                      <td className="text-left">********</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-bellefuWhite rounded-[20px] mb-4">
            <div className="flex justify-between px-8 py-6">
              <h3 className="font-semibold">Ads Details</h3>
              <button className="text-bellefuOrange hover:underline"><Link href='/users/myads'>View Ads</Link></button>
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
                  {productStat.approved}
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
                  {productStat.pending}
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
                  {productStat.expired}
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
          <div className="bg-bellefuWhite rounded-[20px] mb-5">
            <div className="flex justify-between px-8 py-6">
              <h1 className="font-semibold">Wallet</h1>
              <button className="text-bellefuOrange hover:underline"><Link href="/users/my-wallet">View Wallet</Link></button>
            </div>
            <hr />
            <div className="w-9/12 mx-auto my-7 bg-[#F9FDF5] rounded-[10px]">
              <p className="flex justify-center py-7 font-medium text-4xl">
                <span className="pt-1 pr-2"><FaWallet /></span> 
                <span>{user?.wallet_balance}</span>
              </p>
              <p className="text-center pb-8">
                <button className="bg-bellefuOrange text-bellefuWhite py-2 px-4 rounded-md"><Link href="/users/add-money">Add Money</Link></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
};

Index.Layout = Layout;
export default Index;
