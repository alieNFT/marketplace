import { List, X } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import NavLink from "./navLink";
import NavLinks from "./navLinks";
import SearchBar from "./searchBar";
import { WalletConnection } from "./walletConnection";

export const walletContext = React.createContext();

export const Navbar = () => {
  const [isConnected, setisConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const formatWalletAddress = (address) => {
    var address = address.split("");
    return `${address[0]}${address[1]}${address[2]}${address[3]}${
      address[4]
    }...${address.length - 4}${address.length - 3}${
      address[address.length - 2]
    }${address[address.length - 1]}`;
  };

  const connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          var address = formatWalletAddress(result[0]);
          setWalletAddress(address);
          setisConnected(true);
          window.ethereum
            .request({
              method: "eth_getBalance",
              params: [result[0].toString(), "latest"],
            })
            .then((result) => {
              setBalance(result);
            });
        });
    }
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <walletContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        balance,
        setBalance,
        isConnected,
        setisConnected,
      }}
    >
      <div className="max-w-screen-xl absolute top-0 left-0 right-0 mx-auto w-full bg-green-900 bg-opacity-25 flex items-center justify-between md:px-12 px-6 py-4">
        <div className="flex items-center">
          <Logo />
          <span className="hidden md:inline w-0.5 h-6 mx-8 bg-white"></span>
          <NavLinks />
        </div>
        <div className="flex items-center">
          <SearchBar />
          <WalletConnection />
          <div className="md:hidden ml-2">
            <button
              onClick={() => {
                setIsMobileNavVisible(true);
              }}
            >
              <List size={24} className="text-white" />
            </button>
          </div>
        </div>
        {isMobileNavVisible && (
          <div className="w-screen h-screen fixed flex flex-col top-0 right-0 bg-black z-30">
            <div className="flex items-center justify-between px-6 py-4 bg-green-900 bg-opacity-25">
              <Logo />
              <button
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="flex-grow flex flex-col px-6 mt-24">
              <p className="text-2xl text-white font-nunito mb-12">Go to :</p>
              <div
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <Link to={`/`}>
                  <p
                    className={`font-medium text-5xl text-white font-alien mr-4 cursor-pointer mb-5`}
                  >
                    Home
                  </p>
                </Link>
              </div>
              <div
                onClick={() => {
                  setIsMobileNavVisible(false);
                }}
              >
                <Link to={`/discover`}>
                  <p
                    className={`font-medium text-5xl text-white font-alien mr-4 cursor-pointer`}
                  >
                    Discover
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </walletContext.Provider>
  );
};

export default Navbar;
