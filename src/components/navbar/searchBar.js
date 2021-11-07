import { MagnifyingGlass } from "phosphor-react";
import React, { useRef } from "react";

export const SearchBar = () => {
  const searchRef = useRef();
  const spotOnSearch = () => {
    searchRef.current.classList.add("w-56");
  };
  const leaveSearch = () => {
    searchRef.current.classList.remove("w-56");
  };

  return (
    <div
      className="hidden md:flex items-center justify-between w-40 duration-500 ease-in-out transition-width border-b-2 border-white pb-2 mr-8"
      ref={searchRef}
      onMouseEnter={spotOnSearch}
      onMouseLeave={leaveSearch}
    >
      <input
        type="text"
        className="w-32 outline-none bg-transparent placeholder-white text-white"
        placeholder="Search..."
      />
      <MagnifyingGlass size={20} weight="bold" className="text-white" />
    </div>
  );
};

export default SearchBar;
