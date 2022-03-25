import React from "react";
import { BiSortAlt2, BiGridSmall } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io";

function UserProductHeader() {
  return (
    <div className="bg-bellefuWhite rounded-t-md flex items-center px-5 py-2">
      <>
        <h3 className="font-bold text-[1.2rem] flex-1 text-bellefuBlack1">
          My ads
        </h3>
      </>

      <div className="flex items-center space-x-4">
        <button className="text-bellefuBlack1 text-xs font-medium bg-bellefuBackground border-gray-100 border px-3 py-1 rounded focus:text-bellefuOrange">
          All Ads
        </button>
        <button className="text-bellefuBlack1 text-xs font-medium bg-bellefuBackground border-gray-100 border px-3 py-1 rounded">
          Published Ads
        </button>
        <button className="text-bellefuBlack1 text-xs font-medium bg-bellefuBackground border-gray-100 border px-3 py-1 rounded">
          Pending Ads
        </button>
        <button className="text-bellefuBlack1 text-xs font-medium bg-bellefuBackground border-gray-100 border px-3 py-1 rounded">
          Expired Ads
        </button>
      </div>
    </div>
  );
}

export default UserProductHeader;
