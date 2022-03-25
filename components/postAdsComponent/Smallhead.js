import React from 'react';
import {MdClose} from "react-icons/md"


export default function Smallhead() {
  return (
    <div className='flex items-center justify-center'>
      <div className="bg-bellefuWhite rounded-md w-full mt-5">
            <div className="flex justify-around p-5">
                <span className="font-bold text-[1rem] relative left-[6vw] text-[red]">Note:</span>
                <p>You are required to complete your profile before you can post products ignore if you have already</p>
                <MdClose className='text-[28px] cursor-pointer hover:bg-gray-400 p-[3px] rounded-md'/>
            </div>             
          </div>
    </div>
  )
}
