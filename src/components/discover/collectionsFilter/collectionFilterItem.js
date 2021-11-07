import React from "react";

export const CollectionFilterItem = ({ collectionName, active }) => {
  const filterActive = active
    ? "bg-primary font-semibold text-black px-6 py-1.5"
    : "text-white";
  return (
    <button className={`mr-6 text-xs font-alien ${filterActive}`}>
      {collectionName}
    </button>
  );
};

export default CollectionFilterItem;
