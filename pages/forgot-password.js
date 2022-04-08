import { useState, useEffect } from "react";
import Head from "next/head";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import { homeData } from "../features/bellefuSlice";
import { useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { apiData } from "../constant";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const getStaticProps = async () => {
  const response = await fetch(`${apiData}get/countries`);
  const {data} = await response.json()

  return {
    props: {
      countries: data.slice().sort((a, b) => a.phone_code-b.phone_code)
    }
  }
};

const ForgotPassword = ({countries}) => {
  const router = useRouter();
  const defaultCountry = useSelector(homeData)?.defaultCountry;
  const [phone, setPhone] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [formFields, setFormFields] = useState({token: "", password: ""});
  const [invalidCode, setInvalidCode] = useState(false);
  const [countryPhoneCode, setCountryPhoneCode] = useState("");
  const [selectCountry, setSelectCountry] = useState(false);
  const [flag, setFlag] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showIcon, setShowIcon] = useState(false)

  const handleChange = (evt) => {
    if (isNaN(evt.target.value)) return;
    setPhone(evt.target.value);
  };

  const handleChangeForNewPassword = (input) => (evt) => {
    if (input === "token" && isNaN(evt.target.value)) return;

    if (input === "password") {
      if (evt.target.value) setShowIcon(true);
      else setShowIcon(false);
    }

    setFormFields({...formFields, [input]: evt.target.value});
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit =  (evt) => {
    evt.preventDefault();

    const phoneWithCountryCode = countryPhoneCode.concat(phone);

    setLoading(true);
    axios.post(`${apiData}user/forgot/password`, {phone: phoneWithCountryCode})
    .then(res => {
      if (res.data.status) {
        setLoading(false);
        setCodeSent(true);
      } else {
        toast.error("You have not register yet", {
          position: toast.POSITION.TOP_CENTER
        });
        console.log("!!");
        setLoading(false);
        router.push("/register");
      }
    })
    .catch(error => {
      console.log(`Error getting password forgot code due to: ${error.message}`);
      setLoading(false)
    })
  }

  const handleSubmitForNewPassword = (evt) => {
    evt.preventDefault();

    setLoading(true);
    axios.post(`${apiData}user/password/reset`, formFields)
    .then(res => {
      if (res.data.status) {
        router.push("/login");
      } else {
        //setCodeSent(false);
        setInvalidCode(true);
        setLoading(false)
        router.push("/forgot-password");
      }
    })
    .catch(error => {
      setLoading(false);
      console.log(`Error resetting password due to: ${error.message}`);
      toast.error("Server busy. Try again later.", {
        position: toast.POSITION.TOP_CENTER
      });
    })
  }

  useEffect(() => {
    if (!countryPhoneCode) {
      const country = countries.find(country => country.iso2 === defaultCountry)
      setCountryPhoneCode(`+${country.phone_code}`);
    }
  }, [])

  return (
    <div>
    <Head>
      <title>forgot password</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <RegisterHeader />
    <div className="w-[90%] md:w-[55%] mx-auto mb-20 rounded-lg border-2">
      <h1 className={!invalidCode?"text-center font-bold py-4":"text-center font-bold py-4 text-red-500"}>{!codeSent && !invalidCode?"Recover Your Password": codeSent && !invalidCode? "Set New Password":"Code Provided Is Invalid"}</h1>
      <hr />
      <div className="py-8 px-6">
        <div className="w-[100%] mx-auto">
          <form onSubmit={!codeSent?handleSubmit:handleSubmitForNewPassword}> 
          <div>
          { !codeSent && !invalidCode?
            <>
              <div className="flex flex-col md:flex-row">
                <div className="mr-2 pt-2 w-auto"><label id="phone" className="w-full">Phone Number: </label></div>
                <div className="absolute mt-10 md:mt-2 left-[6%] md:left-[31%] flex space-x-1 items-center justify-center ml-8 hover:cursor-pointer" onClick={() => setSelectCountry(!selectCountry)}>
                    <div className="flex">
                      <img
                        alt="error"
                        src={
                          flag === null
                            ? `https://flagcdn.com/32x24/${defaultCountry?.toLowerCase()}.png`
                            : `https://flagcdn.com/32x24/${flag?.toLowerCase()}.png`
                        }
                      />
                      <span className="ml-1">{countryPhoneCode}</span>
                    </div>
                    <AiFillCaretDown
                      className={
                        selectCountry ? "text-bellefuOrange" : "text-gray-600"
                      }
                    />
                  </div>
                  {selectCountry && (
                    <div className="z-50 absolute -top-7 left-[8%] md:left-[32%] pt-2 h-80 overflow-y-scroll mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {countries.map((country) => (
                        <div
                          key={country.id}
                          onClick={() => {
                            setFlag(country.iso2);
                            setSelectCountry(false);
                            setCountryPhoneCode(`+${country.phone_code}`);
                          }}
                          className="py-1 flex space-x-3 hover:bg-bellefuBackground"
                        >
                          <p
                            key={country.id}
                            className="text-gray-700 space-x-3 px-4 flex py-2 text-sm"
                          >
                            <div className="flex">
                              <img
                                alt="error"
                                src={`https://flagcdn.com/20x15/${country.iso2.toLowerCase()}.png`}
                              />
                              <span className="ml-2">{`+${country.phone_code}`}</span>
                            </div>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                <div className="w-[100%] md:w-[60%] mb-3 md:mb-0 md:mr-2"><input type="text" value={phone} onChange={handleChange} htmlFor="phone" className="w-full rounded-lg py-2 pl-[112px] sm:pl-[98px] pr-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" /></div>
                <div className="w-auto"><button type="submit" className={!isLoading?"w-full bg-[#FFA500] hover:bg-[#fabe50] text-white px-9 py-2 text-center rounded-lg":"w-full bg-[#fabe50] text-white px-3 py-2 text-center rounded-lg hover:cursor-not-allowed cursor-not-allowed"} disabled={isLoading?true:false}>{!isLoading?"Send":"Processing..."}</button></div>
              </div>
            </>:
            <>
              <div className="flex flex-col md:flex-row my-3 md:my-9">
                <div className="flex flex-col flex-auto md:mr-6 mb-4 md:mb-0">
                  <div>
                    <label id="token" className="w-full">code: </label>
                  </div>
                  <div className="w-full mb-3 md:mb-0 md:mr-2">
                    <input type="text" value={formFields.token} onChange={handleChangeForNewPassword("token")} htmlFor="token" className="w-full rounded-lg py-2 px-4 outline outline-[#F1F1F1] focus:outline-[#FFA500]" />
                  </div>
                </div>
                {/* <div className="w-[100%] md:w-[60%] mb-3 md:mb-0 md:mr-2"></div> */}
                <div className="flex flex-col flex-auto mb-4 md:mb-0">
                  <div>
                    <label id="newpassword" className="w-full">New Password: </label>
                  </div>
                    {showPassword ? <BsEyeSlash onClick={handleClickShowPassword} className={showIcon ? 'absolute  mt-9  right-[10%] md:right-[25%] hover:cursor-pointer' : "hidden"} /> : <BsEye onClick={handleClickShowPassword} className={showIcon ? 'absolute  mt-9 right-[10%] md:right-[25%] hover:cursor-pointer' : "hidden"} />
                    }
                  <div className="w-full mb-3 md:mb-0 md:mr-2">
                    <input type={showPassword ? "text" : "password"} value={formFields.password} onChange={handleChangeForNewPassword("password")} htmlFor="newpassword" className="w-full rounded-lg py-2 px-4 outline outline-[#F1F1F1] focus:outline-[#FFA500]" />
                  </div>
                </div>
                {/* <div className="w-[100%] md:w-[100%] mb-3 md:mb-0 md:mr-2"></div> */}
              </div>
              <div className="w-[100%] md:w-[50%] mx-auto"><button type="submit" className={!isLoading?"w-full bg-[#FFA500] hover:bg-[#fabe50] text-white px-4 py-2 text-center rounded-lg":"w-full bg-[#fabe50] text-white px-9 py-2 text-center rounded-lg hover:cursor-not-allowed cursor-not-allowed"} disabled={isLoading?true:false}>{!isLoading?"Submit":"Processing..."}</button></div>
            </>
           }
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword;