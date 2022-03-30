import React from "react";

import MobileCategory from "./MobileCategory";

const MobileCategoryBar = ({ categories }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-1 grid-flow-row-dense">
      {categories?.map((category) => (
        <MobileCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default MobileCategoryBar;
