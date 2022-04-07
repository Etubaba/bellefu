import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import { MdLocationOn } from "react-icons/md";
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import { apiData } from "../../constant";
import { login } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductList = ({ product, currency, currencyCode, fav, favdata }) => {
  const [from, setFrom] = useState(null);
  const [amount, setAmount] = useState(null);
  const [newPrice, setNewPrice] = useState(null);
  const [converter, setConverter] = useState(false);
  const [fav2, setFav2] = useState(true);
  const [productId, setProductId] = useState([]);

  const router = useRouter();
  const getIsLoggedIn = useSelector(login);

  const handleMessage = () => {
    if (getIsLoggedIn) {
      router.push("/messages");
    } else {
      router.push("/login");
      toast.info("Login to contact seller", { position: "top-center" });
    }
  };

  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);

  // console.log(productId)

  return (
    <div className="bg-bellefuWhite p-3 rounded-b-md">
      <img
        onClick={() => router.push(`/product/${product.productId}`)}
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
                axios
                  .post(`${apiData}convert/currency`, {
                    amount: product.price,
                    to: currencyCode,
                    from: product.currency_code,
                  })
                  .then((res) => {
                    setNewPrice(res.data.data.result);
                  });

                setConverter(true);
              }}
              className="ml-5"
            >
              <Tooltip title="Convert">
                <CgArrowsExchange className="text-2xl" />
              </Tooltip>
            </span>
          ) : null}
        </p>
        {(fav?.includes(product.productId) && getIsLoggedIn && fav2) ? (
          <BsSuitHeartFill
            onClick={(e) => {
              // e.stopPropagation();
              const favId = fav.find((items) => items === product.productId);
              // console.log(favId);
              if (favId !== undefined) {
                axios
                  .post(`${apiData}delete/favorite/webindex`, {
                    productId: favId,
                    userId: userId,
                  })
                  .then((res) => {
                    if (res.data.status) {
                      setFav2(false);
                      fav.filter((items) => items !== favId);
                      toast.error(`${product.title.substring(0, 20)} removed from favorite product`, {
                        position: "top-center",
                      });

                    }
                  });
              } else {
                return;
              }
            }}
            className="w-4 h-4 text-bellefuOrange"
          />
        ) : (
          <BsHeart
            onClick={(e) => {
              e.stopPropagation();
              if (getIsLoggedIn) {
                axios
                  .post(`${apiData}add/favorite`, {
                    userId: userId,
                    productId: product.productId,
                  })
                  .then((res) => {
                    console.log(res.data);
                    if (res.data.status) {
                      setFav2(true);
                      toast.success(
                        `${product.title.substring(0, 20)} added to favourite`
                      );
                    }
                  });
              } else {
                toast.error("Login to add favorite product");
              }
            }}
            className="w-4 h-4 text-bellefuOrange"
          />
        )}
      </div>
      <div className="flex items-center mt-2 space-x-3">
        <button
          onClick={handleMessage}
          className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4"
        >
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
