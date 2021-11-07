import { Circle } from "phosphor-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NftContext } from "../../../App";

export const NftsList = () => {
  const { nftList, setSelectedNft } = useContext(NftContext);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-12 my-20">
      {nftList.map((nftItem) => {
        return (
          <Link to={`/nfts/${nftItem.id}`}>
            <div
              onClick={() => {
                setSelectedNft(nftItem);
                console.log(nftItem);
              }}
              className="border border-primary border-opacity-25 hover:border-opacity-50 p-3"
            >
              <div className="relative bg-green-900 bg-opacity-25 w-full">
                <img
                  src={nftItem.imageUrl}
                  alt=""
                  className="w-full h-full object-cover h-56 mb-5"
                />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <Circle
                    size={7}
                    weight="fill"
                    className="text-red-600 mr-1"
                  />
                  <span className="text-red-500">Not for sale</span>
                </div>
                <h3 className="text-gray-200 font-semibold font-epilogue mb-3">
                  {`${nftItem.collectionName} ${nftItem.name}`}
                </h3>
                <span className="font-epilogue font-semibold text-white text-lg">
                  xx.xx ALNFT
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NftsList;
