import React from "react";
import HeaderSearch from "../../components/HeaderSearch";
import SingleProductBody from "../../components/SingleProduct/SingleProductBody";
import SingleProductSidebar from "../../components/SingleProduct/SingleProductSidebar";
import { productData } from "../../productData";
import MobileHeaderSearch from "../../components/MobileHeaderSearch";

const Product = () => {
  const newProducts = productData.slice(0, 4);

  return (
    <div className="max-w-[95%] lg:max-w-[90%] mx-auto">
      {/* header section */}
      {/* large screen header */}
      <div className="hidden md:inline">
        <HeaderSearch />
      </div>

      {/* mobile screen header */}
      <div className="md:hidden">
        <MobileHeaderSearch />
      </div>

      {/* end of header section */}

      {/* container for the sidebar and body */}
      <div className="flex mt-10">
        {/* sidebar */}
        <div className=" mr-2 w-[20%] rounded-md hidden lg:inline">
          <SingleProductSidebar />
        </div>

        {/* body section */}
        {/* w-[calc(100%_-_10rem)] */}
        <div className="w-full lg:flex-1">
          <SingleProductBody products={newProducts} />
        </div>
      </div>
    </div>
  );
};

export default Product;

//server side fetching of the full product details
// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://bellefu.inmotionhub.xyz/api/web30/get/web/index`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
