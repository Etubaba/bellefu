import React from "react";
import MyAd from "./MyAd";
import Skeleto from "../../mainPageComponents/Skeleton";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const MyAds = ({ products }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const skeleBig = [<Skeleto />, <Skeleto />, <Skeleto />, <Skeleto />];

  return (
    <div className="mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-3 grid-flow-row-dense">
      { loading
        ? products?.map((product) => (
            <MyAd key={product.id} product={product} />
          )):
        skeleBig.map((ske, index) => (
          <>
            <div className="hidden sm:block lg:block" key={index}>
              {ske}
            </div>
          </>
        ))
      }
    
    </div>
  );
};

export default MyAds;
