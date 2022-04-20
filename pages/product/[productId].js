import React from "react";
import HeaderSearch from "../../components/HeaderSearch";
import SingleProductBody from "../../components/SingleProduct/SingleProductBody";
import SingleProductSidebar from "../../components/SingleProduct/SingleProductSidebar";

import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

import MobileHeaderSearch from "../../components/MobileHeaderSearch";
import { homeData, handleUserDetails } from "../../features/bellefuSlice";
import { useSelector, useDispatch } from "react-redux";

const Product = ({ details }) => {
  const [loading, setLoading] = useState(false);

  const newDetails = details.data;
  const similarProductDetails = details.similarProducts;

  const dispatch = useDispatch();

  if (newDetails) {
    dispatch(handleUserDetails(newDetails));
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const index = useSelector(homeData);

  return (
    <div className="max-w-[95%] lg:max-w-[90%] mx-auto">
      {/* header section */}
      {/* large screen header */}

      {loading ? (
        <HeaderSearch
          dialet={index?.defaultLanguage}
          state={index?.countryStates}
          defaultCountry={index?.defaultCountryName}
          languages={index?.languages}
          countries={index?.countries}
          location={index?.defaultCountry}
        />
      ) : (
        <Skeleton
          className="rounded my-3"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={80}
        />
      )}

      {/* mobile screen header */}
      {/* <div className="md:hidden">
        <MobileHeaderSearch />
      </div> */}

      {/* end of header section */}

      {/* container for the sidebar and body */}
      <div className="flex mt-10">
        {/* sidebar */}

        <div className=" mr-2 w-[20%] rounded-md hidden lg:inline">
          {loading ? (
            <SingleProductSidebar
              verified={details.verification}
              userDetails={newDetails} />
          ) : (
            <Skeleton
              className="rounded  "
              variant="rectangular"
              animation="wave"
              width={300}
              height={900}
            />
          )}{" "}
        </div>

        {/* body section */}
        {/* w-[calc(100%_-_10rem)] */}
        <div className="w-full lg:flex-1">
          {loading ? (
            <SingleProductBody
              productDetails={newDetails}
              similarProductDetails={similarProductDetails}
            />
          ) : (
            <Skeleton
              className="rounded "
              variant="rectangular"
              animation="wave"
              width={"100%"}
              height={1000}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

//server side fetching of the full product details
export async function getServerSideProps(context) {
  const { productId } = context.query;

  const requests = await fetch(
    `https://bellefu.inmotionhub.xyz/api/general/get/single/product/${productId}`
  ).then((res) => res.json());

  return {
    props: {
      details: requests,
    },
  };
}
