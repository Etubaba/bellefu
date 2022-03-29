import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";

const MobileHeaderSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* search by filter */}
      <div className="mt-3 relative">
        <BiSearch className="w-6 h-6 absolute top-4 text-bellefuOrange ml-2" />
        <input
          list="brow"
          type="text"
          className="pl-9 py-3 outline-none w-full rounded-md text-bellefuBlack1"
          placeholder="What are you looking for?"
        />
        <datalist id="brow">
          <option value="Agro Produce" />
          <option value="Livestock" />
          <option value="Food item" />
          <option value="Farm machine" />
          <option value="Agro Jobs" />
        </datalist>
      </div>
      {/* search select */}
      <div className="bg-white mt-2 p-3 flex items-center rounded-md relative">
        <div className=" flex flex-1 items-center space-x-2 cursor-ponter">
          <ImLocation2 className="text-bellefuOrange" />
          <span>Where? Nigeria</span>
        </div>
        <div className="">
          {open === false ? (
            <div onClick={() => setOpen(!open)}>
              <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setOpen(!open)}>
              <AiOutlineCaretDown className="text-gray-300 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
      {open && (
        <div class="z-20 absolute top-48 left-0 right-0 w-80 mx-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div class="py-1">
            <a
              href="#"
              class="text-gray-700 block px-4 hover:bg-bellefuBackground py-2 text-sm"
            >
              Account settings
            </a>
            <a
              href="#"
              class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm"
            >
              Support
            </a>
            <a
              href="#"
              class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm"
            >
              License
            </a>
            <a
              href="#"
              class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm"
            >
              License
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderSearch;
