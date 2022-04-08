import React from "react";
import { Parallax } from "react-parallax";
import { WhatWeDoCard } from "@components";
import Button from "@components/Button";

// const TRANSLATE = ["translate-y-1", "translate-y-6", "translate-y-12"];
const TRANSLATE = ["", "md:mt-8", "md:mt-16"];

const WhatWeDo = () => {
  return (
    <section className="bg-white">
      {/* Bg image */}
      {/* Section heading */}
      <Parallax
        bgImage="/images/banner/banner_bg2.jpg"
        bgImageAlt="the cat"
        strength={600}
        className="w-full"
      >
        {/* Overlay */}

        <div className="relative bg-white h-fit lg:w-11/12 z-10">
          <div className=" w-full lg:w-3/4 z-20 mx-2 lg:mx-auto">
            <header className="p-2 my-5 bg-gray-200 bg-opacity-50 inline-block border">
              <h3 className="text-4xl md:text-6xl font-bold">What we do</h3>
            </header>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-3 bg-white 
            `}
            >
              {[1, 2, 3].map((key) => (
                <div
                  key={`what-we-do-card-${key}`}
                  className={` h-fit ${TRANSLATE[key - 1]}`}
                >
                  <WhatWeDoCard
                    img={`/images/banner/banner_bg${key}.jpg`}
                    title={`What we do ${key}`}
                  />
                </div>
              ))}
              <div className="md:col-span-3 text-xl font-semibold p-6 mt-2 mb-10 bg-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0">
                  <h4 className="col-span-1 text-3xl lg:text-5xl font-bold">
                    We present the idea with impressive details.
                  </h4>
                  <div className=" col-span-1 mt-3">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      architecto ex assumenda perferendis saepe voluptates iste
                      non ducimus...
                    </p>
                    <div className="my-2">
                      <Button variant="text">Read more</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default WhatWeDo;
