import Head from "next/head";
import RegisterHeader from "../components/usercomponent/RegisterHeader";

const Policy = () => {
  return (
    <>
      <Head>
        <title>Policy and Privacy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterHeader firstLink={{firstLinkText:"Policy and Privacy",firstLinkUrl:"/policy"}} secondLink={{secondLinkText:"Terms and Conditions", secondLinkUrl:"/terms-and-conditions"}} customWidth={true} />
      <div className="text-center">
        <h1 className="capitalize text-bellefuOrange underline font-bold text-2xl">Bellefu Privacy and policy</h1>
        <h2 className="font-bold text-xl">Privacy Policy Scope</h2>
      </div>
    </>
  )
}

export default Policy;