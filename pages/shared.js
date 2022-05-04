import Head from "next/head";

export const getServerSideProps = async ({query}) => {
  const {image, type, prodName, description} = query;

  return {
    props: {
      image,
      type,
      prodName,
      description
    }
  }
}

const SharedProduct = ({image, type, prodName, description}) => {
  if (!image) return <div>me</div>;
  
  return (
    <Head>
      <meta name="og:image" content={`https://bellefu.inmotionhub.xyz/get/product/image/${image}`} />
      <meta name="og:title" content={`Product Name: ${prodName}`} />
      <meta name="og:description" content={`Product Description: ${description}`} />
      <meta name="og:url" content={`Product Link: https://bellefu.inmotionhub.xyz/get/product/image/${image}`} />
    </Head>
  )
}

export default SharedProduct;