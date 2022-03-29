import { useState } from "react";
import Head from "next/head";
import RegisterHeader from "../components/usercomponent/RegisterHeader";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const handleChange = (evt) => {
    if (isNaN(evt.target.value)) return;
    setPhone(evt.target.value);
  }

  return (
    <>
    <Head>
      <title>forget password</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <RegisterHeader />
    <div className="w-[80%] lg:w-[55%] mx-auto mb-20 rounded-lg border-2">
      <h1 className="text-center font-bold py-4">Recover Your Password</h1>
      <hr />
      <div className="py-8 px-14 lg:px-28">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="mr-2 pt-2 w-auto"><label id="phone" className="w-full">Phone Number: </label></div>
            <div className="mb-4 md:mb-0 md:w-[60%] md:mr-2"><input type="text" value={phone} onChange={handleChange} htmlFor="phone" className="w-full rounded-lg py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500]" /></div>
            <div className="w-auto"><button type="button" className="w-full hover:bg-[#FFA500] bg-[#fabe50] text-white px-3 py-2 text-center rounded-lg">Send</button></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgetPassword;