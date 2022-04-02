import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { handleIndexApi, } from "../features/bellefuSlice"
import { useEffect } from "react";

import HeaderSearch from "../components/HeaderSearch";
import CategorySideBar from "../components/CategorySideBar";
// import axios from "axios";
import Body from "../components/Body";
import MobileCategoryBar from "../components/MobileCategoryBar/MobileCategoryBar";
import { categories } from "../data";
import MobileHeaderSearch from "../components/MobileHeaderSearch";

import { fetchData } from "../features/bellefuSlice";


export default function Home({ data }) {

  const dispatch = useDispatch();

  if (data) {
    dispatch(fetchData(data))
  }

  // useEffect(() => {
  //   dispatch(handleIndexApi(data))
  // }, [])


  return (
    <div>
      <Head>
        <title>Bellefu</title>
        <meta name="description" content="food products, agricultural machinery,farmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Overall container */}
      <main className="bg-bellefuBackground ">
        <div className="max-w-[90%] mx-auto">
          {/* second nav bar */}
          <div className="hidden lg:inline">
            <HeaderSearch
              dialet={data.defaultLanguage}
              state={data.countryStates}
              defaultCountry={data.defaultCountryName}
              languages={data.languages}
              countries={data.countries}
              location={data.defaultCountry}
            />
          </div>

          {/* mobile header search */}
          <div className="md:hidden">
            <MobileHeaderSearch />
          </div>

          {/* main body */}
          <div className="flex flex-col lg:flex-row">
            {/* category side bar */}
            <div className=" hidden lg:inline w-[20%] h-auto rounded-md mr-3">
              <CategorySideBar categories={data.categories} />
            </div>

            <div className=" h-auto lg:hidden my-4 rounded-sm">
              <MobileCategoryBar categories={data.categories} />
            </div>
            {/* list of products & slider */}
            <div className="flex-1">
              <Body
                location={data.defaultCountry}
                currency={data.defaultCurrency}
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
