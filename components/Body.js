import React from "react";
import Slider from "./mainPageComponents/slider/Slider";
import ProductComponent from "./mainPageComponents/ProductComponent";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const Body = ({ products, slider, currency, location, currencyCode }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // console.log("The products here :", products);
  return (
    <div className="">
      <div className="mb-2">
        {loading ? (
          <Slider slider={slider} />
        ) : (
          <Skeleton
            className="rounded my-3"
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={320}
          />
        )}
      </div>
      {/* product component session */}
      {loading ? (
        <ProductComponent
          currency={currency}
          currencyCode={currencyCode}
          location={location}
          products={products}
        />
      ) : (
        <Skeleton
          className="rounded my-3"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={1000}
        />
      )}{" "}
    </div>
  );
};

export default Body;
