import PostAdSidebar from "./PostAdSidebar";
import Smallhead from "./Smallhead";

const Layout = ({ children }) => {
  return (
    <div className="bg-bellefuBackground max-w-[95%] lg:max-w-[90%] mx-auto">
      <Smallhead />
      <div className="flex flex-col lg:flex-row">
        <PostAdSidebar />
        <main className="flex-grow mt-5 rounded-md">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
