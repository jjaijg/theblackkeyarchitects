import Image from "next/image";
import React from "react";

const WhatWeDoCard = ({ img, title }) => {
  return (
    <div className=" flex flex-col justify-items-center max-h-96 m-2 pb-2 bg-white shadow-slate-500 hover:shadow-2xl rounded-md transition duration-500 hover:scale-102 cursor-pointer w-5/6 mx-auto sm:w-3/6 md:w-full">
      <img
        src={img}
        alt={title}
        className=" rounded-t-md w-full h-88 sm:h-80"
      />
      <div className="flex items-center justify-center sm:h-16">
        <span className="flex justify-center items-center h-full px-2 my-2 text-xl text-center font-semibold">
          {title}
        </span>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
