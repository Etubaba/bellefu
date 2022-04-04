import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";

const MobileHeaderSearch = ({ province, countryName, defaultCountry }) => {
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
          <span>
            Where? {countryName !== null ? countryName : defaultCountry}
          </span>
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
        {open && (
          <div className=" -ml-3 z-10 absolute h-80 overflow-y-scroll top-12 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {province?.map((state) => (
              <div
                onClick={() => {
                  setOpen(!open);
                  dispatch(chooseState(state.code));
                }}
                key={state.id}
                className="py-1  hover:bg-bellefuBackground "
              >
                <span className="text-gray-700 block px-4 hover:bg-bellefuBackground py-2 text-sm">
                  {state.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileHeaderSearch;
