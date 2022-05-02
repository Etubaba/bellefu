import Dropdown from "./Dropdown";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";

const CategorySideBar = ({ categories, indexData }) => {
  const router = useRouter();

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
        <div className="">
          <div
            onClick={() => router.push("/custom")}
            className="flex items-center mb-7 hover:bg-bellefuBackground p-1 rounded-md"
          >
            <div className="flex  items-center flex-1 space-x-2 cursor-pointer">
              <img
                onClick={() => router.push("/custom")}
                src={`https://bellefu.inmotionhub.xyz/get/category/image/agro-servicescvz.png`}
                alt="icons"
                className="w-8 h-8"
              />
              <div className="flex  flex-1 justify-between space-x-20">
                <h5
                  className="text-bellefuBlack1 text-normal font-medium whitespace-nowrap"
                  onClick={() => router.push("/custom")}
                >
                  custom request
                </h5>
                <AiOutlineCaretRight className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySideBar;
