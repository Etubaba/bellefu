import { useState } from "react";

const CreateProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [location, setLocation] = useState("");
  const [openCat, setOpenCat] = useState(false);
  const [openSubCat, setOpenSubCat] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [openState, setOpneState] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-3 relative">
          <p className="text-lg font-semibold">Product Category</p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpenCat(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": openCat, "text-bellefuOrange": openCat})} />
            </div>
          </div>
          {openCat && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpenCat(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="mb-3 relative">
          <p className="text-lg font-semibold">Product Sub-category</p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpenSubCat(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": openSubCat, "text-bellefuOrange": openSubCat})} />
            </div>
          </div>
          {openSubCat && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpenSubCat(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="mb-3 relative">
          <p className="text-lg font-semibold">Country: </p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpenCountry(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": openCountry})} />
            </div>
          </div>
          {openCountry && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpenCountry(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="mb-3 relative">
          <p className="text-lg font-semibold">State:</p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpneState(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": openState})} />
            </div>
          </div>
          {openState && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpneState(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div className="relative">
          <p className="text-lg font-semibold">City: </p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpenCity(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": openCity})} />
            </div>
          </div>
          {openCity && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpenCity(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        </div>
        <div className="">
          <input type="text" value={location} placeholder="Address..." classname="w-full" />
          {/* <p className="text-lg font-semibold">Product Sub-category</p>
          <div className="flex items-center justify-between mb-2 bg-white hover:bg-bellefuBackground p-2 rounded-md border-2 cursor-pointer" onClick={() => setOpenSubCat(prevState => !prevState)}>
            <div className="">
              {product}
            </div>
            <div>
              <AiOutlineCaretRight className={classNames("text-gray-300", {"rotate-90": rotateCaret})} />
            </div>
          </div>
          {openSubCat && 
            <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in absolute z-40">
              <ul className="rounded px-5 py-4">
                {products.map((item, index) => (
                  <li
                    onClick={() => {
                      setOpenSubCat(prevState => !prevState);
                      setProduct(item.value);
                    }}
                    key={index}
                    className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                  >
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          } */}
        </div>
      </div>
    </div>
  )

}