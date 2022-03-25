import PostAdSidebar from "./PostAdSidebar";
import Smallhead from "./Smallhead";

const Layout = ({ children }) => {
  return (
    <div className="bg-bellefuBackground max-w-[90%] mx-auto">
        <Smallhead  />
      <div className="flex  mx-auto">
        <PostAdSidebar />
        <main className="flex-grow bg-bellefuWhite">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
