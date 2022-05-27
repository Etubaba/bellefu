import { useDispatch } from "react-redux";
import { Subcat } from "../../features/bellefuSlice";

const MobileCategoryItem = ({ child, setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      className=""
      onClick={() => {
        {
          dispatch(Subcat(child.subCatId));
          setOpen(false);
        }
      }}
    >
      <p className="hover:bg-bellefuOrange px-1 py-2 rounded-br-md rounded-tr-md text">
        {child?.subCatName}
      </p>
    </div>
  );
};

export default MobileCategoryItem;
