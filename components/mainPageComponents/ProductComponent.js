import React from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";

const ProductComponent = () => {
  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {productData.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
