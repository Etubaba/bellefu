import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { useSelector } from "react-redux";
import { apiData } from "../../constant";
import { useRouter } from "next/router";

function resetpassword() {
  const [feedback, setFeedback] = useState(false);
  const [view, setView] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const router = useRouter();

  //   fetching from redux
  const userid = useSelector((state) => state.bellefu?.profileDetails?.id);

  console.log("user id => ", userid);
  //   states for the passwords
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPasswordExists, setOldPasswordExits] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  //   method to handle the password check
  // jdjjdjdjjdjdjdj
  const checkExists = (evt) => {
    const target = evt.target;

    if (!target.value) return;

    const url = `${apiData}user/password/check`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldpassword: oldPassword, userid }),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (!resData.status) setOldPasswordExits(true);
        else setOldPasswordExits(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   method to handle password reset
  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordMatch(true);
      return;
    }

    const url = `${apiData}user/password/reset/dashboard`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newpassword: newPassword, userid }),
    })
      .then((response) => response.json())
      .then(() => {
        router.push("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="rounded-lg md:mt-5 mt-2 bg-bellefuWhite h-auto px-6 w-full md:w-auto pb-2">
      <div className="text-xl md:ml-4 self p-2 text-center lg:text-left">
        Reset Password
      </div>
      <hr />
      {feedback ? (
        <div>
          <div className="border mx-auto mt-10 mb-10  rounded-xl w-auto   lg:w-7/12 lg:h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <IoIosCheckmarkCircle className="text-6xl mb-5 text-bellefuGreen" />
              <p className="text-lg text-center text-gray-600">
                <strong>Congrats !!</strong> <br /> Your password has been reset
                successfully
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col border rounded-lg w-full my-6   lg:items-center lg:justify-center">
            <form className="m-2 lg:m-6">
              <div className="col-span-6 sm:col-span-3 mb-10">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={view1 ? "text" : "password"}
                    placeholder=" Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    onBlur={checkExists}
                    onFocus={() => setOldPasswordExits(false)}
                    autoComplete="given-name"
                    className=" bg-gray-200 pl-3 py-4 pr-7 mt-1 text-base focus:ring-bellefuGreen focus:border-bellefuGreen block w-full lg:w-96 shadow-sm sm:text-sm border-gray-500 rounded-md"
                  />
                  {view1 ? (
                    <FaEyeSlash
                      onClick={() => setView1(false)}
                      className="-ml-6"
                    />
                  ) : (
                    <FaEye onClick={() => setView1(true)} className="-ml-6" />
                  )}
                </div>

                {oldPasswordExists && (
                  <span className="text-red-600 text-xs ">
                    password does not exist
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3 mb-10">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="flex items-center">
                  <input
                    type={view ? "text" : "password"}
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoComplete="given-name"
                    className=" bg-gray-200 pl-3 py-4 pr-7 mt-1 focus:outline-none  block w-full lg:w-96 shadow-sm sm:text-sm border-gray-500 rounded-md"
                  />
                  {view ? (
                    <FaEyeSlash
                      onClick={() => setView(false)}
                      className="-ml-6"
                    />
                  ) : (
                    <FaEye onClick={() => setView(true)} className="-ml-6" />
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 mb-10">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700 focus:outline-none"
                >
                  Confirm Password
                </label>

                <div className="flex items-center">
                  <input
                    type={view2 ? "text" : "password"}
                    placeholder="Confirm New password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autocomplete="given-name"
                    onFocus={() => setPasswordMatch(false)}
                    className=" bg-gray-200 pl-3 py-4 pr-7 focus:outline-none mt-1  block w-full lg:w-96 shadow-sm sm:text-sm border-gray-500 rounded-md"
                  />
                  {view2 ? (
                    <FaEyeSlash
                      onClick={() => setView2(false)}
                      className="-ml-6"
                    />
                  ) : (
                    <FaEye onClick={() => setView2(true)} className="-ml-6" />
                  )}
                </div>

                {passwordMatch && (
                  <span className="text-red-600 text-xs ">
                    Passwords did not match
                  </span>
                )}
              </div>

              <div className="flex justify-center items-center ">
                {/* <button class='border w-48 px-6 py-2 text-center mr-5  text-white bg-gray-400 rounded-md'>Cancel</button> */}
                <button
                  onClick={handleReset}
                  className="border px-6 py-2 text-center flex text-white bg-bellefuOrange rounded-md"
                >
                  <GiCarKey className="text-xl" />
                  <span>Reset Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
resetpassword.Layout = Layout;
export default resetpassword;
