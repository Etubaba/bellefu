import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {BsEye, BsEyeSlash} from "react-icons/bs";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import google from "../public/bellefu-images/google.svg"
import facebook from "../public/bellefu-images/facebook.svg";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
    if (evt.target.value) setShowIcon(true);
    else setShowIcon(false);
  };
  const onPhoneChange = (evt) => {
    setPhone(evt.target.value);
  }

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterHeader />
      <div className="w-[55%] mx-auto mb-20 rounded-lg border-2">
        <h1 className="text-center font-bold py-4">Welcome Back! Login To Your Account</h1>
        <hr />
        <div className="py-8 px-12">
          <div className="flex my-9">
            <div className="flex flex-col flex-auto mr-6">
              <p><label id="first-name">Phone Number</label></p>
              <p><input type="text" htmlFor="first-name" value={phone} className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" onChange={onPhoneChange} /></p>
            </div>
            <div className="flex flex-col flex-auto">
              <p><label id="first-name">Password</label></p>
              { showPassword ? <BsEyeSlash onClick={handleClickShowPassword} className={showIcon?'absolute  mt-9  right-[28%] hover:cursor-pointer':"hidden"} /> : <BsEye onClick={handleClickShowPassword} className={showIcon?'absolute  mt-9  right-[28%] hover:cursor-pointer':"hidden"} />
              }
              <p className=""><input type={showPassword?"text":"password"} htmlFor="first-name" className="w-full rounded-lg py-2 pl-3 pr-30 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={password} onChange={onPasswordChange} /></p>
            </div>
          </div>
          <p className="w-[50%] mx-auto"><button className="bg-[#FFA500] w-full text-white py-2 text-center rounded-md mb-4" type="button">Login</button></p>
          <p className="w-[50%] mx-auto text-center"><button>Forget Password</button></p>
        </div>
        <hr />
        <p className="text-center mt-11 mb-8">OR</p>
        <div className="flex justify-center mb-12">
          <p className="mr-9"><button type="button" className="border-2 rounded-lg py-3 pl-4 pr-14"><Image src={google} alt="google" width="14px" height="14px" /><span className="pl-4">Login with Google</span></button></p>
          <p className="text-white"><button type="button" className="border-2 rounded-lg py-3 pl-4 pr-14 bg-[#3B5998]"><span className="rounded-full bg-white"><Image src={facebook} alt="google" width="14px" height="14px" /></span><span className="pl-4">Login with Facebook</span></button></p>
        </div>
      </div>
    </>
  )
}

export default Login;