import React from "react";
import { useRouter } from "next/router";


import MobileCategory from "./MobileCategory";

const MobileCategoryBar = ({ categories }) => {


  const router = useRouter();
  

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-1 grid-flow-row-dense">
      {categories?.map((category, index) => (
        <>
          <MobileCategory key={index} category={category} />
         
        </>
      ))}
       <div className="">
            <div
              className="flex items-center mb-1 bg-gray-100 px-1 py-2 rounded-md h-24"
            >
              <div
                className="flex flex-col items-center flex-1 space-x-2 cursor-pointer"
                onClick={() => router.push("/custom")}
              >
                <img
                  src={`	https://bellefu.inmotionhub.xyz/get/category/image/agro-servicescvz.png`}
                  alt="icons"
                  className="w-14 h-14 object-fill"
                />
                <h5 className="text-bellefuBlack1 text-xs text-center font-medium">
                  custom request
                </h5>
              </div>
            </div>
          </div>
    </div>
  );
};

export default MobileCategoryBar;
