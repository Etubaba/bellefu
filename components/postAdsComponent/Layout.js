import PostAdSidebar from "./PostAdSidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-bellefuBackground w-full">
      <div className="flex max-w-[90%] mx-auto">
        <PostAdSidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
