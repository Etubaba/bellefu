import React from "react";
import { MdLocationOn } from "react-icons/md";
import { GiHearts } from "react-icons/gi";
import { MdOutlineMessage, MdCall } from "react-icons/md";

const ShopComponent = ({ product }) => {
  return (
    <div className="bg-bellefuWhite p-3 rounded-b-md">
      <img
        src={`https://bellefu.inmotionhub.xyz/get/product/image/${product?.images[0]}`}
        className="rounded-md w-full h-44 object-cover"
      />
      <p className="capitalize text-medium">{product.title}</p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          {/* <p className="text-bellefuBlack1 text-sm capitalize">
            {product.state},
          </p> */}
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product.country}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-bellefuGreen font-poppins font-semibold">
          ₦ {product.price}
        </p>
        <GiHearts className="w-5 h-5 text-bellefuOrange" />
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <button className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4">
          <MdOutlineMessage className="text-white" />
        </button>
        <button className="bg-bellefuGreen w-full flex items-center justify-center py-4 rounded-md">
          <MdCall className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ShopComponent;
