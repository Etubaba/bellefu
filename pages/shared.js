import Image from "next/image";

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
    <div className="flex p-3 space-x-3">
      {type === "image"?
        <div>
          <Image src={`https://bellefu.inmotionhub.xyz/get/product/image/${image}`} width={'50%'} height={'50%'} />
        </div>:
        <div>
          <Image src={`https://bellefu.inmotionhub.xyz/get/video/`} />
        </div>
      }
      <div>
        <p>Bellefu.com</p>
        <p>{prodName}</p>
        <p>{description}</p>
        <p>{`https://bellefu.inmotionhub.xyz/get/product/image/${image}`}</p>
      </div>
    </div>
  )
}

export default SharedProduct;