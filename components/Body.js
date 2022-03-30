import React from "react";
import Slider from "./mainPageComponents/slider/Slider";
import ProductComponent from "./mainPageComponents/ProductComponent";

const Body = ({ products, slider }) => {
  return (
    <div className="">
      <div className="mb-2">
        <Slider slider={slider} />
      </div>
      {/* product component session */}
      <ProductComponent products={products} />
    </div>
  );
};

export default Body;
