import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import { Button } from "@components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const BANNER_DATA = [
  {
    key: "banner-1",
    img: `/images/banner/banner_bg1.jpg`,
    tagline: "Tagline1",
    title: "World class interior design at your service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
      eveniet nostrum facilis ipsam, maxime deserunt sapiente accusantium
      pariatur. Fugit dolores possimus dolor laudantium iste error
      blanditiis perspiciatis beatae asperiores!`,
  },
  {
    key: "banner-2",
    img: `/images/banner/banner_bg2.jpg`,
    tagline: "Tagline2",
    title: "World class interior design at your service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
      eveniet nostrum facilis ipsam, maxime deserunt sapiente accusantium
      pariatur. Fugit dolores possimus dolor laudantium iste error
      blanditiis perspiciatis beatae asperiores!`,
  },
  {
    key: "banner-3",
    img: `/images/banner/banner_bg3.jpg`,
    tagline: "Tagline3",
    title: "World class interior design at your service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
      eveniet nostrum facilis ipsam, maxime deserunt sapiente accusantium
      pariatur. Fugit dolores possimus dolor laudantium iste error
      blanditiis perspiciatis beatae asperiores!`,
  },
  {
    key: "banner-4",
    img: `/images/banner/banner_bg4.jpg`,
    tagline: "Tagline4",
    title: "World class interior design at your service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
      eveniet nostrum facilis ipsam, maxime deserunt sapiente accusantium
      pariatur. Fugit dolores possimus dolor laudantium iste error
      blanditiis perspiciatis beatae asperiores!`,
  },
  {
    key: "banner-5",
    img: `/images/banner/banner_bg5.jpg`,
    tagline: "Tagline5",
    title: "World class interior design at your service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat
      eveniet nostrum facilis ipsam, maxime deserunt sapiente accusantium
      pariatur. Fugit dolores possimus dolor laudantium iste error
      blanditiis perspiciatis beatae asperiores!`,
  },
];

const AboutUs = () => {
  return (
    <section
      style={{ backgroundImage: `url('/images/aboutus/aboutus_bg.jpg')` }}
      className="bg-cover bg-center bg-no-repeat h-full md:h-screen"
    >
      {/* Bg image */}
      {/* Section heading */}
      <div className="w-full lg:w-3/4 mx-2 lg:mx-auto">
        <header className="p-2 my-5  bg-gray-200 bg-opacity-50 inline-block border">
          <h3 className="text-4xl md:text-6xl font-bold">About us</h3>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-5">
          <div className=" col-span-2 border-8 lg:border-15 border-solid border-stone-600 p-2 lg:p-5">
            {/* PArt1 */}
            {/* about us content heading */}
            {/* about us content description */}
            <h4 className="text-4xl lg:text-5xl font-semibold">
              We are competitive in architecture solutions
            </h4>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              iure, perspiciatis magni, excepturi itaque aperiam eaque atque
              ratione accusantium cupiditate nisi, ab tempore assumenda soluta?
              Numquam optio enim tempora harum.
            </p>
            <Button>Read more</Button>
          </div>
          <div className="col-span-3 flex items-stretch relative">
            {/* Part 2 */}
            {/* Single carousel */}
            <Carousel
              infiniteLoop
              autoPlay
              swipeable
              showThumbs={false}
              className="flex mx-auto lg:-mx-0 w-5/6 lg:w-2/4 h-full z-10"
            >
              {BANNER_DATA.map((banner) => (
                <div key={banner.title} className="h-full">
                  <img
                    src={banner.img}
                    alt={banner.title}
                    className="h-full w-full"
                  />
                </div>
              ))}
            </Carousel>
            <div className="hidden md:block md:absolute md:top-3.5 lg:top-10 right-14">
              <img
                src="/images/aboutus/aboutus_part2_bg.jpg"
                alt="About us background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
