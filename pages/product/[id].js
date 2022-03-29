import React from "react";
import HeaderSearch from "../../components/HeaderSearch";
import SingleProductBody from "../../components/SingleProduct/SingleProductBody";
import SingleProductSidebar from "../../components/SingleProduct/SingleProductSidebar";
import { productData } from "../../productData";

const Product = () => {
  const newProducts = productData.slice(0, 4);

  return (
    <div className="max-w-[90%] mx-auto">
      {/* header section */}
      <div className="">
        <HeaderSearch />
      </div>

      {/* container for the sidebar and body */}
      <div className="flex mt-10">
        {/* sidebar */}
        <div className=" mr-2 w-[20%] rounded-md">
          <SingleProductSidebar />
        </div>

        {/* body section */}
        {/* w-[calc(100%_-_10rem)] */}
        <div className="flex-1 ">
          <SingleProductBody products={newProducts} />
        </div>
      </div>
    </div>
  );
};

export default Product;
