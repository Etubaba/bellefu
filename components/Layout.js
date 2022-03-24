import UserSideBar from "./usercomponent/UserSideBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-bellefuBackground w-full">
      <div className="flex max-w-7xl mx-auto">
        <UserSideBar />
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
