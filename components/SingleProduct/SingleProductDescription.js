import React, { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { Modal } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill, RiMessageFill, RiCloseFill } from "react-icons/ri";
import {
  BsFacebook,
  BsTwitter,
  BsFillFlagFill,
  BsSuitHeartFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";

import SingleProductMobileSidebar from "./SingleProductMobileSidebar";
import moment from "moment";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../../features/bellefuSlice";
import axios from "axios";
import { apiData } from "../../constant";
import { toast } from "react-toastify";

const SingleProductDescription = ({ productDetails }) => {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fav, setFav] = useState([]);
  const [favStatus, setFavStatus] = useState(false);


  // check if product is among favorite

  console.log("details =>", productDetails);

  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);

  useEffect(() => {
    const getFav = async () => {
      await axios
        .get(`${apiData}get/user/favorite/${userId}`)
        .then((res) => setFav(res.data.data))
        .catch((err) => console.log(err));
    };
    getFav();
  }, []);

  const favArr = fav?.map((item) => item.productId);

  const [clean, setClean] = useState(favArr)

  // console.log('product details checker', productDetails)

  const isLoggedIn = useSelector(login);
  const router = useRouter();

  const handleCall = () => {
    if (isLoggedIn) {
      window.open(`tel:${productDetails[0]?.advertiserNumber}`);
    } else {
      setModalOpen(true);
      toast.info("please login to contact seller", { position: "top-center" });
    }
  };

  const addFav = () => {
    if (isLoggedIn) {
      axios
        .post(`${apiData}add/favorite`, {
          userId: userId,
          productId: productDetails[0]?.productId,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            setFavStatus(!favStatus);
            toast.success(
              `${productDetails[0]?.productTitle.substring(
                0,
                20
              )} added to favourite`
            );
          }
        });
    } else {
      toast.error("Login to add favorite product");
      setOpen(true);
    }
  };



  const removeFav = () => {
    console.log('i am working')
    const favId = favArr.find(
      (items) => items === productDetails[0]?.productId
    );
    // console.log(favId);
    if (favId !== undefined) {
      axios
        .post(`${apiData}delete/favorite/webindex`, {
          productId: favId,
          userId: userId,
        })
        .then((res) => {
          if (res.data.status) {
            setFavStatus(!favStatus);

            const cleanArr = favArr.filter((items) => items !== favId);
            setClean(cleanArr)
            toast.error(
              `${productDetails[0]?.productTitle.substring(
                0,
                20
              )} removed from favorite product`,
              {
                position: "top-right",
              }
            );
          }
        });
    } else {
      return;
    }
  };

  return (
    <div className="bg-bellefuWhite rounded-t-md">
      {/* title section */}
      <div className="flex items-center justify-between lg:px-7 px-3">
        <p className="text-xl lg:text-3xl text-bellefuTitleBlack font-semibold">
          {productDetails[0]?.productTitle}
        </p>
        {favStatus || clean?.includes(productDetails[0]?.productId) && favArr?.includes(productDetails[0]?.productId) ? (
          <BsSuitHeartFill
            onClick={removeFav}
            className="lg:w-6 lg:h-6 text-bellefuOrange cursor-pointer"
          />
        ) : (
          <BsHeart
            className="lg:w-6 lg:h-6 text-bellefuOrange"
            onClick={addFav}
          />
        )}
      </div>

      {/* tag section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-7 lg:mt-4 px-3 mt-2 space-y-2">
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-8 lg:items-center">
          <div className="flex items-center space-x-1 lg:mt-2">
            <BsClockFill className="w-4 h-4 text-gray-500" />
            <p className="text-bellefuBlack1 text-sm">
              Posted on{" "}
              {moment(productDetails[0]?.productPostedOn).format("MMM Do YYYY")}
            </p>
          </div>
          <div className="flex items-center space-x-2 -ml-1">
            <TiLocation className="w-4 h-4 text-gray-500 ml-1" />
            <p className="text-bellefuBlack1 text-sm">
              {productDetails[0]?.lgaName}, {productDetails[0]?.stateName},
              {productDetails[0]?.countryName}.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <AiFillEye className="w-4 h-4 text-gray-500 " />
          <p className="text-bellefuBlack1 text-sm">
            {productDetails[0]?.inorganic_views} Views
          </p>
        </div>
      </div>

      {/* description section */}
      <div>
        <p className="lg:px-7 px-3 mt-4 lg:mt-6 text-xl lg:text-2xl text-bellefuBlack1 font-medium">
          Ads Description
        </p>
        <div className="border-b lg:mt-6 mt-4" />
        <p
          className="lg:px-7 px-3 text-justify lg:mt-5 mt-3 text-gray-500 text-sm lg:text-lg mb-4 capitalize"
          dangerouslySetInnerHTML={{
            __html: productDetails[0]?.productDescription,
          }}
        />
      </div>
      {/* product owner profile details */}

      <div className="py-3 px-3 lg:hidden">
        <SingleProductMobileSidebar mobileDetails={productDetails} />
      </div>

      {/* end of product owner details */}
      {/* contact section */}
      <div>
        <p className="lg:px-7 px-3 text-2xl text-bellefuBlack1 font-medium hidden lg:block">
          Contact
        </p>
        {/* divider */}
        <div className="border-b mt-6" />

        <div className=" hidden lg:block px-40 mt-12">
          <div className="flex items-center flex-col justify-center border py-20 rounded-md bg-bellefuBackground space-y-14">
            <p className="text-2xl text-bellefuBlack1">Contact The Seller</p>

            <div className="flex items-center mt-2 w-full space-x-10 justify-center">
              <div
                // onClick={message}
                className="bg-bellefuOrange px-8 py-3 rounded-md flex items-center space-x-2"
              >
                <RiMessage2Fill className="text-white" />
                <p className="text-white">Message</p>
              </div>
              <div
                onClick={handleCall}
                className="bg-bellefuGreen px-12 py-3 rounded-md flex items-center space-x-2"
              >
                <MdCall className="text-white" />
                <p className="text-white">Call</p>
              </div>

              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              // sx={{ opacity: 0.5 }}
              >
                <div className=" absolute  top-[7%] translate-y-1/2 translate-x-1/2  rounded-lg shadow-md p-10 left-[7%] w-[44%] h-[48%] bg-bellefuWhite ">
                  {/* <div> <MdOutlineCancel onClick={() => setOpen(false)} className='relative text-3xl text-gray-300 justify-end top-0 left-[100%] ' /></div> */}
                  <strong className="ml-4 mb-8"> Sign in </strong>

                  <div className="flex space-x-3 justify-center items-center my-4">
                    <button className=" flex py-3 px-14 border-2 hover:bg-gray-200  rounded-lg  ">
                      <FcGoogle className="text-3xl mr-5" />{" "}
                      <strong className="text-[#303A4B] text-xl">Google</strong>
                    </button>
                    <button className="hover:bg-blue-700 flex py-3 px-14 bg-[#3B5998] rounded-lg ">
                      <ImFacebook className="text-3xl text-white mr-5 " />
                      <strong className="text-white text-xl">Facebook</strong>
                    </button>
                  </div>

                  <button
                    onClick={() => router.push("/login")}
                    className="py-3 px-40 mb-4 ml-4 rounded-md text-white hover:bg-green-600 bg-bellefuGreen "
                  >
                    {" "}
                    Email or Phone Number{" "}
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
            </div>
          </div>
        </div>
        {/* safety tips, share product, report product */}
        <div className="lg:px-7 lg:mt-6 px-3 mt-4">
          <div className="flex items-center justify-between">
            <button
              className=" text-sm lg:text-lg font-medium capitalize text-gray-400 active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (setOpen(!open), setOpen1(false), setOpen2(false))}
            >
              Safety tips
            </button>
            <button
              className="text-sm lg:text-lg font-medium text-gray-400 capitalize active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (
                setOpen1(!open1), setOpen(false), setOpen2(false)
              )}
            >
              Share Product
            </button>
            <button
              className="text-sm lg:text-lg font-medium text-gray-400 capitalize active:text-bellefuTitleBlack cursor-pointer"
              onClick={() => (
                setOpen2(!open2), setOpen(false), setOpen1(false)
              )}
            >
              Report Product
            </button>
          </div>
        </div>
        {/* divider */}
        <div className="border-b lg:mt-6 mt-3" />
        {/* safety tips => details */}
        {open === true && (
          <div className=" px-3 lg:px-7 mt-4 pb-4 space-y-2">
            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="w-3 h-3 text-bellefuOrange rounded-sm" />
              <p className="text-xs sm:text-sm">
                Ensure quality/quantity of Products/Services.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="w-3 h-3 text-bellefuOrange rounded-sm" />
              <p className="text-xs sm:text-sm">
                Ensure meeting in a secured place if the need arise.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <BsFillCheckSquareFill className="lg:w-3 lg:h-3 w-3 h-3 text-bellefuOrange rounded-sm" />
              <p className="text-xs sm:text-sm whitespace-pre-wrap">
                Contact support@bellefu.com if you require verification of buyer
                or seller (Terms & Conditions apply)
              </p>
            </div>
          </div>
        )}

        {/* share product => details */}
        {open1 === true && (
          <div className="px-3 lg:px-7 lg:pb-4 pb-2">
            <div className="flex flex-col lg:items-center py-4 space-y-2 lg:space-x-16">
              <p className="text-xs sm:text-sm lg:text-lg font-medium text-bellefuBlack1">
                Share this product on social media :
              </p>
              <div className="flex items-center justify-center border lg:px-24 px-14 lg:py-6 py-3 rounded-md space-x-4 lg:space-x-7 bg-bellefuBackground ">
                <BsFacebook className="w-7 h-7 text-[#4267B2]" />
                <BsTwitter className="w-7 h-7 text-[#1DA1F2]" />
              </div>
            </div>
          </div>
        )}

        {/* report product => details */}
        {open2 === true && (
          <div className="lg:px-7 px-3 lg:mt-5 mt-2 lg:pb-4 pb-2">
            <div className="flex flex-col lg:items-center lg:py-4 py-2 lg:space-x-16 space-y-2">
              <p className="text-xs sm:text-sm lg:text-lg font-medium text-bellefuBlack1">
                Did you think this product is not original/scam?
              </p>
              <div
                className="flex items-center border px-14 border-bellefuOrange lg:py-3 py-2 rounded-md space-x-3 bg-bellefuBackground "
                onClick={() => setOpen3(!open3)}
              >
                <BsFillFlagFill className="lg:w-7 lg:h-7 w-4 h-4 text-orange-600" />
                <p className="text-md lg:text-lg">Flag this product</p>
              </div>
              {/* report box */}
              {open3 === true && (
                <div className="border -mt-10 bg-bellefuBackground divide-y lg:w-72 border-orange-200 rounded-md">
                  <div className="flex items-center py-1">
                    <div className="flex items-center w-full space-x-3 rounded-md justify-end">
                      <RiMessageFill className="w-4 h-4 text-red-500" />{" "}
                      <p className="text-gray-400 font-normal text-sm">
                        Report
                      </p>
                    </div>
                    <RiCloseFill
                      className="ml-12 w-7 h-7 text-gray-400 pr-1 cursor-pointer"
                      onClick={() => setOpen3(false)}
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
        )}
      </div>
    </div>
  );
};

export default SingleProductDescription;
