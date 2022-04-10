import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Head from "next/head";
import Image from "next/image";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import google from "../public/bellefu-images/google.svg";
import facebook from "../public/bellefu-images/facebook.svg";
import { apiData } from "../constant";
import { useDispatch } from "react-redux";
import { isLoggedIn, setProfileDetails, ifVerified } from "../features/bellefuSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    phone: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const handleChange = (input) => (evt) => {
    if (input === "password") {
      if (evt.target.value) setShowIcon(true);
      else setShowIcon(false);
    }
    setFormFields({ ...formFields, [input]: evt.target.value })
  }
  const handleLogin = (evt) => {
    evt.preventDefault();

    setLoading(true);
    fetch(`${apiData}user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formFields),
    })
      .then(response => response.json())
      .then((data) => {
        setLoading(false);

        if (data.status) {
          const user = data.data.user
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem('verify', JSON.stringify(data.data.verification))
          dispatch(ifVerified(data.data.verification))
          dispatch(isLoggedIn(true));
          dispatch(setProfileDetails(user));
          router.replace("/");
        }
        else {
          toast.error(data.msg, {
            position: toast.POSITION.TOP_CENTER
          })
          router.push("/login");
        }
      })
      .catch(error => {
        setLoading(false);

        console.log(`Error during login due to: ${error}`);
      })
  }

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
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
      <div className="w-[90%] md:w-[55%] mx-auto mb-20 rounded-lg border-2">
        <h1 className="text-center font-bold py-4">Welcome Back! Login To Your Account</h1>
        <hr />
        <form className="py-8 px-3 sm:px-6 md:px-12" onSubmit={handleLogin}>
          <div className="flex flex-col md:flex-row my-3 md:my-9">
            <div className="flex flex-col flex-auto md:mr-6 mb-4 md:mb-0">
              <p><label id="phone" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">User Name or Phone Number</label></p>
              <p><input type="text" htmlFor="phone" value={formFields.phone} className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" onChange={handleChange("phone")} /></p>
            </div>
            <div className="flex flex-col flex-auto mb-4 md:mb-0">
              <p><label id="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Password</label></p>
              {showPassword ? <BsEyeSlash onClick={handleClickShowPassword} className={showIcon ? 'absolute  mt-9  right-[10%] md:right-[27%] hover:cursor-pointer' : "hidden"} /> : <BsEye onClick={handleClickShowPassword} className={showIcon ? 'absolute  mt-9 right-[10%] md:right-[27%] hover:cursor-pointer' : "hidden"} />
              }
              <p className=""><input type={showPassword ? "text" : "password"} htmlFor="password" className="w-full rounded-lg py-2 pl-3 pr-30 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.password} onChange={handleChange("password")} /></p>
              <p className="text-right mt-2"><button type="button" onClick={() => router.push("/forgot-password")} className="hover:text-bellefuGreen hover:underline hover:cursor-pointer">forgot password</button></p>
            </div>
          </div>
          <p className="w-[100%] md:w-[50%] mx-auto"><button className={!isLoading ? "hover:bg-[#FFA500] bg-[#fabe50] w-full text-white py-2 text-center rounded-md mb-4" : "bg-[#fabe50] w-full text-white py-2 text-center rounded-md mb-4"} type="submit" disabled={isLoading ? true : false}>{!isLoading ? "Login" : "Processing..."}</button></p>
        </form>
        <hr />
        <p className="text-center mt-11 mb-8">OR</p>
        <div className="flex flex-col md:flex-row items-center md:justify-center mb-12 px-2 py-4 md:px-4 md:py-4">
          <p className="mb-3 md:mb-0 md:mr-9 w-[100%] md:w-[75%]">
            <button
              type="button"
              className="flex justify-center items-center border-2 rounded-lg py-3 pl-4 pr-14 bg-white hover:bg-[#F2F2F2] w-full"
            >
              {/* <Image src={google} alt="google" width="14px" height="14px" /> <span className="pl-4">Login with Google</span> */}
              <FcGoogle className='text-3xl mr-5' /> <strong className='text-[#303A4B] pl-2 text-xl'>Google</strong>

            </button>
          </p>
          <p className="text-white w-[100%] md:w-[75%]">
            <button
              type="button"
              className="flex border-2 rounded-lg py-3 justify-center items-center pl-4 pr-11 md:pr-14 bg-blue-500 hover:bg-blue-600 w-full"
            >  {/* <Image src={facebook} alt="google" width="14px" height="14px" /> */}

              {/* <span className="rounded-full bg-white">
              
                <ImFacebook className='text-2xl text-white mr-5 ' />
              </span> */}
              <ImFacebook className='text-2xl text-white mr-2 ' />
              <strong className="pl-2 text-xl"> Facebook</strong>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
