import React from "react";
// import Layout from "../../components/UserComponent/Layout";
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from "react";
// import { Modal } from "@mantine/core";
// import {user} from "../../features/crystamolSlice"

import { useSelector, useDispatch } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { AiOutlineCheck, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import Image from "next/image";

import { useDropzone } from "react-dropzone";
// import ModalContent from "../../components/UserComponent/ModalContent";
// import { BASE_URL } from "../../components/apiConstants/Constants";
import axios from "axios";
import { toast } from "react-toastify";
import GovId from "../components/GovId";
// import Skeleton from "@mui/material/Skeleton";
// import { useRouter } from 'next/router'

export default function CreateShop() {
  const userThings = useSelector((state) => state.bellefu.profileDetails);
  const idchecker = useSelector((state) => state.bellefu.verificationStatus);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);
  const [reset, setReset] = useState(false);
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [disabler, setDisabler] = useState(true);
  const [disabler2, setDisabler2] = useState(true);
  const [checker, setChecker] = useState(false);
  const [checker2, setChecker2] = useState(false);
  const [oldpass, setOldPass] = useState(null);
  const [checkpass, setCheckpass] = useState(false);
  const [newpass, setNewpass] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneholder, setPhoneholder] = useState(null);
  const [files, setFiles] = useState("");
  const [files2, setFiles2] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(URL.createObjectURL(acceptedFiles[0]));

      for (let i = 0; i < acceptedFiles.length; i++) {
        let loopedFile = acceptedFiles[i];

        setFiles2(loopedFile);
      }
    },
  });
  console.log(files2);
  const handleShow = () => {
    setShow(!show);
    setDisabler(!disabler);
  };

  const handleReset = () => {
    setReset(!reset);
    setDisabler2(!disabler2);
  };

  const handleSave = () => {
    axios
      .post(
        `${BASE_URL}update`,
        {
          firstName: firstname,
          lastName: lastname,
          phone: phoneholder,
          email: email,
          userId: userThings?.id,
          avatar: files === "" ? userThings?.avatar : files2,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      .then((res) => {
        const upDateuser = res.data.data;
        console.log(res.status);
        localStorage.setItem("crystamoluser", JSON.stringify(upDateuser));

        dispatch(user(upDateuser));
        if (res.status === 200) {
          setOpened(true);
          setShow(!show);
          setDisabler(!disabler);
          // setModalOpen(true)
        } else {
          toast.error("something went wrong. Try again", {
            position: "top-center",
          });
        }
      })
      .catch((err) =>
        err
          ? toast.error("Something happend. Try again", {
              position: "top-center",
            })
          : null
      );
  };
  const handleSave2 = () => {
    axios
      .post(`${BASE_URL}user/password/change`, {
        userId: userThings?.id,
        oldPassword: oldpass,
        newPassword: newpass,
      })
      .then((res) => {
        if (res.data.status === true) {
          setOpened2(true);
          setReset(!reset);
          setOldPass(null);
          setNewpass(null);
        } else {
          null;
        }
      })
      .catch((err) => console.log("error"));

    setDisabler2(!disabler2);
  };

  const handleChecker1 = () => {
    setChecker(!checker);
  };
  const handleChecker2 = () => {
    setChecker2(!checker2);
  };

  const handleCheckPass = () => {
    axios
      .post(`${BASE_URL}check/password`, {
        userId: userThings?.id,
        oldPassword: oldpass,
      })
      .then((res) => {
        if (res.data.status === false) {
          setCheckpass(true);
        } else {
          setCheckpass(false);
        }
      })
      .catch((err) => console.log("error"));
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] lg:w-[60%] mt-[10%]">
        <div className="bg-[#f8f8f8]   rounded-md border border-[#bbb9bb]  mb-5">
          <div className="p-5 flex  items-center justify-between">
            <p className="text-lg text-gray-700 font-semibold tracking-wider">
              Create Shop
            </p>
            {/* {show ? (
              <button
                onClick={handleShow}
                className="flex items-center space-x-2 text-white bg-crystamolButton px-5 py-2 rounded-full"
              >
                <FiEdit className="w-5 h-5" />
                <p className="text-sm tracking-wider">Edit Profile</p>
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 text-white bg-crystamolPink px-5 py-2 rounded-full"
              >
                <AiOutlineCheck className="w-5 h-5" />
                <p className="text-sm tracking-wider">Save Changes</p>
              </button>
            )} */}
          </div>
          <hr style={{ backgroundColor: "#343434" }} />
          <div className="  p-5 mt-7 ">
            <div className="justify-center items-center flex ">
              <div className="flex justify-center">
                <Image
                  width="120"
                  height="110"
                  className="  object-cover  rounded-full ring-2 ring-crystamolPink"
                  // src={`https://crystamol.paddyhosting.com/api/images/user/${user?.avatar}`}
                  src={
                    files === ""
                      ? `https://bellefu.inmotionhub.xyz/get/user/images/${userThings?.avatar}`
                      : files
                  }
                  alt="Logo"
                />
                <div className="mt-14 -ml-5 z-30 cursor-pointer bg-slate-400 rounded-full w-8 h-8 hover:bg-slate-300 flex justify-center items-center p-3">
                  <label for="fileupload">
                    <div className=" flex cursor-pointer justify-center items-center">
                      <FaCamera className="w-4 h-4 cursor-pointer" />
                    </div>
                    <input
                      type="file"
                      disabled={disabler}
                      className="hidden"
                      id="fileupload"
                      {...getInputProps()}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div>
              <form action="#" method="POST">
                <div className=" overflow-hidden sm:rounded-md">
                  <div className=" sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Store Location
                        </label>
                        <input
                          Value={userThings?.first_name}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          className="  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          className="block  text-sm font-medium text-gray-700"
                        >
                          Bank name
                        </label>
                        <input
                          type="text"
                          Value={userThings?.last_name}
                          onChange={(e) => setLastName(e.target.value)}
                          className="  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          className="block  text-sm font-medium text-gray-700"
                        >
                          Account name
                        </label>
                        <input
                          type="tel"
                          Value={userThings?.phone}
                          onChange={(e) => setPhoneholder(e.target.value)}
                          className="  h-12  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Account number
                        </label>
                        <input
                          Value={userThings?.email}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="  h-12  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block  text-sm font-medium text-gray-700">
                          Next of Kin
                        </label>
                        <input
                          type="password"
                          disabled
                          autoComplete
                          className="  h-12  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block  text-sm font-medium text-gray-700">
                          Store description
                        </label>
                        <textarea className=" h-12  bg-[white] p-[12px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md" />
                      </div>
                      
                    </div>
                    {!idchecker?.id && <div className="col-span-3 sm:col-span-3 w-full">
                        <label className="block  text-sm font-medium mt-3 text-gray-700">
                          Upload Govt. Issued ID
                        </label>

                        <GovId/>
                      </div>}
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block  text-sm font-medium text-gray-700">
                          Terms & Conditions
                        </label>
                        <input type="checkbox" className="w-5 h-5"/>
                      </div>
                  </div>
                  <button
            //   onClick={handleSubmit}
              class="flex justify-center items-centerw-[19vw]  w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 mt-5"
            >
              Submit
            </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
