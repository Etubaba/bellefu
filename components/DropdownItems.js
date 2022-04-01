// import { useState } from "react";
// import { AiOutlineCaretRight } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { Subcat } from "../features/bellefuSlice";

const DropdownItems = ({ child }) => {
  return (
    <div className="hover:bg-bellefuBackground">
      <p className=" p-2 rounded-sm">
        {child.subCatName}
      </p>
    </div>
  );
};

export default DropdownItems;
