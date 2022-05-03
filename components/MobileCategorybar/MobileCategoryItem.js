import { useDispatch } from "react-redux";
import { Subcat } from "../../features/bellefuSlice";
import { useRouter } from "next/router";

const MobileCategoryItem = ({ child, setOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className=""
      onClick={() => {
        {
          dispatch(Subcat(child.subCatId)),
            router.push("/category/${child.subCatId}");
        }
      }}
    >
      <p className="hover:bg-bellefuOrange px-1 py-2 rounded-br-md rounded-tr-md">
        {child?.subCatName}
      </p>
    </div>
  );
};

export default MobileCategoryItem;
