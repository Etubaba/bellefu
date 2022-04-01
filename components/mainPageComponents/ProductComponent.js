import React, { useEffect, useState } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";

// import { countryChoice } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const ProductComponent = ({ products, currency }) => {
  const [countryData, setCountryData] = useState([]);

  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const getState = useSelector((state) => state.bellefu.stateSelected);

  const subCatClicked = useSelector((state) => state.bellefu.subcatselected)

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

  // console.log(subCatClicked)
  // if (subCatClicked=== undefined) {
  //   return item
  // } else if (item.subcatid === subCatClicked) {
  //   return item
  // }
  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 grid-flow-row-dense ">
        {main.filter((item) => {
          if (getState === null && subCatClicked === undefined) {
            return item
          } else if (item.stateCode === getState) {
            return item
          } else if (item.subcatid === subCatClicked) {
            return item
          }


          //  else if (item.subcatid === subCatClicked) {
          //   return item
          // }
        }).map((product) => (
          <div
            onClick={() => router.push(`/product/${product.productId}`)}
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
