import React from "react";
import SimilarProducts from "./SimilarProducts";
import SingleProductDescription from "./SingleProductDescription";

const SingleProductBody = ({ products }) => {
  console.log("Products again =>", products);
  return (
    <div className="bg-bellefuWhite rounded-md pb-20">
      <SingleProductDescription />
      <div>
        <div className="flex items-center px-7 justify-between pt-2">
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
