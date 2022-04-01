import { useState } from "react";
// import { AiOutlineCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Subcat } from "../features/bellefuSlice";

const DropdownItems = ({ child }) => {
  const [text, setText] = useState(null)

  const sendAm = useDispatch()
  console.log('subcat selected==>', text)
  return (
    <div onClick={() => {
      sendAm(Subcat(child.subCatId))
      setText(child.subCatId)
    }} className="hover:bg-bellefuBackground">
      <p className=" p-2 rounded-sm">
        {child.subCatName}
      </p>
    </div>
  );
};

export default DropdownItems;
