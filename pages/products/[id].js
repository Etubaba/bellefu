import React, { useState } from "react";
import HeaderSearch from "../../components/HeaderSearch";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import CategoryProducts from "../../components/categoryIdProducts/CategoryProducts";

const Product = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className="max-w-7xl mx-auto">
      <HeaderSearch />

      <div className="flex">
        {/* sidebar section */}
        <div className="w-80 bg-bellefuWhite rounded-md mr-3 pb-5 px-3 pt-5 space-y-10 overflow-y-scroll h-screen">
          {/* <h4 className="sticky top-0 bg-bellefuWhite p-5" /> */}

          {/* select category */}
          <div>
            <p className="text-bellefuBlack1 font-semibold ">
              Select Category:
            </p>
            <div className="flex items-center mb-2 hover:bg-bellefuBackground p-3 rounded-md border mt-4">
              <div className="flex items-center flex-1 space-x-3 cursor-pointer select-none">
                <img
                  src="/bellefulogo.png"
                  alt="icons"
                  className="w-6 h-6 object-cover"
                />
                <h5 className="text-bellefuBlack1 font-medium whitespace-nowrap">
                  title
                </h5>
              </div>
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
            {open === true ? (
              <div className="min-w-full w-max bg-bellefuWhite rounded mx-auto border transition duration-300 ease-in">
                <ul className="rounded px-5 py-4">
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* end of select category */}

          {/* select sub category */}
          <div>
            <p className="text-bellefuBlack1 font-semibold ">Sub Category:</p>
            <div className="flex items-center mb-2 hover:bg-bellefuBackground p-3 rounded-md border mt-4">
              <div className="flex items-center flex-1 space-x-3 cursor-pointer select-none">
                <h5 className="text-bellefuBlack1 font-medium whitespace-nowrap">
                  Select subcategory
                </h5>
              </div>
              {open1 === false ? (
                <div onClick={() => setOpen1(!open1)}>
                  <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
                </div>
              ) : (
                <div onClick={() => setOpen1(!open1)}>
                  <AiOutlineCaretDown className="text-gray-300 cursor-pointer" />
                </div>
              )}
            </div>
            {open1 === true ? (
              <div className="min-w-full w-max bg-bellefuWhite rounded mx-auto border transition duration-300 ease-in">
                <ul className="rounded px-5 py-4">
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* end of sub category */}

          {/* select country */}
          <div>
            <p className="text-bellefuBlack1 font-semibold ">Select Country:</p>
            <div className="flex items-center mb-2 hover:bg-bellefuBackground p-3 rounded-md border mt-4">
              <div className="flex items-center flex-1 space-x-3 cursor-pointer select-none">
                <h5 className="text-bellefuBlack1 font-medium whitespace-nowrap">
                  Select Country
                </h5>
              </div>
              {open2 === false ? (
                <div onClick={() => setOpen2(!open2)}>
                  <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
                </div>
              ) : (
                <div onClick={() => setOpen2(!open2)}>
                  <AiOutlineCaretDown className="text-gray-300 cursor-pointer" />
                </div>
              )}
            </div>
            {open2 === true ? (
              <div className="min-w-full w-max bg-bellefuWhite rounded mx-auto border transition duration-300 ease-in">
                <ul className="rounded px-5 py-4">
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* end of select country */}

          {/* select products */}
          <div>
            <p className="text-bellefuBlack1 font-semibold ">Sub Product:</p>
            <div className="flex items-center mb-2 hover:bg-bellefuBackground p-3 rounded-md border mt-4">
              <div className="flex items-center flex-1 space-x-3 cursor-pointer select-none">
                <h5 className="text-bellefuBlack1 font-medium whitespace-nowrap">
                  Select product
                </h5>
              </div>
              {open3 === false ? (
                <div onClick={() => setOpen3(!open3)}>
                  <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
                </div>
              ) : (
                <div onClick={() => setOpen3(!open3)}>
                  <AiOutlineCaretDown className="text-gray-300 cursor-pointer" />
                </div>
              )}
            </div>
            {open3 === true ? (
              <div className="min-w-full w-max bg-bellefuWhite rounded mx-auto border transition duration-300 ease-in">
                <ul className="rounded px-5 py-4">
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                  <li className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded">
                    <img
                      src="/bellefulogo.png"
                      alt="icons"
                      className="w-6 h-6 object-cover"
                    />
                    <span>menu list 1</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* end of select products */}
        </div>

        {/* product session */}
        <div className="flex-1 overflow-y-scroll h-screen">
          <CategoryProducts />
        </div>
      </div>
    </div>
  );
};

export default Product;
