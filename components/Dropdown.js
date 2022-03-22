import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import DropdownItems from "./DropdownItems";

const Dropdown = ({ category }) => {
  const [open, setOpen] = useState(false);
  if (category.children) {
    return (
      <div className="">
        <div
          key={category.id}
          className="flex items-center mb-7 hover:bg-bellefuBackground p-3 rounded-md"
        >
          <div className="flex items-center flex-1 space-x-3 cursor-pointer">
            <img src={category.Icon} alt="icons" className="w-6 h-6" />
            <h5 className="text-bellefuBlack1 font-medium">{category.title}</h5>
          </div>
          <div onClick={() => setOpen(!open)}>
            <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
          </div>
        </div>
        <div
          className={
            open
              ? "inline-block w-full -mt-6 space-y-3 text-sm text-bellefuBlack1 select-none "
              : "hidden"
          }
        >
          <div className="border-t-2" />
          {category.children.map((child) => (
            <DropdownItems key={child.id} child={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div
          key={category.id}
          className="flex items-center mb-7 hover:bg-bellefuBackground p-3 rounded-md"
        >
          <div className="flex items-center flex-1 space-x-3 cursor-pointer">
            <img src={category.Icon} alt="icons" className="w-6 h-6" />
            <h5 className="text-bellefuBlack1 font-medium">{category.title}</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default Dropdown;
