import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { handleIndexApi } from "../features/bellefuSlice";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

import HeaderSearch from "../components/HeaderSearch";
import CategorySideBar from "../components/CategorySideBar";
// import axios from "axios";
import Body from "../components/Body";
import MobileCategoryBar from "../components/MobileCategorybar/MobileCategoryBar";
import MobileHeaderSearch from "../components/MobileHeaderSearch";
import { fetchData } from "../features/bellefuSlice";
import Slider from "../components/mainPageComponents/slider/Slider";

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.bellefu?.searchFilter);

  // if (data) {
  //   dispatch(fetchData(data));
  // }

  useEffect(() => {
    dispatch(fetchData(data));
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Head>
        <title>Bellefu</title>
        <meta
          name="description"
          content="food products, agricultural machinery,farmers"
        />
        <link rel="icon" href="/bellefulogo-fav.png" />
      </Head>
      {/* Overall container */}
      <main className="bg-bellefuBackground ">
        <div className="max-w-[95%] lg:max-w-[90%] mx-auto mt-20">
          {/* second nav bar */}
          {loading ? (
            <>
              <HeaderSearch
                dialet={data.defaultLanguage}
                state={data.countryStates}
                defaultCountry={data.defaultCountryName}
                languages={data.languages}
                countries={data.countries}
                location={data.defaultCountry}
              />
              <div className="block  md:hidden lg:hidden mt-3">
              <Slider  slider={data.slider} />

              </div>

            </>
          ) : (
            <Skeleton
              className="rounded my-3"
              variant="rectangular"
              animation="wave"
              width={"100%"}
              height={80}
            />
          )}

          {/* mobile header search */}
          {/* <div className="md:hidden">
            <MobileHeaderSearch defaultCountry={data.defaultCountry} />
          </div> */}

          {/* main body */}
          <div className="flex flex-col lg:flex-row">
            {/* category side bar */}
            <div className=" hidden lg:inline w-[20%] h-auto rounded-md mr-3">
              {loading ? (
                <CategorySideBar categories={data.categories} />
              ) : (
                <Skeleton
                  className="rounded  "
                  variant="rectangular"
                  animation="wave"
                  width={250}
                  height={900}
                />
              )}
            </div>
            {search === "" ? (
              <div className=" h-auto lg:hidden my-4 rounded-sm">
                {loading ? (
                  <MobileCategoryBar categories={data.categories} />
                ) : (
                  <Skeleton
                    className="rounded  "
                    variant="rectangular"
                    animation="wave"
                    width={"100%"}
                    height={300}
                  />
                )}
              </div>
            ) : null}
            {/* list of products & slider */}
            <div className="flex-1">
              <Body
                location={data.defaultCountry}
                currency={data.defaultCurrency}
                currencyCode={data.defaultCurrencyCode}
                products={data.products}
                slider={data.slider}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://bellefu.inmotionhub.xyz/api/web30/get/web/index`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
