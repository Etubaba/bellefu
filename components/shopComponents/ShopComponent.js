import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";

import { BsHeart, BsSuitHeartFill, BsCart3 } from "react-icons/bs";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { apiData } from "../../constant";
import axios from "axios";
import { toast } from "react-toastify";
import { login } from "../../features/bellefuSlice";

const ShopComponent = ({ product }) => {
  const [fav2, setFav2] = useState(false);
  const router = useRouter();
  const favArr = useSelector((state) => state.bellefu?.favArr);
  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);
  const isLoggedIn = useSelector(login);


  console.log('shop=>', product)




  const addFav = (e) => {
    e.stopPropagation();
    if (isLoggedIn) {
      axios
        .post(`${apiData}add/favorite`, {
          userId: userId,
          productId: product.productId,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            setFav2(!fav2);
            toast.success(
              `${product.title.substring(0, 20)} added to favourite`
            );
          }
        });
    }
  };


  const removeFav = () => {
    axios
      .post(`${apiData}delete/favorite/webindex`, {
        productId: product.productId,
        userId: userId,
      })
      .then((res) => {
        if (res.data.status) {
          setFav2(!fav2);
          // const cleanArr = fav.filter(
          //   (items) => items !== product.productId
          // );
          // setClean(cleanArr);
          toast.error(
            `${product.title.substring(0, 20)} removed from favorite product`,
            {
              position: "top-right",
            }
          );
        }
      });
  };

  return (
    <div className="bg-bellefuWhite p-3 rounded-b-md">
      <img
        // onClick={() => router.push(`/product/${product.productId}`)}
        src={`https://bellefu.inmotionhub.xyz/get/product/image/${product?.images[0]}`}
        className="rounded-md w-full h-44 object-cover"
      />
      <p className="capitalize text-medium">{product.title.substring(0, 15)}</p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          {/* <p className="text-bellefuBlack1 text-sm capitalize">
            {product.state},
          </p> */}
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product.country}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-bellefuGreen font-poppins font-semibold">
          ₦ {product.price}
        </p>
        {fav2 || favArr?.includes(product.productId) ? (
          <div onClick={removeFav} className="cursor-pointer">
            <BsSuitHeartFill className="w-4 h-4 text-bellefuOrange" />
          </div>
        ) : (
          <div onClick={addFav} className="cursor-pointer">
            <BsHeart className="w-4 h-4 text-bellefuOrange" />
          </div>
        )}
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <button className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4">
          <BsCart3 className="text-white" />
        </button>
        <button className="bg-bellefuGreen w-full flex items-center justify-center py-4 rounded-md">
          <MdCall className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ShopComponent;
