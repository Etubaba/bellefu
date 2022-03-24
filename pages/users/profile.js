import React from "react";
import Layout from "../../components/Layout";
import { FaCamera } from "react-icons/fa";

const profile = () => {
  return (
    <div className=" shadow bg-bellefuWhite rounded-md m-5 p-5">
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
        <div className="ml-[22vw]">
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                        <label htmlFor="currency" className="sr-only">
                          Code
                        </label>
                        <select
                          id="country code"
                          name="country code"
                          className="bg-gray-200 p-[9px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                        >
                          <option>+234</option>
                          <option>+419</option>
                          <option>+1</option>
                        </select>
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
                        className="bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-[70%] relative left-[5vw] shadow-sm sm:text-sm border-gray-500 rounded-md"
                        placeholder="Your number"
                      />
                    </div>
                  </div>
                    {/* first field */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                          id="country "
                          name="country "
                          className="bg-gray-200 p-[9px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                        >
                          <option>Niger</option>
                          <option>Guinea</option>
                          <option>Ameri-meri</option>
                        </select>
                  </div>
                  {/* second field */}
                  <div className="col-span-6 sm:col-span-3">
                  <label
                      for="state"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      States/Province
                    </label>
                    <select
                          id="state"
                          name="state"
                          className="bg-gray-200 p-[9px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                        >
                          <option>Niger</option>
                          <option>Guinea</option>
                          <option>Ameri-meri</option>
                        </select>
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
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
                      className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-bellefuOrange focus:outline-none focus:ring-2 focus:ring-offset-2 disabled"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

profile.Layout = Layout;
export default profile;
