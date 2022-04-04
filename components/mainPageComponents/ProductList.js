import React, { useState } from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import { apiData } from "../../constant";

const ProductList = ({ product, currency, currencyCode }) => {
  const [from, setFrom] = useState(null);
  const [amount, setAmount] = useState(null);
  const [newPrice, setNewPrice] = useState(null);
  const [converter, setConverter] = useState(false);

  const router = useRouter();

  // useEffect(() => {

  // },[amount,from])

  const convert = (e) => {
    e.stopPropagation();
    const parameters = {
      from: from,
      to: currencyCode,
      amount: amount,
    };
    axios.post(`${apiData}convert/currency`, parameters).then((res) => {
      setNewPrice(res.data.data.result);
      console.log("result of convertion=>", res.data);
    });
  };

  return (
    <div
      onClick={() => router.push(`/product/${product.productId}`)}
      className="bg-bellefuWhite p-3 rounded-b-md"
    >
      <img
        src={`https://bellefu.inmotionhub.xyz/get/product/image/${product?.images[0]}`}
        className="rounded-md w-full h-44 object-cover"
      />
      <p className="capitalize text-medium">{product.title.substring(0, 20)}</p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product.stateName},
          </p>
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product.countryName}
          </p>
        </div>
      </div>
      <div className="flex items justify-between">
        <p className="text-bellefuGreen flex font-poppins font-semibold">
          {product.currency_code && !converter ? (
            <p
              className="mr-1"
              dangerouslySetInnerHTML={{ __html: product.currencySymbol }}
            />
          ) : (
            <p
              className="mr-1"
              dangerouslySetInnerHTML={{ __html: currency }}
            />
          )}

          {!converter ? product.price : newPrice?.toFixed(2)}
          {product.currency_code ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                axios.post(`${apiData}convert/currency`,
                  { amount: product.price, to: currencyCode, from: product.currency_code })
                  .then((res) => {
                    setNewPrice(res.data.data.result);
                    console.log("result of convertion=>", res.data);
                  })

                setConverter(true);
              }}
              className="ml-5"
            >
              convert
            </span>
          ) : null}
        </p>
        <BsHeart className="w-4 h-4 text-bellefuOrange" />
      </div>
      <div className="flex items-center mt-2 space-x-3">
        <button className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4">
          <MdOutlineMessage className="!text-white" />
        </button>
        <button className="bg-bellefuGreen  rounded-md w-full flex items-center justify-center py-4">
          <MdCall className="text-white " />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
