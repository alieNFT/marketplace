import React from "react";
import CollectionsFilter from "./collectionsFilter/collectionsFilter";
import DiscoverHeader from "./discoverHeader";
import { NftsList } from "./nfts/nftsList";

export const Discover = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-6 mt-40">
      <DiscoverHeader />
      <div className="flex items-center justify-between mb-16">
        <CollectionsFilter />
      </div>
      <NftsList />
    </div>
  );
};

export default Discover;
