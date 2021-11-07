import { InstagramLogo, TelegramLogo, TwitterLogo } from "phosphor-react";
import React from "react";
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full border-t border-primary border-opacity-25 flex items-center justify-between px-12 pt-6 pb-12">
      <img src={logo} alt="" className="w-32" />
      <div className="flex items-center">
        <a href="https://twitter.com/AlienNFT_bsc" target="_blank">
          <TwitterLogo size={24} weight="bold" className="text-white mr-4" />
        </a>
        <a href="https://www.instagram.com/alienft_bsc/" target="_blank">
          <InstagramLogo size={24} weight="bold" className="text-white mr-4" />
        </a>
        <a href="https://t.me/AlieNftBsc" target="_blank">
          <TelegramLogo size={24} weight="bold" className="text-white mr-4" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
