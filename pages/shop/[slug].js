import React from "react";
import { useSelector } from "react-redux";
import ShopComponents from "../../components/shopComponents/ShopComponents";
import MobileShopSideBar from "../../components/SingleProduct/MobileShopSidebar";
import Head from "next/head";
import ShopSideBar from "../../components/SingleProduct/ShopSideBar";
import { userDId } from "../../features/bellefuSlice";

const Shop = ({ shopProducts }) => {

  const shopDetails = shopProducts.data[0];


  return (
    <>

      {/* <Head>
        <title>{products[0].title}</title>
      </Head> */}
      <div className="flex max-w-[95%] lg:max-w-[90%] mx-auto mt-28">
        <ShopSideBar userDetails={shopDetails} />
        <div className="flex-1">
          <ShopComponents products={shopProducts} />
          <MobileShopSideBar userDetails={shopDetails} />
        </div>
      </div>
    </>
  );
};

export default Shop;

//server side fetching of the full product details
export async function getServerSideProps(context) {
  const { slug } = context.query;

  const requests = await fetch(
    `https://bellefu.inmotionhub.xyz/api/shop/view/single/${slug}`
  ).then((res) => res.json());

  return {
    props: {
      shopProducts: requests,
    },
  };
}
