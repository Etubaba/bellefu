import axios from "axios";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { favUpdated, login } from "../../features/bellefuSlice";

const ShopProductDescription = ({ productDetails }) => {

  const shopurl = 'https://bellefu.inmotionhub.xyz/api/shop/add/cart/item'
  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);
  const isLoggedIn = useSelector(login);
  const dispatch = useDispatch();





  const addToCart = () => {

    if (isLoggedIn) {
      axios.post(`${shopurl}`, {
        productId: productDetails.productId,
        userId: userId,
      }).then((res) => {
        if (res.data.status) {
          toast.success(`${productDetails.title.substring(0, 20)} added to cart`)
          dispatch(favUpdated())
        }
      });
    } else {
      toast.info("Login to add to cart", { position: "top-center" });
    }

  }
  return (
    <div className="bg-bellefuWhite rounded-t-md">
      {/* title section */}
      <div className="flex items-center justify-between lg:px-7 px-3">
        <p className="text-xl lg:text-3xl text-bellefuTitleBlack font-semibold">
          {productDetails?.title}
        </p>

        <button
          onClick={addToCart}
          className='bg-bellefuOrange hover:bg-orange-500 text-white rounded-xl flex py-1 px-4'>
          <BsCart3 className=" text-lg mr-2 mt-1" /> <span className='text-lg'>Add to cart</span>
        </button>
      </div>
      <div className='border-b my-5' />
      <div className='flex text-2xl text-bellefuGreen ml-7 space-x-5'>
        <strong>Price :</strong>
        <p>${productDetails?.price}</p>
      </div>

      <div className='border-b my-5' />
      <p className='ml-7 mb-3 text-xl'>Description :</p>
      <p className='ml-7 pb-7'>{productDetails?.description}</p>
    </div>
  );
};

export default ShopProductDescription;
