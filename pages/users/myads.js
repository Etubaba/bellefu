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
          <MyAds products={productData} />
        </div>
        <div className="">
          <MyAds products={publishedProductData} />
        </div>
        <div className="">
          <MyAds products={pendingProductData} />
        </div>
        <div className="">
          <MyAds products={expiredProductData} />
        </div>
      </div>
    </div>
  );
};

Ads.Layout = Layout;
export default Ads;
