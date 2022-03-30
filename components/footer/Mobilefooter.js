import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import {
    AiFillTwitterCircle,
    AiFillInstagram,
    // AiOutlineCopyrightCircle,
} from "react-icons/ai";

function Mobilefooter() {
    return (
        <div className='bg-[#3F3F3F] lg:hidden mt-7 md:px-7  px-4 w-full h-auto relative bottom-0 pb-3 pt-6'>
            <div className='flex space-x-2 justify-between md:justify-between'>
                <div className='ml-2'>
                    <img
                        alt='logo'
                        src='https://www.linkpicture.com/q/bellefulogo_1_-removebg-preview.png'
                        className='w-20 mt-5 md:w-32 md:h-18  h-10'

                    />
                </div>

                <div className=" flex flex-col space-y-2 items-center justify-center">
                    <p className="text-[#D4D7D1] text-xs text-center">
                        Subscribe to our newsletters
                    </p>
                    <div className="flex">
                        <input
                            className="w-44 md:w-80 rounded-sm p-1 outline-none "
                            type="email"
                            placeholder="Enter email here"
                        />
                        <button className="bg-bellefuOrange rounded-bl-sm rounded-tl-sm py-2  px-3 text-white">
                            Send
                        </button>
                    </div>
                </div>
            </div>


            <div className='flex space-x-5 md:space-x-3 mt-6 ml-3'>



                <p className="text-[#D4D7D1] hidden w-72 mr-20 md:inline-block text-justify font-light text-xs">
                    Bellefu.com is a dynamic online marketplace dedicated to
                    agriculture-related activities ensuring farmers, buyers, and sellers
                    of agricultural products have direct contact with other agro-allied
                    providers and manufacturing industries around the world. Bellefu is
                    designed to make searching for agro products available at your
                    fingertips.
                </p>











                <div className="space-y-2">
                    <p className="text-[#F9FDF5]">
                        <strong>Tools & Resources</strong>
                    </p>

                    <ul className="list-none space-y-2  font-light text-[#D4D7D1] text-xs">
                        <li>Bellefu Radio</li>
                        <li>Training Group</li>
                        <li>Webinar</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <p className="text-[#F9FDF5]">
                        <strong>Information</strong>
                    </p>

                    <ul className="list-none  font-light space-y-2 text-[#D4D7D1] text-xs">
                        <li>About us</li>
                        <li>Legal</li>
                        <li>Feedback</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className="space-y-2">
                    <p className="text-[#F9FDF5]">
                        <strong>Head Office</strong>
                    </p>

                    <ul className="list-none space-y-2  font-light text-[#D4D7D1] text-xs">
                        <li> 9550 Forest Lane</li>
                        <li>Dallas TX, 75243,</li>
                        <li>United State</li>
                    </ul>
                </div>


            </div>

            <hr className="my-7" />

            <div className=" flex items-center space-x-3 justify-center mb-4">
                <img
                    alt="error"
                    src="https://www.linkpicture.com/q/play-removebg-preview-1.png"
                    className="w-28 h-6 "
                />
                <img
                    alt="error"
                    src="https://www.linkpicture.com/q/ios-removebg-preview.png"
                    className="w-28 h-6"
                />
            </div>

            <div className="space-x-3 flex items-center justify-evenly mb-4">
                <BsFacebook className="text-[#d4d7d1] text-xl" />
                <AiFillTwitterCircle className="text-[#d4d7d1] text-xl" />
                <FaLinkedin className="text-[#d4d7d1] text-xl" />
                <AiFillInstagram className="text-[#d4d7d1] text-xl" />
            </div>


            <p className="flex text-[#9c9c9c] items-center justify-center text-xs m-3 space-x-3">
                {/* <AiOutlineCopyrightCircle className="text-xl mr-2" /> */}
                © 2022 Bellefu Agro consult. All rights reserved.
            </p>
        </div>
    )
}

export default Mobilefooter