import React from 'react'
import Layout from "../../components/postAdsComponent/Layout"

export default function Details() {
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
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    tags
                  </label>
                  <input
                    type="text"
                    className="  bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-[100%] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
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
            <div className="p-5">
              <button
                type="submit"
                class="flex justify-center items-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}
Details.Layout = Layout;
