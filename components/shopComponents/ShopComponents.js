import React from "react";

import ShopComponent from "./ShopComponent";

const ShopComponents = ({ products }) => {
  const product = products.data
  return (
    <div>
      <div className="bg-bellefuBackground rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 grid-flow-row-dense ">
        {product.map((product, index) => (
          <ShopComponent key={index} product={product} />
        ))}

      </div>
    </div>
  );
};

export default ShopComponents;
