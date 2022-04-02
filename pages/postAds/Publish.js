import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import { useRouter } from "next/router";
import { handlePlansUpdate } from "../../features/bellefuSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Publish() {
  const router = useRouter();
  const dataTopost = useSelector((state) => state.bellefu.postAddata);
  const dispatch = useDispatch();
  const handleFree = () => {
    dispatch(handlePlansUpdate("free"));
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  // publish ads....
  const handlePublish = (e) => {
    e.preventDefault();

    //   if (reason === undefined) {
    //     toast.error('Please enter reason', {
    //         position: 'top-right'
    //     })

    // } else {

    const formData = new FormData();

    formData.append("title", dataTopost.title);
    formData.append("location", dataTopost.location);
    formData.append("images",dataTopost.images );
    formData.append("categoryid", dataTopost.categoryid);
    formData.append("subcategoryid", dataTopost.subcategoryid);
    formData.append("price",dataTopost.price);
    formData.append("description", dataTopost.description);
    formData.append("tag", dataTopost.tag);
    formData.append("phone", dataTopost.phone);
    formData.append("userid", dataTopost.userid);
    formData.append("citycode", dataTopost.cityCode);
    formData.append("countrycode", dataTopost.pushId);
    formData.append("states", dataTopost.states);
    formData.append("currencyCode",dataTopost.currencyCode);
    formData.append("plans", dataTopost.plans);
    

    axios({
      method: "POST",
      url: `https://bellefu.inmotionhub.xyz/api/general/create/product`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // toast.error("User Declined", {
    //   position: "top-right",
    // });
  };

  //  axios.post()

  //   router.back();
  // };

  return (
    <div className="rounded-lg  bg-bellefuWhite h-auto w-auto p-10 ">
      <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
        <div className="flex ">
          <input
            id="ads_plan"
            name="plans"
            type="radio"
            className="focus:ring-bellefuGreen h-10 w-10 text-bellefuGreen border-gray-300"
          />
          <div className="ml-[4%]">
            <h3 className="font-semibold">FEATURED:</h3>
            <p className="text-[#3F3F3F] mb-3 text-base">
              Featured Ads attracts high quality views and are displayed
              prominently in the featured ads section on the home page
            </p>
          </div>
          <div className="ml-[6%]">
            <p className="text-[#3F3F3F] text-[14px] mb-3 font-medium">
              $1.00 FOR 30 DAYS
            </p>
            <h3 className="text-base p-[5px] text-[16px] rounded-md text-[white] bg-bellefuOrange">
              RECOMMENDED
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
        <div className="flex">
          <input
            id="ads_plan"
            name="plans"
            type="radio"
            className="focus:ring-bellefuGreen h-7 w-7 text-bellefuGreen border-gray-300"
          />
          <div className="ml-[4%]">
            <h3 className="font-semibold">URGENT:</h3>
            <p className="text-[#3F3F3F] mb-3 text-base">
              Make your ads stand out and let viewers know that your advert is
              time-bound
            </p>
          </div>
          <div className="ml-[10%]">
            <p className="text-[#3F3F3F] text-[14px] mb-3 font-medium">
              $2.00 FOR 30 DAYS
            </p>
            <pre className="text-base p-[5px] text-[16px] rounded-md text-[white] bg-[orangered]">
              MORE RECOMMENDED
            </pre>
          </div>
        </div>
      </div>
      <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
        <div className="flex ">
          <input
            id="ads_plan"
            name="plans"
            type="radio"
            className="focus:ring-bellefuGreen h-7 w-7 text-bellefuGreen border-gray-300"
          />
          <div className="ml-[4%]">
            <h3 className="font-semibold">HIGHLIGHTED:</h3>
            <p className="text-[#3F3F3F] mb-3 text-base">
              Make your ads highlighted with borders in the search listing
              result page.Easy to focus on.
            </p>
          </div>
          <div className="ml-[6%]">
            <p className="text-[#3F3F3F] text-[14px] mb-3 font-medium">
              $2.00 FOR 7 DAYS
            </p>
            <pre className="text-base p-[5px] text-[16px] rounded-md text-[white] bg-bellefuGreen">
              MOST RECOMMENDED
            </pre>
          </div>
        </div>
      </div>
      <div className="w-[93%] p-5 m-10 border rounded-lg hover:bg-[#F9FDF5]  h-auto">
        <div className="flex ">
          <input
            id="ads_plan"
            onClick={handleFree}
            name="plans"
            type="radio"
            className="focus:ring-indigo-500 h-7 w-7 text-indigo-600 border-gray-300"
          />
          <div className="ml-[4%]">
            <h3 className="font-semibold">POST FREE AD:</h3>
            <p className="text-[#3F3F3F] mb-3 text-base">
              Just post an ordinary ad
            </p>
          </div>
          <div className="ml-[60%]">
            <p className="text-[#3F3F3F] text-[14px] mb-3 font-medium">FREE</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-between">
        <button
          onClick={handleBack}
          type="submit"
          class="flex justify-center items-center w-[15vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Back
        </button>
        <button
          onClick={handlePublish}
          type="submit"
          class="flex justify-center items-center w-[15vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Publish
        </button>
      </div>
    </div>
  );
}
Publish.Layout = Layout;
