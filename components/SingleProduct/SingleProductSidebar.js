import React from "react";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

const SingleProductSidebar = () => {
  return (
    <div className="bg-bellefuWhite h-[80%] rounded-md flex flex-col pb-10 ">
      <div className="flex items-center px-3 py-2 justify-center">
        <p className="text-sm text-bellefuBlack1">Product Price:</p>{" "}
        <p className="font-bold ml-3 text-bellefuTitleBlack text-lg">
          ₦285,000
        </p>
      </div>
      {/* border line */}
      <div className="border-b " />
      {/* user brief info */}
      <div className="mt-5 flex flex-col items-center justify-center">
        <Image
          src="https://i.pinimg.com/236x/46/93/92/46939219a632dff85f48387b3ea4afb4.jpg"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-bellefuTitleBlack font-semibold">Marvin Obi</p>
          <GoVerified className="w-3 h-3 text-bellefuGreen" />
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <p className="text-sm text-gray-400 font-medium">Registered :</p>
          <p className="text-xs text-bellefuBlack1 font-medium tracking-wider">
            {" "}
            11 Nov,2022
          </p>
        </div>
      </div>

      {/* view profile, messages and call */}
      <div className="w-full px-5 mb-10">
        <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
          {" "}
          <BsFillPersonFill className="w-5 h-5 text-gray-500" />
          <p className="text-gray-400 font-medium">View Profile</p>
        </div>
        {/* message */}
        <div className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuOrange justify-center">
          <RiMessage2Fill className="w-4 h-4 text-white" />{" "}
          <p className="text-white font-medium text-sm">Messages</p>
        </div>
        {/* call */}
        <div className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuGreen justify-center">
          <IoIosCall className="w-4 h-4 text-white" />
          <p className="text-white font-medium text-sm">Call</p>
        </div>
      </div>

      {/* border line */}
      <div className="border-b" />

      {/* view Reviews */}
      <div className="px-5">
        <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
          {" "}
          <BsFillPersonFill className="w-5 h-5 text-bellefuOrange" />
          <p className="text-gray-400 font-normal text-xs">View Reviews</p>
        </div>
      </div>

      {/* report seller */}
      <div className="px-5 mt-5">
        <div className="border rounded-md px-3 flex flex-col items-center justify-center py-7 bg-bellefuBackground ">
          <p className="text-sm text-center text-bellefuBlack1">
            Did you noticed any illegal activities from this seller
          </p>
          <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
            {" "}
            <BsFillPersonFill className="w-5 h-5 text-bellefuOrange" />
            <p className="text-gray-400 font-normal text-xs">Report Seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSidebar;
