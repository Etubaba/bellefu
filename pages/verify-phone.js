import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { MdVerified, MdCall } from "react-icons/md";
//import { BiCaretRight } from "react-icons/bi";
import { profileDetails } from "../features/bellefuSlice";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import classNames from "classnames";

const VerifyPhone = () => {
  const firstInput = useRef();
  const router = useRouter();
  const [isVerified, setVerify] = useState(false);
  const user = useSelector(profileDetails);
  const [verificationCode, setVerificationCode] = useState({
    firstNo: "",
    secondNo: "",
    thirdNo: "",
    fourthNo: "",
    fivethNo: "",
    sixthNo: "",
  });
  const [showCount, setShowCount] = useState(false);
  const [phone, setPhone] = useState(false);
  const [pCongrats, setPCongrats] = useState(false);
  const [smsVerification, setSmsVerification] = useState(false);
  const [callVerification, setCallVerification] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [target, setTarget] = useState(null); //Save the active element in a state to target next element

  const handleChange = (input) => (evt) => {
    
    if (isNaN(evt.target.value)) return;
    if (evt.target.value) setTarget(evt.target);

    setVerificationCode({ ...verificationCode, [input]: evt.target.value });
  };
  const handleSmsVerification = (evt) => {
    setSmsVerification(true);
    requestVerificationCode(evt);
  };
  const handleCallVerification = (evt) => {
    setCallVerification(true);
    requestVerificationCode(evt);
  };
  const submitVerificationCode = async () => {
    const response = await fetch(
      "https://bellefu.inmotionhub.xyz/api/general/verify/phone/code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: Number(
            verificationCode.firstNo.concat(
              verificationCode.secondNo,
              verificationCode.thirdNo,
              verificationCode.fourthNo,
              verificationCode.fivethNo,
              verificationCode.sixthNo
            )
          ),
        }),
      }
    );
    const data = await response.json();

    if (data.status) setPCongrats(true);
  };

  const requestVerificationCode = async (evt) => {
    const { phone, id } = user;
    const currentTarget = evt.currentTarget;

    let fetchBody;

    if (currentTarget.name === "sms") fetchBody = { phone, userid: id, action: "sms" };
    else if (currentTarget.name === "call") fetchBody = { phone, userid: id, action: "call" };

    setLoading(true);
    const response = await fetch(
      "https://bellefu.inmotionhub.xyz/api/general/send/phone/code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchBody),
      }
    );
    const data = await response.json();

    if (data.status) {
      setShowCount(true);

      //if (!smsVerifiaction) setSmsVerification(false);

      if (currentTarget.name !== "anothercode") {
        setVerify(true);
        setPhone((prev) => !prev);
      }
      setLoading(false);

      if (!verificationCode.firstNo)  firstInput.current.focus();
    } else {
      toast.info(data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });

      setLoading(false);
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
  };
  const onCountComplete = () => {
    setShowCount(false);
  };
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else
      return (
        <strong className="ml-3">
          {minutes}mins:{seconds}s
        </strong>
      );
  };
  useEffect(() => {
    const isFilled = verificationCodeFieldsFilled(verificationCode);
    console.log(isLoading);

    if (target?.value) {

      if (verificationCode.firstNo && !verificationCode.secondNo && target.value) {
        target.nextSibling.focus();
      }
  
      if (verificationCode.firstNo && verificationCode.secondNo && !verificationCode.thirdNo) {
        target.nextSibling.focus();
      }
  
      if (verificationCode.firstNo && verificationCode.secondNo && 
        verificationCode.thirdNo && !verificationCode.fourthNo) {
          target.nextSibling.focus();
      }
  
      if (verificationCode.firstNo && verificationCode.secondNo && verificationCode.thirdNo && 
        verificationCode.fourthNo && !verificationCode.fivethNo) {
          target.nextSibling.focus();
      }
  
      if ( verificationCode.firstNo && verificationCode.secondNo && verificationCode.thirdNo &&
        verificationCode.fourthNo && verificationCode.fivethNo && !verificationCode.sixthNo ) {
        target.nextSibling.focus();
      }  
    }

    if (isFilled) {
      submitVerificationCode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationCode, showCount]);

  return (
    <>
      <Head>
        <title>Verify Phone</title>
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
                <p className="text-sm text-center text-gray-600 mb-10">
                  You have not verified your account
                  <br />
                  Kindly click on the botton below for Phone verification
                </p>
                <div className="flex flex-col md:flex-row px-2">
                  <div className="flex-auto md:mr-3 mb-2 md:mb-0">
                    <button
                      onClick={handleSmsVerification}
                      className={classNames("flex ease-in-out duration-300 rounded-md text-white px-9 md:px-2 py-2 bg-bellefuOrange", {"hover:cursor-not-allowed": isLoading, "bg-orange-200": isLoading,"hover:bg-orange-400": !isLoading, "cursor-pointer": !isLoading})}
                      name="sms"
                      disabled={isLoading?true:false}
                    >
                      { !smsVerification && <span className="mt-1 mr-1"><MdVerified className="text-xl" /></span> }
                      <span>{!smsVerification?"SMS Verification":"Requesting..."}</span>
                    </button>
                  </div>
                  <div className="flex-auto">
                    <button
                      onClick={handleCallVerification}
                      className={classNames("flex ease-in-out duration-300 rounded-md text-white px-2 py-2 w-full justify-center bg-bellefuGreen",{"hover:cursor-not-allowed": isLoading, "bg-green-200": isLoading, "hover:bg-green-400": !isLoading, "cursor-pointer": !isLoading})}
                      name="call"
                      disabled={isLoading?true:false}
                    >
                      { !callVerification && <span className="mt-1 mr-1 "><MdCall className="text-xl" /></span> }
                      <span>{!callVerification?"Call Verification":"Requesting..."}</span>
                    </button>
                  </div>
                </div>
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
                    <MdVerified
                      className={
                        pCongrats
                          ? "text-3xl text-bellefuGreen"
                          : "text-3xl text-gray-600"
                      }
                    />
                  </p>
                  <p className="mt-2">Phone Verification</p>
                </div>
              </div>
              {phone && <hr className="mt-7" />}

              {phone && !pCongrats && (
                // phone verification

                <div className="">
                  <div className="flex flex-col space-y-5 justify-center items-center mt-16 mb-1">
                    <p className="mb-5 px-9">
                      Enter the code{" "}
                      {smsVerification ? "sent to" : "your hear on"} this number
                      : <strong>{user?.phone}</strong>
                    </p>
                    <div className="flex bg-white p-5 border justify-center text-center px-2 mt-5 rounded-md">
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.firstNo}
                        onChange={handleChange("firstNo")}
                        ref={firstInput}
                      />
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.secondNo}
                        onChange={handleChange("secondNo")}
                      />
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.thirdNo}
                        onChange={handleChange("thirdNo")}
                      />
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.fourthNo}
                        onChange={handleChange("fourthNo")}
                      />
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.fivethNo}
                        onChange={handleChange("fivethNo")}
                      />
                      <input
                        className="m-2 border focus:border-0 focus:outline focus:outline-bellefuOrange h-12 w-12 text-center form-control rounded"
                        type="text"
                        maxLength="1"
                        value={verificationCode.sixthNo}
                        onChange={handleChange("sixthNo")}
                      />
                    </div>

                    <p className="mb-7">
                      If you did not recieve {smsVerification ? "code" : "call"}, request again in:{" "}
                      {showCount ? (
                        <Countdown
                          date={Date.now() + 1000 * 60 * 2}
                          renderer={renderer}
                          onComplete={onCountComplete}
                        />
                      ) : (
                        <span>0s</span>
                      )}
                    </p>

                    <button
                      onClick={(evt) => requestVerificationCode(evt)}
                      className={
                        showCount
                          ? "flex rounded-md text-white py-2 w-[65%] justify-center bg-bellefuOrange bg-opacity-50 hover:cursor-not-allowed"
                          : "flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-2 w-[65%] justify-center bg-bellefuOrange"
                      }
                      name="anothercode"
                      disabled={showCount ? true : false}
                    >
                      <MdVerified className="text-xl mr-2 mt-1" />
                      <span>
                        Request another {smsVerification ? "code" : "call"}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {phone && pCongrats && (
                <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                  <MdVerified className="text-8xl  mb-5 text-bellefuGreen" />
                  <p className="mb-7 text-center">
                    <strong> Congrats !!!</strong>
                    <br /> Your Phone number has been verified
                  </p>
                  <p className="font-medium">
                    <button
                      type="button"
                      onClick={() => router.push("/login")}
                      className="hover:underline text-bellefuGreen hover:text-bellefuOrange font-semibold"
                    >
                      Login
                    </button>{" "}
                    to continue
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyPhone;
