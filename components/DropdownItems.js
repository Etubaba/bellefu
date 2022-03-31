import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const DropdownItems = ({ child }) => {
  return (
    <div className="">
      <p className="hover:bg-bellefuBackground p-2 rounded-sm">
        {child.subCatName}
      </p>
    </div>
  );
};

export default DropdownItems;
