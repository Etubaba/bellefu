import NavLink from "./NavLink"

const RegisterHeader = ({width=55}) => {
  return (
    <div className={`w-[90%] md:w-[${width}%] mx-auto mt-14 mb-6 flex rounded-lg border-2 px-3 md:px-9 py-4`}>
      <NavLink to="/register" className="mr-auto hover:cursor-pointer hover:underline">Register</NavLink>
      <NavLink to="/login" className="hover:cursor-pointer hover:underline">Login</NavLink>
    </div>
  )
};

export default RegisterHeader;