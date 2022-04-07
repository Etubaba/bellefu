import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import MyAds from "../../components/layoutComponents/adsComponents/MyAds";
import ExpiredAds from "../../components/layoutComponents/expiredComponents/ExpiredAds";
import PublishedAds from "../../components/layoutComponents/publishAds/PublishedAds";
import MyAdsHeader from "../../components/layoutComponents/adsComponents/MyAdsHeader";
import axios from "axios";
import { apiData } from "../../constant";
import { useSelector } from "react-redux";

const Ads = () => {
  const [published, setPublished] = useState([]);
  const [pend, setPend] = useState([]);
  const [expired, setExpired] = useState([]);

  const router = useRouter();

  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);
  const test = 1285;

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `${apiData}list/user/product/${test}/approved`
      );
      setPublished(res.data.data.data);
    };

    getProduct();
  }, []);

  console.log(published);

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `${apiData}list/user/product/${test}/pending`
      );
      setPend(res.data.data.data);
    };

    getProduct();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `${apiData}list/user/product/${test}/expired`
      );
      setExpired(res.data.data.data);
    };

    getProduct();
  }, []);

  const all = [...published, ...pend, ...expired];

  return (
    <div className="mt-5">
      <MyAdsHeader />
      <div className=" bg-bellefuWhite divide-y space-y-2 mt-1 rounded-b-md">
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              All Ads
            </p>
            <p className="text-bellefuOrange text-xs font-medium tracking-wider">
              View All
            </p>
          </div>
          <ExpiredAds product={all} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Published Ads
            </p>
            <p
              onClick={() => router.push("/users/published")}
              className="text-bellefuOrange hover:text-orange-300 text-xs font-medium tracking-wider"
            >
              View All
            </p>
          </div>
          <PublishedAds product={published} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Pending Ads
            </p>
            <p
              onClick={() => router.push("/users/pending-ads")}
              className="text-bellefuOrange hover:text-orange-300 text-xs font-medium tracking-wider"
            >
              View All
            </p>
          </div>
          <MyAds products={pend} />
        </div>
        <div className="">
          <div className="flex items-center px-4 justify-between pt-2">
            <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
              Expired Ads
            </p>
            <p
              onClick={() => router.push("/users/expired-ads")}
              className="text-bellefuOrange hover:text-orange-300 text-xs font-medium tracking-wider"
            >
              View All
            </p>
          </div>
          <ExpiredAds products={expired} />
        </div>
      </div>
    </div>
  );
};

Ads.Layout = Layout;
export default Ads;
