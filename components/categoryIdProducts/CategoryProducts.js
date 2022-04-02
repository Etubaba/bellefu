import React from "react";
import MainProductHeader from "../mainPageComponents/MainProductHeader";
import CategoryProductList from "./CategoryProductList";
// import { productData } from "../../productData";

const CategoryProducts = ({ product }) => {

  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">
        {product.map((product) => (
          <CategoryProductList key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
