import React from "react";
import { useRouter } from 'next/router'
import ShopComponent from "./ShopComponent";

const ShopComponents = ({ products }) => {
  const router = useRouter();
  const product = products.data
  return (
    <div>
      {product.length !== 0 ?

        <div className="bg-bellefuBackground rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 grid-flow-row-dense ">
          {product.map((product, index) => (
            <ShopComponent key={index} product={product} />
          ))}

        </div> :
        <div className="h-full px-2 lg:px-0 ">
          <div className="border mx-auto mt-2 lg:my-5 rounded-xl w-full lg:w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <GiShoppingCart className="text-7xl lg:text-9xl mb-5 text-gray-600" />
              <p className="text-sm capitalize lg:text-lg text-gray-600 px-2 text-center">
                There is no product in this shop yet
              </p>

              <button
                onClick={() => router.back()}
                className="py-1 lg:py-3 hover:bg-pink-600 mt-16 px-8 lg:px-12 rounded-full bg-crystamolButton text-white text-sm lg:text-lg">
                Go back
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ShopComponents;
