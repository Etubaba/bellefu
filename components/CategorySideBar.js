import Dropdown from "./Dropdown";

const CategorySideBar = ({ categories, indexData }) => {
  return (
    <div className="bg-bellefuWhite rounded-md pb-10">
      <div className="pt-4">
        <h4 className="hidden lg:inline tracking-wider text-lg text-bellefuTitleBlack font-semibold px-5 rounded-md">
          Top Category
        </h4>
      </div>
      <div className="px-3 pt-5">
        {categories?.map((category) => (
          <Dropdown key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
