import React, { useEffect, useState, useRef } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";
import Skeleto from "./Skeleton";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
// import { countryChoice } from "../../features/bellefuSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import Loader, { apiData } from "../../constant";
import {
  countryProductSearchEmpty,
  country,
  homeData,
} from "../../features/bellefuSlice";
import Skeleton from "@mui/material/Skeleton";

const ProductComponent = ({ products, currency, location, currencyCode }) => {
  const [loading, setLoading] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [fav, setFav] = useState([]);
  const [grid, setGrid] = useState(false);
  const [page, setPage] = useState(1);
  const [productIndex, setProductIndex] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [adverts, setAdverts] = useState([]);

  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const getState = useSelector((state) => state.bellefu.stateSelected);
  const indexProduct = useSelector(homeData);

  const subCatClicked = useSelector((state) => state.bellefu.subcatselected);
  const search = useSelector((state) => state.bellefu.searchFilter);
  const searchCountry = useSelector(country);
  const initialRender = useRef(0);
  const dispatch = useDispatch();

  const defaultPageCount = indexProduct?.products.last_page;

  setTimeout(() => {
    if (getCountry === null && search === "") setTotalPage(defaultPageCount);
  }, 3000);

  //fetching the adverts
  useEffect(() => {
    const getAdverts = async () => {
      await axios
        .get(`https://bellefu.inmotionhub.xyz/api/general/get/all/commercial`)
        .then((res) => setAdverts(res.data.data))
        .catch((err) => console.log(err));
    };
    getAdverts();
  }, []);

  // getting random ads
  const randomAdverts = adverts[Math.floor(Math.random() * adverts.length)];

  useEffect(() => {
    if (page > 1) {
      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/web30/get/web/index?page=${page}`
        )
        .then((res) => {
          setProductIndex(res.data?.products?.data);
          setTotalPage(res.data?.products?.last_page);
        });
    }
  }, [page]);

  // fetch product by country select

  useEffect(() => {
    setCountryData([]);

    const newProducts = async () => {
      if (searchCountry) setSearching(true);

      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/general/get/product/${getCountry}?page=${page}`
        )
        .then((res) => {
          // console.log(res.data.data);

          if (!res.data.data.length) initialRender.current = 1;
          else if (res.data.data.length) initialRender.current = 2;

          setCountryData(res.data.data.data);
          setTotalPage(res.data.data.last_page);
          setInitialData(res.data.data.data);
          setSearching(false);
        })
        .catch((err) => {
          console.log(err);
          setSearching(false);
        });
    };
    newProducts();
  }, [getCountry, page]);

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

  useEffect(() => {
    if (initialRender.current === 1) dispatch(countryProductSearchEmpty(true));
    if (initialRender.current === 2) dispatch(countryProductSearchEmpty(false));
  }, [countryData]);

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
            setSearchResult(res.data.data.data);
            setTotalPage(res.data.data.last_page);
          })
          //  setCountryData(res.data.data))
          .catch((err) => console.log(err));
      };

      getSearchResult();
    } else {
      setCountryData(main);
    }
  }, [search, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const main =
    getCountry !== null && search === ""
      ? countryData
      : search !== ""
      ? searchResult
      : page !== 1 && search === "" && getCountry === null
      ? productIndex
      : products;

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

  const pageNumber = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

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

      {/* second set of 8 */}

      <div
        className={classNames("bg-bellefuBackground mt-1 rounded-md", {
          "grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense":
            main?.length,
          "grid-cols-2 sm:grid-cols-2": grid,
          "grid-cols-1 sm:grid-cols-1": !grid,
        })}
      >
        {loading ? (
          main === countryData && isSearching ? (
            <div className="flex justify-center items-center h-screen">
              <Loader isLoading={isSearching} />
            </div>
          ) : main?.length === 0 ? (
            <div className="mt-8">
              <p className="text-center font-bold text-base md:text-3xl mb-8">
                We don't have product in {searchCountry}
              </p>
              <div className="flex flex-col md:flex-row md:space-x-10 items-center justify-center">
                <p className="bg-bellefuOrange rounded-lg hover:bg-orange-500 mb-5 md:mb-0 w-full md:w-1/2">
                  <button className="w-full p-4 text-2xl text-bellefuWhite">
                    Make Custom Request
                  </button>
                </p>
                <p className="bg-bellefuGreen rounded-lg hover:bg-green-500 w-full md:w-1/2">
                  <button className="w-full p-4 text-2xl text-bellefuWhite">
                    Be The First To Post Product
                  </button>
                </p>
              </div>
            </div>
          ) : (
            main
              .slice(0, 8)
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
      {/* the ads start here */}

      <div className="my-5">
        <a href={randomAdverts?.action} target="_blank">
          <img
            src={`https://bellefu.inmotionhub.xyz/get/commercial/image/${
              adverts[Math.floor(Math.random() * adverts.length)]?.image
            }`}
            alt="ads"
            className="w-full h-80 object-cover rounded-md"
          />
        </a>
      </div>

      <div
        className={classNames("bg-bellefuBackground mt-1 rounded-md", {
          "grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense":
            main?.length,
          "grid-cols-2 sm:grid-cols-2": grid,
          "grid-cols-1 sm:grid-cols-1": !grid,
        })}
      >
        {main
          .slice(8, 16)
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
          ))}
      </div>
      {/* the ads start here */}

      {main.length > 8 && (
        <div className="my-5">
          <img
            src={`https://bellefu.inmotionhub.xyz/get/commercial/image/${
              adverts[Math.floor(Math.random() * adverts.length)]?.image
            }`}
            alt="ads"
            className="w-full h-80 object-cover rounded-md"
          />
        </div>
      )}

      <div
        className={classNames("bg-bellefuBackground mt-1 rounded-md", {
          "grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense":
            main?.length,
          "grid-cols-2 sm:grid-cols-2": grid,
          "grid-cols-1 sm:grid-cols-1": !grid,
        })}
      >
        {main
          .slice(16, 24)
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
          ))}
      </div>

      {main.length > 16 && (
        <div className=" my-5">
          <img
            src={`https://bellefu.inmotionhub.xyz/get/commercial/image/${
              adverts[Math.floor(Math.random() * adverts.length)]?.image
            }`}
            alt="ads"
            className="w-full h-80 object-cover rounded-md"
          />
        </div>
      )}

      <div
        className={classNames("bg-bellefuBackground mt-1 rounded-md", {
          "grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 grid-flow-row-dense":
            main?.length,
          "grid-cols-2 sm:grid-cols-2": grid,
          "grid-cols-1 sm:grid-cols-1": !grid,
        })}
      >
        {main
          .slice(24, 32)
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
          ))}
      </div>

      {/* pagination goes here  */}

      {main.length !== 0 && totalPage > 1 && (
        <div className="flex justify-center md:mb-0 mb-8 md:mt-10 mt-7 items-center w-full ">
          <button
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            className="flex bg-bellefuOrange hover:bg-orange-500 text-white px-1 md:px-4 md:py-2 rounded-md md:rounded-lg md:space-x-2 space-x-1 py-1"
          >
            <MdOutlineArrowBackIosNew className="mt-1" /> <span> Prev</span>
          </button>

          <span className="justify-center items-center mx-2 md:mx-4 px-2 md:px-4 flex space-x-2 md:space-x-6">
            {pageNumber?.map((item, index) => (
              <p
                onClick={() => setPage(item)}
                className={
                  page === item
                    ? "bg-bellefuGreen p-1 px-2 rounded-full text-white"
                    : "cursor-pointer"
                }
                key={index}
              >
                {item}
              </p>
            ))}
          </span>

          {main.length === 32 && (
            <button
              onClick={() => {
                if (page < totalPage) {
                  {
                    setPage((prev) => prev + 1);
                  }
                }
              }}
              className="flex bg-bellefuGreen hover:bg-green-400 text-white px-1 md:px-4 md:py-2 rounded-md md:rounded-lg md:space-x-2 space-x-1 py-1"
            >
              <span> Next</span> <MdOutlineArrowForwardIos className="mt-1" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
