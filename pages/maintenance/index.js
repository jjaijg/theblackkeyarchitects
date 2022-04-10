import { colors } from "@constants";
import React from "react";
import maintainSvg from "./maintenance.svg";
import Image from "next/image";
function maintenance() {
  return (
    <div className="w-screen h-screen relative">
      <Image src={maintainSvg} layout="fill" objectFit="contain" />
      <div className="absolute  top-10 right-2 lg:top-20 lg:right-4">
        <h2
          className={`lg:text-5xl text-3xl lg:mx-10 mb-3 lg:mb-6 ${colors.textPrimary} text-center`}
        >
          Page is under construction
        </h2>
        <p
          className={`text-2xl lg:text-3xl lg:mx-10 ${colors.textPrimary} text-left`}
        >
          Please visit us soon!
        </p>
      </div>
    </div>
  );
}

export default maintenance;
