import React from "react";
import { BiSortAlt2, BiGridSmall } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io";

function MainProductHeader() {
  return (
    <div className="bg-bellefuWhite rounded-t-md">
      <div className="flex items-center justify-between p-4 ">
        <h3 className="font-bold text-[1rem] sm:text-[1rem] lg:text-[1.2rem]">
          Trending Ads
        </h3>
        <div className="flex justify-between">
          <div className="border-2 rounded-md w-[20vw] sm:w-[20vw]  lg:w-[4vw] flex justify-around">
            <div>
              <FaThList className="text-bellefuOrange text-[1.5rem] pt-2" />
            </div>
            <div>
              {" "}
              <BiGridSmall className="text-bellefuOrange text-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProductHeader;
