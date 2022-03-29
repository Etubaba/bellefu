import React from "react";
import MyAd from "./MyAd";

const MyAds = ({ products }) => {
  const newProducts = products.slice(0, 4);

  return (
    <div className="mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-3 grid-flow-row-dense">
      {newProducts.map((product) => (
        <MyAd key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MyAds;
