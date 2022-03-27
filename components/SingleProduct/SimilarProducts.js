import React from "react";
import ProductList from "../mainPageComponents/ProductList";

const SimilarProducts = ({ products }) => {
  console.log("products =>", products);
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
