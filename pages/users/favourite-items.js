import React from "react";
import Layout from "../../components/Layout";
import { apiData } from '../../constant'
import FavouriteProducts from "../../components/layoutComponents/favouriteComponents/FavouriteProducts";

const MyFavourites = () => {








  return (
    <div className="mt-5">
      {/* header section */}
      <div className="bg-bellefuWhite rounded-t-md flex items-center px-5 py-2 mb-1">
        <h3 className="font-bold text-[1.2rem] flex-1 text-bellefuBlack1">
          Favourite Items
        </h3>
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

// export async function getServerSideProps(context) {
//   // const {}
//   const res = await fetch(
//     `${apiData}get/user/favorite/`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
