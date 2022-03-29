import React from "react";
import { BiSortAlt2, BiGridSmall } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io";

function Product() {
  return (
    <div className="bg-bellefuWhite rounded-t-md">
      <div className="p-4 ">
        <div>
          <h3 className="font-bold text-[1.2rem]">Vegetables ads</h3>
        </div>
        <div>hello</div>
        {/* <div className="flex justify-between">
          <div className="border-2 rounded-md p-[7px] w-[17vw] flex mr-3">
            <div className="mt-[8px] flex">
              <BiSortAlt2 className="text-bellefuOrange mr-2 text-[1.2rem]" />
              <p className="relative bottom-[7px]">sort:</p>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class=" block w-full py-1 px-3 border-0  bg-white rounded-md shadow-sm focus:outline-none focus:ring-bellefuGreen focus:border-bellefuGreen sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className="border-2 rounded-md  w-[4vw] flex justify-around">
            <div>
              <FaThList className="text-bellefuOrange text-[1.5rem] pt-2" />
            </div>
            <div>
              <BiGridSmall className="text-bellefuOrange text-[2rem]" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
