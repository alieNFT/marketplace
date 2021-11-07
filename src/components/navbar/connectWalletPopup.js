import { X } from "phosphor-react";
import React, { useContext } from "react";
import { walletContext } from "./navbar";
import metamask from "./../../assets/metamask.svg";

export const ConnectWalletPopup = ({ closePopup }) => {
  const { setWalletAddress, setisConnected, setBalance } =
    useContext(walletContext);

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

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
      className="fixed top-0 left-0 w-screen h-screen z-40 bg-gray-darkest bg-opacity-75 flex items-center justify-centre"
    >
      <div className="bg-black w-1/4 mx-auto flex flex-col h-64 rounded-md">
        <div className="flex justify-between items-center border-b border-gray-darkest px-4 py-3">
          <h3 className="font-alien text-white">Connect wallet</h3>
          <button
            onClick={() => {
              closePopup();
            }}
          >
            <X size={24} weight={"light"} className="text-white" />
          </button>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div
            onClick={connectMetamask}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <img src={metamask} alt="" className="w-12 h-12 mb-2" />
            <span className="text-white font-medium text-center">MetaMask</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPopup;
