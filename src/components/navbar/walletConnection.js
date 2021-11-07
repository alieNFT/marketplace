import React, { useContext, useState } from "react";
import ConnectWalletPopup from "./connectWalletPopup";
import { walletContext } from "./navbar";
import { ethers } from "ethers";

export const WalletConnection = () => {
  const [showWallets, setShowWallets] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const { walletAddress, isConnected, balance } = useContext(walletContext);

  const showBalance = () => {
    setIsBalanceVisible(true);
  };

  const closeBalance = () => {
    setIsBalanceVisible(false);
  };

  return (
    <React.Fragment>
      {!isConnected ? (
        <button
          onClick={() => {
            setShowWallets(true);
          }}
          className="md:px-7 px-3 md:py-2.5 py-2 bg-primary text-black text-sm font-semibold font-nunito md:font-alien"
        >
          Connect
        </button>
      ) : (
        <div
          onMouseEnter={showBalance}
          onMouseLeave={closeBalance}
          className="relative"
        >
          <button className="md:px-7 px-3 md:py-2.5 py-2 bg-primary text-black text-sm font-semibold font-nunito md:font-alien">
            {walletAddress}
          </button>
          {isBalanceVisible && (
            <div className="bg-primary absolute w-full md:px-7 px-3 md:py-2.5 py-2 border-t border-black">
              <div className="flex justify-between items-center">
                <span className="text-black">balance:</span>
                <p className="text-black font-bold">
                  {ethers.utils.formatEther(balance.toString())}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {showWallets && (
        <ConnectWalletPopup
          closePopup={() => {
            setShowWallets(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default WalletConnection;
