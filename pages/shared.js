import Head from "next/head";
import {useSelector} from "react-redux";
import { singleProductDetails } from "../features/bellefuSlice";

// export const getServerSideProps = async ({query}) => {
//   const {image, type, prodName, description} = query;

//   return {
//     props: {
//       image,
//       type,
//       prodName,
//       description
//     }
//   }
// }

const SharedProduct = () => {

  const singleProduct = useSelector(singleProductDetails);
  
  return (
    <Head>
      <meta name="og:image" content={singleProduct?.image} />
      <meta name="og:title" content={singleProduct?.title || "my title"} />
      <meta name="og:description" content={singleProduct?.description || "my description"} />
      <meta name="og:url" content={singleProduct?.url} />
    </Head>
  )
}

export default SharedProduct;