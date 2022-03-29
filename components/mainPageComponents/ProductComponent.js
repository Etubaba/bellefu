import React from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";
import { useRouter } from "next/router";

const ProductComponent = () => {
  const router = useRouter();
  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 grid-flow-row-dense ">
        {productData.map((product) => (
          <div
            onClick={() => router.push("/product/id")}
            className="cursor-pointer"
          >
            <ProductList key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
