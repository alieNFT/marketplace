import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10">
      <h1 className="text-6xl text-white font-bold font-alien px-8 max-w-screen-lg mx-auto text-center mb-12">
        Welcome the new era of art trading
      </h1>
      <p className="text-xl text-white font-light font-nunito text-center mb-12">
        The AlieNft marketplace is an Online Art marketplace for NFTs, where you
        can buy, sell, and store your Crypto Art Collection.
      </p>
      <Link to={"/discover"}>
        <button className="bg-primary font-semibold font-alien  px-8 py-3">
          Discover our collection
        </button>
      </Link>
    </div>
  );
};

export default Home;
