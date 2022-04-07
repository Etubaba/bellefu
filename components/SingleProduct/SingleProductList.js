import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { MdOutlineMessage, MdCall } from "react-icons/md";

const SingleProductList = ({ similarProductDetail }) => {
  return (
    <div className="bg-bellefuWhite p-3 rounded-b-md">
      <img
        src="/bellefu/bellefu1.jpg"
        className="rounded-md w-full h-44 object-cover"
      />
      <p className="capitalize text-medium">
        {similarProductDetail.title.substring(0, 20)}
      </p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          <p className="text-bellefuBlack1 text-sm capitalize">
            {similarProductDetail.stateName},
          </p>
          <p className="text-bellefuBlack1 text-sm capitalize">
            {similarProductDetail.countryName}
          </p>
        </div>
      </div>
      <div className="flex items justify-between">
        <p className="text-bellefuGreen flex font-poppins font-semibold">
          <p className="mr-1">$</p>
          {similarProductDetail.price}
        </p>
        <BsHeart className="w-4 h-4 text-bellefuOrange" />
      </div>
      <div className="flex items-center mt-2 space-x-3">
        <button className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4">
          <MdOutlineMessage className="!text-white" />
        </button>
        <button className="bg-bellefuGreen  rounded-md w-full flex items-center justify-center py-4">
          <MdCall className="text-white " />
        </button>
      </div>
    </div>
  );
};

export default SingleProductList;
