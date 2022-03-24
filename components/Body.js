import React from "react";
import ProductList from "./ProductList";
import { productData } from "../productData";
import Slider from "./slider/Slider";
import Product from "./products/Product";
import ProductComponent from "./ProductComponent";
const Body = () => {
  return (
    <div className=" overflow-y-scroll h-screen">
      <div className="mb-2">
        <Slider />
      </div>
      {/* product component session */}
      <ProductComponent />
    </div>
  );
};

export default Body;
