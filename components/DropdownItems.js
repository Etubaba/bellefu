import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const DropdownItems = ({ child }) => {
  return (
    <div className="hover:bg-bellefuBackground p-2">
      <p>{child.title}</p>
    </div>
  );
};

export default DropdownItems;
