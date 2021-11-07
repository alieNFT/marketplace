import React, { useContext } from "react";
import nft1 from "../../assets/nft1.png";
import { Circle } from "phosphor-react";
import { NftContext } from "../../App";
import { Link } from "react-router-dom";

export const NftSuggetion = () => {
  const { nftList } = useContext(NftContext);
  return (
    <React.Fragment>
      <h3 className="text-4xl font-bold text-white mb-12">
        You might also like
      </h3>
      <div className="w-12 h-2 bg-primary mb-16 rounded"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-8">
        {[...Array(4)].map(() => {
          var id = Math.floor(Math.random() * nftList.length);
          return (
            <Link to={`/nfts/${id}`}>
              <div className="border border-primary border-opacity-25 hover:border-opacity-50 p-3">
                <div className="relative bg-green-900 bg-opacity-25 w-full">
                  <img
                    src={nftList[id].imageUrl}
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
                    {nftList[id].name}
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
    </React.Fragment>
  );
};

export default NftSuggetion;
