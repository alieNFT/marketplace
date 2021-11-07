import React from "react";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10">
      <h1 className="text-6xl text-white font-bold font-alien px-8 max-w-screen-lg mx-auto text-center mb-12">
        Welcome the new era of art trading
      </h1>
      <p className="text-xl text-white font-light font-nunito text-center mb-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eum
        minus excepturi sit debiti
      </p>
      <button className="bg-primary font-semibold font-nunito  px-8 py-3">
        Discover our collection
      </button>
    </div>
  );
};

export default Home;
