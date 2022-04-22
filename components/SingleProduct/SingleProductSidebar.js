import React, { useState } from "react";
import Image from "next/image";
import { Modal, Rating } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { GrStar } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill, RiCloseFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import moment from "moment";
import { useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { login, verified } from "../../features/bellefuSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { apiData } from "../../constant";

const SingleProductSidebar = ({ userDetails, verified }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [message, setMessage] = useState("");
  const [reviewmsg, setReviewmsg] = useState("");
  const [reportmsg, setReportmsg] = useState("");
  const [review, setReview] = useState(false);
  const [rating, setRating] = useState(0);

  const receiverId = userDetails[0]?.productOwnerId;
  const senderId = useSelector((state) => state.bellefu?.profileDetails?.id);

  const isLoggedIn = useSelector(login);

  const handleMessage = () => {
    if (isLoggedIn) {
      setOpen(!open);
    } else {
      setModalOpen(true);
    }
  };
  const reviewOpen = () => {
    if (isLoggedIn) {
      setReview(true);
    } else {
      setModalOpen(true);
    }
  };
  const reportOpen = () => {
    if (isLoggedIn) {
      setOpen1(!open1);
    } else {
      setModalOpen(true);
    }
  };

  const sendMessage = () => {
    if (message === "") {
      toast.error("You can not send an empty field", { position: "top-right" });
    } else {
      const formData = new FormData();
      formData.append("messageTo", receiverId);
      formData.append("messageFrom", senderId);
      formData.append("image", "");
      formData.append("message", message);
      axios({
        method: "POST",
        url: `${apiData}send/messages`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data.status) {
          toast.success("Your message has been sent successfully.", {
            position: "top-right",
          });
          setMessage("");
        }
      });
    }
  };

  const handleCall = () => {
    if (isLoggedIn) {
      window.open(`tel:${userDetails[0]?.advertiserNumber}`);
    } else {
      setModalOpen(true);
      toast.info("please login to contact seller", { position: "top-center" });
    }
  };

  const handleReview = () => {
    if (rating === 0 || reviewmsg === "") {
      toast.error("Please all fields are required", { position: "top-right" });
    } else {
      axios
        .post(`${apiData}create/review`, {
          productId: userDetails[0]?.productId,
          userId: senderId,
          rating: rating,
          message: reviewmsg,
        })
        .then((res) => {
          if (res.data.status) {
            toast.success("Your review has been sent. ", {
              position: "top-right",
            });
            setRating(0);
            setReviewmsg("");
            setReview(false);
          }
        });
    }
  };

  const handleReport = () => {
    if (reportmsg === "") {
      toast.error("Please all fields are required", { position: "top-right" });
    } else {
      axios
        .post(`${apiData}create/report`, {
          productId: userDetails[0]?.productId,
          userId: senderId,
          message: reportmsg,
          title: "Report Product",
        })
        .then((res) => {
          if (res.data.status) {
            toast.success("Your report is under review. Thank you", {
              position: "top-right",
            });
            setReportmsg("");
            setOpen1(false);
          }
        });
    }
  };

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
          <span className="flex">
            <GoVerified
              className={
                verified?.phone && !verified?.id && !verified?.kyc
                  ? "text-black/70 w-3 h-3"
                  : !verified?.kyc && verified?.id && verified?.phone
                    ? "w-3 h-3 text-bellefuOrange"
                    : verified?.id && verified?.phone && verified?.kyc
                      ? "w-3 h-3 text-bellefuGreen"
                      : "w-3 h-3 text-[#A6A6A6]"
              }
            />
            <i className="text-[10px] ml-2">
              {verified?.phone && !verified?.id && !verified?.kyc
                ? "Phone verified"
                : verified?.phone && verified?.id && !verified?.kyc
                  ? "ID verified"
                  : "KYC verified"}
            </i>
          </span>
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
          <p className="text-gray-400 font-medium cursor-pointer">
            View Profile
          </p>
        </div>
        {/* message */}
        {senderId !== receiverId && (
          <div
            className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuOrange justify-center cursor-pointer"
            onClick={handleMessage}
          >
            <RiMessage2Fill className="w-4 h-4 text-white" />{" "}
            <p className="text-white font-medium text-sm cursor-pointer">
              Messages
            </p>
          </div>
        )}

        {/* message box */}
        {open && (
          <div className="border -mt-10 bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
            <div className="flex items-center py-1">
              <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                <RiMessage2Fill className="w-4 h-4 text-gray-500" />{" "}
                <p className="text-gray-400 font-normal text-sm cursor-pointer">
                  Messages
                </p>
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
              <button
                onClick={sendMessage}
                className="text-white bg-bellefuOrange/60 hover:bg-bellefuOrange duration-200 transition ease-in px-4 rounded-md capitalize"
              >
                send
              </button>
            </div>
          </div>
        )}

        {/* when user never logged */}

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        // sx={{ opacity: 0.5 }}
        >
          <div className="absolute grid place-content-center -left-40 md:ml-80 mx-auto mt-10 translate-y-1/2 translate-x-1/2  rounded-lg shadow-md p-10 h-[300px]   w-[410px] md:w-[500px] lg:w-[44%] md:h-auto bg-bellefuWhite ">
            {/* <div> <MdOutlineCancel onClick={() => setOpen(false)} className='relative text-3xl text-gray-300 justify-end top-0 left-[100%] ' /></div> */}
            <strong className="ml-4 mb-8 text-sm md:text-md"> Sign in </strong>

            <div className="flex space-x-4 justify-center items-center my-4">
              <button className=" flex py-3 px-8 md:px-10 border-2 hover:bg-gray-200  rounded-lg  ">
                <FcGoogle className="md:text-3xl text-xl mr-5" />{" "}
                <strong className="text-[#303A4B] text-sm md:text-xl">Google</strong>
              </button>
              <button className="hover:bg-blue-700 flex py-3 px-7 md:px-10 bg-[#3B5998] rounded-lg ">
                <ImFacebook className="md:text-3xl text-xl text-white mr-5 " />
                <strong className="text-white text-sm md:text-xl">Facebook</strong>
              </button>
            </div>

            <button
              onClick={() => router.push("/login")}
              className="py-3 text-xs md:text-md px-8  lg:px-44 mb-4  rounded-md text-white hover:bg-green-600 bg-bellefuGreen "
            >

              Email or Phone
            </button>

            <p className="flex justify-center items-center">
              Do not have an account?{" "}
              <stong
                onClick={() => router.push("/register")}
                className="text-bellefuGreen hover:text-green-700 text-lg ml-2"
              >
                Register
              </stong>
            </p>
          </div>
        </Modal>

        {/* end of message box */}
        {/* end of message */}
        {/* call */}
        {senderId !== receiverId && (
          <div
            onClick={handleCall}
            className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-bellefuGreen justify-center cursor-pointer"
          >
            <IoIosCall className="w-4 h-4 text-white" />
            <p className="text-white font-medium text-sm">Call</p>
          </div>
        )}
        {/* my shop */}
        <div
          onClick={() => router.push(`/shop/${userDetails[0]?.productOwnerId}`)}
          className="flex items-center mt-3 border w-full py-2 space-x-3 rounded-md bg-gradient-to-r from-bellefuGreen to-bellefuOrange justify-center cursor-pointer"
        >
          <RiShoppingCart2Fill className="w-4 h-4 text-white" />
          <p className="text-white font-medium text-sm">Shop</p>
        </div>
      </div>

      {/* border line */}
      <div className="border-b" />

      {/* view Reviews */}
      <div className="px-5">
        <div className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center">
          {" "}
          <BsFillPersonFill className="w-5 h-5 text-bellefuOrange" />
          <p onClick={reviewOpen} className="text-gray-400 font-normal text-xs">
            Give Reviews
          </p>
        </div>

        {review && (
          <div className="border mt-2 bg-bellefuBackground divide-y w-full border-orange-200 rounded-md">
            <div className="flex items-center py-1">
              <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                <GrStar className="w-4 h-4 text-yellow-300 text-4xl" />{" "}
                <p className="text-gray-400 font-normal text-sm">Review</p>
              </div>
              <div onClick={() => setReview(false)}>
                <RiCloseFill className="ml-12 w-7 h-7 text-red-500 pr-1 cursor-pointer" />
              </div>
            </div>

            <textarea
              value={reviewmsg}
              onChange={(e) => setReviewmsg(e.target.value)}
              rows="5"
              className="w-full bg-transparent px-3 outline-none text-xs"
            ></textarea>

            <div className=" flex justify-center items-center py-2">
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>

            <div className="flex items-center justify-center py-2">
              <button
                onClick={handleReview}
                className="text-white bg-bellefuOrange/60 hover:bg-bellefuOrange duration-200 transition ease-in px-4 rounded-md capitalize"
              >
                send
              </button>
            </div>
          </div>
        )}
      </div>

      {/* report seller */}
      <div className="px-5 mt-5">
        <div className="border rounded-md px-3 flex flex-col items-center justify-center py-7 bg-bellefuBackground ">
          <p className="text-sm text-center text-bellefuBlack1">
            Did you noticed any illegal activities from this seller
          </p>
          <div
            className="flex items-center mt-5 border w-full py-2 space-x-3 rounded-md bg-bellefuWhite justify-center"
            onClick={reportOpen}
          >
            {" "}
            <RiMessageFill className="w-5 h-5 text-red-500" />
            <p className="text-gray-400 font-normal text-xs cursor-pointer">
              Report Seller
            </p>
          </div>
          {/* report box */}
          {open1 && (
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
                value={reportmsg}
                onChange={(e) => setReportmsg(e.target.value)}
                rows="5"
                className="w-full bg-transparent px-3 outline-none text-xs"
              ></textarea>

              <div className="flex items-center justify-center py-2">
                <button
                  onClick={handleReport}
                  className="text-white bg-bellefuOrange/60 hover:bg-bellefuOrange duration-200 transition ease-in px-4 rounded-md capitalize"
                >
                  send
                </button>
              </div>
            </div>
          )}
          {/* end of report box */}
        </div>
      </div>
    </div>
  );
};

export default SingleProductSidebar;
