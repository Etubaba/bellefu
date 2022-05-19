import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShopProduct = () => {
  const pDetails = useSelector((state) => state.bellefu?.shopProduct);

  const [productDetails, setProductDetails] = useState();

  // handling getting the product details of a user
  useEffect(() => {
    const getProductDetails = async () => {
      await axios.get(
        `https://bellefu.inmotionhub.xyz/api/shop/view/single/${pDetails}`
      ).then((res) => setProductDetails(res.data.data));

      // const details = await resProductDetails.json();
      // (await details?.data);
    };
    getProductDetails();
  }, []);


  console.log('redux url', pDetails);

  console.log('product', productDetails);
  return (
    <div className='mt-28'>
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
