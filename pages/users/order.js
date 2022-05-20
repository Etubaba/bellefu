import React from "react";
import { MdHistoryToggleOff, MdCheck } from "react-icons/md";
import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { profileDetails, homeData } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const order = () => {
  const user = useSelector(profileDetails);
  const currencyLogo = useSelector(homeData);
  const [orderhistory, setOrderHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bellefu.inmotionhub.xyz/api/shop/list/order/${user?.id}`)
      .then((res) => {
        setOrderHistory(res.data.data);
      })
      .catch((err) => {
        toast.error(`${err}`, {
          position: "top-center",
        });
      });
  }, []);
  console.log(orderhistory);
  return (
    <div className="rounded-lg md:mt-5 mt-2 bg-bellefuWhite   h-auto w-full md:w-auto">
      <div className="flex justify-between  px-10 md:py-6 py-2 border-b">
        <h1 className="font-semibold">My Order Details</h1>
      </div>
      <div className="px-2 md:px-5 lg:px-10 py-6 ">
        {orderhistory?.map((order, index) => (
          <div
            key={index}
            className="block md:flex sm:flex lg:flex border rounded-3xl bg-[#F8F8F8] p-4 my-5 ml-5 justify-between "
          >
            <div className="block sm:flex md:flex lg:flex ">
              <img
                alt="order"
                src={`https://bellefu.inmotionhub.xyz/get/product/image/${
                  order?.images === null
                    ? "6256e0e3bc1dd.9RgvW1Z21649860835.jpg"
                    : order?.images[0]
                }`}
                className="object-cover  flex  sm:w-40 sm:h-40 md:w-40 md:h-32 lg:h-32  lg:w-40 mr-5  rounded-md"
              />
              <div className=" ">
                <h3 className="text-md sm:text-xl   md:text-2xl  mb-2">
                  {order?.title}
                </h3>

                <p className="md:mb-7 mb-3 text-xs   md:text-lg ">
                  Qty:{order?.product_quantity}
                </p>
                <div className="flex sm:block justify-between">
                  <h1 className="text-crystamolPrice inline-block md:hidden flex-col text-lg  font-bold">
                    <p
                      className="mr-1 "
                      dangerouslySetInnerHTML={{
                        __html: currencyLogo?.defaultCurrency,
                      }}
                    />
                    {order?.price}
                  </h1>
                  <p className="block md:hidden lg:hidden font-semibold">
                    Total:
                    <p
                      className="mr-1 "
                      dangerouslySetInnerHTML={{
                        __html: currencyLogo?.defaultCurrency,
                      }}
                    />
                    {order?.product_quantity * order?.price}
                  </p>
                </div>

                <p className="flex space-x-2 text-[#FF5F00]">
                  <span className="text-sm md:text-lg">{order?.orderTime}</span>
                </p>
                <div>
                  <button
                    className={
                      order?.status === "processing"
                        ? "bg-bellefuOrange flex flex-col justify-center items-center md:hidden text-center hover:bg-orange-300 px-7  py-2 text-white w-full sm:w-auto md:w-auto lg:w-auto rounded-full mt-3"
                        : "bg-bellefuGreen flex flex-col justify-center items-center md:hidden text-center hover:bg-green-400 px-7  py-2 text-white w-full sm:w-auto md:w-auto lg:w-auto rounded-full mt-3"
                    }
                  >
                    <span className="flex space-x-4">
                      <span className="text-xs">{order?.status}</span>
                      <span className="text-xs mt-1">
                        {order?.status === "processing" ? (
                          <MdHistoryToggleOff />
                        ) : (
                          <MdCheck />
                        )}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:inline-block">
              <div className="  flex-col items-end justify-end ">
                <h1 className="text-crystamolPrice hidden flex-row md:inline-block  text-lg md:text-2xl font-semibold">
                  <p
                    className="mr-1 "
                    dangerouslySetInnerHTML={{
                      __html: currencyLogo?.defaultCurrency,
                    }}
                  />
                  {order?.price}{" "}
                </h1>
                <p className="font-semibold mt-1 flex">
                  {" "}
                  Total:
                  <p
                    className="mr-1 "
                    dangerouslySetInnerHTML={{
                      __html: currencyLogo?.defaultCurrency,
                    }}
                  />
                  {order?.product_quantity * order?.price}
                </p>
                <button
                  onClick={() => router.push("/profile/orderdetails")}
                  className={
                    order?.status === "processing"
                      ? "bg-bellefuOrange hover:bg-orange-300 px-5 md:text-md text-sm  md:px-7 py-2 text-white flex justify-center items-center rounded-full mt-3 md:mt-5"
                      : "bg-bellefuGreen hover:bg-green-400 px-5 md:text-md text-sm  md:px-7 py-2 text-white flex justify-center items-center rounded-full mt-3 md:mt-5"
                  }
                >
                  <span className="flex space-x-4">
                    <span className="text-[8px] md:text-sm">
                      {order?.status}
                    </span>
                    <span className="text-[8px] md:text-sm mt-1">
                      {order?.status === "processing" ? (
                        <MdHistoryToggleOff />
                      ) : (
                        <MdCheck />
                      )}{" "}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
order.Layout = Layout;

export default order;
