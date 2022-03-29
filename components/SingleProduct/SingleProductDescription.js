import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BsFacebook, BsTwitter, BsFillFlagFill } from "react-icons/bs";

const SingleProductDescription = () => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  // const [active, setActive] = useState(false);
  return (
    <div className="bg-bellefuWhite rounded-t-md">
      {/* title section */}
      <div className="flex items-center justify-between px-7">
        <p className="text-3xl text-bellefuTitleBlack font-semibold">
          Bags of Tiger Nuts...
        </p>
        <BsHeart className="w-6 h-6 text-bellefuOrange" />
      </div>

      {/* tag section */}
      <div className="flex items-center justify-between mt-5 px-7">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <BsClockFill className="w-3 h-3 text-gray-500" />
            <p className="text-bellefuBlack1 text-sm">Posted 1 Hour Ago</p>
          </div>
          <div className="flex items-center space-x-2">
            <TiLocation className="w-4 h-4 text-gray-500" />
            <p className="text-bellefuBlack1 text-sm">
              Port Harcourt, Rivers State, Nig.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <AiFillEye className="w-4 h-5 text-gray-500 " />
          <p className="text-bellefuBlack1 text-sm">231 Views</p>
        </div>
      </div>

      {/* description section */}
      <div>
        <p className="px-7 mt-6 text-2xl text-bellefuBlack1 font-medium">
          Ads Description
        </p>
        <div className="border-b mt-6" />
        <p className="px-7 text-justify mt-5 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      {/* contact section */}
      <div>
        <p className="px-7 mt-6 text-2xl text-bellefuBlack1 font-medium">
          Contact
        </p>
        {/* divider */}
        <div className="border-b mt-6" />
        <div className="px-40 mt-12">
          <div className="flex items-center flex-col justify-center border py-20 rounded-md bg-bellefuBackground space-y-14">
            <p className="text-2xl text-bellefuBlack1">Contact The Seller</p>

            <div className="flex items-center mt-2 w-full space-x-10 justify-center">
              <div className="bg-bellefuOrange px-8 py-3 rounded-md flex items-center space-x-2">
                <RiMessage2Fill className="text-white" />
                <p className="text-white">Message</p>
              </div>
              <div className="bg-bellefuGreen px-12 py-3 rounded-md flex items-center space-x-2">
                <MdCall className="text-white" />
                <p className="text-white">Call</p>
              </div>
            </div>
          </div>
        </div>
        {/* safety tips, share product, report product */}
        <div className="px-7 mt-6">
          <div className="flex items-center justify-between">
            <button
              className="text-lg font-medium capitalize text-gray-400 active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (setOpen(!open), setOpen1(false), setOpen2(false))}
            >
              Safety tips
            </button>
            <button
              className="text-lg font-medium text-gray-400 capitalize active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (
                setOpen1(!open1), setOpen(false), setOpen2(false)
              )}
            >
              Share Product
            </button>
            <button
              className="text-lg font-medium text-gray-400 capitalize active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (
                setOpen2(!open2), setOpen(false), setOpen1(false)
              )}
            >
              Report Product
            </button>
          </div>
        </div>
        {/* divider */}
        <div className="border-b mt-6" />
        {/* safety tips => details */}
        {open === true && (
          <div className="px-7 mt-4 pb-4">
            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="w-3 h-3 text-bellefuOrange rounded-sm" />
              <p>Ensure quality/quantity of Products/Services.</p>
            </div>
            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="w-3 h-3 text-bellefuOrange rounded-sm" />
              <p>Ensure meeting in a secured place if the need arise.</p>
            </div>
            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="w-3 h-3 text-bellefuOrange rounded-sm" />
              <p>
                Contact support@bellefu.com if you require verification of buyer
                or seller (Terms & Conditions apply)
              </p>
            </div>
          </div>
        )}

        {/* share product => details */}
        {open1 === true && (
          <div className="px-7 pb-4">
            <div className="flex items-center py-4 space-x-16">
              <p className="text-lg font-medium text-bellefuBlack1">
                Share this product on social media :
              </p>
              <div className="flex items-center border px-24 py-6 rounded-md space-x-7 bg-bellefuBackground ">
                <BsFacebook className="w-7 h-7 text-[#4267B2]" />
                <BsTwitter className="w-7 h-7 text-[#1DA1F2]" />
              </div>
            </div>
          </div>
        )}

        {/* report product => details */}
        {open2 === true && (
          <div className="px-7 mt-5 pb-4">
            <div className="flex items-center py-4 space-x-16">
              <p className="text-lg font-medium text-bellefuBlack1">
                Did you think this product is not original/scam? :
              </p>
              <div className="flex items-center border px-14 border-bellefuOrange py-3 rounded-md space-x-3 bg-bellefuBackground ">
                <BsFillFlagFill className="w-7 h-7 text-orange-600" />
                <p>Flag this product</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProductDescription;
