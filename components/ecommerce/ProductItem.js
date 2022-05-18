import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";



const PRODUCT_IMAGE_URL = "https://bellefu.inmotionhub.xyz/get/store/image/";

const ProductItem = ({ item }) => {
    const router = useRouter();

    return (
        <div className="bg-white p-3 rounded-lg w-full cursor-pointer">
            <img
                src={`${PRODUCT_IMAGE_URL}${item?.logo}`}
                alt=""
                className="object-cover rounded-md w-full h-64"
            // onClick={() => router.push(`/product/${item.id}`)}
            />
            <div className=" items-start justify-start my-2">
                <p className="text-gray-800 mb-3 text-base tracking-wider font-bold whitespace-nowrap">
                    {item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
                </p>

                <p className='texx-gray-300 text-xs'>
                    {item?.description}
                </p>

            </div>



            <button
                className="bg-bellefuGreen px-6 py-2  rounded-full  w-full mt-2"

            >
                <div className="flex items-center space-x-3 justify-center">
                    <p className="tracking-wider font-semibold text-white text-base">
                        Shop Now
                    </p>

                    <MdKeyboardArrowRight className="h-5 w-5 text-white" />
                </div>
            </button>
        </div>
    );
};

export default ProductItem;
