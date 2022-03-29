import React from "react";
import Slider from "./mainPageComponents/slider/Slider";
import ProductComponent from "./mainPageComponents/ProductComponent";

const Body = () => {
  return (
    <div className="">
      <div className="mb-2">
        <Slider />
      </div>
      {/* product component session */}
      <ProductComponent />
    </div>
  );
};

export default Body;
