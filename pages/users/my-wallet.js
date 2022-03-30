import React from "react";
import { useRouter } from "next/router";
import { GiWallet } from "react-icons/gi";
import Layout from "../../components/Layout";

const Creditwallet = () => {
  const router = useRouter();
  const addMoney = () => {
    router.push('/users/add-money');
  };

  return (
    <div className="bg-bellefuWhite rounded-md mt-5 ">
      <h1 className="px-8 py-4 font-semibold">My Wallet</h1>
      <hr />
      <div className="w-auto py-20 px-14 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:justify-center mb-8">
          <div className="bg-[#F8FDF2] md:mr-12 p-16 rounded-lg mb-2">
            <p className="text-center">Available Balance:</p>
            <p className="text-center font-bold"><span>N</span><span>34500.00</span></p>
          </div>
          <div className="bg-[#FCFAF2] p-20 md:p-16 rounded-lg">
            <p className="text-center">Spent Ads:</p>
            <p className="text-center font-bold"><span>N</span><span>1200.00</span></p>
          </div>
        </div>
        <div className="md:mx-auto hover:bg-[#FFA500] bg-[#fabe50] text-bellefuWhite rounded-md hover:cursor-pointer font-semibold py-2 px-4 md:px-0 w-auto md:w-[57%]" onClick={addMoney}>
          <div className="flex justify-center"><p className="pt-1 pr-2"><GiWallet /></p> <p>Add Money</p></div>
        </div>
      </div>
    </div>
  );
};

Creditwallet.Layout = Layout;
export default Creditwallet;
