import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GiWallet } from "react-icons/gi";
import Layout from "../../components/Layout";
import { useSelector } from 'react-redux'

const Creditwallet = () => {
  const router = useRouter();
  const addMoney = () => {
    router.push('/users/add-money');

  };

  const creditwallet = useSelector((state) => state.bellefu?.profileDetails?.wallet_balance)
  return (
    <>
    <Head>
      <title>My Wallet</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-bellefuWhite rounded-md mt-5 ">
      <h1 className="px-8 py-4 font-semibold">My Wallet</h1>
      <hr />
      <div className="w-auto py-20">
        <div className="flex justify-center mb-8">
          <div className="bg-[#F8FDF2] mr-12 p-16 rounded-lg">
            <p className="text-center">Available Balance:</p>
            <p className="text-center font-bold"><span>N</span><span>{creditwallet}</span></p>
          </div>
          <div className="bg-[#FCFAF2] p-16 rounded-lg">
            <p className="text-center">Spent Ads:</p>
            <p className="text-center font-bold"><span>N</span><span>1200.00</span></p>
          </div>
        </div>
        <div className="mx-auto bg-bellefuOrange text-bellefuWhite rounded-md hover:cursor-pointer font-semibold py-2" style={{ width: "57%" }} onClick={addMoney}>
          <div className="flex justify-center"><p className="pt-1 pr-2"><GiWallet /></p> <p>Add Money</p></div>
        </div>
      </div>
    </div>
    </>
  );
};

Creditwallet.Layout = Layout;
export default Creditwallet;
