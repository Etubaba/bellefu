import React, { useEffect, useState } from "react";
import { productData } from "../../productData";
import MainProductHeader from "./MainProductHeader";
import ProductList from "./ProductList";

// import { countryChoice } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { apiData } from "../../constant";

const ProductComponent = ({ products, currency, location }) => {
  const [countryData, setCountryData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [test, setTest] = useState([])



  const getCountry = useSelector((state) => state.bellefu.countrySelected);
  const getState = useSelector((state) => state.bellefu.stateSelected);

  const subCatClicked = useSelector((state) => state.bellefu.subcatselected)
  const search = useSelector((state) => state.bellefu.searchFilter)

  const router = useRouter();

  useEffect(() => {
    const newProducts = async () => {
      axios
        .get(
          `https://bellefu.inmotionhub.xyz/api/general/get/product/${getCountry}`
        )
        .then((res) => {
          console.log(res.data.data);
          setCountryData(res.data.data);
          setInitialData(res.data.data)


        })
        .catch((err) => console.log(err));
    };
    newProducts();
  }, [getCountry]);

  // const main = getCountry !== null ? countryData: search !== '' ? searchResult:  products 


  // const [main, setMain] = useState(arr)



  const where = getCountry === null ? location : getCountry


  useEffect(() => {
    if (search !== '') {

      const getSearchResult = async () => {

        await axios.get(`${apiData}search/product/${where}/${search.toLocaleLowerCase()}`)
          .then(res => setSearchResult(res.data.data))
          //  setCountryData(res.data.data))
          .catch(err => console.log(err))
      }

      getSearchResult()

    } else {
      setCountryData(main)
    }

  }, [search])

  const main = getCountry !== null ? countryData : search !== '' ? searchResult : products
  // if (search) {

  //   const getSearchResult = async () => {

  //     await axios.get(`${apiData}search/product/${where}/${search.toLocaleLowerCase()}`)
  //       .then(response => setMain(response.data.data))
  //       .catch(err => console.log(err))
  //   }

  //   getSearchResult()
  // } else {
  //   setMain(arr)
  // }



  //   const handleSearch = async (e) => {



  //     if (search!=='') {
  //         try {
  //             const response = await axios.get(`${apiData}search/product/${getCountry}/${search.toLocaleLowerCase()}`);
  //             set(response.data.data.data);
  //             setTotalSearch(response.data.data.total)
  //         } catch (error) {
  //             console.log(`Search error due to: ${error.message}`);
  //         }
  //     } else {
  //         setProductList(initailProducts);
  //         setTotalSearch(30);
  //     }

  // };

  return (
    <div>
      <MainProductHeader />
      <div className="bg-bellefuBackground mt-1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 grid-flow-row-dense ">
        {main.filter((item) => {
          if (getState === null && subCatClicked === undefined) {
            return item
          } else if (item.stateCode === getState) {
            return item
          } else if (item.subcatid === subCatClicked) {
            return item
          }
        }).map((product) => (
          <div
            onClick={() => router.push(`/product/${product.productId}`)}
            className="cursor-pointer"
          >
            <ProductList
              key={product.productId}
              currency={currency}
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
