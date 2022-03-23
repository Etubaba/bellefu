import UserSideBar from "./usercomponent/UserSideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <UserSideBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
