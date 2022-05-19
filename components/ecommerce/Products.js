import ProductItem from "./ProductItem";

const Products = ({ shops }) => {
    //limitint the number of products in view on the home page


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shops.map((item, index) => (
                <div key={index}>
                    <ProductItem item={item} />
                </div>
            ))}
        </div>
    );
};

export default Products;