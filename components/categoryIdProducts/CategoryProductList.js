import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { useRouter } from "next/router";

const CategoryProductList = ({ product }) => {
  const router = useRouter();

  // console.log(product)
  return (
    <div className="bg-bellefuWhite p-3 rounded-b-md">
      <img
        onClick={() => router.push(`/product/${product?.productId}`)}
        src={`https://bellefu.inmotionhub.xyz/get/product/image/${product?.images[0]}`}
        className="rounded-md w-full h-44 object-cover"
        alt={product.title}
      />
      <p className="capitalize text-medium">
        {product?.title.substring(0, 20)}
      </p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          {/* <p className="text-bellefuBlack1 text-sm capitalize">
            {product.state},
          </p> */}
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product?.countryName}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-bellefuGreen font-poppins font-semibold">
          ₦ {product?.price}
        </p>
        <BsHeart className="w-5 h-5 text-bellefuOrange" />
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <button className="bg-bellefuOrange w-full  rounded-md py-3 flex items-center justify-center">
          <MdOutlineMessage className="!text-white w-5 h-5" />
        </button>
        <button className="bg-bellefuGreen w-full rounded-md py-3 flex items-center justify-center">
          <MdCall className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CategoryProductList;
