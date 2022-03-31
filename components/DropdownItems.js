import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { selectSubcat } from "../features/bellefuSlice";

const DropdownItems = ({ child }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(selectSubcat(child.subcatid))} className="hover:bg-bellefuBackground">
      <p className=" p-2 rounded-sm">
        {child.subCatName}
      </p>
    </div>
  );
};

export default DropdownItems;
