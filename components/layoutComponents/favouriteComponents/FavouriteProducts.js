import React from "react";
import FavouriteProduct from "./FavouriteProduct";
import { productData } from "../../../productData";

const FavouriteProducts = () => {
  return (
    <div>
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {productData.map((product) => (
          <FavouriteProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteProducts;
