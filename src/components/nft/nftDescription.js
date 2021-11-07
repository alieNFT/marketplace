import { Circle } from "phosphor-react";
import React, { useContext } from "react";
import { NftContext } from "../../App";

export const NftDescription = () => {
  const { selectedNft } = useContext(NftContext);

  return (
    <div>
      <div className="flex items-center mb-1">
        <Circle size={7} weight="fill" className="text-red-600 mr-1" />
        <span className="text-red-500">Not for sale</span>
      </div>
      <h3 className="font-alien font-semibold text-3xl mb-8 text-white">
        {selectedNft.name}
      </h3>
      <div className="mb-8">
        <div className="flex items-center">
          <Circle size={7} weight="fill" className="text-primary mr-1" />
          <p className="font-medium text-gray-500">collection</p>
        </div>
        <div className="mb-8">
          <p className="text-lg font-medium text-gray-300">
            {selectedNft.collectionName}
          </p>
        </div>
        <div className="mb-8">
          <p className="text-3xl font-bold text-white">xx.xx ALNFT</p>
        </div>
        <div className="mb-8">
          <p className="font-nunito text-gray-300">{selectedNft.description}</p>
        </div>
        <div>
          <button className="px-8 py-2 bg-primary font-semibold cursor-not-allowed">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftDescription;
