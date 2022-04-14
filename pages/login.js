import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import Head from "next/head";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import { apiData } from "../constant";
import { useDispatch } from "react-redux";
import { isLoggedIn, setProfileDetails, ifVerified } from "../features/bellefuSlice";
import axios from "axios";
//import { data } from "autoprefixer";

const Login = () => {
  const {data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    phone: "",
    password: "",
    socalSignin: false,
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


  // const handleSocialLogin = async () => {
  //   console.log(session)
  //   console.log("!")

  //   const signInData = await signIn("google");
  //   console.log(session);
  //   console.log(signInData);
  //   console.log("!!")

  //   if (signInData.ok) {
  //     const {providerId, providerName} = session;

  //     console.log("!!!")

  //     const res = await axios.post(`${apiData}user/login`, {providerId, providerName, socialSignin: true});
  //     const data = res.data;
  //       console.log(data);

  //       if (!data.status) {
  //         console.log(data.data);

  //         toast.error(data.msg, {
  //           position: toast.POSITION.TOP_CENTER
  //         })
  //         router.push("/login");
  //         return null;
  //       }

  //       const user = data.data.user
  //         localStorage.setItem("user", JSON.stringify(user));
  //         localStorage.setItem('verify', JSON.stringify(data.data.verification))
  //         dispatch(ifVerified(data.data.verification))
  //         dispatch(isLoggedIn(true));
  //         dispatch(setProfileDetails(user));

  //         const signOutData = await signOut({redirect: false, callbackUrl: "/"});
  //         router.replace(signOutData.url);
  //   }
  // }
  const socialLoginCallback = async (sessionData) => {
    const {providerId, providerName} = sessionData;

    const res = await axios.post(`${apiData}user/login`, {providerId, providerName, socialSignin: true});
    const data = res.data;
    //console.log(data);

    if (!data.status) {
      console.log(data.data);

      toast.error(data.msg, {
        position: toast.POSITION.TOP_CENTER
      })
      router.push("/login");
      return null;
    }

    const user = data.data.user
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem('verify', JSON.stringify(data.data.verification))
    dispatch(ifVerified(data.data.verification))
    dispatch(isLoggedIn(true));
    dispatch(setProfileDetails(user));

    //Sign out user after authentication from the social media network to make bellefu handle logout.
    const signOutData = await signOut({redirect: false, callbackUrl: "/"});
    router.replace(signOutData.url);
  }

  useEffect(() => {
    if (session?.providerId) {
      socialLoginCallback(session);
    }
  }, [session])


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
              className="flex justify-center items-center border-2 rounded-lg py-3 pl-4 pr-6 bg-white hover:bg-[#F2F2F2] w-full"
              onClick={() => signIn("google")}
            >
              <FcGoogle className='text-3xl' /> <strong className='text-[#303A4B] pl-4 text-lg'>Sign in with Google</strong>

            </button>
          </p>
          <p className="text-white w-[100%] md:w-[75%]">
            <button
              type="button"
              className="flex border-2 rounded-lg py-3 justify-center items-center pl-4 pr-6 bg-blue-500 hover:bg-blue-600 w-full"
            >  
              <ImFacebook className='text-3xl text-white' />
              <strong className="pl-4 text-lg">Sign in with Facebook</strong>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
