import React from "react";
import MainProductHeader from "../mainPageComponents/MainProductHeader";
import CategoryProductList from "./CategoryProductList";
import Loader from '../../constant'

const CategoryProducts = ({ product }) => {
  console.log('product check=>', product)
  return (
    <div>
      <MainProductHeader />
      {product.length === 0 ?
        <div className="flex justify-center items-center h-screen">
          <Loader isLoading={true} />
        </div>
        :

        <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">
          {product.map((product) => (
            <CategoryProductList key={product.productId} product={product} />
          ))}
        </div>}
    </div>
  );
};

export default CategoryProducts;
