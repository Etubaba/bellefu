import { useSelector } from "react-redux";
import AlternateComponent from "../alternateComponent/AlternateComponent";
import PostAdSidebar from "./PostAdSidebar";
import Smallhead from "./Smallhead";

const Layout = ({ children }) => {
  const userId = useSelector((state) => state.bellefu?.profileDetails);
  return (
    <div className="bg-bellefuBackground max-w-[95%] lg:max-w-[90%] mx-auto">
      {userId ? (
        <>
          <div className="">
            <Smallhead />
          </div>
          <div className="flex flex-col lg:flex-row">
            <PostAdSidebar />
            <main className="w-full lg:flex-grow mt-5 rounded-md">
              {children}
            </main>
          </div>
        </>
      ) : (
        <AlternateComponent />
      )}
    </>
  );
};

export default Layout;
