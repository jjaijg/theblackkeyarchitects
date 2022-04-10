import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BannerCard } from "@components";

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

const Banner = () => {
  return (
    <>
      <Carousel infiniteLoop autoPlay swipeable showThumbs={false}>
        {BANNER_DATA.map((banner) => (
          <BannerCard key={banner.key} {...banner} />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
