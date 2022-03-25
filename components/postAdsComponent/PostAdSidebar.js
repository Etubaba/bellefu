import React, { Fragment } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiAdvertisementFill } from "react-icons/ri";
import NavLink from "./NavLink";

const PostAdSidebar = () => {
  const iconValues = [
    {icon: RiAdvertisementFill, text: <strong>Post Ads</strong>,to:"#" },
    { icon: false, divider: <hr /> },
    { icon: IoMdCheckmarkCircle, text: "STEP 1:Category & location", to: "/postAds" },
    {
      icon: IoMdCheckmarkCircle,
      text: "STEP 2:Details",
      to: "/postAds/Details",
    },
    { icon: IoMdCheckmarkCircle, text: "STEP 3:Image", to: "/postAds/Images" },
    { icon: IoMdCheckmarkCircle, text: "STEP 4:Publish", to: "/postAds/Publish" },
    
  ],
    lastElem = iconValues.length - 1;

  return (
    <div className="mt-5 bg-bellefuWhite h-[50%] mr-3 rounded-lg pt-4">
      <div className="h-screen w-80 overflow-auto" id="side-bar">
        {iconValues.map((iconValue, index) => {
          if (index === lastElem) {
            return (
              <NavLink
                to={iconValue.to}
                className="flex m-4 mb-24  cursor-pointer hover:bg-bellefuBackground rounded-lg py-1.5"
                icon={iconValue}
                key={index}
              />
            );
          }

          if (iconValue.icon) {
            return (
              <NavLink
                to={iconValue.to}
                className="flex m-4 cursor-pointer hover:bg-bellefuBackground rounded-lg py-1.5"
                icon={iconValue}
                key={index}
              />
            );
          } else {
            return iconValue.divider;
          }
        })}
      </div>
    </div>
  );
};

export default PostAdSidebar;
