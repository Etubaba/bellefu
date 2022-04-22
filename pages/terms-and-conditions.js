import Head from "next/head";
import RegisterHeader from "../components/usercomponent/RegisterHeader";

const TermsandConditions = () => {
  return (
    <>
      <Head>
        <title>Policy and Privacy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RegisterHeader firstLink={{firstLinkText:"Policy and Privacy",firstLinkUrl:"/policy"}} secondLink={{secondLinkText:"Terms and Conditions", secondLinkUrl:"/terms-and-conditions"}} customWidth={true} />
      <div className="text-center">
        <h1 className="capitalize text-bellefuOrange underline font-bold text-2xl">Bellefu Terms and Conditions</h1>
        <ol className="text-xl font-bold">
          <li>Acceptance of the terms</li>
          <li>Important Disclaimers</li>
          <li>Account registration</li>
          <li>Service</li>
          <li>Posting of Annoucements by users</li>
          <li>Fees</li>
          <li>User presentation and Warranties</li>
          <li>Indentity</li>
          <li>Limitation of Liability</li>
          <li>Intellectual Property rights</li>
          <li>Govering law and jurisdiction</li>
          <li>Miscellaneous Provisions</li>
          <li>Bellefu Contest Rules</li>
        </ol>
      </div>
    </>
  )
}

export default TermsandConditions;