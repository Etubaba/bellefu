import React from "react";
import Layout from "../../components/Layout";
import {
  productData,
  pendingProductData,
  publishedProductData,
  expiredProductData,
} from "../../productData";
import MyAds from "../../components/layoutComponents/adsComponents/MyAds";
import MyAdsHeader from "../../components/layoutComponents/adsComponents/MyAdsHeader";

const Ads = () => {
  return (
    <div className="mt-5">
      <MyAdsHeader />
      <div className=" overflow-y-scroll h-screen bg-bellefuWhite divide-y space-y-2 mt-1">
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              All Ads
            </p>
            <p className="text-bellefuOrange text-xs font-medium tracking-wider">
              View All
            </p>
          </div>
          <MyAds products={productData} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Published Ads
            </p>
            <p className="text-bellefuOrange text-xs font-medium tracking-wider">
              View All
            </p>
          </div>
          <MyAds products={publishedProductData} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Pending Ads
            </p>
            <p className="text-bellefuOrange text-xs font-medium tracking-wider">
              View All
            </p>
          </div>
          <MyAds products={pendingProductData} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Expired Ads
            </p>
            <p className="text-bellefuOrange text-xs font-medium tracking-wider">
              View All
            </p>
          </div>
          <MyAds products={expiredProductData} />
        </div>
      </div>
    </div>
  );
};

Ads.Layout = Layout;
export default Ads;
