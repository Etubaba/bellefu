import Head from "next/head";

const SharedProduct = () => {

  //const singleProduct = useSelector(singleProductDetails);
  
  return (
    <Head>
      <meta name="og:image" content="my image" />
      <meta name="og:title" content="my title" />
      <meta name="og:description" content="my description" />
      <meta name="og:url" content="my url" />
    </Head>
  )
}

export default SharedProduct;