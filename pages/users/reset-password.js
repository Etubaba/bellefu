import React, { useState } from 'react'
import Layout from "../../components/Layout";
import { IoIosCheckmarkCircle } from "react-icons/io"
import { FaEye } from 'react-icons/fa'
import { GiCarKey } from 'react-icons/gi'

function resetpassword() {
    const [feedback, setFeedback] = useState(false)
    const [view, setView] = useState(false)
    const [view1, setView1] = useState(false)
    const [view2, setView2] = useState(false)

    return (
        <div className='ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2'>
            <div className='text-xl ml-4 self p-2'>Reset Password</div>
            <hr />
            {feedback ? (<div>
                <div className="border mx-auto mt-10 mb-10  rounded-xl    w-7/12 h-11/12 ">
                    <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                        <IoIosCheckmarkCircle className="text-6xl mb-5 text-bellefuGreen" />
                        <p className="text-lg text-center text-gray-600">
                            <strong>Congrats !!</strong> <br /> Your password has been reset successfully
                        </p>
                    </div>
                </div>
            </div>) : (
                <div>
                    <div className='flex flex-col border rounded-lg  justify-center my-16 mx-20 items-center'>
                        <form className='m-6'>
                            <div className="col-span-6 sm:col-span-3 mb-10">
                                <label
                                    for="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label><FaEye onClick={() => setView1(true)} className='absolute  mt-4  right-80' />
                                <input
                                    type={view1 ? 'text' : 'password'}
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    className=" bg-gray-200 p-[8px] mt-1 focus:ring-bellefuGreen focus:border-bellefuGreen block w-80 shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-10">
                                <label
                                    for="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    New Password
                                </label><FaEye onClick={() => setView(true)} className='absolute  mt-4  right-80' />
                                <input
                                    type={view ? 'text' : 'password'}
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    className=" bg-gray-200 p-[8px] mt-1 focus:outline-none  block w-80 shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3 mb-10">
                                <label
                                    for="password"
                                    className="block text-sm font-medium text-gray-700 focus:outline-none"
                                >
                                    Confirm Password
                                </label><FaEye onClick={() => setView2(true)} className='absolute  mt-4  right-80' />
                                <input
                                    type={view2 ? 'text' : 'password'}
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    className=" bg-gray-200 p-[8px] focus:outline-none mt-1  block w-80 shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                            </div>
                            <div className='flex justify-items-center '>
                                {/* <button class='border w-48 px-6 py-2 text-center mr-5  text-white bg-gray-400 rounded-md'>Cancel</button> */}
                                <button onClick={() => setFeedback(true)} className='border px-6 py-2 text-center flex text-white bg-bellefuOrange rounded-md'><GiCarKey className='text-xl' /><span>Reset Password</span></button>
                            </div>

                        </form>

                    </div>




                </div>

            )}



        </div>
    )
}
resetpassword.Layout = Layout;
export default resetpassword