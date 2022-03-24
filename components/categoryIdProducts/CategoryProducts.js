import React from "react";
import Product from "../products/Product";
import CategoryProductList from "./CategoryProductList";
import { productData } from "../../productData";

const CategoryProducts = () => {
  return (
    <div>
      <Product />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {productData.map((product) => (
          <CategoryProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
