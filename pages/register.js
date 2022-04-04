import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
//import axios from "axios";
import { apiData } from "../constant";
import {BsEye, BsEyeSlash} from "react-icons/bs";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import google from "../public/bellefu-images/google.svg";
import facebook from "../public/bellefu-images/facebook.svg";
import { setProfileDetails } from "../features/bellefuSlice";
import { data } from "autoprefixer";

export const getStaticProps = async () => {
  const response = await fetch(`${apiData}get/countries`);
  const {data} = await response.json()

  return {
    props: {countries: data.slice().sort()}
  }
};

const Register = ({countries}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState({
    fname: "",
    lname: "",
    email: "",
    countryCode: "",
    gender: "",
    phone: "",
    username: "",
    password: ""
  });
  const [usernameExists, setUsernameExists] = useState(false);
  const [phoneExists, setPhoneExists] = useState(false);
  const phoneExistsRef = useRef(false);
  const usernameExistsRef = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFieldError, setFormFieldError] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onChange = (input) => (evt) => {
    setFormFields({ ...formFields, [input]: evt.target.value });
    if (input === "password") {
      if (evt.target.value) setShowIcon(true);
      else setShowIcon(false);
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleRegister = () => {
    let formValues = formFields;

    if (!formFields.email) {
      formValues = {...formFields, email: `${formFields.username}@gmail.com`}
    }
    //setFormFields({...formFields, email: `${formFields.username}@gmail.com`})
    //console.log(formValues);
    setIsLoading(true);
    fetch(`${apiData}user/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setIsLoading(false);
      if (data.status) {
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch(setProfileDetails(data.data));
      
        router.push("/verify-phone");
      }
    })
    .catch(error => {
      console.log(`Error for user registration ${error}`);
      setIsLoading(false);
    })
  };
  const validateInput = (formValues) => {
    for (const key in formValues) {
      if (Object.hasOwnProperty.call(formValues, key) && !formValues[key]) {
        setFormFieldError(true);
        break;
      }
    }

    if (formFieldError) return false;
    else return true;
  };
  const checkExists = (evt) => {
    const target = evt.target;

    if (!target.value) return;

    console.log("!");
    fetch(`${apiData}user/exist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(target.value)
    })
    .then(response => response.json())
    .then(resData => {
      if (!resData.status && target.name === "phone") setPhoneExists(true);
      else setPhoneExists(false);

      if (!resData.status && target.name === "username") setUsernameExists(true);
      else setUsernameExists(false);
    })
    .catch(error => {
      console.log(error);
    })
  };
  const clearExists = (evt) => {
    const target = evt.target;

    if (target.name === "phone") setPhoneExists(false);
    if (target.name === "username") setUsernameExists(false);
  }

  // useEffect(() => {
  //   console.log("!!!");
    
  //   if (formFields.phone && !phoneExistsRef.current.value) checkExists(formFields.phone, phoneExistsRef, setPhoneExists);
  //   if (formFields.username && !usernameExistsRef.current.value) checkExists(formFields.username, usernameExistsRef, setUsernameExists);
  // }, [formFields]);

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterHeader />
      <div className="w-[90%] md:w-[55%] mx-auto mb-20 rounded-lg border-2">
        <h1 className="text-center font-bold py-4">Create Your Account With Bellefu!</h1>
        <hr />
        <div className="py-4 md:py-8 px-3 sm:px-6 md:px-12">
          {/* <p className="before:content-['*'] befoe:mr-0.9 before:text-red-500 text-md font-medium text-slate-700">Required fields</p> */}
          <div className="flex flex-col md:flex-row my-3 md:my-9">
            <div className="flex flex-col flex-auto md:mr-6 mb-4 md:mb-0">
              <p><label id="first-name" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">First Name</label></p>
              <p><input type="text" htmlFor="first-name" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.fname} onChange={onChange("fname")} /></p>
            </div>
            <div className="flex flex-col flex-auto mb-4 md:mb-0">
              <p><label id="first-name" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Last Name</label></p>
              <p><input type="text" htmlFor="first-name" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.lname} onChange={onChange("lname")} /></p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-3 md:my-9">
            <div className="flex flex-col flex-auto md:mr-6 mb-4 md:mb-0">
              <p><label id="email" className="text-sm font-medium text-slate-700">Email (optional)</label></p>
              <p><input type="text" htmlFor="email" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.email} onChange={onChange("email")} /></p>
            </div>
            <div className="flex flex-col flex-auto mb-4 md:mb-0">
              <p><label id="phone" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Phone Number</label></p>
              <p><input type="text" htmlFor="phone" value={formFields.phone} name="phone" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" onChange={onChange("phone")} onFocus={clearExists} onBlur={checkExists} /></p>
              { phoneExists && <p className="text-red-500 text-sm font-medium">phone number already exists!</p> }
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-3 md:my-9">
          <div className="flex flex-col w-[100%] md:w-[50%] md:mr-6 mb-4 md:mb-0">
              <p><label id="gender" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Gender</label></p>
              <p >
                <select htmlFor="gender" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.gender} onChange={onChange("gender")} >
                  <option className="w-full"></option>
                  <option value="M" key="m">Male</option>
                  <option value="F" key="f">Female</option>
                  <option value="O" key="o">Other</option>
                </select>
              </p>
            </div>
            <div className="flex flex-col flex-auto mb-4 md:mb-0">
              <p><label id="country" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Country</label></p>
              <p >
                <select htmlFor="country" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.country} onChange={onChange("countryCode")} >
                  <option className="w-full" key={1}></option>
                  { 
                    countries.map(country => <option key={country.iso2} value={country.iso2} className="w-full">{country.name}</option>)
                  }
                </select>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-3 md:mb-9">
            <div className="flex flex-col flex-auto md:mr-6 mb-4 md:mb-0">
              <p><label id="user-name" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">User Name</label></p>
              <p><input type="text" htmlFor="user-name" value={formFields.username} name="username" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" onChange={onChange("username")} onFocus={clearExists} onBlur={checkExists} /></p>
              { usernameExists && <p className="text-red-500 text-sm font-medium">username already exists!</p> }
            </div>
            <div className="flex flex-col flex-auto mb-4 md:mb-0">
              <p><label id="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">Password</label></p>
              { showPassword ? <BsEyeSlash onClick={handleClickShowPassword} className={showIcon?'absolute  mt-9 right-[10%] md:right-[27%] hover:cursor-pointer':"hidden"} /> : <BsEye onClick={handleClickShowPassword} className={showIcon?'absolute  mt-9 right-[10%]  md:right-[27%] hover:cursor-pointer':"hidden"} />
              }
              <p><input type={showPassword?"text":"password"} htmlFor="password" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" value={formFields.password} onChange={onChange("password")} /></p>
            </div>
          </div>
          { !isLoading ? 
            <p className="hover:bg-[#FFA500] bg-[#fabe50] text-white w-[100%] md:w-[50%] mx-auto py-2 text-center rounded-md mb-4 hover:cursor-pointer" onClick={handleRegister}>Register</p> : 
            <p className="bg-[#fabe50] text-white w-[100%] md:w-[50%] mx-auto py-2 text-center rounded-md mb-4 ..." disabled>
              <svg className="animate-spin h-1 w-5 mr-3 ..." viewBox="0 0 24 24">
                 
              </svg>
              Processing...
            </p>
          }
        </div>
        <hr />
        <p className="text-center mt-11 mb-8">OR</p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 px-6 py-4 md:px-12 md:py-4">
          <p className="mb-3 md:mb-0 md:mr-9 w-[100%] md:w-[75%]">
            <button
              type="button"
              className="border-2 rounded-lg py-3 pl-4 pr-14 bg-white hover:bg-[#F2F2F2] w-full"
            >
              <Image src={google} alt="google" width="14px" height="14px" />
              <span className="pl-4">Register with Google</span>
            </button>
          </p>
          <p className="text-white w-[100%] md:w-[75%]">
            <button
              type="button"
              className="border-2 rounded-lg py-3 pl-4 pr-11 md:pr-14 bg-blue-500 hover:bg-blue-600 w-full"
            >
              <span className="rounded-full bg-white">
                <Image src={facebook} alt="google" width="14px" height="14px" />
              </span>
              <span className="pl-4">Register with Facebook</span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
