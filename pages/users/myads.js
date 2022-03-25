import React from "react";
import Layout from "../../components/Layout";
import UserPageProducts from "../../components/product/UserPageProducts";
import UserProductHeader from "../../components/product/UserProductHeader";

const MyAds = () => {
  return (
    <div className="mt-5">
      <UserProductHeader />
      <div className="bg-bellefuWhite rounded-b-md overflow-y-scroll h-screen">
        <UserPageProducts />
      </div>
    </div>
  );
};

MyAds.Layout = Layout;
export default MyAds;
