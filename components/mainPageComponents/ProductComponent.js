import React, { useEffect, useState, useRef } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";
import Skeleto from "./Skeleton";
// import { countryChoice } from "../../features/bellefuSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import Loader, { apiData } from "../../constant";
import { countryProductSearch, country } from "../../features/bellefuSlice";
import Skeleton from "@mui/material/Skeleton";

const ProductComponent = ({ products, currency, location, currencyCode }) => {
  const [loading, setLoading] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [fav, setFav] = useState([]);
  const [grid, setGrid] = useState(false);

  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const getState = useSelector((state) => state.bellefu.stateSelected);

  const subCatClicked = useSelector((state) => state.bellefu.subcatselected);
  const search = useSelector((state) => state.bellefu.searchFilter);
  const searchCountry = useSelector(country);
  const initialRender = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCountryData([]);

    const newProducts = async () => {
      if (searchCountry) setSearching(true);
      
      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/general/get/product/${getCountry}`
        )
        .then((res) => {
          console.log(res.data.data);
          setCountryData(res.data.data);
          setInitialData(res.data.data);
          setSearching(false);
        })
        .catch((err) => {
          console.log(err);
          setSearching(false);
        });
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

  // useEffect(() => {
  //   console.log(initialRender);
  //   if (initialRender.current > 1) dispatch(countryProductSearch("empty"));
  // }, [countryData])

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
          .then((res) => {
            setSearchResult(res.data.data);
            console.log("!")
          })
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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const main =
    getCountry !== null ? countryData : search !== "" ? searchResult : products;

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

  return (
    <div>
      {loading ? (
        <MainProductHeader grid={grid} changeView={setGrid} />
      ) : (
        <Skeleton
          className="rounded my-3"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={70}
        />
      )}
      <div
        className={classNames("bg-bellefuBackground mt-1 rounded-md",{"grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense": main?.length, "grid-cols-2 sm:grid-cols-2": grid, "grid-cols-1 sm:grid-cols-1": !grid})}
      >
        {loading ? (
          main === countryData && isSearching ? (
            <div className="flex justify-center items-center h-screen">
              <Loader isLoading={isSearching} />
            </div>
          ) : main?.length === 0?(
            <div className="mt-8">
              <p className="text-center font-bold text-base md:text-3xl mb-8">We don't have product in {searchCountry}</p>
              <div className="flex flex-col md:flex-row space-x-10 items-center justify-center">
                <p className="bg-bellefuOrange rounded-lg hover:bg-orange-500"><button className="w-full p-4 text-2xl text-bellefuWhite">Make Custom Request</button></p>
                <p className="bg-bellefuGreen rounded-lg hover:bg-green-500"><button className="w-full p-4 text-2xl text-bellefuWhite">Be The First To Post Product</button></p>
              </div>
            </div>
          ): (
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
                <div key={product?.productId}>
                  <ProductList
                    key={product?.productId}
                    view={grid}
                    currency={currency}
                    product={product}
                    fav={favId}
                    favdata={fav}
                    currencyCode={currencyCode}
                  />
                </div>
              ))
          )
        ) : (
          skeleMapper.map((skele, index) => <div key={index}>{skele}</div>)
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
