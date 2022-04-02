
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { BiCaretRight } from "react-icons/bi";
import { profileDetails } from "../features/bellefuSlice";
import {useRouter} from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";


const VerifyPhone = () => {
  const firstInput = useRef(null);
  const router = useRouter();
  const [isVerified, setVerify] = useState(false);
  const user = useSelector(profileDetails);
  //const [verify, setVerify] = useState(false);
  const [verificationCode, setVerificationCode] = useState({
    firstNo: "",
    secondNo: "",
    thirdNo: "",
    fourthNo: "",
    fivethNo: "",
    sixthNo: "",
  });
  const [codeComplete, setCodeComplete] = useState(true);
  const [resTimeInSec, setResTimeInSec] = useState("");
  const [phone, setPhone] = useState(false);
  const [idopen, setIdopen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [pCongrats, setPCongrats] = useState(false);

  //if (phone && !verificationCode.firstNo) firstInput.current.focus()
  const wantToVerify = () => {
    setVerify(true);
    setPhone(prev => !prev);
    //console.log(firstInput)
    //console.log(firstInput.current)
    //firstInput.current.focus();
  };
  const handleChange = (input) => (evt) => {
    setVerificationCode({...verificationCode, [input]: evt.target.value});
  };
  const submitVerificationCode = async () => {
    const response = await fetch("https://bellefu.inmotionhub.xyz/api/web30/verify/phone/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token: Number(verificationCode.firstNo.concat(verificationCode.secondNo, verificationCode.thirdNo, verificationCode.fourthNo, verificationCode.fivethNo, verificationCode.sixthNo))})
      });
      const data = await response.json();
      console.log(data);

      if (data.status) setPCongrats(true);
  };

  const requestPhoneVerificationCode = async () => {
    const {phone, id} = user;
    const dispatchTime = Date.now();

    const response = await fetch("https://bellefu.inmotionhub.xyz/api/web30/send/phone/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({phone, userid: id})
    });
    const data = await response.json();

    if (data.status) {
      const returnTime = Date.now();
      const timeTaken = returnTime - dispatchTime;

      setResTimeInSec(timeTaken.getSeconds());
      setVerify(true);
      setPhone(prev => !prev);
      firstInput.current.focus();
    } else {
      toast.info("Server busy. Try again", {
        position: POSITION.TOP_CENTER,
      })
    }
  };
  const verificationCodeFieldsFilled = (verificationCode) => {
    let emptyField = false;
    for (const fieldCode in verificationCode) {
      if (Object.hasOwnProperty.call(verificationCode, fieldCode)) {
        if (!verificationCode[fieldCode]) {
          emptyField = true;
          break;
        }
      }
    }

    if (!emptyField) return true;
    else return false;
  }
  useEffect(() => {
    const isFilled  = verificationCodeFieldsFilled(verificationCode);
    

    if (isFilled) {
      submitVerificationCode();
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationCode])

  return (
    <>
    <Head>
      <title>verify phone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto md:w-[50%] md:mx-auto pb-2">
      <h1 className="text-xl ml-4 self p-2">Phone Number Verification</h1>
      <hr />
      {!isVerified ? (
        <div className="h-auto ">
          <div className="border mx-auto my-8 bg-bellefuWhite  rounded-xl w-[80%] md:w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-8 mb-4 items-center">
              <MdVerified className="text-8xl mb-5 text-gray-600" />
              <p className="text-sm text-center text-gray-600 mb-20">
                You have not verified your account
                <br />
                Kindly click on the botton below for Phone verification
              </p>
              <button
                onClick={requestPhoneVerificationCode}
                className="flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-2 w-[65%] justify-center bg-bellefuOrange"
              >
                <span className="mt-1 mr-3"><MdVerified className="text-xl" /></span>{" "}
                <span>Request Phone Verification</span>
              </button>
              <p className="px-3 mt-4 text-center text-md hover:text-bellefuBlack1 hover:cursor-pointer" onClick={() => router.push("/login")}>SKIP VERIFICATION</p>
            </div>
          </div>
        </div>
      ) : (
        // verification options
        <div className="flex flex-col flex-auto mb-4">
          <div className="hover:bg-[#F8FDF2] mt-10 mx-10 py-8 rounded-lg border">
            <div className="flex justify-between items-center">
              <div className="flex px-8">
                <p className="mr-5 pt-1">
                  <MdVerified className="text-3xl text-gray-600" />
                </p>
                <p className="mt-2">Phone Verification</p>
              </div>
              {/* <p
                style={phonestyle}
                onClick={() => setPhone(!phone)}
                className="mr-8"
              >
                <BiCaretRight className="text-xl " />
              </p> */}
            </div>
            {phone && <hr className="mt-7" />}

            {phone && !pCongrats && (
              // phone verification

              <div className="">
                <div className="flex flex-col space-y-5 justify-center items-center mt-16 mb-1">
                  <p className="mb-5">
                    A verification code has been sent to this number :{" "}
                    <strong>{user.phone ? user.phone : "+2348133886084"}</strong>
                  </p>
                  <div className="flex bg-white p-5 border justify-center text-center px-2 mt-5 rounded-md" ref={firstInput}>
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.firstNo}
                      onChange={handleChange("firstNo")}
                      id="firstNo"
                      //ref={firstInput}
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.secondNo}
                      onChange={handleChange("secondNo")}
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.thirdNo}
                      onChange={handleChange("thirdNo")}
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.fourthNo}
                      onChange={handleChange("fourthNo")}
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.fivethNo}
                      onChange={handleChange("fivethNo")}
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxLength="1"
                      value={verificationCode.sixthNo}
                      onChange={handleChange("sixthNo")}
                    />
                  </div>

                  <p className="mb-7">
                    Request another code in:<strong className="ml-3">{resTimeInSec}</strong>{" "}
                  </p>

                  <button
                    onClick={requestPhoneVerificationCode}
                    className="flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-2 w-[65%] justify-center bg-bellefuOrange"
                  >
                    <MdVerified className="text-xl mr-2 mt-1" />
                    <span>Request another code</span>
                  </button>
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

                {/* <div className="flex space-x-5">
                  <button className="px-28 py-4 border  rounded"> skip</button>
                  <button className="px-16 py-4 bg-bellefuOrange text-white rounded">
                    {" "}
                    Continue with ID verification{" "}
                  </button>
                </div> */}
              </div>
            )}
          </div>
        </div>
      )
    }
    </div>
    </>
  )
};

export default VerifyPhone;