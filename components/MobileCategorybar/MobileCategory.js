import { useState } from "react";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

import { useRouter } from "next/router";
import MobileCategoryItem from "./MobileCategoryItem";

const MobileCategory = ({ category }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (category.children) {
    return (
      <div className="">
        <div
          key={category.id}
          className="flex bg-gray-100 px-1 py-2 rounded-md h-24 relative"
        >
          <div className="flex flex-col items-center flex-1 space-x-2 cursor-pointer select-none">
            <img
              src={category.Icon}
              alt="icons"
              className="w-14 h-14 object-fill"
            />
            <h5
              className="text-bellefuBlack1 font-medium text-xs text-center"
              onClick={() => router.push("/category/id")}
            >
              {category.title}
            </h5>
          </div>
          <div className="mr-2">
            {open === false ? (
              <div
                onClick={() => setOpen(!open)}
                className="bg-gray-200 rounded-full p-1"
              >
                <AiOutlineCaretRight className="text-gray-400 cursor-pointer w-4 h-4 flex items-center justify-center" />
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="bg-gray-200 rounded-full p-1"
              >
                <AiOutlineCaretDown className="text-gray-400 cursor-pointer w-4 h-4 flex items-center justify-center" />
              </div>
            )}
          </div>
        </div>
        {/* mobile category sidebar */}
        <div
          className={
            open
              ? "inline-block w-72 h-72 -mt-6 space-y-3 text-sm text-white select-none bg-[#333333] absolute top-52 left-0 z-50 rounded-br-md rounded-tr-md animate-slide-in "
              : "hidden"
          }
        >
          <div
            className="flex items-center justify-end px-3 mt-3 -mb-3"
            onClick={() => setOpen(false)}
          >
            <RiCloseFill className="w-5 h-5" />
          </div>

          <div className="" />
          {category.children.map((child) => (
            <MobileCategoryItem key={child.id} child={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div
          key={category.id}
          className="flex items-center mb-1 bg-gray-100 px-1 py-2 rounded-md h-24"
        >
          <div className="flex flex-col items-center flex-1 space-x-2 cursor-pointer">
            <img
              src={category.Icon}
              alt="icons"
              className="w-14 h-14 object-fill"
            />
            <h5
              className="text-bellefuBlack1 text-xs text-center font-medium"
              onClick={() => router.push("/category/id")}
            >
              {category.title}
            </h5>
          </div>
        </div>
      </div>
    );
  }
};

export default MobileCategory;
