import React, {useState} from 'react';
import Image from 'next/image';
import { MdAccountBox, MdPending, MdNotifications } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImKey, ImPushpin } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import { FaWallet, FaHeart } from "react-icons/fa";
import { FcExpired } from "react-icons/fc";
import { RiMessage2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

const User = () => {
  const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [image, setImage] = useState();

  return (
    <div className='flex'>
      <div className='side-bar h-screen mr-4 overflow-auto'>
        <h3 className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-3'><MdAccountBox /></span>
          <span>Account overview</span>
        </h3>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><HiUser /></span>
          <span className=''>My Profile</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><MdNotifications /></span>
          <span className=''>Notifications</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><RiMessage2Fill /></span>
          <span className=''>Messages</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><ImPushpin /></span>
          <span className=''>My Ads</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><FaHeart /></span>
          <span className=''>My Favourite Items</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><MdPending /></span>
          <span className=''>Pending Ads</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><FcExpired /></span>
          <span className=''>Expired Ads</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><FaWallet /></span>
          <span className=''>My Wallet</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><GiWallet /></span>
          <span className=''>Add Money</span>
        </p>
        <hr />
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><HiUser /></span>
          <span className=''>Account Verification</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><ImKey /></span>
          <span className=''>Reset Password</span>
        </p>
        <p className='flex m-4 cursor-pointer hover:bg-red-50 hover:rounded-lg py-1.5'>
          <span className='pt-1 px-5'><BiLogOut /></span>
          <span>Logout</span>
        </p>
      </div>
      <div className='content'>
        <div className='flex flex-col'>
          <div className='w-full md:w-auto'>
            <h3>My Profile Details</h3>
            <hr />
            <div className='flex'>
              <div id='avatar'>
                <Image
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src={image}
                  alt="avatar"
                  width={500}
                  height={500}
                />
              </div>
              <div id='details'>
                <p>
                  <input type='text' value={firstName} className='mr-2' />
                  <input type='text' value={lastName} className='' />
                </p>
                <p>
                  <input type='text' value={email} className='mr-2' />
                  <input type='text' value={password} className='' />
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Ads Details</h3>
            <hr />
          </div>
          <div>
            <h3>Wallet</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User