import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GiWallet } from "react-icons/gi";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

const Creditwallet = () => {
  const router = useRouter();
  const addMoney = () => {
    router.push("/users/add-money");
  };

  const creditwallet = useSelector(
    (state) => state.bellefu?.profileDetails?.wallet_balance
  );
  return (
    <>
      <Head>
        <title>My Wallet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-bellefuWhite rounded-md lg:mt-5 mt-2">
        <h1 className="px-3 lg:px-8 lg:py-4 py-2 text-sm lg:text-lg font-semibold">
          My Wallet
        </h1>
        <hr />
        <div className="w-auto py-20">
          <div className="flex flex-col lg:flex-row lg:justify-center mb-8 px-2 lg:px-0 space-y-3 lg:space-y-0">
            <div className="bg-[#F8FDF2] lg:mr-12 lg:p-16 rounded-lg py-4">
              <p className="text-center text-lg lg:text-xl">
                Available Balance:
              </p>
              <p className="text-center text-sm lg:text-lg font-semibold lg:font-bold">
                <span>N</span>
                <span>{creditwallet}</span>
              </p>
            </div>
            <div className="bg-[#FCFAF2] lg:p-16 rounded-lg py-4">
              <p className="text-center text-lg lg:text-xl">Spent Ads:</p>
              <p className="text-center font-semibold lg:font-bold text-sm lg:text-lg">
                <span>N</span>
                <span>1200.00</span>
              </p>
            </div>
          </div>
          <button
            className="mx-auto bg-bellefuOrange text-bellefuWhite rounded-md hover:cursor-pointer py-2 flex items-center justify-center lg:px-10 px-6"
            onClick={addMoney}
          >
            <div className="flex items-center space-x-2 justify-center">
              <GiWallet className="w-4 h-4 lg:w-5 lg:h-5" />

              <p className="text-sm lg:text-lg font-semibold">Add Money</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

Creditwallet.Layout = Layout;
export default Creditwallet;
