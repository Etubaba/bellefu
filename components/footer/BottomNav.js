import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'
import { MdMessage } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { login, profileDetails } from '../../features/bellefuSlice'
import { toast } from 'react-toastify'


const BottomNav = () => {
    const router = useRouter();
    const isLoggedIn = useSelector(login);
    const username = useSelector(profileDetails);
    const verify = useSelector((state) => state.bellefu?.verificationStatus);


    const toPostAds = () => {
        if (isLoggedIn && verify?.phone && username?.avatar !== "useravatar.jpg") {
            router.push("/postAds");
        } else if (!isLoggedIn) {
            toast.info("Login to post  Ads", {
                position: "top-right",
            });
            router.push("/login");
        } else if (!verify.phone) {
            toast.info("Verify your phone number to post Ads", {
                position: "top-right",
            });
            router.push("/users/verify-account");
        } else if (username.avatar === "useravatar.jpg") {
            toast.info("Update your profile details to post  Ads", {
                position: "top-right",
            });
            router.push("/users/profile");
        }
    }



    const handlefav = () => {
        if (isLoggedIn) {
            router.push('/users/favourite-items')
        } else {
            toast.error('You need to login first')
        }
    }
    const handleMsg = () => {
        if (isLoggedIn) {
            router.push('/users/messages')
        } else {
            toast.error('You need to login first')
        }
    }
    const handleProfile = () => {
        if (isLoggedIn) {
            router.push('/users/profile')
        } else {
            toast.error('You need to login first')
        }
    }







    return (
        <div className='md:hidden sticky z-50 bottom-0  bg-bellefuGreen w-full h-16 p-3 justify-center items-center flex  '>
            <div className='flex space-x-14 '>
                <MdHome className='text-2xl' onClick={() => router.push('/')} />
                <FaHeart className='text-white text-2xl' onClick={handlefav} />
            </div>


            <div class="relative flex -mt-4 justify-center items-center h-screen w-screen">

                <div class="h-12 w-24 bg-bellefuBackground 
                                   rounded-bl-full rounded-br-full ">

                    <div onClick={toPostAds} className='w-[4.3rem] h-[4.3rem] shadow-lg -mt-8 mx-auto flex text-center justify-center leading-tight font-bold items-center text-base rounded-full bg-bellefuOrange text-semibold text-white'> Post<br /> Ads </div>
                </div>
            </div>

            <div className='flex space-x-14'>
                <MdMessage className='text-white text-2xl' onClick={handleMsg} />
                <BsPersonFill className='text-white text-2xl' onClick={handleProfile} />
            </div>

        </div>
    )
}

export default BottomNav