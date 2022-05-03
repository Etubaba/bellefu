const MobileCategoryItem = ({ child }) => {
  return (
    <div className="">
      <p className="hover:bg-bellefuOrange px-1 py-2 rounded-br-md rounded-tr-md">
        {child?.subCatName}
      </p>
    </div>
  );
};

export default MobileCategoryItem;
