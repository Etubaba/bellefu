import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import UnstyledSelectSimpleCard from "../../components/postAdsComponent/Card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {apiData} from "../../constant" ;
import axios from "axios";
import {useState,useEffect} from "react"
import { profileDetails, userDId } from "../../features/bellefuSlice";
import { toast } from "react-toastify";



export default function Payment() {
  const adsprice = useSelector((state) => state.bellefu.postAddata);
  const adsdescription = useSelector((state) => state.bellefu.postAddata);
  const dataTopost = useSelector((state) => state.bellefu.postAddata);



  const user = useSelector(profileDetails);
  const [wallet, setWallet] = useState(0)
  const [newwallet, setNewWallet] = useState()
  const router = useRouter();



  console.log(wallet   +  "waleet balance");
  useEffect(() => {
    const getWallet = async () => {
      axios.get(`${apiData}get/wallet/balance/${user?.id}`).then((res) => {
        setWallet(res.data.data);
      });
    }

    getWallet()
  }, [])



  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };



  const handlepay =()=>{
    const payWithwallet= adsprice.adsplanprice*100;
    //  setNewWallet(wallet-payWithwallet);
    if(  payWithwallet>wallet){
      toast.error("Insufficient Wallet balance", {
        position: "top-center",
      });
    }
    
    else{
      axios.post(`${apiData}update/wallet/balance`,{
        deduction:payWithwallet,
        userId:user?.id,
        description:`${adsdescription?.plans} Ads Payment`
      }).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }




    // axios.post(`${apiData}update/wallet/balance`,{

    // })

  }
  return (
    <div className=" w-full  lg:w-[93%] pb-7  rounded-lg bg-[#ffffff]  h-auto">
      <div className="bg-bellefuGreen p-4 ">
        <h3 className="font-semibold ml-4 text-white">CHOOSE PAYMENT METHOD</h3>
      </div>
      <div>
        <div className="m-7 sm:flex lg:flex justify-between">
          <div className="flex my-4 lg:my-0">
            <input
                onClick={handlepay}
              id="ads_plan"
              name="plans"
              type="radio"
              className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
            />
            <h2 className="font-semibold ">WALLET:&nbsp;&nbsp;{wallet}</h2>
          </div>
          <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
            <div className="flex">
              <input
                //   onClick={handleUrgent}
                id="ads_plan"
                name="plans"
                type="radio"
                className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
              />
              <h2 className="font-semibold ">VOUCHER</h2>
            </div>
            <input
              type="text"
              name="location"
              id="location"
              className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full lg:w-[18vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
            <div className="flex">
              <input
                //   onClick={handleUrgent}
                id="ads_plan"
                name="plans"
                type="radio"
                className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
              />
              <h2 className="font-semibold ">CARD</h2>
            </div>
            <UnstyledSelectSimpleCard  />
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <button
            onClick={handleBack}
            type="submit"
            class="flex justify-center items-center lg:w-[10vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Back
          </button>
          <button
            // disabled={address===""?true:false}
            type="submit"
            //   onClick={handleSubmit}
            class="flex justify-center items-center lg:w-[10vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange ml-7 hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

Payment.Layout = Layout;
