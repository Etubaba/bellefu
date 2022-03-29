import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#3F3F3F] px-12 w-full h-auto z-50 relative mt-12 bottom-0 pb-6 pt-12">
      <div className="flex justify-evenly space-x-10 mb-12">
        <div className="flex flex-col space-y-3 w-80">
          <img
            className="h-10 w-32"
            alt="About US"
            src="https://www.linkpicture.com/q/bellefulogo_1_-removebg-preview.png"
          />
          <p className="text-[#D4D7D1] font-light text-sm">
            Bellefu.com is a dynamic online marketplace dedicated to
            agriculture-related activities ensuring farmers, buyers, and sellers
            of agricultural products have direct contact with other agro-allied
            providers and manufacturing industries around the world. Bellefu is
            designed to make searching for agro products available at your
            fingertips.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-[#F9FDF5]">
            <strong>Tools & Resources</strong>
          </p>

          <ul className="list-none space-y-2  font-light text-[#D4D7D1] text-sm">
            <li>Bellefu Radio</li>
            <li>Training Group</li>
            <li>Webinar</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#F9FDF5]">
            <strong>Help & Support</strong>
          </p>

          <ul className="list-none  font-light space-y-2 text-[#D4D7D1] text-sm">
            <li>Feedback</li>
            <li>Contact</li>
            <li>Submit CV</li>
            <li>Documentary</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#F9FDF5]">
            <strong>Information</strong>
          </p>

          <ul className="list-none  font-light space-y-2 text-[#D4D7D1] text-sm">
            <li>About us</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-[#F9FDF5]">
            <strong>Contact Phones</strong>
          </p>

          <ul className="list-none  font-light space-y-2 text-[#D4D7D1] text-sm">
            <li>+1 (254) 221-3007 USA</li>
            <li>+(234) 813 668 6060 Nigeria</li>
            <li>+(27) 62 579 5507 South Africa</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#F9FDF5]">
            <strong>Head Office</strong>
          </p>

          <ul className="list-none space-y-2  font-light text-[#D4D7D1] text-sm">
            <li> 9550 Forest Lane</li>
            <li>Dallas TX, 75243,</li>
            <li>United State</li>
          </ul>
        </div>
      </div>

      <div className=" flex flex-col space-y-2 items-center justify-center">
        <p className="text-[#D4D7D1] text-xs">
          Subscribe to our newsletter to get updates and amazing tips
        </p>
        <div className="flex">
          <input
            className="w-96 rounded-sm p-4 outline-none "
            type="email"
            placeholder="Enter email here"
          />
          <button className="bg-bellefuOrange rounded-sm py-4  px-8 text-white">
            Send
          </button>
        </div>
      </div>

      <hr className="my-2 mx-4 bg-[#767873] " />

      <div className="flex justify-between mt-10 mx-5 items-center space-x-3 ">
        <div className="space-x-4 flex justify-evenly">
          <BsFacebook className="text-[#d4d7d1] text-2xl" />
          <AiFillTwitterCircle className="text-[#d4d7d1] text-2xl" />
          <FaLinkedin className="text-[#d4d7d1] text-2xl" />
          <AiFillInstagram className="text-[#d4d7d1] text-2xl" />
        </div>

        <div className=" flex">
          <img
            alt="error"
            src="https://www.linkpicture.com/q/play-removebg-preview-1.png"
            className="w-40 h-10 mr-6"
          />
          <img
            alt="error"
            src="https://www.linkpicture.com/q/ios-removebg-preview.png"
            className="w-40 h-10"
          />
        </div>

        <p className="flex text-[#9c9c9c] space-x-3">
          <AiOutlineCopyrightCircle className="text-xl mr-2" />
          2022 Bellefu Agro consult. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
