import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { MdVerified } from "react-icons/md";
import { BiCaretRight } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import { profileDetails, verified, idpending, kycpending } from "../../features/bellefuSlice";
import { useRouter } from 'next/router'
import axios from "axios";
import { apiData } from "../../constant";
import { toast } from 'react-toastify';
import Countdown from "react-countdown";


function Verifyaccount() {
  //conditional rendering
  const [isCounting, setCounting] = useState(true);
  const [showCount, setShowCount] = useState(false);
  const [countDate, setCountDate] = useState(null);

  const [verify, setVerify] = useState(false);
  const [phone, setPhone] = useState(false);
  const [idopen, setIdopen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [pCongrats, setPCongrats] = useState(false);
  const [file, setFile] = useState(undefined);
  const [idfile, setIdfile] = useState();
  // Id preview
  const [preview, setPreview] = useState();
  const [preview2, setPreview2] = useState();

  // text preview of images
  const [biz, setBiz] = useState(undefined);
  const [pics, setPics] = useState(undefined);
  const [bill, setBill] = useState(undefined);
  //id image file posting
  const [idImage, setIdImage] = useState();
  const [idImage2, setIdImage2] = useState();
  //submitted ?
  // const [idsubmitted, setIdsubmitted] = useState(false);
  // const [kycsubmitted, setKycsubmitted] = useState(false);
  //kYc file posting
  const [bizDoc, setBizDoc] = useState();
  const [picDoc, setPicDoc] = useState();
  const [billDoc, setBillDoc] = useState();
  //kyc bank account details


  const [accountName, setAccountName] = useState('')
  const [accountType, setAccountType] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [bankName, setBankName] = useState('')

  // verification code 
  const [firstNo, setFirstNo] = useState('')
  const [secondNo, setSecondNo] = useState('')
  const [thirdNo, setThirdNo] = useState('')
  const [fourthNo, setFouthNo] = useState('')
  const [fifthNo, setFifthNo] = useState('')
  const [sixthNo, setSixthNo] = useState('')






  const firstInput = useRef(false);
  const secondInput = useRef(false);
  const thirdInput = useRef(false);
  const fourthInput = useRef(false);
  const fifthInput = useRef(false);
  const sixthInput = useRef(false)

  const router = useRouter()
  const isverified = useSelector(verified)
  const dispatch = useDispatch();

  const IDstyle = {
    transform: idopen ? "rotate(90deg)" : "rotate(0)",
    transition: "transform 150ms ease",
    color: idopen ? "#FFA500" : "rgb(116, 110, 110)",
  };
  const KYCstyle = {
    transform: kycOpen ? "rotate(90deg)" : "rotate(0)",
    transition: "transform 150ms ease",
    color: kycOpen ? "#FFA500" : "rgb(116, 110, 110)",
  };
  const phonestyle = {
    transform: phone ? "rotate(90deg)" : "rotate(0)",
    transition: "transform 150ms ease",
    color: phone ? "#FFA500" : "rgb(116, 110, 110)",
  };





  const userId = useSelector((state) => state.bellefu?.profileDetails);


  const idsubmitted = useSelector((state) => state.bellefu.idApply)
  const kycsubmitted = useSelector((state) => state.bellefu.kycApply)


  const handleVerification = (e) => {

    if (firstNo === "" ||
      secondNo === "" ||
      thirdNo === "" ||
      fourthNo === "" ||
      fifthNo === "") {
      toast.error("Please enter all the code digits", {
        position: "top-center",
      })
    } else {
      const OTP = firstNo + secondNo + thirdNo + fourthNo + fifthNo + sixthNo
      console.log(OTP)
      axios.post(`${apiData}verify/phone/code`, {
        token: Number(OTP),

      }).then((res) => {
        if (res.data.status) {
          toast.success("Account verified successfully", {
            position: "top-center",
          })
          setVerify(!verify)
        } else {
          toast.error("Verification code is incorrect", {
            position: "top-center",
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }

  }


  if (sixthNo !== '' && showCount) {
    handleVerification()
  }








  const handleOTPRequest = (e) => {
    e.preventDefault()
    setShowCount(true);
    axios.post(`${apiData}send/phone/code`, {
      userid: userId.id,
      phone: userId.phone,
      action: 'sms'

    })
      .then((res) => {
        console.log(res.data);
        // if (res.data.status) {
        //   // setPCongrats(true)
        // }
      });
  }

  const handleCall = (e) => {
    e.preventDefault()
    setShowCount(true)
    axios.post(`${apiData}send/phone/code`, {
      userid: userId.id,
      phone: userId.phone,
      action: 'call'
    })
      .then((res) => {
        console.log(res.data)
      });

  }


  useEffect(() => {

    if (firstNo && !secondNo) {
      secondInput.current.focus();
      secondInput.current = true;
    }
    if (firstNo && secondNo && !thirdNo) {
      thirdInput.current.focus();
      thirdInput.current = true;
    }
    if (firstNo && secondNo && thirdNo && !fourthNo) {
      fourthInput.current.focus();
      fourthInput.current = true;
    }
    if (firstNo && secondNo && thirdNo && fourthNo && !fifthNo) {
      fifthInput.current.focus();
      fifthInput.current = true;
    }
    if (firstNo && secondNo && thirdNo && fourthNo && fifthNo && !sixthNo) {
      sixthInput.current.focus();
      sixthInput.current = true;
    }





  }, [showCount, firstNo, secondNo, thirdNo, fourthNo, fifthNo])








  const onComplete = () => {

    setShowCount(false);
    if (sixthNo === "") {
      toast.info("Try request OTP by call", {
        position: "top-center",
      })
    }


  }
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return null;
    }
    else return <strong className="ml-3">{minutes}mins:{seconds}s</strong>;
  }




  const arr = [accountName, accountNumber, bankName, accountType]








  const handleIdSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("images1", idImage);
    formData.append("images", idImage2);
    formData.append("userid", userId?.id);
    axios({
      method: "post",
      url: `${apiData}verify/user/id`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then((res) => {
        if (res.data.status) {
          toast.success('Your ID verification is under review', {
            position: "top-center"
          })
          // setIdsubmitted(true)
          dispatch(idpending(true))

        }
      })

  }

  const handleKycSubmit = (e) => {
    e.preventDefault();

    if (accountType === '' ||
      accountNumber === '' ||
      bankName === '' ||
      accountName === '' ||
      bizDoc === undefined ||
      billDoc === undefined) {
      toast.error('Please all fields are required', {
        position: "top-center"
      })

    } else {
      const formData = new FormData();
      formData.append("images1", bizDoc);
      formData.append("images", picDoc);
      formData.append("images2", billDoc);
      formData.append("userid", userId?.id);
      formData.append("accountname", accountName);
      formData.append("accountnumber", accountNumber);
      formData.append("bankname", bankName);
      formData.append("accounttype", accountType);
      axios({
        method: "post",
        url: `${apiData}verify/user/kyc`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
        .then((res) => {
          if (res.data.status) {
            toast.success('Your KYC verification is under review', {
              position: "top-center"
            })
            dispatch(kycpending(true))

          }
        })
    }
  }

  console.log(accountName, accountNumber, bankName, accountType)
  return (
    <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2">
      <div className="text-xl ml-4 self p-2">Account Verification</div>
      <hr />


      {!verify ? (
        <div className="h-auto ">
          <div className="border mx-auto my-3  rounded-xl    w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <MdVerified className="text-8xl mb-7 text-gray-600" />

              <div className='flex mb-4'><MdVerified className={!isverified.phone ? 'text-[#A6A6A6] text-xl' : "text-black/70 text-xl"} /><hr className='w-40 mt-2 m-1' /><MdVerified className={isverified.id ? 'text-bellefuOrange text-xl' : 'text-[#A6A6A6] text-xl'} /><hr className='w-40 mt-2 m-1' /><MdVerified className={isverified.kyc ? 'text-bellefuGreen text-xl' : 'text-[#A6A6A6] text-xl'} /></div>
              <div className='flex justify-between  space-x-32 text-xs mb-10'>
                <p className={!isverified?.phone ? 'text-[#A6A6A6]' : null}>phone verified</p>
                <p className={!isverified?.id ? 'text-[#A6A6A6]' : null}>ID verified</p>
                <p className={!isverified?.kyc ? 'text-[#A6A6A6]' : null}>KYC verified</p>

              </div>

              {isverified?.kyc ? <p className='text-sm text-center text-gray-600 mb-12'> Congrat!! <br />
                you have completed your verification process </p> :
                <p className="text-sm text-center text-gray-600 mb-12">
                  Proceed with your verification
                  <br />
                  Kindly click on the botton below to complete verification process
                </p>}
              <button
                disabled={isverified?.kyc ? true : false}
                onClick={() => setVerify(true)}
                className={isverified?.kyc ? 'bg-[#E0E0E0] rounded-md py-4 px-28 space-x-3' : "flex hover:bg-orange-400 rounded-md text-white py-4 px-28 space-x-3 bg-bellefuOrange"}
              >
                <MdVerified className="text-xl" />{" "}
                <span className={isverified?.kyc ? 'text-[#A6A6A6]' : null} >{isverified.kyc ? ' You have completed verification ' : " Complete Verification"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        // verification options
        <div className="flex flex-col flex-auto mb-8">
          <div className="hover:bg-[#F8FDF2] mt-10 mb-5  mx-10 py-8 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex px-8">
                <p className="mr-5 pt-1">
                  <MdVerified className="text-3xl text-gray-600" />
                </p>
                <p className="mt-2">Phone Verification</p>
              </div>
              <p
                style={phonestyle}
                onClick={() => setPhone(!phone)}
                className="mr-8"
              >
                <BiCaretRight className="text-xl " />
              </p>
            </div>
            {phone && <hr className="mt-7" />}

            {phone && !pCongrats && (
              // phone verification

              <div className=" ease-out h-auto">
                <div className="flex flex-col h-auto space-y-5 justify-center items-center  mt-16 mb-16">
                  <p className="mb-5">
                    A verification code has been sent to this number :{" "}
                    <strong>{userId?.phone} </strong>
                  </p>
                  <div className="flex bg-white p-5 border justify-center text-center px-2 mt-5 rounded-md">
                    <input
                      value={firstNo}
                      onChange={(e) => setFirstNo(e.target.value)}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                      ref={firstInput}
                    />
                    <input
                      value={secondNo}
                      onChange={(e) => setSecondNo(e.target.value)}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                      ref={secondInput}
                    />
                    <input
                      value={thirdNo}
                      onChange={(e) => setThirdNo(e.target.value)}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                      ref={thirdInput}
                    />
                    <input
                      value={fourthNo}
                      onChange={(e) => setFouthNo(e.target.value)}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                      ref={fourthInput}
                    />
                    <input
                      value={fifthNo}
                      onChange={(e) => setFifthNo(e.target.value)}
                      ref={fifthInput}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      value={sixthNo}
                      ref={sixthInput}
                      onChange={(e) => setSixthNo(e.target.value)}
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                  </div>

                  <p className="my-14 ">
                    Request another code in:{showCount ? <Countdown date={Date.now() + 1000 * 60 * 2} renderer={renderer} onComplete={onComplete} /> : <span className='ml-3'>0s</span>}
                  </p>


                  <div className='flex space-x-3 pt-10 justify-center items-center'>
                    <button
                      onClick={handleCall}
                      disabled={showCount ? true : false}
                      className={!showCount ? "flex hover:bg-green-600  rounded-md text-white py-3 px-10 space-x-3 bg-bellefuGreen" : "flex   rounded-md text-white py-3 px-10 space-x-3 bg-[#E0E0E0] "}
                    >
                      <MdVerified className={showCount ? "text-xl text-[#A6A6A6]" : 'text-xl'} />
                      <span className={showCount ? 'text-[#A6A6A6]' : null}>Request call verification</span>
                    </button>
                    <button
                      disabled={showCount ? true : false}
                      onClick={handleOTPRequest}
                      className={!showCount ? "flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-3 px-10 space-x-3 bg-bellefuOrange" : "flex rounded-md text-white py-3 px-10 space-x-3 bg-[#E0E0E0] "}
                    >
                      <MdVerified className={showCount ? "text-xl text-[#A6A6A6]" : 'text-xl'} />
                      <span className={showCount ? 'text-[#A6A6A6]' : null}>Request OTP verification</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {phone && pCongrats && (
              <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                <MdVerified className="text-8xl  mb-5 text-gray-600" />
                <p className="mb-7 text-center">
                  <strong> Congrats !!!</strong>
                  <br /> Your Phone number has been verified
                </p>

                <div className="flex space-x-5">

                  <button className="px-28 py-4 border  rounded"> skip</button>
                  <button className="px-16 py-4 bg-bellefuOrange text-white rounded">
                    {" "}
                    Continue with ID verification{" "}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ID verification */}

          <div className="hover:bg-[#F8FDF2]  mx-10 my-5 py-8 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex px-8">
                <p className="mr-5 pt-1">
                  <MdVerified className="text-3xl text-bellefuOrange" />
                </p>
                <p className="mt-2">ID Verification</p>
              </div>
              <p
                onClick={() => setIdopen(!idopen)}
                style={IDstyle}
                className="mr-8"
              >
                <BiCaretRight className="text-xl " />
              </p>
            </div>

            {/* when id verification is open */}

            {idopen && <hr className="mt-7" />}


            {idopen && preview === undefined && (
              <div className="h-80">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    for (let i = 0; i < acceptedFiles.length; i++) {
                      let loopedfile = acceptedFiles[i];
                      setIdImage(loopedfile);
                    }

                    setPreview(URL.createObjectURL(acceptedFiles[0]))
                  }
                  }
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="border-dashed space-y-4 border-2 mx-10 my-16 flex flex-col border-gray-300 justify-center p-10  items-center "
                    >
                      <input {...getInputProps()} />
                      <p>
                        <BsCloudUpload className="text-6xl text-gray-600" />
                      </p>

                      <div className="space-y-3 flex flex-col items-center justify-center">
                        <p>Click here or Drag & drop images here </p>

                        <div>
                          <p>
                            Max file size :{" "}
                            <strong className="ml-4">5mb</strong>
                          </p>
                          <p className="mb-10">Accept : jpeg/png</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>
            )}
            {/* when first file is uploaded  */}

            {preview !== undefined && idopen && !idsubmitted &&
              <div className="h-80  ">
                <div className="flex items-center my-10 justify-center">
                  <div className="h-40 w-[40%] mr-3 justify-center items-center  border-dashed border">
                    <img
                      alt="invincible"
                      src={preview}
                      className="h-[98%] w-[99%]"
                    />
                  </div>
                  <div className="h-40 w-[40%] items-center justify-center border-dashed border">
                    {preview2 === undefined ? (
                      <Dropzone
                        onDrop={(acceptedFiles) => {

                          for (let i = 0; i < acceptedFiles.length; i++) {
                            let looped = acceptedFiles[i]
                            setIdImage2(looped)
                          }

                          setPreview2(URL.createObjectURL(acceptedFiles[0]))
                        }
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <p {...getRootProps()}>
                            <input {...getInputProps()} />
                            <VscAdd className="text-6xl my-12 mx-32 text-gray-300" />
                          </p>
                        )}
                      </Dropzone>
                    ) : (
                      <img
                        alt="invincible"
                        src={preview2}
                        className="h-[98%] w-[99%]"
                      />
                    )}
                  </div>
                </div>

                <div className="items-center flex space-x-5  justify-center">
                  <button className="px-32 py-4 hover:bg-gray-200 border  rounded">
                    {" "}
                    Cancel
                  </button>
                  <button
                    onClick={handleIdSubmit}
                    className="px-32 py-4 bg-bellefuOrange hover:bg-orange-500 text-white rounded"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            }

            {preview !== undefined && idopen && idsubmitted &&
              <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                <MdVerified className="text-8xl  mb-5 text-bellefuOrange" />
                <p className="mb-7 text-center">
                  <strong> Congrats !!!</strong>
                  <br />{isverified.id ? 'Your ID verification is completed' : ' Your ID verification is under review'}
                </p>

                <div className="flex space-x-5">

                  <button
                    onClick={() => setVerify(false)}
                    className="px-16 py-2 bg-bellefuOrange text-white rounded">
                    Go back
                  </button>
                </div>
              </div>
            }
          </div>

          {/* KYC Verification */}

          <div className="hover:bg-[#F8FDF2] my-5 mx-10 py-8 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex px-8">
                <p className="mr-5 pt-1">
                  <MdVerified className="text-3xl text-bellefuGreen" />
                </p>
                <p className="mt-2">KYC Verification</p>
              </div>
              <p
                onClick={() => setKycOpen(!kycOpen)}
                style={KYCstyle}
                className="mr-8"
              >
                <BiCaretRight className="text-xl" />
              </p>
            </div>

            {/* When KYC is open */}
            {kycOpen && <hr className="mt-7" />}

            {kycOpen && !kycsubmitted && (
              <div className="h-auto">
                {/* first upload */}

                <div className="flex justify-between my-7 mx-10">
                  <div>Company/Business Certificate</div>
                  {biz !== undefined && <p>{biz}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setBiz(acceptedFiles[0].name);
                    for (let i = 0; i < acceptedFiles.length; i++) {
                      let looped = acceptedFiles[i]
                      setBizDoc(looped)
                    }
                    // setBiz(URL.createObjectURL(acceptedFiles[0]))
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="border-dashed space-y-4 border-2 mx-10 my-16 flex flex-col border-gray-300 justify-center p-10  items-center "
                    >
                      <input {...getInputProps()} />
                      <p>
                        <BsCloudUpload className="text-6xl text-gray-600" />
                      </p>

                      <div className="space-y-3 flex flex-col items-center justify-center">
                        <p>Click here or Drag & drop images here </p>

                        <div>
                          <p>
                            Max file size :{" "}
                            <strong className="ml-4">5mb</strong>
                          </p>
                          <p className="mb-10">Accept : jpeg/png</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>


                <hr className="mb-10" />

                {/* second upload  */}

                <div className="flex justify-between my-7 mx-10">
                  <div>Proof of Address or Utility bill</div>
                  {bill !== undefined && <p>{bill}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setBill(acceptedFiles[0].name);
                    for (let i = 0; i < acceptedFiles.length; i++) {
                      let looped = acceptedFiles[i]
                      setBillDoc(looped)
                    }
                    // setBiz(URL.createObjectURL(acceptedFiles[0]))
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="border-dashed space-y-4 border-2 mx-10 my-16 flex flex-col border-gray-300 justify-center p-10  items-center "
                    >
                      <input {...getInputProps()} />
                      <p>
                        <BsCloudUpload className="text-6xl text-gray-600" />
                      </p>

                      <div className="space-y-3 flex flex-col items-center justify-center">
                        <p>Click here or Drag & drop images here </p>

                        <div>
                          <p>
                            Max file size :{" "}
                            <strong className="ml-4">5mb</strong>
                          </p>
                          <p className="mb-10">Accept : jpeg/png</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>



                {/* third upload  */}

                <hr className="mb-10" />

                <div className="flex justify-between my-7 mx-10">
                  <div>Picture of your farm/office</div>
                  {pics !== undefined && <p>{pics}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setPics(acceptedFiles[0].name);
                    for (let i = 0; i < acceptedFiles.length; i++) {
                      let looped = acceptedFiles[i]
                      setPicDoc(looped)
                    }
                    // setBiz(URL.createObjectURL(acceptedFiles[0]))
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="border-dashed space-y-4 border-2 mx-10 my-16 flex flex-col border-gray-300 justify-center p-10  items-center "
                    >
                      <input {...getInputProps()} />
                      <p>
                        <BsCloudUpload className="text-6xl text-gray-600" />
                      </p>

                      <div className="space-y-3 flex flex-col items-center justify-center">
                        <p>Click here or Drag & drop images here </p>

                        <div>
                          <p>
                            Max file size :{" "}
                            <strong className="ml-4">5mb</strong>
                          </p>
                          <p className="mb-10">Accept : jpeg/png</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>



                {/* company account details form  */}
                <hr className="mb-10" />

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Account Number
                  </label>
                  <input
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Account Name
                  </label>
                  <input
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Type of Account
                  </label>
                  <input
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Bank Name
                  </label>
                  <input
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>



                <div className="p-5 flex justify-center items-center ">
                  <button
                    onClick={handleKycSubmit}

                    className="  w-[50%] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    submit
                  </button>
                </div>
              </div>
            )}


            {kycOpen && kycsubmitted && (
              <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                <MdVerified className="text-8xl  mb-5 text-bellefuGreen" />
                <p className="mb-7 text-center">
                  <strong> Congrats !!!</strong>
                  <br /> {isverified?.kyc ? 'Your KYC verification had been completed' : 'Your KYC verification is under review'}
                </p>

                <div className="flex space-x-5">

                  <button
                    onClick={() => setVerify(false)}
                    className="px-16 py-2 bg-bellefuOrange text-white rounded">
                    Go back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
Verifyaccount.Layout = Layout;
export default Verifyaccount;
