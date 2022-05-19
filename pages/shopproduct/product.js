import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShopProduct = () => {
  const pDetails = useSelector((state) => state.bellefu?.favArr);

  const [productDetails, setProductDetails] = useState();

  // handling getting the product details of a user
  useEffect(() => {
    const getProductDetails = async () => {
      const resProductDetails = await fetch(
        `https://bellefu.inmotionhub.xyz/api/shop/view/single/${slug}/${productSlug}`
      );
      const details = await resProductDetails.json();
      setProductDetails(await details?.data);
    };
    getProductDetails();
  }, []);

  console.log("details", details);
  return (
    <div>
      <h1>hello shop product</h1>
    </div>
  );
};

export default ShopProduct;

// //server side fetching of the full product details
// export async function getServerSideProps(context) {
//   const { slug, productSlug } = context.query;

//   const requests = await fetch(
//     `https://bellefu.inmotionhub.xyz/api/shop/view/single/${slug}/${productSlug}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       details: requests,
//     },
//   };
// }
