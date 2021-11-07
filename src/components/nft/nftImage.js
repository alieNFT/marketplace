import React, { useContext } from "react";
import nft from "./../../assets/nft2.png";
import { Circle } from "phosphor-react";
import { NftContext } from "../../App";

export const NftImage = () => {
  const { selectedNft } = useContext(NftContext);

  return (
    <React.Fragment>
      <Circle
        size={12}
        weight="fill"
        className="hidden md:block text-primary mr-16"
      />
      <img
        src={selectedNft.imageUrl}
        alt=""
        className="w-full md:w-3/4 object-cover mb-12"
      />
    </React.Fragment>
  );
};

export default NftImage;
