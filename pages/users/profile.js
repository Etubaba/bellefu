import React from "react";
import { useState } from "react";
import { isDisabled } from "../../features/bellefuSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  profileDetails,
  userUpdate,
  setProfileDetails,
} from "../../features/bellefuSlice";
import Layout from "../../components/Layout";
import { FaCamera } from "react-icons/fa";
import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import Image from "next/image";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import UnstyledSelectSimple from "../../components/layoutComponents/form-fields/CustomSelect";
import UnstyledSelectSimple2 from "../../components/layoutComponents/form-fields/CountrySelect";
import UnstyledSelectSimple3 from "../../components/layoutComponents/form-fields/StateProvince";
import UnstyledSelectSimple4 from "../../components/layoutComponents/form-fields/City";
import UnstyledSelectSimple5 from "../../components/layoutComponents/form-fields/Lga";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";

const profile = ({ data1 }) => {
  const userThings = useSelector(profileDetails) || null;
  const userCountrythings = useSelector(userUpdate) || null;

  const [lgaholder, setLgaholder] = useState([]);
  const [lgachecker, setLgachecker] = useState("");
  const [addressholder, setAddressholder] = useState("");
  const [bioholder, setBioholder] = useState("");

  const [files, setFiles] = useState("");
  const [files2, setFiles2] = useState();

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

  const disable = useSelector((state) => state.bellefu.formDisabler);
  const dispatch = useDispatch();
  const handleDisable = () => {
    dispatch(isDisabled(false));
  };

  const catchLga = (e1, e2) => {
    setLgaholder(e1);
    setLgachecker(e2);
  };

  const handleAddress = (e) => {
    setAddressholder(e.target.value);
  };
  const handleBio = (e) => {
    setBioholder(e.target.value);
  };
  // converting image path to [fileobject]

  // const url = `https://bellefu.inmotionhub.xyz/get/user/images/${userThings?.avatar}`;
  // const response = await fetch(url);
  // const arrBuff = await response.arrayBuffer();  //Get read response as array buffer
  // const imgExt = userThings?.avatar.match(/.\w+$/)[0].substring(1);  //Get image extension
  // const fileData = new File([arrBuff], userThings?.avatar, {type:`image/${imgExt}`});
  // console.log("Here is JavaScript File Object:", fileData);
  //console.log("Here is File type:", imgExt)
  // formData.append("image", fileData);

  // ##################
  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    //  things i dey post from redux store
    formData.append("username", userThings?.username);
    formData.append("phone", userThings?.phone);
    formData.append("email", userThings?.email);
    formData.append("state", userCountrythings?.states);
    formData.append("lga", userCountrythings?.lga);
    formData.append("address", addressholder);
    formData.append("description", bioholder);
    formData.append("lname", userThings?.last_name);
    formData.append("fname", userThings?.first_name);
    formData.append("gender", userThings?.gender);
    formData.append("userid", userThings?.id);

    if (files === "") {
      // const url = `https://bellefu.inmotionhub.xyz/get/user/images/${userThings?.avatar}`;
      // const response = await fetch(url);
      // const arrBuff = await response.arrayBuffer(); //Get read response as array buffer
      // const imgExt = userThings?.avatar.match(/.\w+$/)[0].substring(1); //Get image extension
      // const fileData = new File([arrBuff], userThings?.avatar, {
      //   type: `image/${imgExt}`,
      // });
      // console.log("Here is JavaScript File Object:", fileData);
      formData.append("image", userThings?.avatar);
    } else {
      formData.append("image", files2);
    }

    axios({
      method: "POST",
      url: `https://bellefu.inmotionhub.xyz/api/general/update/user/profile`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        const [upDateuser] = res.data.data;

        localStorage.setItem("user", JSON.stringify(upDateuser));

        dispatch(setProfileDetails(upDateuser));
        res.status === 200
          ? toast.success("Profile Update sucessful", {
              position: "top-center",
            })
          : toast.error("Server busy. Try again", {
              position: "top-center",
            });
      })
      .catch((err) =>
        err
          ? toast.error("Something happend. Try again", {
              position: "top-center",
            })
          : null
      );
  };

  return (
    <div className=" shadow bg-bellefuWhite rounded-md mt-5 p-5">
      <div className="flex justify-between mt-2  border-b pb-4">
        <h3 className="font-bold text-[1.2rem]">Profile Details</h3>
        <button
          onClick={handleDisable}
          type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bellefuOrange sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Edit Profile
        </button>
      </div>
      <div className="border  p-5 mt-7 ">
        <div className="justify-center item-center flex  relative">
          <div>
            <Image
              width="180vw"
              height="180vh"
              className="  object-cover  rounded-full ring-2 ring-white"
              src={
                files === ""
                  ? `https://bellefu.inmotionhub.xyz/get/user/images/${userThings?.avatar}`
                  : files
              }
              alt="profile"
            />
            <div className=" border border-bellefuGreen  absolute bottom-[7%] left-[53%] rounded-[50%] cursor-pointer p-[10px]  bg-gray-300 hover:bg-gray-100 w-[50px] h-[50px]">
              <label>
                <div className=" mt-[2px] relative">
                  <FaCamera />
                </div>
                <input type="file" className="opacity-0" {...getInputProps()} />
              </label>
            </div>
          </div>
        </div>

        <div>
          <form action="#" method="POST">
            <div className=" overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      value={userThings?.first_name}
                      type="text"
                      disabled
                      className="  bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      value={userThings?.last_name}
                      disabled
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      value={userThings?.email}
                      type="email"
                      name="email"
                      id="email"
                      // Value={userThings.email}
                      disabled
                      className="  bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      value={"**********"}
                      type="password"
                      name="password"
                      id="password"
                      disabled
                      autocomplete="your password"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="flex">
                      <input
                        value={userThings?.country_code}
                        type="text"
                        disabled
                        autocomplete="your password"
                        className=" bg-[white] p-[8px] mt-1 mr-[4px] focus:ring-bellefuGreen focus:outline-0 block w-[17%] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                      />
                      <input
                        value={userThings?.phone}
                        type="phone"
                        disabled
                        autocomplete="your password"
                        className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      value={userThings?.country_code}
                      type="text"
                      disabled
                      autocomplete="your password"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="border-b mt-10 flex items-center justify-center">
        <p>Fill in the below fields to become a seller on Bellefu</p>
      </div>
      <div className="border  p-5 mt-7  ">
        <div className=" flex justify-right items-right">
          {disable ? (
            <div className="flex relative left-[50vw] ">
              <div className="flex bg-[orangered] p-1 rounded-md">
                <strong className="text-white">Disabled</strong>
                <GiPadlock className="text-lg" />
              </div>
            </div>
          ) : (
            <div className="flex relative left-[50vw] ">
              <div className="flex bg-bellefuGreen p-1 rounded-md">
                <strong className="text-white">Enabled</strong>
                <GiPadlockOpen className="text-lg" />
              </div>
            </div>
          )}
        </div>
        <div>
          <form action="#" method="POST">
            <div className=" overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* first field */}

                  {/* second field */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="state"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      States/Province
                    </label>
                    <UnstyledSelectSimple3
                      countryStuffs={data1}
                      catchLgas={catchLga}
                      disable={disable}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      LGA/City
                    </label>
                    <UnstyledSelectSimple5
                      lgachecker={lgachecker}
                      lgaholder={lgaholder}
                      disable={disable}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <input
                      value={userThings?.gender === "F" ? "Female" : "Male"}
                      type="text"
                      disabled
                      autocomplete="your address"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />{" "}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      className="block  text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      defaultValue={userThings?.address}
                      type="text"
                      onChange={handleAddress}
                      disabled={disable}
                      name="address"
                      id="address"
                      autoComplete="your address"
                      className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About Me
              </label>
              <div className="mt-1">
                <input
                  onChange={handleBio}
                  disabled={disable}
                  className="shadow-sm p-5 focus:outline-0 border-2 bg-[white] mt-1 h-[25vh]  w-full sm:text-sm  border-gray-300 rounded-md"
                  defaultValue={userThings?.description}
                />
              </div>
            </div>
            <div className="p-5">
              <button
                onClick={handleSave}
                type="submit"
                disabled={disable}
                class="flex justify-center items-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

profile.Layout = Layout;
export default profile;

export async function getServerSideProps() {
  const res1 = await fetch(
    `https://bellefu.inmotionhub.xyz/api/web30/get/web/postadd/info`
  );

  const data1 = await res1.json();

  return {
    props: {
      data1,
    },
  };
}
