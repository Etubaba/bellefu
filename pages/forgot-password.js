import { useState } from "react";
import Head from "next/head";
import RegisterHeader from "../components/usercomponent/RegisterHeader";
import { homeData } from "../features/bellefuSlice";
import { useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
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

  const handleChange = (evt) => {
    if (isNaN(evt.target.value)) return;
    setPhone(evt.target.value);
  };

  const handleChangeForNewPassword = (input) => (evt) => {
    if (input === "token" && isNaN(evt.target.value)) return;
    setFormFields({...formFields, [input]: evt.target.value});
  }

  const handleSubmit =  () => {
    const phoneWithCountryCode = countryPhoneCode.concat(phone);
    console.log(phoneWithCountryCode);

    axios.post(`${apiData}user/forgot/password`, {phone: phoneWithCountryCode})
    .then(res => {
      if (res.status) {
        setCodeSent(true);
      } else {
        toast.error("Server busy. Try again later.", {
          position: toast.POSITION.TOP_CENTER
        });
        router.push("/forgot-password");
      }
    })
  }

  const handleSubmitForNewPassword = () => {
    axios.post(`${apiData}user/password/reset`, formFields)
    .then(res => {
      if (res.status) {
        router.push("/login");
      } else {
        router.push("/forgot-password");
        setCodeSent(false);
      }
    })
  }

  return (
    <>
    <Head>
      <title>forgot password</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <RegisterHeader />
    <div className="w-[90%] md:w-[55%] mx-auto mb-20 rounded-lg border-2">
      <h1 className={!invalidCode?"text-center font-bold py-4":"text-center font-bold py-4 text-red-500"}>{!codeSent?"Recover Your Password": !invalidCode? "Set New Password":"Code Provided Is Invalid"}</h1>
      <hr />
      <div className="py-8 px-6">
        <div className="w-[100%] mx-auto">
          <form onSubmit={!codeSent?handleSubmit:handleSubmitForNewPassword}> 
          <div className="flex flex-col md:flex-row">
          { !codeSent?
            <>
              <div className="mr-2 pt-2 w-auto"><label id="phone" className="w-full">Phone Number: </label></div>
              <div className="absolute mt-10 md:mt-2 left-[6%] md:left-[31%] flex space-x-1 items-center justify-center ml-8 hover:cursor-pointer" onClick={() => setSelectCountry(!selectCountry)}>
                  <div className="flex">
                  <span className="mr-1">{`${countryPhoneCode}`}</span>
                    <img
                      alt="error"
                      src={
                        flag === null
                          ? `https://flagcdn.com/32x24/${defaultCountry?.toLowerCase()}.png`
                          : `https://flagcdn.com/32x24/${flag?.toLowerCase()}.png`
                      }
                    />
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
                            <span className="mr-2">{`+${country.phone_code}`}</span>
                            <img
                              alt="error"
                              src={`https://flagcdn.com/20x15/${country.iso2.toLowerCase()}.png`}
                            />
                          </div>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              <div className="w-[100%] md:w-[60%] mb-3 md:mb-0 md:mr-2"><input type="text" value={phone} onChange={handleChange} htmlFor="phone" className="w-full rounded-lg py-2 pl-[112px] md:pl-[98px] pr-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" /></div>
              <div className="w-auto"><button type="submit" className="w-full bg-[#FFA500] hover:bg-[#fabe50] text-white px-9 py-2 text-center rounded-lg">Send</button></div>
            </>:
            <>
              <div className="mr-2 pt-2 w-auto"><label id="token" className="w-full">code: </label></div>
              <div className="w-[100%] md:w-[60%] mb-3 md:mb-0 md:mr-2"><input type="text" value={phone} onChange={handleChangeForNewPassword("token")} htmlFor="token" className="w-full rounded-lg py-2 pl-[78px] pr-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" /></div>
              <div className="mr-2 pt-2 w-auto"><label id="newpassword" className="w-full">New Password: </label></div>
              <div className="w-[100%] md:w-[60%] mb-3 md:mb-0 md:mr-2"><input type="text" value={phone} onChange={handleChangeForNewPassword("password")} htmlFor="newpassword" className="w-full rounded-lg py-2 pl-[78px] pr-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" /></div>
              <div className="w-auto"><button type="submit" className="w-full bg-[#FFA500] hover:bg-[#fabe50] text-white px-9 py-2 text-center rounded-lg">Send</button></div>
            </>
           }
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword;