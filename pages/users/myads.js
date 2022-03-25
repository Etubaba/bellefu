import React from "react";
import Layout from "../../components/Layout";
import MyAds from "../../components/layoutComponents/adsComponents/MyAds";
import MyAdsHeader from "../../components/layoutComponents/adsComponents/MyAdsHeader";

const Ads = () => {
  return (
    <div className="mt-5">
      <MyAdsHeader />
      <div className="bg-bellefuWhite rounded-b-md overflow-y-scroll h-screen">
        <MyAds />
      </div>
    </div>
  );
};

Ads.Layout = Layout;
export default Ads;
