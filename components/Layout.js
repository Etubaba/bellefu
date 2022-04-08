import MobileUserSidebar from "./usercomponent/MobileUserSidebar";
import UserSideBar from "./usercomponent/UserSideBar";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import AlternateComponent from "./alternateComponent/AlternateComponent";

const Layout = ({ children }) => {
  const userId = useSelector((state) => state.bellefu?.profileDetails);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-bellefuBackground max-w-[95%] lg:max-w-[90%] mx-auto">
      <main className="">{children}</main>{" "}
    </div>
  );
};

export default Layout;
