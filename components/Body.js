import React from "react";
import Slider from "./mainPageComponents/slider/Slider";
import ProductComponent from "./mainPageComponents/ProductComponent";

const Body = ({ products, slider, currency }) => {
  console.log("The products here :", products);
  return (
    <div className="">
      <div className="mb-2">
        <Slider slider={slider} />
      </div>
      {/* product component session */}
      <ProductComponent currency={currency} products={products} />
    </div>
  );
};

export default Body;
