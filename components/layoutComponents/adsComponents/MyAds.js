import React from "react";
import UserPageProduct from "./MyAd";
import { productData } from "../../../productData";

const MyAds = () => {
  return (
    <div className="mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
      {productData.map((product) => (
        <UserPageProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MyAds;
