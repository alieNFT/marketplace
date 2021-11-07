import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { NftContext } from "../../App";
import NftDescription from "./nftDescription";
import NftImage from "./nftImage";
import NftSuggetion from "./nftSuggetion";

export const NftDetails = () => {
  const { nftList, selectedNft, setSelectedNft } = useContext(NftContext);

  const params = useParams();

  useEffect(() => {
    if (selectedNft === null) {
      var getSelectedNftFormUrl = nftList.filter((nftItem) => {
        return nftItem.id == params.id;
      })[0];
      setSelectedNft(getSelectedNftFormUrl);
    }
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto md:px-12 px-6 ">
      {selectedNft !== null && (
        <div>
          <div className="md:flex items-center mt-44">
            <div className="w-full md:w-1/2 flex justify-end md:pr-8">
              <NftImage />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <NftDescription />
            </div>
          </div>
          <div className="my-44">
            <NftSuggetion />
          </div>
        </div>
      )}
    </div>
  );
};

export default NftDetails;
