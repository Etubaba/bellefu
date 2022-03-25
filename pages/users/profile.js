import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import { FaCamera } from "react-icons/fa";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import UnstyledSelectSimple from "../../components/form-fields/CustomSelect";
import UnstyledSelectSimple2 from "../../components/form-fields/CountrySelect";
import UnstyledSelectSimple3 from "../../components/form-fields/StateProvince";
import UnstyledSelectSimple4 from "../../components/form-fields/City";
import UnstyledSelectSimple5 from "../../components/form-fields/Lga";
import CustomizedDividers from "../../components/form-fields/TextFormate";

const profile = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className=" shadow bg-bellefuWhite rounded-md mt-5 p-5">
      <div className="flex justify-between mt-2  border-b pb-4">
        <h3 className="font-bold text-[1.2rem]">Profile Details</h3>
        <button
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bellefuOrange sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Edit Profile
        </button>
      </div>
      <div className="border  p-5 mt-7 ">
        <div className="ml-[35%]">
          <img
            className=" h-15 w-15 object-cover  rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
          />
          <div className=" relative bottom-[7vh] left-[9vw] rounded-[50%] cursor-pointer p-[8px]  bg-gray-300 w-[3vw] h-[6vh] ">
            <label>
              <div className="mt-[4px] ml-[8px]">
                <FaCamera />
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>

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
                      First name
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
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autocomplete="email-address"
                      className="  bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="your password"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="border-b mt-10 flex items-center justify-center">
        <p>Fill in the below fields to become a seller on Bellefu</p>
      </div>
      <div className="border  p-5 mt-7 ">
        <div>
          <form action="#" method="POST">
            <div className=" overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className=" relative rounded-md">
                      <div className="absolute inset-y-0 left-0 top-[1.23rem] flex items-center">
                        <UnstyledSelectSimple sx={{ width: 40 }} />
                      </div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tele"
                        name="phone-number"
                        id="phone-number"
                        className="bg-[white] p-[8px] mt-[2px] focus:ring-bellefuGreen focus:outline-0 block w-[70%] relative left-[7vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        placeholder="Your number"
                      />
                    </div>
                  </div>
                  {/* first field */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <UnstyledSelectSimple2 sx={{ width: 40 }} />
                  </div>
                  {/* second field */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="state"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      States/Province
                    </label>
                    <UnstyledSelectSimple3 />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <UnstyledSelectSimple4 />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LGA
                    </label>
                    <UnstyledSelectSimple5 />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autocomplete="your address"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About Me
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
            <div className="p-5">
              <button
                type="submit"
                disabled
                class="flex justify-center items-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

profile.Layout = Layout;
export default profile;
