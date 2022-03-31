import React, { useEffect, useState } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";
import { useRouter } from "next/router";
import { countryChoice } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductComponent = ({ products, currency }) => {
  const [countryData, setCountryData] = useState([]);

  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const router = useRouter();

  useEffect(() => {
    const newProducts = async () => {
      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/general/get/product/${getCountry}`
        )
        .then((res) => {
          console.log(res.data.data);
          setCountryData(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    newProducts();
  }, [getCountry]);

  const main = getCountry === null ? products : countryData;


  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 grid-flow-row-dense ">
        {main.map((product) => (
          <div
            onClick={() => router.push("/product/id")}
            className="cursor-pointer"
          >
            <ProductList
              key={product.productId}
              currency={currency}
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
