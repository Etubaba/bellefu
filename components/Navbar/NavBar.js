import Image from "next/image";
import { useState } from "react";
import BellefuLogo from "../../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/bellefuSlice'
import { isLoggedIn } from '../../features/bellefuSlice'
import { useRouter } from 'next/router'

import MobileNavbar from "./MobileNavbar";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const getIsLoggedIn = useSelector(login)

  const toPostAds = () => {
    if (getIsLoggedIn) {
      router.push('/postAds')
    } else {
      router.push('/login')
    }
  }

  return (
    <nav className="flex px-2 py-4 lg:px-12 lg:py-3 bg-bellefuGreen items-center justify-between sticky top-0 z-50 ">
      {/* left side */}
      <div onClick={() => router.push('/')} className="bg-white p-2 rounded-md w-24 md:w-24 h-10 md:h-12 flex items-center justify-center">
        {" "}
        <Image
          src={BellefuLogo}
          alt="bellefu-logo"
          object-fit="cover"
          className="rounded-lg p-2 "
        />
      </div>
      {/* right side */}

      {/* mobile right side */}

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {!isOpen && <FiMenu className="w-10 h-10 text-white" />}
      </button>

      {/* mobile sidebar */}

      {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="hidden md:inline-flex">
        <div className="flex space-x-4 items-center">
          <div className="text-white space-x-4 capitalize text-md font-semibold">
            <a className='hover:text-gray-200' href="https://webinar.bellefu.com/">Webinar</a>
            <a className='hover:text-gray-200' href="https://radio.bellefu.com/">Bellefu Radio</a>
            <a className='hover:text-gray-200' href="https://blog.bellefu.com/">Blog</a>
          </div>

          <div className="px-3 text-white text-2xl -mt-2">|</div>
          {/* the user profile */}


          {getIsLoggedIn && <div className="hidden md:inline-block">
            <div className="flex items-center space-x-2 relative">
              <Image
                src="https://i.pinimg.com/236x/46/93/92/46939219a632dff85f48387b3ea4afb4.jpg"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <p className="text-white font-semibold">
                Hi <span>Mavin</span>
              </p>
              <div className="">
                {open === false ? (
                  <div onClick={() => setOpen(!open)}>
                    <AiOutlineCaretRight className="text-white cursor-pointer" />
                  </div>
                ) : (
                  <div onClick={() => setOpen(!open)}>
                    <AiOutlineCaretDown className="text-white cursor-pointer" />
                  </div>
                )}
              </div>
            </div>
          </div>}
          {/* drop down beginning */}
          {open === true ? (
            <div className="absolute w-52 bg-bellefuWhite rounded border z-40 shadow-lg top-12 right-[10%] space-y-3">
              <ul className="rounded px-2 py-3 space-y-2">
                <div onClick={() => router.push('/users')} className="flex items-center space-x-4 mb-2 hover:bg-bellefuBackground px-2 rounded-md py-3">
                  <BsFillPersonFill className="w-4 h-4 text-bellefuOrange" />
                  <p className="text-xs text-bellefuBlack1 font-normal whitespace-nowrap">
                    My Account
                  </p>
                </div>
                <li onClick={() => router.push('/users/messages')} className="px-2 hover:bg-bellefuBackground py-1  flex space-x-3 items-center cursor-pointer rounded">
                  <RiMessage2Fill className="w-4 h-4 text-bellefuBlack1" />
                  <span className="text-xs text-gray-500">Messages</span>
                </li>
                <li onClick={() => router.push('/users/favourite-items')} className="px-2 py-1 hover:bg-bellefuBackground  flex space-x-3 items-center cursor-pointer rounded">
                  <AiFillHeart className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-bellefuBlack1">
                    Favourite Products
                  </span>
                </li>
                <li className="border " />
                <li onClick={() => {
                  dispatch(isLoggedIn(false))
                  localStorage.clear()
                  router.push('/login')
                  setOpen(false)
                }}
                  className="px-2 py-1 hover:bg-bellefuBackground flex space-x-3 items-center cursor-pointer rounded">
                  <RiLogoutBoxFill className="w-5 h-5 text-bellefuOrange" />
                  <span className="text-xs text-bellefuOrange">Logout</span>
                </li>
              </ul>
            </div>
          ) : null}
          {/* dropdown end */}
          {/* end of user profile */}
          {/* login register place */}
          {!getIsLoggedIn && <div className="text-white flex space-x-5 capitalize text-md font-semibold">
            <p className='hover:text-gray-200' onClick={() => router.push('/register')}>Register</p>
            <p className='hover:text-gray-200' onClick={() => router.push('/login')}>Login</p>
          </div>}

          <IoMdNotifications className="text-white w-5 h-5" />
          <div onClick={toPostAds} className="flex hover:bg-orange-300 items-center bg-bellefuOrange px-2 py-2 rounded-md space-x-1">
            <IoMdAddCircleOutline className="text-white w-4 h-4 text-md font-semibold" />
            <p className="text-white hover:text-gray-200 capitalize text-md font-semibold">
              Post free ads
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
