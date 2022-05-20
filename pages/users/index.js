import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MdPending ,MdProductionQuantityLimits} from "react-icons/md";
import { ImPushpin, ImClock } from "react-icons/im";
import { FaWallet ,FaMoneyBillAlt} from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import Layout from "../../components/Layout";
import { profileDetails } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiData } from "../../constant";
import CountUp from "react-countup";
import Skeleton from "@mui/material/Skeleton";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const user = useSelector(profileDetails) || null;
  const [productStat, setProductStat] = useState({});

  useEffect(() => {
    const getuserProductStat = async () => {
      const res = await axios.get(`${apiData}user/product/stats/${user.id}`);
      if (res.data.status) setProductStat(res.data.data);
    };

    getuserProductStat();
  }, [user, setProductStat]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Account Overview</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-auto mt-2" id="profile-overview">
        {user && (
          <div className="">
            <div className="flex flex-col">
              {loading ? (
                <div className="bg-bellefuWhite rounded-[20px] my-4 ">
                  <div className="flex justify-between md:px-8 md:py-6 py-2 px-4">
                    <h1 className="font-semibold">My Profile Details</h1>
                    <button className="text-bellefuOrange hover:underline">
                      <Link href="/users/profile">View Profile</Link>
                    </button>
                  </div>
                  <hr />
                  <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <div
                      id="avatar"
                      className="pb-0 pt-2 md:pb-6 md:pt-6 pl-0 md:pl-20"
                    >
                      <Image
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={
                          user?.avatar
                            ? `https://bellefu.inmotionhub.xyz/get/user/images/${user?.avatar}`
                            : "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg"
                        }
                        alt="avatar"
                        width="150"
                        height="150"
                      />
                    </div>
                    <div
                      id="details"
                      className="m-1 md:ml-24 pt-2 pb-2 md:pt-6 md:pb-6 w-full md:w-[50%]"
                    >
                      <table className="w-[100%] pl-1 md:pl-0">
                        <thead>
                          <tr className="">
                            <th className="text-left pr-10 text-xl pl-10 md:pl-0">
                              First Name
                            </th>
                            <th className="text-left text-xl ">Last Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-left text-xl pl-10 md:pl-0">
                              {user?.first_name}
                            </td>
                            <td className="text-left text-xl">
                              {user?.last_name}
                            </td>
                          </tr>
                        </tbody>
                        <thead>
                          <tr>
                            <th className="text-left text-xl pt-4 pl-10 md:pl-0">
                              Email
                            </th>
                            <th className="text-left text-xl pt-4">Password</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-left pl-10 md:pl-0">
                              {user?.email}
                            </td>
                            <td className="text-left">********</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <Skeleton
                  className="rounded m-2 "
                  variant="rectangular"
                  animation="wave"
                  width={"100%"}
                  height={400}
                />
              )}
              {loading ? (
                <div className="bg-bellefuWhite rounded-[20px] mb-4">
                  <div className="flex justify-between md:px-8 md:py-6 py-2 px-4">
                    <h3 className="font-semibold">Ads Details</h3>
                    <button className="text-bellefuOrange hover:underline">
                      <Link href="/users/myads">View Ads</Link>
                    </button>
                  </div>
                  <hr />
                  <div
                    className="flex flex-col md:flex-row items-center md:justify-between md:px-8 md:py-5 my-3 px-3 md:space-x-4"
                    style={{ fontFamily: "Poppins", fontWeight: "500px" }}
                  >
                    <div className="bg-[#f7f8f6] p-3 text-[#76BA1B] mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto ">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.approved} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <ImPushpin />
                        </span>
                        <span className="ml-2">Published Ads</span>
                      </p>
                    </div>
                    <div className="bg-[#fffbf4] text-[#FFA500] p-3 mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.pending} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <MdPending />
                        </span>
                        <span className="ml-2">Pending Ads</span>
                      </p>
                    </div>
                    <div className="bg-[#fff7f7] text-[#FF0303] p-3 mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.expired} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <ImClock />
                        </span>
                        <span className="ml-2">Expired Ads</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Skeleton
                  className="rounded m-2 "
                  variant="rectangular"
                  animation="wave"
                  width={"100%"}
                  height={400}
                />
              )}
              {loading ? (
                <div className="bg-bellefuWhite rounded-[20px] mb-5">
                  <div className="flex justify-between md:px-8 md:py-6 px-4 py-2">
                    <h1 className="font-semibold">Wallet</h1>
                    <button className="text-bellefuOrange hover:underline">
                      <Link href="/users/my-wallet">View Wallet</Link>
                    </button>
                  </div>
                  <hr />
                  <div className="w-full md:w-9/12 mx-auto my-7 bg-[#F9FDF5] rounded-[10px]">
                    <p className="flex justify-center py-7 font-medium text-4xl items-center">
                      <span className="pt-1 pr-2">
                        <FaWallet />
                      </span>
                      <span>{user?.wallet_balance}</span>
                    </p>
                    <p className="text-center pb-8">
                      <button className="bg-bellefuOrange text-bellefuWhite py-2 px-4 rounded-md">
                        <Link href="/users/add-money">Add Money</Link>
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                <Skeleton
                  className="rounded m-2 "
                  variant="rectangular"
                  animation="wave"
                  width={"100%"}
                  height={400}
                />
              )}
               {loading ? (
                <div className="bg-bellefuWhite rounded-[20px] mb-4">
                  <div className="flex justify-between md:px-8 md:py-6 py-2 px-4">
                    <h3 className="font-semibold">Shop Details</h3>
                    <button className="text-bellefuOrange hover:underline">
                      <Link href="/users/myads">View Shop details</Link>
                    </button>
                  </div>
                  <hr />
                  <div
                    className="flex flex-col md:flex-row items-center md:justify-between md:px-8 md:py-5 my-3 px-3 md:space-x-4"
                    style={{ fontFamily: "Poppins", fontWeight: "500px" }}
                  >
                    <div className="bg-[#f7f8f6] p-3 text-[#76BA1B] mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto ">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.approved} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <AiFillShopping />
                        </span>
                        <span className="ml-2">Total Orders</span>
                      </p>
                    </div>
                    <div className="bg-[#fffbf4] text-[#FFA500] p-3 mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.pending} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <FaMoneyBillAlt />
                        </span>
                        <span className="ml-2">Total Income</span>
                      </p>
                    </div>
                    <div className="bg-[#fff7f7] text-[#FF0303] p-3 mb-3 md:mb-0 rounded-md flex-auto w-full md:w-auto">
                      <p
                        id="number"
                        className="text-center"
                        style={{ fontSize: "50px", lineHeight: "75px" }}
                      >
                        <CountUp end={productStat.expired} />
                      </p>
                      <p
                        id="detail"
                        className="flex items-center justify-center"
                        style={{ fontSize: "25px" }}
                      >
                        <span className="pt-1">
                          <MdProductionQuantityLimits />
                        </span>
                        <span className="ml-2">Total Products</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <Skeleton
                  className="rounded m-2 "
                  variant="rectangular"
                  animation="wave"
                  width={"100%"}
                  height={400}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Index.Layout = Layout;
export default Index;
