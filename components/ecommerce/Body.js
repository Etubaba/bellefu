
import Products from '../../components/ecommerce/Products';





const Body = ({ shops }) => {


    return (
        <div className="max-w-6xl mx-auto z-40 mt-32">


            <div className="flex items-center justify-between mb-5">
                <h3 className="text-gray-800 text-xl tracking-wider font-bold">
                    Shops
                </h3>

                <p
                    className="text-gray-700 text-sm tracking-wider"
                // onClick={() => router.push("/products")}
                >
                    View All Shops
                </p>
            </div>

            <Products
                shops={shops}
            />


        </div>
    );
};

export default Body;