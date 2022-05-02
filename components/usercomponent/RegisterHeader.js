import NavLink from "./NavLink";
import classNames from "classnames";

const RegisterHeader = ({
  firstLink: { firstLinkText = "Register", firstLinkUrl = "/register" } = {
    firstLink: {},
  },
  secondLink: { secondLinkText = "Login", secondLinkUrl = "/login" } = {
    secondLink: {},
  },
  customWidth = false,
}) => {
  return (
    <div
      className={classNames(
        "w-[90%] mx-auto mt-14 mb-6 flex rounded-lg border-2 px-3 md:px-9 py-4",
        { "md:w-[55%] mt-20": !customWidth, "md:w-[85%] mt-20": customWidth }
      )}
    >
      <NavLink
        to={firstLinkUrl}
        className="mr-auto hover:cursor-pointer hover:underline"
      >
        {firstLinkText}
      </NavLink>
      <NavLink
        to={secondLinkUrl}
        className="hover:cursor-pointer hover:underline"
      >
        {secondLinkText}
      </NavLink>
    </div>
  );
};

export default RegisterHeader;
