import UserSideBar from "./usercomponent/UserSideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex bg-bellefuBackground">
      <div className="flex max-w-7xl mx-auto">
        <UserSideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
