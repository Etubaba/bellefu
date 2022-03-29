import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function Details() {


const [inputtxt, setInputTxt] = useState("");
const [inputtxtarr, setinputTxtArr] = useState([]);
const [disablertag, setDisablertag] = useState(false);

const handleArrUpdate=(e)=>{
 e.preventDefault();
 if(inputtxt===""||inputtxtarr.length>=7){
   return;
 }else{
  setinputTxtArr((prevState)=>[...prevState,inputtxt]);
  setInputTxt("");
 }
}

const handleRemovetag =(tags)=>{
  const newArr = inputtxtarr.filter(tag => tag!==tags);
  setinputTxtArr(newArr);
}
console.log(inputtxtarr);
console.log(inputtxt);

  return (
    <div className=" shadow bg-bellefuWhite rounded-md  p-5">
      <div className="border  p-5 mt-7 ">
        <div>
          <form action="#" method="POST">
            <div className=" overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product title
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Product Price
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="flex justify-between">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      tags
                    </label>
                    <label className="block text-sm font-medium text-gray-700">
                    Maximum : {inputtxtarr.length}/7
                    </label>
                  </div>
                  <div className="border-gray-300 border-2 rounded-md">
                    <div className=" p-3 flex">
                      {inputtxtarr
                      .length<=7?
                      inputtxtarr.map((tags,index)=>(
                          <span className="flex bg-gray-300 p-[3px] justify-around w-[6vw] rounded-md m-[2px]">
                          <p>{tags}</p>
                          <MdClose onClick={()=>handleRemovetag(tags)} className="text-[28px] cursor-pointer hover:bg-gray-400 p-[3px] rounded-md mt-[2px]" />
                        </span>
                      )):null}
                      
                    </div>
                    <div className="flex">
                      <input
                      onChange={(e)=>setInputTxt(e.target.value)}
                        type="text"
                        disabled={disablertag}
                        value={inputtxt}
                        className="  bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-[100%] shadow-sm sm:text-sm "
                      />
                      <button
                      onClick={(e)=>handleArrUpdate(e)}
                        class="flex justify-center items-center w-[4vw] m-[5px] py-[3px] px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      >
                        Enter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  className="shadow-sm p-5 focus:outline-0 border-2 bg-[white] mt-1  w-full sm:text-sm  border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-5 flex justify-between">
                <button
                  type="submit"
                  class="flex justify-center items-center w-[15vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Back
                </button>
                <button
                  type="submit"
                  class="flex justify-center items-center w-[15vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Continue
                </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}
Details.Layout = Layout;
