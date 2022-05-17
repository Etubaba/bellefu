import React from "react";
import { useSelector } from "react-redux";
import ShopComponents from "../../components/shopComponents/ShopComponents";
import MobileShopSideBar from "../../components/SingleProduct/MobileShopSidebar";
import ShopSideBar from "../../components/SingleProduct/ShopSideBar";
import { userDId } from "../../features/bellefuSlice";

const Shop = ({ userProducts }) => {
  const details = useSelector(userDId);

  const products = userProducts.data.data;
  console.log(products);

  return (
    <div className="flex max-w-[95%] lg:max-w-[90%] mx-auto mt-5">
      <ShopSideBar userDetails={details} />
      <div className="flex-1">
        <ShopComponents products={products} />
        <MobileShopSideBar userDetails={details} />
      </div>
    </div>
  );
};

export default Shop;

//server side fetching of the full product details
export async function getServerSideProps(context) {
  const { productOwnerId } = context.query;

  const requests = await fetch(
    `https://bellefu.inmotionhub.xyz/api/general/list/user/product/${productOwnerId}`
  ).then((res) => res.json());

  return {
    props: {
      userProducts: requests,
    },
  };
}
