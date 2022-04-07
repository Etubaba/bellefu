import React, { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Smallhead() {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div className="bg-bellefuWhite w-full mt-3 rounded-md">
      {hide ? (
        <div className=" flex items-center lg:justify-center w-full">
          <div className=" w-full mt-2 relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around px-2 py-2 space-x-6">
              <span className="font-bold text-[1rem]  text-[red]">Note:</span>
              <p className=" text-xs lg:text-base">
                You are required to complete your profile before you can post
                products ignore if you have already
              </p>
              <MdClose
                onClick={handleHide}
                className="text-[28px] cursor-pointer hover:bg-gray-400 p-[3px] rounded-md "
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
