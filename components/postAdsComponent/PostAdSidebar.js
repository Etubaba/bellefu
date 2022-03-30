import React, { Fragment } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiAdvertisementFill } from "react-icons/ri";
import NavLink from "./NavLink";

const PostAdSidebar = () => {
  const iconValues = [
      // { icon: RiAdvertisementFill, text: <strong>Post Ads</strong>, to: "#" },
      { icon: false, divider: <hr /> },
      {
        icon: IoMdCheckmarkCircle,
        text: "STEP 1:Category & location",
        to: "/postAds",
      },
      {
        icon: IoMdCheckmarkCircle,
        text: "STEP 2:Details",
        to: "/postAds/Details",
      },
      {
        icon: IoMdCheckmarkCircle,
        text: "STEP 3:Image",
        to: "/postAds/Images",
      },
      {
        icon: IoMdCheckmarkCircle,
        text: "STEP 4:Publish",
        to: "/postAds/Publish",
      },
    ],
    lastElem = iconValues.length - 1;

  return (
    <>
      <div className="mt-5 h-[60vh] bg-bellefuWhite  mr-3 rounded-lg pt-4 hidden lg:inline">
        <div className="h-[60vh] w-80 overflow-auto" id="side-bar">
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

      <div className="lg:hidden mt-2 bg-bellefuWhite rounded-md ">
        <div className="flex" id="side-bar">
          {iconValues.map((iconValue, index) => {
            if (index === lastElem) {
              return (
                <NavLink
                  to={iconValue.to}
                  className="flex m-2 mb-1 flex-col cursor-pointer hover:bg-bellefuBackground rounded-lg "
                  icon={iconValue}
                  key={index}
                />
              );
            }

            if (iconValue.icon) {
              return (
                <NavLink
                  to={iconValue.to}
                  className="flex flex-col items-center justify-center m-1 cursor-pointer hover:bg-bellefuBackground rounded-lg text-sm"
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
    </>
  );
};

export default PostAdSidebar;
