import React, { useState } from "react";

const BannerCard = ({ img, tagline, title, description }) => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      className="relative flex w-full h-screen bg-cover "
    >
      {/* Bg image */}
      {/* Bg overlay */}
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-60 ">
        {/* <div class="flex flex-col justify-center absolute top-1/3 left-52 w-6/12 h-72 p-2 text-white">
          <div class="animate-[wiggle_1s_ease-in-out_infinite] delay-1000 flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-10 w-4/12 bg-white rounded"></div>
              <div class="space-y-3">
                <div class="h-20 bg-white rounded"></div>
                <div class=" h-28 w-10/12 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center absolute top-1/3 left-5 lg:left-52 w-full lg:w-6/12 h-72 p-2 text-white">
          {/* Tagline */}
          <p className="uppercase font-semibold text-xl lg:text-2xl tracking-widest">
            {tagline}
          </p>
          {/* Title */}
          <h3 className="uppercase font-bold text-3xl lg:text-5xl my-3">
            {title}
          </h3>
          {/* Description */}
          <p className="mt-2">{description}</p>
        </div>
      </div>
      {/* Button */}
    </div>
  );
};

export default BannerCard;
