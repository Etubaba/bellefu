import Dropdown from "./Dropdown";

const CategorySideBar = ({ categories }) => {
  return (
    <div>
      <h4 className="hidden lg:inline tracking-wider text-sm text-bellefuTitleBlack font-semibold mb-5 bg-bellefuWhite px-5 pt-5 rounded-md">
        Top Category
      </h4>
      <div className="px-3 pt-5 overflow-y-scroll h-screen pb-40">
        {categories?.map((category) => (
          <Dropdown key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
