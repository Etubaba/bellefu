import React from "react";

const ShopProduct = ({ details }) => {
  console.log("details", details);
  return <div>slugs</div>;
};

export default ShopProduct;

//server side fetching of the full product details
export async function getServerSideProps(context) {
  const { slug, productSlug } = context.query;

  const requests = await fetch(
    `https://bellefu.inmotionhub.xyz/api/shop/view/single/${slug}/${productSlug}`
  ).then((res) => res.json());

  return {
    props: {
      details: requests,
    },
  };
}
