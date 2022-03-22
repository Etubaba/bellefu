import { categories } from "../data";

import Dropdown from "./Dropdown";

const CategorySideBar = () => {
  console.log(categories);
  return (
    <div>
      <div className="px-5 pt-5 overflow-y-scroll h-screen pb-40">
        {categories?.map((category) => (
          <Dropdown key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
