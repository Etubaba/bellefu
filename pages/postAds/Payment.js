import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import UnstyledSelectSimpleCard from "../../components/postAdsComponent/Card";

export default function Payment() {
  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="w-[93%] pb-7  rounded-lg bg-[#ffffff]  h-auto">
      <div className="bg-bellefuGreen p-4 ">
        <h3 className="font-semibold ml-4 text-white">CHOOSE PAYMENT METHOD</h3>
      </div>
      <div>
        <div className="m-7 flex justify-between">
          <div className="flex">
            <input
              //   onClick={handleUrgent}
              id="ads_plan"
              name="plans"
              type="radio"
              className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
            />
            <h2 className="font-semibold ">WALLET:&nbsp;&nbsp;0.00</h2>
          </div>
          <div className="col-span-6 sm:col-span-3">
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
              // onChange={handleLocation}
              className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-[18vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
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
            <UnstyledSelectSimpleCard />
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <button
            onClick={handleBack}
            type="submit"
            class="flex justify-center items-center w-[10vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Back
          </button>
          <button
            // disabled={address===""?true:false}
            type="submit"
            //   onClick={handleSubmit}
            class="flex justify-center items-center w-[10vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange ml-7 hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

Payment.Layout = Layout;
