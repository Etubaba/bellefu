import React from "react";
import { BiSortAlt2, BiGridSmall } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io";

function UserProductHeader() {
  return (
    <div className="bg-bellefuWhite rounded-t-md  flex flex-col lg:flex-row  lg:px-5 py-2 items-center lg:justify-between">
      <>
        <h3 className="font-semibold lg:font-bold text-bellefuBlack1 text-xs lg:text-xl mb-3 lg:mb-0">
          My ads
        </h3>
      </>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <button className="text-bellefuBlack1 text-[12px] lg:text-lg  font-semibold lg:font-medium bg-bellefuBackground border-gray-100 border px-1 lg:px-3 py-1 rounded focus:text-bellefuOrange">
          All Ads
        </button>
        <button className="text-bellefuBlack1 text-[12px] lg:text-lg font-semibold lg:font-medium bg-bellefuBackground border-gray-100 border px-1 lg:px-3  py-1 rounded">
          Published Ads
        </button>
        <button className="text-bellefuBlack1 text-[12px] lg:text-lg font-semibold lg:font-medium bg-bellefuBackground border-gray-100 border px-1 lg:px-3  py-1 rounded">
          Pending Ads
        </button>
        <button className="text-bellefuBlack1 text-[12px] lg:text-lg font-semibold lg:font-medium bg-bellefuBackground border-gray-100 border px-1 lg:px-3  py-1 rounded">
          Expired Ads
        </button>
      </div>
    </div>
  );
}

export default UserProductHeader;
