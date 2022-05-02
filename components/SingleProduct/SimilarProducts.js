import React from "react";
import SingleProductList from "./SingleProductList";

const SimilarProducts = ({ similarProductDetails, view }) => {
  const slicedSPDetails = view ? similarProductDetails : similarProductDetails.slice(0, 4);
  return (
    <div className="px-4 bg-bellefuWhite rounded-b-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 grid-flow-row-dense">
        {slicedSPDetails.map((slicedSPDetail) => (
          <SingleProductList
            key={slicedSPDetail.productId}
            similarProductDetail={slicedSPDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
