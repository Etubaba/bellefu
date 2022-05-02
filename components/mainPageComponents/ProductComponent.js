import React, { useEffect, useState } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";
import Skeleto from "./Skeleton";
// import { countryChoice } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader, { apiData } from "../../constant";
import Skeleton from "@mui/material/Skeleton";

const ProductComponent = ({ products, currency, location, currencyCode }) => {
  const [loading, setLoading] = useState(false);

  const skeleMapper = [
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
    <Skeleto />,
  ];

  const [countryData, setCountryData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [fav, setFav] = useState([]);

  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const getState = useSelector((state) => state.bellefu.stateSelected);

  const subCatClicked = useSelector((state) => state.bellefu.subcatselected);
  const search = useSelector((state) => state.bellefu.searchFilter);

  useEffect(() => {
    setCountryData([]);


    const newProducts = async () => {
      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/general/get/product/${getCountry}`
        )
        .then((res) => {
          console.log(res.data.data);
          setCountryData(res.data.data);
          setInitialData(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    newProducts();
  }, [getCountry]);

  // get fav products
  const userId = useSelector((state) => state.bellefu?.profileDetails?.id);

  useEffect(() => {
    const getFav = async () => {
      await axios
        .get(`${apiData}get/user/favorite/${userId}`)
        .then((res) => setFav(res.data.data))
        .catch((err) => console.log(err));
    };
    getFav();
  }, []);

  const favId = fav?.map((item) => item.productId);
  // const favdelete = fav?.map(item => item.favId)

  // search query and fetch

  const where = getCountry === null ? location : getCountry;

  useEffect(() => {
    if (search !== "") {
      const getSearchResult = async () => {
        await axios
          .get(
            `${apiData}search/product/${where}/${search.toLocaleLowerCase()}`
          )
          .then((res) => setSearchResult(res.data.data))
          //  setCountryData(res.data.data))
          .catch((err) => console.log(err));
      };

      getSearchResult();
    } else {
      setCountryData(main);
    }
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const main =
    getCountry !== null ? countryData : search !== "" ? searchResult : products;




  return (
    <div>
      {loading ? (
        <MainProductHeader />
      ) : (
        <Skeleton
          className="rounded my-3"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={70}
        />
      )}
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense ">
        {loading
          ?
          (
            main === countryData && countryData.length === 0 ?
              (
                <div className="flex justify-center items-center h-screen">
                  <Loader isLoading={true} />
                </div>
              ) : (
                main
                  .filter((item) => {
                    if (getState === null && subCatClicked === undefined) {
                      return item;
                    } else if (item.stateCode === getState) {
                      return item;
                    } else if (item.subcatid === subCatClicked) {
                      return item;
                    }
                  })
                  .map((product) => (
                    <div key={product.productId}>
                      <ProductList
                        key={product.productId}
                        currency={currency}
                        product={product}
                        fav={favId}
                        favdata={fav}
                        currencyCode={currencyCode}
                      />
                    </div>
                  ))
              ))
          : skeleMapper.map((skele, index) => <div key={index}>{skele}</div>)}
      </div>
    </div>
  );
};

export default ProductComponent;
