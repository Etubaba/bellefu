import React, { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Smallhead() {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      {hide ? (
        <div className="flex items-center lg:justify-center">
          <div className="bg-bellefuWhite rounded-md w-full mt-2 lg:mt-5 relative p-[8px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around px-2 py-2">
              <span className="font-bold text-[1rem] relative lg:left-[6vw] text-[red]">
                Note:
              </span>
              <p className=" text-xs lg:text-base">
                You are required to complete your profile before you can post
                products ignore if you have already
              </p>
            </div>
            <MdClose
              onClick={handleHide}
              className="text-[28px] mt-[10px] cursor-pointer hover:bg-gray-400 p-[3px] rounded-md absolute top-6 right-1 lg:top-1 lg:right-6 "
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
