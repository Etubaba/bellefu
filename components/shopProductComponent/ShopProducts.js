import React, { useState } from "react";
import ShopProductDescription from "./ShopProductDescription";
import ShopProductSlider from "./ShopProductSlider";

const ShopProducts = ({ productDetails }) => {
  return (
    <div className="rounded-t-md w-full -mt-5 lg:mt-0">
      <ShopProductSlider sliderDetails={productDetails?.images} />
      <ShopProductDescription productDetails={productDetails} />
    </div>
  );
};

export default ShopProducts;
