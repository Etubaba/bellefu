import { useState, useEffect } from "react";

import { AiOutlineCaretRight } from "react-icons/ai";
import classNames from "classnames";
import { webApi } from "../constant";

const CreateProductCategory = ({ categories, countries }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [location, setLocation] = useState("");
  const [openCat, setOpenCat] = useState(false);
  const [openSubCat, setOpenSubCat] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openState, setOpenState] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const fetcher = (url) => fetch(url).then(res => res.json());

  const { data: states } = useSWR(countryCode ? `${webApi}get/postadd/states/${countryCode}` : null, fetcher);
  const { data: cities } = useSWR(stateCode ? `${webApi}get/postadd/lgas/${stateCode}` : null, fetcher);

  const onFocus = (stateHandler) => (evt) => {
    evt.stopPropagation()
    //console.log("!")
    stateHandler(true)
    //setOpenCat(true)
  }

  const onBlur = (stateHandler) => (evt) => {
    evt.stopPropagation()
    stateHandler(false);
  }

  const onClick = (state, stateHandler) => (evt) => {
    evt.stopPropagation()

    if (!state) {
      console.log(state)
      //stateHandler(true);
      const inputEl = evt.currentTarget.previousSibling.firstChild;
      inputEl.focus();
    }
  }


  return (
    <div className="w-[100%] pt-10 pb-4 border-2 px-10 rounded-md bg-bellefuBackground">
      <div className="flex items-center justify-between space-x-6 mb-5">
        <div className="relative w-[50%]">
          <p><label htmlFor="cat" className="text-lg font-semibold">Product Category:</label></p>
          <div className="relative">
            <p ><input type="text" id="cat" value={categoryName} onFocus={onFocus(setOpenCat)} onBlur={onBlur(setOpenCat)} placeholder="product category" className="w-full border-2 rounded-md py-2 pl-3 focus:border-bellefuOrange focus:outline-none" /></p>
            <span onClick={onClick(openCat, setOpenCat)} className={classNames("text-gray-300 absolute right-2 top-4", { "rotate-90": openCat, "text-bellefuOrange": openCat })}><AiOutlineCaretRight /></span>
          </div>
          {openCat &&
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40 overflow-auto h-auto">
              <ul className="rounded py-4">
                {categories.map((category, index) => (
                  <li
                    onClick={() => {
                      setOpenCat(prevState => !prevState);
                      setCategoryName(category.name);
                      setCategoryIndex(index);
                      setCategoryId(category.id);
                    }}
                    key={index}
                    className="px-5 py-3 hover:bg-gray-100 flex space-x-5 items-center cursor-pointer"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="relative w-[50%]">
          <p><label htmlFor="subcat" className="text-lg font-semibold">Product Sub-category:</label></p>
          <div className="relative">
            <p><input type="text" id="subcat" value={subCategoryName} onFocus={onFocus(setOpenSubCat)} onBlur={onBlur(setOpenSubCat)} placeholder="product category" className="w-full border-2 rounded-md focus:border-bellefuOrange focus:outline-none py-2 pl-3" /></p>
            <span onClick={onClick(openSubCat, setOpenSubCat)} className={classNames("text-gray-300 absolute right-2 top-4", { "rotate-90": openSubCat, "text-bellefuOrange": openSubCat })}><AiOutlineCaretRight /></span>
            {/* <AiOutlineCaretRight className={classNames("text-gray-300 absolute right-2 top-4", {"rotate-90": openSubCat, "text-bellefuOrange": openSubCat})} /> */}
          </div>
          {openSubCat &&
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded py-4">
                {categories[categoryIndex]?.sub_category?.map((subCategory, index) => (
                  <li
                    onClick={() => {
                      setOpenSubCat(prevState => !prevState);
                      setSubCategoryId(subCategory.subCatId);
                    }}
                    key={index}
                    className="px-5 py-3 hover:bg-gray-100 flex space-x-5 items-center cursor-pointer"
                  >
                    {subCategory.subCatName}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center justify-between space-x-6 mb-5">
        <div className="relative w-[50%]">
          <p><label htmlFor="country" className="text-lg font-semibold">Country:</label></p>
          <div className="relative">
            <p><input type="text" id="country" value={countryName} placeholder="product category" className="w-full border-2 rounded-md focus:border-bellefuOrange focus:outline-none py-2 pl-3" onFocus={onFocus(setOpenCountry)} onBlur={onBlur(setOpenCountry)} /></p>
            <span onClick={onClick(openCountry, setOpenCountry)} className={classNames("text-gray-300 absolute right-2 top-4", { "rotate-90": openCountry, "text-bellefuOrange": openCountry })}><AiOutlineCaretRight /></span>
            {/* <AiOutlineCaretRight className={classNames("text-gray-300 absolute right-2 top-4", {"rotate-90": openCountry, "text-bellefuOrange": openCountry})} /> */}
          </div>
          {openCountry &&
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded py-4">
                {countries.map((country, index) => (
                  <li
                    onClick={() => {
                      setOpenCountry(prevState => !prevState);
                      setCountryName(country.name);
                      setCountryCode(country.iso2)
                    }}
                    key={index}
                    className="px-5 py-3 hover:bg-gray-100 flex space-x-5 items-center cursor-pointer"
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="relative w-[50%]">
          <p><label htmlFor="state" className="text-lg font-semibold">State:</label></p>
          <div className="relative">
            <p><input type="text" id="state" value={stateName} placeholder="product category" className="w-full border-2 rounded-md focus:border-bellefuOrange focus:outline-none py-2 pl-3" onFocus={onFocus(setOpenState)} onBlur={onBlur(setOpenState)} /></p>
            <span onClick={onClick(openState, setOpenState)} className={classNames("text-gray-300 absolute right-2 top-4", { "rotate-90": openState, "text-bellefuOrange": openState })}><AiOutlineCaretRight /></span>
            {/* <AiOutlineCaretRight className={classNames("text-gray-300 absolute right-2 top-4", {"rotate-90": openState, "text-bellefuOrange": openState})} /> */}
          </div>
          {openState &&
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded py-4">
                {states.map((state, index) => (
                  <li
                    onClick={() => {
                      setOpenState(prevState => !prevState);
                      setStateName(state.name);
                      setStateCode(state.code)
                    }}
                    key={index}
                    className="px-5 py-3 hover:bg-gray-100 flex space-x-5 items-center cursor-pointer"
                  >
                    {state.name}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center justify-between space-x-6 mb-3">
        <div className="relative w-[50%]">
          <p><label htmlFor="city" className="text-lg font-semibold">City:</label></p>
          <div className="relative">
            <p><input type="text" id="city" value={cityName} placeholder="product category" className="w-full border-2 rounded-md focus:border-bellefuOrange focus:outline-none py-2 pl-3" onFocus={onFocus(setOpenCity)} onBlur={onBlur(setOpenCity)} /></p>
            <span onClick={onClick(openCity, setOpenCity)} className={classNames("text-gray-300 absolute right-2 top-4", { "rotate-90": openCity, "text-bellefuOrange": openCity })}><AiOutlineCaretRight /></span>
            {/* <AiOutlineCaretRight className={classNames("text-gray-300 absolute right-2 top-4", {"rotate-90": openCity, "text-bellefuOrange": openCity})} /> */}
          </div>
          {openCity &&
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded py-4">
                {cities.map((city, index) => (
                  <li
                    onClick={() => {
                      setOpenCity(prevState => !prevState);
                      setCityName(city.name);
                      setCityCode(city.code);
                    }}
                    key={index}
                    className="px-5 py-3 hover:bg-gray-100 flex space-x-5 items-center cursor-pointer"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="w-[50%]">
          <p><label htmlFor="location" className="text-lg font-semibold">Location:</label></p>
          <p><input type="text" id="location" value={location} placeholder="Address..." className="w-full border-2 rounded-md focus:border-bellefuOrange focus:outline-none py-2 pl-3" /></p>
        </div>
      </div>
    </div>
  )

}

export default CreateProductCategory;