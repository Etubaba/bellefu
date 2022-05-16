import { useSelector } from "react-redux";
import AlternateComponent from "../alternateComponent/AlternateComponent";
import PostAdSidebar from "./PostAdSidebar";
import Smallhead from "./Smallhead";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const userId = useSelector((state) => state.bellefu?.profileDetails);

  return (
    <div className="bg-bellefuBackground max-w-[95%] lg:max-w-[90%] mx-auto mt-24">
      {userId ? (
        <>
          <div className="">
            {loading ? (
              <Smallhead />
            ) : (
              <Skeleton
                className="rounded my-3"
                variant="rectangular"
                animation="wave"
                width={"90%"}
                height={80}
              />
            )}
          </div>
          <div className="flex flex-col lg:flex-row">
            <PostAdSidebar />

            <main className="w-full lg:flex-grow mt-5 rounded-md">
              {children}
            </main>
          </div>
        </>
      ) : (
        <>
          <AlternateComponent />
        </>
      )}
    </div>
  );
};

export default Layout;
