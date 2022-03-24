import React, { useState } from "react";
import Layout from "../../components/Layout";
import { BsBellFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const notification = () => {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState(true);
  return (
    <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2 ">
      <div className="flex items-center justify-between space-x-96 text-center p-2">
        <div className="text-xl ">Notifications</div>

        <div className="flex justify-evenly">
          <div className="bg-bellefuBackground text-bellefuOrange rounded m-2 px-2 p-1">
            All
          </div>
          <div className="bg-bellefuBackground rounded px-2 m-2 p-1">New</div>
          <div className="bg-bellefuBackground rounded px-2 m-2 p-1">
            Mark as read
          </div>
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
        <div>
          {/* message mapping  */}
          <div>
            <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
              <div className="flex">
                <img
                  src="https://www.linkpicture.com/q/bellefulogo.png"
                  className="w-20 h-10 mt-4 mr-4 rounded-full"
                  alt="Bellefu"
                />
                <div>
                  <p className="text-[#3F3F3F] mb-3 text-base">
                    {" "}
                    New notifications from Bellefu, Aliquet odio mattis. Class
                    aptent taciti sociosqu ad litora torquent
                    <br /> per conubia nostra, per inceptos himenaeos...
                  </p>

                  <p className="text-[#9799AB] text-sm">2 days ago</p>
                </div>
              </div>
              <span className="flex justify-end">
                {read === false ? (
                  <button
                    onClick={() => setRead(true)}
                    className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEye className="mr-2 text-xl" /> Open
                  </button>
                ) : (
                  <button
                    onClick={() => setRead(false)}
                    className="flex bg-bellefuBackground border border-bellefuOrange rounded-md hover:bg-slate-200 px-3 mr-4 p-1"
                  >
                    <FaEyeSlash className="mr-2 text-bellefuOrange text-xl" />{" "}
                    Close
                  </button>
                )}
                <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                  {" "}
                  <MdDeleteForever className="mr-2 text-xl" />
                  Delete
                </button>
              </span>
            </div>

            {read && (
              <div className="w-[93%] m-10 relative mt-[-44px]  h-auto p-5 border-x border-b">
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
            )}
          </div>

          <div className="w-[93%] p-5 m-10 border hover:bg-[#F9FDF5]  rounded-lg  h-40">
            <div className="flex">
              <img
                src="https://www.linkpicture.com/q/bellefulogo.png"
                className="w-20 h-10 mt-4 mr-4 rounded-full"
                alt="Bellefu"
              />
              <div>
                <p className="text-[#3F3F3F] mb-3 text-base">
                  {" "}
                  New notifications from Bellefu, Aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent
                  <br /> per conubia nostra, per inceptos himenaeos...
                </p>

                <p className="text-[#9799AB] text-sm">2 days ago</p>
              </div>
            </div>
            <span className="flex justify-end">
              <button className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1">
                <FaEye className="mr-2 text-xl" /> Open
              </button>
              <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                {" "}
                <MdDeleteForever className="mr-2 text-xl" />
                Delete
              </button>
            </span>
          </div>

          <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
            <div className="flex">
              <img
                src="https://www.linkpicture.com/q/bellefulogo.png"
                className="w-20 h-10 mt-4 mr-4 rounded-full"
                alt="Bellefu"
              />
              <div>
                <p className="text-[#3F3F3F] mb-3 text-base">
                  {" "}
                  New notifications from Bellefu, Aliquet odio mattis. Class
                  aptent taciti sociosqu ad litora torquent
                  <br /> per conubia nostra, per inceptos himenaeos...
                </p>

                <p className="text-[#9799AB] text-sm">2 days ago</p>
              </div>
            </div>
            <span className="flex justify-end">
              <button className="flex bg-bellefuBackground border rounded-md hover:bg-slate-200 px-3 mr-4 p-1">
                <FaEye className="mr-2 text-xl" /> Open
              </button>
              <button className="flex bg-bellefuBackground hover:bg-slate-200 border rounded-md px-3 p-1">
                {" "}
                <MdDeleteForever className="mr-2 text-xl" />
                Delete
              </button>
            </span>
          </div>
          {/* the message content */}
          <div></div>
        </div>
      )}
    </div>
  );
};

notification.Layout = Layout;
export default notification;
