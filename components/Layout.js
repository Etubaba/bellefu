import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <main className="w-full bg-bellefuBackground">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
