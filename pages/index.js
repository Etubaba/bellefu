import Head from "next/head";
import Image from "next/image";
import Slider from "../components/slider/Slider";
import HeaderSearch from "../components/HeaderSearch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bellefu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Overall container */}
      <main className="bg-bellefuBackground h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* second nav bar */}
          <div>
            <HeaderSearch />
          </div>

          {/* main body */}
          <div className="flex">
            {/* cstegory side bar */}
            <div className="w-72 mr-5 min-h-screen bg-bellefuWhite">
              category nav bar
            </div>
            {/* list of products & slider */}
            <div className="flex-1">
              <div>
                <Slider />
              </div>
              <div>The products here</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
