import React, { useState, useCallback } from "react";
import Layout from "../../components/Layout";
import { MdVerified } from "react-icons/md";
import { BiCaretRight } from "react-icons/bi";
import { BsCloudUpload } from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import UnstyledSelectSimple from "../../components/layoutComponents/form-fields/CustomSelect";
import UnstyledSelectSimple2 from "../../components/layoutComponents/form-fields/CountrySelect";
import UnstyledSelectSimple3 from "../../components/layoutComponents/form-fields/StateProvince";
import UnstyledSelectSimple4 from "../../components/layoutComponents/form-fields/City";
import UnstyledSelectSimple5 from "../../components/layoutComponents/form-fields/Lga";

function verifyaccount() {
  const [verify, setVerify] = useState(false);
  const [phone, setPhone] = useState(false);
  const [idopen, setIdopen] = useState(false);
  const [kycOpen, setKycOpen] = useState(false);
  const [pCongrats, setPCongrats] = useState(false);
  const [file, setFile] = useState(undefined);
  const [idfile, setIdfile] = useState();
  const [preview, setPreview] = useState();
  const [preview2, setPreview2] = useState();

  const [biz, setBiz] = useState(undefined);
  const [pics, setPics] = useState(undefined);
  const [bill, setBill] = useState(undefined);

  // const onDrop = useCallback(acceptedFiles => {
  //     setFile(acceptedFiles)
  //     setPreview(URL.createObjectURL(acceptedFiles[0]))
  // }, [])

  const idsubmit = () => {
    window.location.reload(false);
    setPreview(undefined);
  };

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

  return (
    <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2">
      <div className="text-xl ml-4 self p-2">Account Verification</div>
      <hr />

      {verify ? (
        <div className="h-auto ">
          <div className="border mx-auto my-6  rounded-xl    w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <MdVerified className="text-8xl mb-5 text-gray-600" />
              <p className="text-sm text-center text-gray-600 mb-20">
                You have not verified your account
                <br />
                Kindly click on the botton below for Phone verification
              </p>
              <button
                onClick={() => setVerify(true)}
                className="flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-4 px-28 space-x-3 bg-bellefuOrange"
              >
                <MdVerified className="text-xl" />{" "}
                <span>Request Phone Verification</span>
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

              <div className=" ease-out h-96">
                <div className="flex flex-col space-y-5 justify-center items-center mt-16 mb-24">
                  <p className="mb-5">
                    A verification code has been sent to this number :{" "}
                    <strong>+2348133886084</strong>
                  </p>
                  <div className="flex bg-white p-5 border justify-center text-center px-2 mt-5 rounded-md">
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                    <input
                      className="m-2 border h-12 w-12 text-center form-control rounded"
                      type="text"
                      maxlength="1"
                    />
                  </div>

                  <p className="mb-7">
                    Request another code in:<strong className="ml-3">0s</strong>{" "}
                  </p>

                  <button
                    onClick={() => setPCongrats(true)}
                    className="flex hover:bg-orange-400 ease-in-out duration-300 rounded-md text-white py-4 px-32 space-x-3 bg-bellefuOrange"
                  >
                    <MdVerified className="text-xl" />
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
                  onDrop={(acceptedFiles) =>
                    setPreview(URL.createObjectURL(acceptedFiles[0]))
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

            {preview !== undefined && idopen && (
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
                        onDrop={(acceptedFiles) =>
                          setPreview2(URL.createObjectURL(acceptedFiles[0]))
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
                    onClick={idsubmit}
                    className="px-32 py-4 bg-bellefuOrange hover:bg-orange-500 text-white rounded"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            )}
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

            {kycOpen && (
              <div className="h-auto">
                {/* first upload */}

                <div className="flex justify-between my-7 mx-10">
                  <div>Company/Business Certificate</div>
                  {biz !== undefined && <p>{biz}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setBiz(acceptedFiles[0].name);
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

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Document description
                  </label>
                  <input
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <hr className="mb-10" />

                {/* second upload  */}

                <div className="flex justify-between my-7 mx-10">
                  <div>Proof of Address or Utility bill</div>
                  {bill !== undefined && <p>{bill}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setBill(acceptedFiles[0].name);
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

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Document description
                  </label>
                  <input
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                {/* third upload  */}

                <hr className="mb-10" />

                <div className="flex justify-between my-7 mx-10">
                  <div>Picture of your farm/office</div>
                  {pics !== undefined && <p>{pics}</p>}
                </div>
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setPics(acceptedFiles[0].name);
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

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Document description
                  </label>
                  <input
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                {/* company account details form  */}
                <hr className="mb-10" />

                <div className=" m-10 space-y-5">
                  <label className="block  text-sm font-medium text-gray-700">
                    Account Number
                  </label>
                  <input
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
                    type="text"
                    autocomplete="family-name"
                    className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen mb-10 focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                  />
                </div>

                <hr className="mb-10" />

                <form action="#" method="POST">
                  <div className=" overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <div className=" relative rounded-md">
                            <div className="absolute inset-y-0 left-0 top-[1.23rem] flex items-center">
                              <UnstyledSelectSimple />
                            </div>
                            <label
                              htmlFor="price"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tele"
                              name="phone-number"
                              id="phone-number"
                              className="bg-[white] p-[8px] mt-[2px] focus:ring-bellefuGreen focus:outline-0 block w-[70%] relative left-[7vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                              placeholder="Your number"
                            />
                          </div>
                        </div>
                        {/* first field */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>
                          <UnstyledSelectSimple2 />
                        </div>
                        {/* second field */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="state"
                            className="block  text-sm font-medium text-gray-700"
                          >
                            States/Province
                          </label>
                          <UnstyledSelectSimple3 />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            className="block  text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <UnstyledSelectSimple4 />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            LGA
                          </label>
                          <UnstyledSelectSimple5 />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            className="block  text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            autocomplete="your address"
                            className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <button
                      type="submit"
                      class="flex justify-center items-center w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
verifyaccount.Layout = Layout;
export default verifyaccount;
