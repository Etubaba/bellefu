import React, { useState } from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill, RiCloseFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import moment from "moment";

const SingleProductMobileSidebar = ({ mobileDetails }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className="bg-bellefuWhite">
      <div className="flex flex-col space-y-3">
        {/* section 1 */}
        <div className="w-full">
          <div className=" bg-bellefuBackground flex flex-col items-center justify-center py-2">
            <p className="text-sm text-bellefuBlack1">Product Price</p>{" "}
            <p className="font-bold text-bellefuTitleBlack text-sm">
              <span
                dangerouslySetInnerHTML={{
                  __html: mobileDetails[0]?.currencySymbol,
                }}
              />

              {mobileDetails[0]?.productPrice}
            </p>
          </div>
          {/* border line */}
          <div className="border-b" />
          {/* user brief info */}
          <div className="mt-2 flex flex-col items-center justify-center">
            <div className="">
              <Image
                src={`https://bellefu.inmotionhub.xyz/get/user/images/${mobileDetails[0]?.userAvatar}`}
                alt="UserImage"
                width={70}
                height={70}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-bellefuTitleBlack font-semibold">
                {" "}
                {mobileDetails[0]?.productOwner}
              </p>
              <GoVerified className="w-3 h-3 text-bellefuGreen" />
            </div>
            <div className="flex items-center mt-1 space-x-2">
              <p className="text-sm text-gray-400 font-medium">Registered :</p>
              <p className="text-xs text-bellefuBlack1 font-medium tracking-wider">
                {" "}
                {moment(mobileDetails[0]?.joined).format("MMM Do YYYY")}
              </p>
            </div>
          </div>

          {/* call and message */}
          <div className="flex flex-col">
            {/* message */}
            <div
              className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuOrange justify-center cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <RiMessage2Fill className="w-4 h-4 text-white" />{" "}
              <p className="text-white font-medium text-sm">Messages</p>
            </div>
            {/* message box */}
            {open === true && (
              <div className="border bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
                <div className="flex items-center py-1">
                  <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                    <RiMessage2Fill className="w-4 h-4 text-gray-500" />{" "}
                    <p className="text-gray-400 font-normal text-sm">
                      Messages
                    </p>
                  </div>
                  <RiCloseFill
                    className="ml-12 w-7 h-7 text-gray-400 pr-1 cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>

                <textarea
                  rows="5"
                  className="w-full bg-transparent px-3 outline-none text-xs"
                ></textarea>
              </div>
            )}

            {/* end of message box */}

            {/* call */}
            <div className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuGreen justify-center">
              <IoIosCall className="w-4 h-4 text-white" />
              <p className="text-white font-medium text-sm">Call</p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="w-full ">
          <div className="space-y-3">
            {/* view profile */}
            <div className="flex items-center border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
              {" "}
              <BsFillPersonFill className="w-5 h-5 text-gray-500" />
              <p className="text-gray-400 font-medium">View Profile</p>
            </div>
            {/* view reviews */}
            <div className="flex items-center border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
              {" "}
              <BsFillPersonFill className="w-5 h-5 text-bellefuOrange" />
              <p className="text-gray-400 font-normal text-xs">View Reviews</p>
            </div>

            {/* report seller */}
            <div className="mt-5">
              <div className="border rounded-md px-2 flex flex-col items-center justify-center py-3 bg-bellefuBackground ">
                <p className="text-sm text-center text-bellefuBlack1">
                  Did you noticed any illegal activities from this seller
                </p>
                <div
                  className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center"
                  onClick={() => setOpen1(!open1)}
                >
                  {" "}
                  <RiMessageFill className="w-5 h-5 text-red-500" />
                  <p className="text-gray-400 font-normal text-xs cursor-pointer">
                    Report Seller
                  </p>
                </div>
                {/* report box */}
                {open1 === true && (
                  <div className="border -mt-10 bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
                    <div className="flex items-center py-1">
                      <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                        <RiMessageFill className="w-4 h-4 text-red-500" />{" "}
                        <p className="text-gray-400 font-normal text-sm">
                          Report
                        </p>
                      </div>
                      <RiCloseFill
                        className="ml-12 w-7 h-7 text-gray-400 pr-1 cursor-pointer"
                        onClick={() => setOpen1(false)}
                      />
                    </div>

                    <textarea
                      rows="5"
                      className="w-full bg-transparent px-3 outline-none text-xs"
                    ></textarea>
                  </div>
                )}

                {/* end of report box */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMobileSidebar;
