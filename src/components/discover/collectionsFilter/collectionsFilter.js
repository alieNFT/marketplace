import React from "react";
import CollectionFilterItem from "./collectionFilterItem";

export const CollectionsFilter = () => {
  return (
    <div className="flex items-center">
      <CollectionFilterItem active={true} collectionName={"All items"} />
      <CollectionFilterItem active={false} collectionName={"First Gen ALien"} />
    </div>
  );
};

export default CollectionsFilter;
