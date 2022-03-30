import Head from "next/head";
import Image from "next/image";

import HeaderSearch from "../components/HeaderSearch";
import CategorySideBar from "../components/CategorySideBar";
// import axios from "axios";
import Body from "../components/Body";
import MobileCategoryBar from "../components/MobileCategoryBar/MobileCategoryBar";
import { categories } from "../data";
import MobileHeaderSearch from "../components/MobileHeaderSearch";

export default function Home({ data }) {




  return (
    <div>
      <Head>
        <title>Bellefu</title>
        <meta name="description" content="Generated by create next app" />
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
              languages={data.languages}
              countries={data.countries}
              location={data.defaultCountry} />
          </div>

          {/* mobile header search */}
          <div className="lg:hidden">
            <MobileHeaderSearch state={data.countryStates} />
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
              <Body currency={data.defaultCurrency} products={data.products} slider={data.slider} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export async function getServerSideProps() {

  const res = await fetch(`https://bellefu.inmotionhub.xyz/api/web30/get/web/index`)
  const data = await res.json()


  return {

    props: {
      data,
    }
  }
}
