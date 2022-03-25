import React, { useState } from 'react'
import Layout from "../../components/Layout";
import { MdVerified } from 'react-icons/md'


function verifyaccount() {
    const [verify, setVerify] = useState(false)


    return (
        <div className='ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2'>
            <div className='text-xl ml-4 self p-2'>
                Account Verification
            </div>
            <hr />
            <div className="h-auto ">
                <div className="border mx-auto my-6  rounded-xl    w-7/12 h-11/12 ">
                    <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                        <MdVerified className="text-8xl mb-5 text-gray-600" />
                        <p className="text-sm text-center text-gray-600 mb-20">
                            You have not verified your account<br />
                            Kindly click on the botton below for Phone verification
                        </p>

                        <button onClick={() => setVerify(true)} className='flex hover:bg-orange-400 rounded-md text-white py-4 px-28 space-x-3 bg-bellefuOrange'><MdVerified className='text-xl' /> <span>Request Phone Verification</span></button>

                    </div>
                </div>
            </div>



        </div>
    )
}
verifyaccount.Layout = Layout;
export default verifyaccount