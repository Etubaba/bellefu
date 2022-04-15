import React, { useState } from "react";
import Layout from "../../components/Layout";
import { BsBellFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const notification = () => {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState(null);
  return (
    <div className="  rounded-lg mt-5 bg-bellefuWhite h-auto  w-full lg:w-auto pb-2 ">
      <div className="flex items-center justify-between lg:space-x-96 text-center p-2">
        <div className="text-sm font-bold ">Notifications</div>

        <div className="flex justify-evenly">
          <pre className="bg-bellefuBackground text-bellefuOrange rounded m-2  p-1">
            All
          </pre>
          <pre className="bg-bellefuBackground rounded  m-2 p-1">New</pre>
          <pre className="bg-bellefuBackground rounded  m-2 p-1">
            Mark as read
          </pre>
        </div>
      </div>
      <hr />

      {open ? (
        <div className="h-full">
          <div className="border mx-auto mt-10  rounded-xl    w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <BsBellFill className="text-4xl mb-5 text-gray-600" />
              <p className="text-lg text-gray-600">
                You have not received any notification yet
              </p>
            </div>
          </div>
          <span className="text-orange-300 justify-end mt-28 mr-4  flex">
            <MdDeleteForever className="text-xl" /> Delete all notification
          </span>
        </div>
      ) : (
        <>
        <div>
          {/* message mapping  */}
          <div>
            <div className="lg:w-[93%] p-5 m-5 lg:m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
              <div className="flex">
                <img
                  src="https://www.linkpicture.com/q/bellefulogo.png"
                  className="w-11 h-8 lg:w-20 lg:h-10 mr-3 mt-4 lg:mr-4 rounded-full"
                  alt="Bellefu"
                />
                <div className="">
                  <p className="text-[#3F3F3F] mb-3 text-base  " >
                    {" "}
                    New notifications from Bellefu, Aliquet odio mattis. Class
                    aptent taciti....
                  </p>

                  <p className="text-[#9799AB] text-sm">2 days ago</p>
                </div>
              </div>
              <span className="flex justify-end">
                {read === 1 ? (
                  <button
                    onClick={() => setRead(null)}
                    className="flex bg-bellefuBackground border border-bellefuOrange rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEyeSlash className="mr-2 text-bellefuOrange text-xl" />{" "}
                    Close
                  </button>
                ) :(
                  <button
                    onClick={() => setRead(1)}
                    className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEye className="mr-2 text-xl" /> Open
                  </button>
                ) }
                <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                  {" "}
                  <MdDeleteForever className="mr-2 text-xl" />
                  Delete
                </button>
              </span>
            </div>

            {read===1? (
              <div className="lg:w-[93%] lg:m-10 relative mt-[-44px] m-5  h-auto p-5 border-x border-b">
                <p className="leading-loose text-base">
                  {" "}
                  lorem New notifications from Bellefu, Aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos lorem New notifications from
                  Bellefu, Aliquet odio mattis. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos
                  lorem New notifications from Bellefu, Aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.{" "}
                </p>
              </div>
            ):null}
          </div>
          

          
        </div>
        
        <div>
          {/* message mapping  */}
          <div>
            <div className="lg:w-[93%] p-5 m-5 lg:m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
              <div className="flex">
                <img
                  src="https://www.linkpicture.com/q/bellefulogo.png"
                  className="w-11 h-8 lg:w-20 lg:h-10 mr-3 mt-4 lg:mr-4 rounded-full"
                  alt="Bellefu"
                />
                <div className="">
                  <p className="text-[#3F3F3F] mb-3 text-base  " >
                    {" "}
                    New notifications from Bellefu, Aliquet odio mattis. Class
                    aptent taciti....
                  </p>

                  <p className="text-[#9799AB] text-sm">2 days ago</p>
                </div>
              </div>
              <span className="flex justify-end">
                {read === 2? (
                  <button
                    onClick={() => setRead(null)}
                    className="flex bg-bellefuBackground border border-bellefuOrange rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEyeSlash className="mr-2 text-bellefuOrange text-xl" />{" "}
                    Close
                  </button>
                ) : (
                  <button
                    onClick={() => setRead(2)}
                    className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEye className="mr-2 text-xl" /> Open
                  </button>
                )}
                <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                  {" "}
                  <MdDeleteForever className="mr-2 text-xl" />
                  Delete
                </button>
              </span>
            </div>

            {read===2? (
              <div className="lg:w-[93%] lg:m-10 relative mt-[-44px] m-5  h-auto p-5 border-x border-b">
                <p className="leading-loose text-base">
                  {" "}
                  lorem New notifications from Bellefu, Aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos lorem New notifications from
                  Bellefu, Aliquet odio mattis. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos
                  lorem New notifications from Bellefu, Aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.{" "}
                </p>
              </div>
            ):null}
          </div>
          
        </div>
        </>
      )}
    </div>
  );
};

notification.Layout = Layout;
export default notification;
