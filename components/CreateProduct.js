import CreateProductHeader from "./CreateProductHeader";
import CreateProductSideBar from "./CreateProductSideBar";
import CreateProductCategory from "./CreateProductCategory";

const CreateProduct = ({categories, countries}) => {
  return (
    <div>
      <div className="bg-white mx-8 rounded-lg"><CreateProductHeader /></div>
      <div className="flex justify-between mt-9 mx-14">
        <div className="bg-white py-3"><CreateProductSideBar /></div>
        <div className="bg-white p-8 w-[70%]">
          <CreateProductCategory categories={categories} countries={countries} />
          <div className="flex items-center justify-end space-x-12 mt-12">
            <button className="outline outline-gray-100 outline-2 bg-bellefuWhite py-2 px-16 rounded-lg hover:outline-bellefuOrange">Cancel</button>
            <button className="bg-bellefuOrange py-2 px-16 rounded-lg text-white hover:outline outline-gray-100 outline-2 hover:bg-white hover:text-bellefuOrange hover:outline-orange-200">Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;