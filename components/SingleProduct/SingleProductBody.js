import React from "react";
import SimilarProducts from "./SimilarProducts";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductSlider from "./SingleProductSlider";

const SingleProductBody = ({ products }) => {
  console.log("Products again =>", products);
  return (
    <div className="pb-20 rounded-t-md">
      <SingleProductSlider />
      <SingleProductDescription />
      <div className="mt-2">
        <div className="bg-bellefuWhite flex items-center px-7 justify-between pt-2 rounded-t-md">
          <p className="text-xl text-bellefuTitleBlack font-semibold tracking-wider">
            Similar Products
          </p>
          <p className="text-bellefuOrange text-xs font-medium tracking-wider">
            View All
          </p>
        </div>
        <SimilarProducts products={products} />
      </div>
    </div>
  );
};

export default SingleProductBody;
