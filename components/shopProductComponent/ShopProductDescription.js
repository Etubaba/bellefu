import { BsHeart } from "react-icons/bs";

const ShopProductDescription = ({ productDetails }) => {
  return (
    <div className="bg-bellefuWhite rounded-t-md">
      {/* title section */}
      <div className="flex items-center justify-between lg:px-7 px-3">
        <p className="text-xl lg:text-3xl text-bellefuTitleBlack font-semibold">
          {productDetails?.title}
        </p>
        <BsHeart className="lg:w-6 lg:h-6 text-bellefuOrange" />
      </div>
    </div>
  );
};

export default ShopProductDescription;
