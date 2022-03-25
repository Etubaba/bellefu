import React from "react";
import Layout from "../../components/Layout";
import FavouriteProducts from "../../components/product/FavouriteProducts";

const MyFavourites = () => {
  return (
    <div className="">
      {/* header section */}
      <div>
        <div className="bg-bellefuWhite rounded-t-md flex items-center px-5 py-2">
          <h3 className="font-bold text-[1.2rem] flex-1 text-bellefuBlack1">
            My ads
          </h3>
        </div>
      </div>
      {/* end of header section */}

      <div className="bg-bellefuWhite rounded-b-md overflow-y-scroll h-screen">
        <FavouriteProducts />
      </div>
    </div>
  );
};

MyFavourites.Layout = Layout;
export default MyFavourites;
