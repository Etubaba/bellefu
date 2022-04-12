import React, { useState } from "react";
import Image from "next/image";
import { Modal } from '@mui/material'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { GoVerified } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill, RiCloseFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import moment from "moment";
import { useSelector } from 'react-redux'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { login, verified, } from '../../features/bellefuSlice'
import { toast } from "react-toastify";
import axios from "axios";
import { apiData } from "../../constant";

const SingleProductSidebar = ({ userDetails }) => {
  console.log("userDetails from sidebar", userDetails);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [message, setMessage] = useState('');


  const receiverId = userDetails[0]?.productOwnerId
  const senderId = useSelector(state => state.bellefu?.profileDetails?.id)

  const isLoggedIn = useSelector(login)


  const isverified = useSelector(verified)



  const handleMessage = () => {
    if (isLoggedIn) {
      setOpen(!open)

    } else {
      setModalOpen(true)
    }
  }

  const sendMessage = () => {

    if (message === "") {

      toast.error('You can not send an empty field', { position: "top-right" })
    } else {

      const formData = new FormData();
      formData.append('messageTo', receiverId)
      formData.append('messageFrom', senderId)
      formData.append('image', '')
      formData.append('message', message)
      axios({
        method: 'POST',
        url: `${apiData}send/messages`,
        data: formData,
        headers: {
          'Content-Type': "multipart/form-data",
        }

      })
        .then(res => {
          if (res.data.status) {
            toast.success('Your message has been sent successfully.', { position: 'top-right' })

          }

        }
        )



    }



  }

  const handleCall = () => {
    if (isLoggedIn) {
      window.open(`tel:${userDetails[0]?.advertiserNumber}`);
    } else {

      setModalOpen(true)
      toast.info("please login to contact seller", { position: "top-center" });
    }
  }



  return (
    <div className="bg-bellefuWhite rounded-md flex flex-col pb-10 ">
      <div className="flex items-center px-3 py-2 justify-center">
        <p className="text-sm text-bellefuBlack1">Product Price:</p>{" "}
        <p className="font-bold ml-3 text-bellefuTitleBlack text-lg">
          <span
            dangerouslySetInnerHTML={{
              __html: userDetails[0]?.currencySymbol,
            }}
          />
          {userDetails[0]?.productPrice}
        </p>
      </div>
      {/* border line */}
      <div className="border-b " />
      {/* user brief info */}
      <div className="mt-5 flex flex-col items-center justify-center">
        <Image
          src={`https://bellefu.inmotionhub.xyz/get/user/images/${userDetails[0]?.userAvatar}`}
          alt="UserImage"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-bellefuTitleBlack font-semibold">
            {userDetails[0]?.productOwner}
          </p>
          <GoVerified className={isverified.phone ? 'text-black/70 w-3 h-3' : isverified.kyc ? "w-3 h-3 text-bellefuGreen" : isverified.id ? 'w-3 h-3 text-bellefuOrange' : 'w-3 h-3 text-[#A6A6A6]'} />
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <p className="text-sm text-gray-400 font-medium">Registered :</p>
          <p className="text-xs text-bellefuBlack1 font-medium tracking-wider">
            {" "}
            {moment(userDetails[0]?.joined).format("MMM Do YYYY")}
          </p>
        </div>
      </div>

      {/* view profile, messages and call */}
      <div className="w-full px-5 mb-10">
        <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
          {" "}
          <BsFillPersonFill className="w-5 h-5 text-gray-500" />
          <p className="text-gray-400 font-medium">View Profile</p>
        </div>
        {/* message */}
        <div
          className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuOrange justify-center cursor-pointer"
          onClick={handleMessage}
        >
          <RiMessage2Fill className="w-4 h-4 text-white" />{" "}
          <p className="text-white font-medium text-sm">Messages</p>
        </div>
        {/* message box */}
        {open && (
          <div className="border -mt-10 bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
            <div className="flex items-center py-1">
              <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                <RiMessage2Fill className="w-4 h-4 text-gray-500" />{" "}
                <p className="text-gray-400 font-normal text-sm">Messages</p>
              </div>
              <RiCloseFill
                className="ml-12 w-7 h-7 text-gray-400 pr-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>

            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent px-3 outline-none text-xs"
            />
            <div className="flex items-center justify-center py-2">
              <button onClick={sendMessage} className="text-white bg-bellefuOrange/60 hover:bg-bellefuOrange duration-200 transition ease-in px-4 rounded-md capitalize">
                send
              </button>
            </div>
          </div>
        )}

        {/* when user never logged */}

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        // sx={{ opacity: 0.5 }}
        >
          <div className=' absolute  top-[7%] translate-y-1/2 translate-x-1/2  rounded-lg shadow-md p-10 left-[7%] w-[44%] h-[48%] bg-bellefuWhite '>

            {/* <div> <MdOutlineCancel onClick={() => setOpen(false)} className='relative text-3xl text-gray-300 justify-end top-0 left-[100%] ' /></div> */}
            <strong className='ml-4 mb-8'>  Sign in </strong>


            <div className='flex space-x-3 justify-center items-center my-4'>
              <button className=' flex py-3 px-14 border-2 hover:bg-gray-200  rounded-lg  '>
                <FcGoogle className='text-3xl mr-5' /> <strong className='text-[#303A4B] text-xl'>Google</strong>
              </button>
              <button className='hover:bg-blue-700 flex py-3 px-14 bg-[#3B5998] rounded-lg '>
                <ImFacebook className='text-3xl text-white mr-5 ' /><strong className='text-white text-xl'>Facebook</strong>
              </button>
            </div>

            <button onClick={() => router.push('/login')} className='py-3 px-40 mb-4 ml-4 rounded-md text-white hover:bg-green-600 bg-bellefuGreen '>  Email or Phone Number    </button>

            <p className='flex justify-center items-center'>Do not have an account? <stong onClick={() => router.push('/register')} className='text-bellefuGreen hover:text-green-700 text-lg ml-2'>Register</stong></p>




          </div>
        </Modal>

        {/* end of message box */}
        {/* end of message */}
        {/* call */}
        <div
          onClick={handleCall}
          className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuGreen justify-center">
          <IoIosCall className="w-4 h-4 text-white" />
          <p className="text-white font-medium text-sm">Call</p>
        </div>
        {/* my shop */}
        <div
          onClick={() => router.push(`/shop/${userDetails[0]?.productOwnerId}`)}
          className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-gradient-to-r from-bellefuGreen to-bellefuOrange justify-center"
        >
          <RiShoppingCart2Fill className="w-4 h-4 text-white" />
          <p className="text-white font-medium text-sm">My Shop</p>
        </div>
      </div>

      {/* border line */}
      <div className="border-b" />

      {/* view Reviews */}
      <div className="px-5">
        <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
          {" "}
          <BsFillPersonFill className="w-5 h-5 text-bellefuOrange" />
          <p className="text-gray-400 font-normal text-xs">View Reviews</p>
        </div>
      </div>

      {/* report seller */}
      <div className="px-5 mt-5">
        <div className="border rounded-md px-3 flex flex-col items-center justify-center py-7 bg-bellefuBackground ">
          <p className="text-sm text-center text-bellefuBlack1">
            Did you noticed any illegal activities from this seller
          </p>
          <div
            className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center"
            onClick={() => setOpen1(!open1)}
          >
            {" "}
            <RiMessageFill className="w-5 h-5 text-red-500" />
            <p className="text-gray-400 font-normal text-xs cursor-pointer">
              Report Seller
            </p>
          </div>
          {/* report box */}
          {open1 === true && (
            <div className="border -mt-10 bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
              <div className="flex items-center py-1">
                <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                  <RiMessageFill className="w-4 h-4 text-red-500" />{" "}
                  <p className="text-gray-400 font-normal text-sm">Report</p>
                </div>
                <RiCloseFill
                  className="ml-12 w-7 h-7 text-gray-400 pr-1 cursor-pointer"
                  onClick={() => setOpen1(false)}
                />
              </div>

              <textarea
                rows="5"
                className="w-full bg-transparent px-3 outline-none text-xs"
              ></textarea>
            </div>
          )}

          {/* end of report box */}
        </div>
      </div>
    </div>
  );
};

export default SingleProductSidebar;
