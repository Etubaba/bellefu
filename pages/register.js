import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import google from "../public/bellefu-images/google.svg"
import facebook from "../public/bellefu-images/facebook.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterHeader />
      <div className="w-[55%] mx-auto mb-20 rounded-lg border-2">
        <h1 className="text-center font-bold py-4">Create Your Account With Bellefu!</h1>
        <hr />
        <div className="py-8 px-12">
          <div className="flex my-9">
            <div className="flex flex-col flex-auto mr-6">
              <p><label id="first-name">First Name</label></p>
              <p><input type="text" htmlFor="first-name" className="w-full rounded-lg py-2 px-3 border-2 " value={firstName} /></p>
            </div>
            <div className="flex flex-col flex-auto">
              <p><label id="first-name">Last Name</label></p>
              <p><input type="text" htmlFor="first-name" className="w-full rounded-lg py-2 px-3 border-2 " value={lastName} /></p>
            </div>
          </div>
          <div className="flex mb-9">
            <div className="flex flex-col flex-auto mr-6">
              <p><label id="first-name">Phone Number</label></p>
              <p><input type="text" htmlFor="first-name" value={phone} className="w-full rounded-lg py-2 px-3 border-2 " /></p>
            </div>
            <div className="flex flex-col flex-auto">
              <p><label id="first-name">Password</label></p>
              <p><input type="text" htmlFor="first-name" className="w-full rounded-lg py-2 px-3 border-2 " value={password} /></p>
            </div>
          </div>
          <p className="bg-[#FFA500] text-white w-[50%] mx-auto py-4 text-center rounded-md mb-4 hover:cursor-pointer">Register</p>
        </div>
        <hr />
        <p className="text-center mt-11 mb-8">OR</p>
        <div className="flex justify-center mb-12">
          <p className="mr-9"><button type="button" className="border-2 rounded-lg py-3 pl-4 pr-20"><Image src={google} alt="google" width="14px" height="14px" /><span className="pl-4">Register with Google</span></button></p>
          <p className="text-white"><button type="button" className="border-2 rounded-lg py-3 pl-4 pr-20 bg-[#3B5998]"><span className="rounded-full bg-white"><Image src={facebook} alt="google" width="14px" height="14px" /></span><span className="pl-4">Register with Facebook</span></button></p>
        </div>
      </div>
    </>
  )
}

export default Register;