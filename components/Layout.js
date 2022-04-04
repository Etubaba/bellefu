import MobileUserSidebar from "./usercomponent/MobileUserSidebar";
import UserSideBar from "./usercomponent/UserSideBar";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-bellefuBackground w-full">
      <div className="flex flex-col lg:flex-row max-w-[95%] lg:max-w-[90%] mx-auto">
        <div className="lg:hidden flex items-center mt-1 bg-bellefuGreen justify-between rounded-md px-2 py-1">
          <p className="text-white font-semibold">Dashboard </p>{" "}
          <button className="" onClick={() => setOpen(!open)}>
            <FiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="hidden lg:inline">
          <UserSideBar />
        </div>

        {open && <MobileUserSidebar open={open} setOpen={setOpen} />}

        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
