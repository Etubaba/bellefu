import React from "react";
import Slider from "./mainPageComponents/slider/Slider";
import ProductComponent from "./mainPageComponents/ProductComponent";
import { useSelector } from "react-redux";

const Body = ({ products, slider, currency, location, currencyCode }) => {

  const search = useSelector(state => state.bellefu?.searchFilter);


  return (
    <div className="">
      {search === '' ?
        <div className="mb-2">
          <Slider slider={slider} />
        </div> : null}
      {/* product component session */}
      <ProductComponent currency={currency} currencyCode={currencyCode} location={location} products={products} />
    </div>
  );
};

export default Body;
