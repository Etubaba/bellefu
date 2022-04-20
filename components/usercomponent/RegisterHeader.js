import NavLink from "./NavLink"

const RegisterHeader = ({firstLink="Register", secondLink="Login"}) => {
  return (
    <div className="w-[90%] md:w-[55%] mx-auto mt-14 mb-6 flex rounded-lg border-2 px-3 md:px-9 py-4">
      <NavLink to="/register" className="mr-auto hover:cursor-pointer hover:underline">{firstLink}</NavLink>
      <NavLink to="/login" className="hover:cursor-pointer hover:underline">{secondLink}</NavLink>
    </div>
  )
};

export default RegisterHeader;